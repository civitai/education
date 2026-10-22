import { visit } from 'unist-util-visit';

// Wraps the blocks that need a frame around them:
//   - every <table> in <div class="table-wrap">, so wide tables scroll inside the column on phones
//     instead of widening the page;
//   - the change-log table most guides open with ("Last Updated | Changes") becomes a revision
//     history box, newest entry first (a <details>: phones collapse it to the latest entry);
//   - every <pre> in <div class="code-block"> with a header strip naming the language and a Copy
//     button (hidden until the article script wires it up).

const h = (tagName, properties = {}, children = []) => ({ type: 'element', tagName, properties, children });
const text = (value) => ({ type: 'text', value });

/** Lucide-shaped stroke icon as hast, matching src/components/icons/Icon.astro. */
const icon = (d, size = 16, className = 'icon') =>
  h(
    'svg',
    {
      className: [className],
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ariaHidden: 'true',
    },
    d.map((path) => h('path', { d: path })),
  );
const HISTORY = ['M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', 'M3 3v5h5', 'M12 7v5l4 2'];
const CHEVRON = ['m6 9 6 6 6-6'];
const COPY = ['M8 8h12v12H8z', 'M4 16V6a2 2 0 0 1 2-2h10'];

const toText = (node) =>
  node.type === 'text' ? node.value : (node.children || []).map(toText).join('');
const cells = (row) => row.children.filter((c) => c.type === 'element' && (c.tagName === 'td' || c.tagName === 'th'));
const rowsOf = (section) => (section?.children || []).filter((c) => c.type === 'element' && c.tagName === 'tr');
const child = (node, tagName) => node.children.find((c) => c.type === 'element' && c.tagName === tagName);

/** The change-log table's rows as [dateCell, changeCell], or undefined for any other table. */
function changeLog(table) {
  const head = rowsOf(child(table, 'thead'))[0];
  if (!head) return undefined;
  const labels = cells(head).map((c) => toText(c).trim().toLowerCase());
  if (labels.length !== 2 || labels[0] !== 'last updated' || !/^changes?$/.test(labels[1])) return undefined;
  const rows = rowsOf(child(table, 'tbody')).map(cells).filter((r) => r.length === 2);
  return rows.length ? rows : undefined;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "7/30/2025" (the export's US format) as a date; undefined for anything else. */
function parseDate(value) {
  const m = value.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!m) return undefined;
  const [month, day, year] = [Number(m[1]), Number(m[2]), Number(m[3])];
  if (month < 1 || month > 12 || day < 1 || day > 31) return undefined;
  return { month, day, year, iso: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}` };
}

function revisionHistory(rows) {
  const entries = rows.map(([date, change], i) => ({ date: parseDate(toText(date)), dateCell: date, change, i }));
  // Newest first when every date reads; otherwise keep the author's order.
  if (entries.every((e) => e.date)) entries.sort((a, b) => b.date.iso.localeCompare(a.date.iso) || b.i - a.i);
  const row = (e, tagName) =>
    h(tagName, { className: ['rev-row'] }, [
      e.date
        ? h('time', { className: ['rev-date'], dateTime: e.date.iso }, [
            text(`${MONTHS[e.date.month - 1]} ${String(e.date.day).padStart(2, '0')}, ${e.date.year}`),
          ])
        : h('span', { className: ['rev-date'] }, e.dateCell.children),
      h('span', { className: ['rev-change'] }, e.change.children),
    ]);
  const [latest, ...older] = entries;
  const title = h('span', { className: ['rev-title'] }, [
    icon(HISTORY, 16),
    h('span', {}, [text('Revision history')]),
    h('span', { className: ['rev-count'] }, [text(` · ${entries.length}`)]),
    ...(older.length ? [icon(CHEVRON, 16, 'rev-chevron')] : []),
  ]);
  if (!older.length) {
    return h('div', { className: ['revisions'] }, [h('div', { className: ['rev-head'] }, [title, row(latest, 'span')])]);
  }
  return h('details', { className: ['revisions'], open: true, dataRevisions: '' }, [
    h('summary', { className: ['rev-head'] }, [title, row(latest, 'span')]),
    h('ol', { className: ['rev-list'], ariaLabel: 'Earlier revisions' }, older.map((e) => row(e, 'li'))),
  ]);
}

/** The language a code block declares (Shiki's data-language, or a language-* class), if any. */
function languageOf(pre) {
  const code = child(pre, 'code');
  const fromClass = [...(pre.properties?.className || []), ...(code?.properties?.className || [])]
    .map(String)
    .find((c) => c.startsWith('language-'))
    ?.slice('language-'.length);
  const lang = String(pre.properties?.dataLanguage || fromClass || '').toLowerCase();
  return lang && lang !== 'plaintext' && lang !== 'text' && lang !== 'txt' ? lang : undefined;
}

function codeBlock(pre) {
  const lang = languageOf(pre);
  const label = lang === 'prompt' ? 'Prompt' : lang || 'Code';
  return h('div', { className: ['code-block'] }, [
    h('div', { className: ['code-head'] }, [
      h('span', { className: ['code-lang'] }, [text(label)]),
      h('button', { type: 'button', className: ['code-copy'], dataCopy: '', ariaLabel: 'Copy code', hidden: true }, [
        icon(COPY, 14),
        h('span', { dataCopyLabel: '' }, [text('Copy')]),
      ]),
    ]),
    pre,
  ]);
}

const hasClass = (node, name) => node?.properties?.className?.includes(name);

export default function rehypeTableWrap() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (!parent || index == null) return;
      if (node.tagName === 'table') {
        if (hasClass(parent, 'table-wrap')) return;
        const log = changeLog(node);
        parent.children[index] = log
          ? revisionHistory(log)
          : h('div', { className: ['table-wrap'] }, [node]);
        return 'skip';
      }
      if (node.tagName === 'pre') {
        if (hasClass(parent, 'code-block')) return;
        parent.children[index] = codeBlock(node);
        return 'skip';
      }
    });
  };
}
