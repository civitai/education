#!/usr/bin/env node
// Export the public WordPress site at education.civitai.com into Markdown content.
//
//   node scripts/export-wp.mjs            # fetch live (read-only, public REST API)
//   node scripts/export-wp.mjs --cached   # re-convert from .cache/wp/ without fetching
//
// Writes:
//   src/content/posts/<slug>.md   one file per published, non-protected post
//   src/content/pages/<slug>.md   one file per page (minus DROP_PAGES)
//   src/data/taxonomies.json      categories, tags and authors as WordPress knows them
//   src/data/wp-ids.json          wpId -> path, for ?p= / ?page_id= redirects
//   public/_redirects             Cloudflare Pages redirects (empty archives, legacy feeds, ...)
//
// Re-runnable: files it wrote before that no longer exist in WordPress are removed. Files without a
// `wpId` in their front matter (hand-written posts) are never touched.
//
// Media is NOT downloaded: every image, video and file URL is kept exactly as WordPress serves it,
// so a later step can rewrite them in one pass.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import domino from '@mixmark-io/domino';
import TurndownService from 'turndown';
import { gfm } from '@joplin/turndown-plugin-gfm';
import { decodeHTML } from 'entities';
import { slug as slugify } from 'github-slugger';

const SITE = 'https://education.civitai.com';
const API = `${SITE}/wp-json/wp/v2`;
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CACHE = path.join(ROOT, '.cache/wp');
const POSTS_DIR = path.join(ROOT, 'src/content/posts');
const PAGES_DIR = path.join(ROOT, 'src/content/pages');
const DATA_DIR = path.join(ROOT, 'src/data');

// Test page, not content.
const DROP_PAGES = new Set(['civchan-test-page']);
// WordPress reading settings (not exposed by the public API): the static front page, and the page
// that lists posts. Their paths are fixed by WordPress, not by their slug.
const FRONT_PAGE_SLUG = 'home';

const cached = process.argv.includes('--cached');

// ---------------------------------------------------------------------------------------------
// Fetching

async function fetchAll(type) {
  const out = [];
  let page = 1;
  let totalPages = 1;
  do {
    const file = path.join(CACHE, `${type}-${page}.json`);
    let items;
    if (cached) {
      items = JSON.parse(await fs.readFile(file, 'utf8'));
      totalPages = (await exists(path.join(CACHE, `${type}-${page + 1}.json`))) ? page + 1 : page;
    } else {
      const url = `${API}/${type}?per_page=100&page=${page}`;
      const res = await fetch(url, { headers: { 'User-Agent': 'civitai-education-export/1.0' } });
      if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
      totalPages = Number(res.headers.get('x-wp-totalpages') || 1);
      items = await res.json();
      await fs.mkdir(CACHE, { recursive: true });
      await fs.writeFile(file, JSON.stringify(items));
    }
    out.push(...items);
    page++;
  } while (page <= totalPages);
  if (!cached) {
    // Drop stale cache pages beyond the current total.
    for (let p = page; await exists(path.join(CACHE, `${type}-${p}.json`)); p++) {
      await fs.rm(path.join(CACHE, `${type}-${p}.json`));
    }
  }
  return out;
}

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------------------------
// HTML -> Markdown

const SITE_RE = /^https?:\/\/education\.civitai\.com/i;

/** Internal page links become root-relative so they work on any host. Media URLs are left alone. */
function rewriteHref(href) {
  if (!href || !SITE_RE.test(href)) return href;
  const rest = href.replace(SITE_RE, '') || '/';
  if (/\/wp-content\//.test(rest)) return href;
  return rest.startsWith('/') ? rest : `/${rest}`;
}

// domino's querySelectorAll result is not always iterable; always take a real array.
const $$ = (root, sel) => Array.from(root.querySelectorAll(sel));

// Plain text from rendered HTML. Strip twice: Elementor excerpts contain entity-encoded markup.
const stripTags = (s) => s.replace(/<[^>]*>/g, ' ');
const text = (s) => stripTags(decodeHTML(stripTags(String(s ?? '')))).replace(/\s+/g, ' ').trim();

function escapeAttr(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function attrs(obj) {
  return Object.entries(obj)
    .filter(([k, v]) => v !== undefined && v !== null && (v !== '' || k === 'alt'))
    .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
    .join(' ');
}

/** Replace `el` with a raw HTML block that turndown passes through verbatim. */
function replaceRaw(doc, el, html) {
  const holder = doc.createElement('div');
  holder.setAttribute('data-raw', '1');
  holder.setAttribute('data-html', html);
  // turndown drops "blank" elements before any rule runs, so give the holder some text.
  holder.textContent = 'raw';
  el.replaceWith(holder);
}

function captionOf(el) {
  const cap = el.querySelector('figcaption');
  return cap ? cap.innerHTML.trim() : '';
}

/** The element's <figcaption>, cleaned, as HTML ('' when it has none). */
function figcaption(doc, el) {
  const cap = captionOf(el);
  return cap ? `<figcaption>${cleanInlineHtml(doc, cap)}</figcaption>` : '';
}

function cleanInlineHtml(doc, html) {
  // Captions keep their inline markup but lose WordPress classes/styles; links are rewritten.
  const wrap = doc.createElement('div');
  wrap.innerHTML = html;
  for (const n of $$(wrap, '*')) {
    n.removeAttribute('class');
    n.removeAttribute('style');
    n.removeAttribute('id');
    if (n.tagName === 'A') n.setAttribute('href', rewriteHref(n.getAttribute('href')));
  }
  return wrap.innerHTML.trim();
}

function embedFor(iframeSrc) {
  let host = '';
  try {
    host = new URL(iframeSrc).host;
  } catch {}
  if (/(^|\.)youtube(-nocookie)?\.com$|^youtu\.be$/.test(host)) return 'youtube';
  if (/^(videopress\.com|video\.wordpress\.com)$/.test(host)) return 'videopress';
  return 'iframe';
}

function preprocess(doc, body) {
  // Never carry scripts or inline styles into content.
  for (const el of $$(body, 'script, style, noscript, link')) el.remove();
  // The site generates its own table of contents; spacers are layout only.
  for (const el of $$(body, 'nav.wp-block-table-of-contents, .wp-block-spacer')) el.remove();
  // Plugin credit links ("Wordpress Table Plugin" under Supsystic tables), and their wrapper if that empties it.
  for (const a of $$(body, 'a[href*="utm_medium=love_link"]')) {
    const parent = a.parentElement;
    a.remove();
    if (parent && parent !== body && !parent.textContent.trim() && !parent.querySelector('img')) parent.remove();
  }

  // File downloads -> a plain link (the "Download" button is a duplicate of the same href).
  for (const el of $$(body, '.wp-block-file')) {
    const a = el.querySelector('a:not(.wp-block-file__button)') || el.querySelector('a');
    if (!a) {
      el.remove();
      continue;
    }
    const p = doc.createElement('p');
    const link = doc.createElement('a');
    link.setAttribute('href', a.getAttribute('href'));
    link.textContent = a.textContent.trim() || 'Download';
    p.appendChild(link);
    el.replaceWith(p);
  }

  // Twitter / X embeds -> keep the quoted tweet as static HTML.
  for (const el of $$(body, 'figure.is-provider-twitter')) {
    const bq = el.querySelector('blockquote');
    if (!bq) {
      el.remove();
      continue;
    }
    const link = [...$$(bq, 'a')].pop()?.getAttribute('href') || '';
    replaceRaw(doc, el, `<div ${attrs({ 'data-embed': 'tweet', 'data-src': link })}>${cleanInlineHtml(doc, bq.outerHTML)}</div>`);
  }

  // Video and other iframe embeds (YouTube, VideoPress in both block flavours, anything else).
  for (const el of $$(body, 'figure.wp-block-embed, figure.wp-block-video, figure.wp-block-jetpack-videopress')) {
    const iframe = el.querySelector('iframe');
    const video = el.querySelector('video');
    const src = iframe?.getAttribute('src') || video?.getAttribute('src') || '';
    if (!src) continue;
    const kind = video ? 'video' : embedFor(src);
    replaceRaw(
      doc,
      el,
      `<div ${attrs({
        'data-embed': kind,
        'data-src': src,
        'data-title': iframe?.getAttribute('title') || '',
        'data-width': (iframe || video)?.getAttribute('width') || '',
        'data-height': (iframe || video)?.getAttribute('height') || '',
      })}>${figcaption(doc, el)}</div>`,
    );
  }
  for (const iframe of $$(body, 'iframe')) {
    const src = iframe.getAttribute('src') || '';
    replaceRaw(
      doc,
      iframe,
      `<div ${attrs({
        'data-embed': embedFor(src),
        'data-src': src,
        'data-title': iframe.getAttribute('title') || '',
        'data-width': iframe.getAttribute('width') || '',
        'data-height': iframe.getAttribute('height') || '',
      })}></div>`,
    );
  }

  // Jetpack tiled gallery -> a gallery placeholder holding the original images.
  for (const el of $$(body, '.wp-block-jetpack-tiled-gallery')) {
    const items = [...$$(el, '.tiled-gallery__item')].map((fig) => {
      const img = fig.querySelector('img');
      const a = fig.querySelector('a');
      if (!img) return '';
      const [w, h] = (img.getAttribute('data-orig-size') || '').split(',');
      const tag = `<img ${attrs({
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt') || '',
        'data-orig-file': img.getAttribute('data-orig-file'),
        width: w,
        height: h,
        loading: 'lazy',
      })}>`;
      return a ? `<a ${attrs({ href: rewriteHref(a.getAttribute('href')) })}>${tag}</a>` : tag;
    });
    replaceRaw(doc, el, `<div data-embed="gallery">${items.join('')}</div>`);
  }

  // Jetpack image compare -> placeholder with before/after images.
  for (const el of $$(body, 'figure.wp-block-jetpack-image-compare')) {
    const before = el.querySelector('.image-compare__image-before');
    const after = el.querySelector('.image-compare__image-after');
    const img = (i, role) =>
      i
        ? `<img ${attrs({
            src: i.getAttribute('src'),
            alt: i.getAttribute('alt') || role,
            width: i.getAttribute('width'),
            height: i.getAttribute('height'),
            'data-role': role,
            loading: 'lazy',
          })}>`
        : '';
    const mode = el.querySelector('.juxtapose')?.getAttribute('data-mode') || 'horizontal';
    replaceRaw(
      doc,
      el,
      `<div ${attrs({ 'data-embed': 'image-compare', 'data-mode': mode })}>${img(before, 'before')}${img(after, 'after')}${figcaption(doc, el)}</div>`,
    );
  }

  // Images with captions, or floated left/right, keep <figure>; the rest become Markdown images.
  for (const el of $$(body, 'figure.wp-block-image')) {
    const cap = captionOf(el);
    const align = ['alignleft', 'alignright'].find((c) => el.classList.contains(c));
    if (!cap && !align) continue;
    const img = el.querySelector('img');
    if (!img) continue;
    const a = img.closest('a');
    let tag = `<img ${attrs({
      src: img.getAttribute('src'),
      alt: img.getAttribute('alt') || '',
      width: img.getAttribute('width'),
      height: img.getAttribute('height'),
      loading: 'lazy',
    })}>`;
    if (a) tag = `<a ${attrs({ href: rewriteHref(a.getAttribute('href')) })}>${tag}</a>`;
    const caption = cap ? `<figcaption>${cleanInlineHtml(doc, cap)}</figcaption>` : '';
    replaceRaw(doc, el, `<figure${align ? ` class="${align}"` : ''}>${tag}${caption}</figure>`);
  }

  // Preformatted / code blocks use <br> for newlines; turndown reads textContent and would lose them.
  for (const pre of $$(body, 'pre')) {
    for (const br of $$(pre, 'br')) br.replaceWith(doc.createTextNode('\n'));
    if (!pre.querySelector('code')) {
      const code = doc.createElement('code');
      code.textContent = pre.textContent;
      pre.innerHTML = '';
      pre.appendChild(code);
    }
  }

  // Tables without a header row: promote the first row, so GFM tables get a real header.
  for (const table of $$(body, 'table')) {
    if (table.querySelector('thead')) continue;
    const first = table.querySelector('tr');
    if (!first) continue;
    const thead = doc.createElement('thead');
    for (const td of $$(first, 'td')) {
      const th = doc.createElement('th');
      th.innerHTML = td.innerHTML;
      td.replaceWith(th);
    }
    first.remove();
    thead.appendChild(first);
    table.insertBefore(thead, table.firstChild);
  }

  for (const a of $$(body, 'a[href]')) a.setAttribute('href', rewriteHref(a.getAttribute('href')));
}

/**
 * Heading ids. The site gives a heading without an id the github-slugger slug of its text, deduped
 * in document order (as @astrojs/markdown-remark does). Returns ` {#id}` when the WordPress id has to
 * be written out: it differs from the generated one, or keeping ids unique needs it. Headings with an
 * explicit id do not advance the site's slugger, so this replays that exactly.
 */
function headingIdSuffix(state, wpId, text) {
  const { occurrences, used } = state;
  const base = slugify(text);
  let candidate = base;
  let n = occurrences.get(base) ?? 0;
  while (occurrences.has(candidate)) candidate = `${base}-${++n}`;
  if (wpId && wpId !== candidate && !used.has(wpId)) {
    used.add(wpId);
    return ` {#${wpId}}`;
  }
  if (used.has(candidate)) {
    // An earlier heading took this id explicitly; the generated one would repeat it.
    let i = 2;
    while (used.has(`${candidate}-${i}`)) i++;
    used.add(`${candidate}-${i}`);
    return ` {#${candidate}-${i}}`;
  }
  // Same bookkeeping as github-slugger's slug().
  if (candidate !== base) occurrences.set(base, n);
  occurrences.set(candidate, 0);
  used.add(candidate);
  return '';
}

/** WordPress posts often use <h1> for sections; the page title is the only h1, so shift down. */
function demoteHeadings(doc, body) {
  if (!body.querySelector('h1')) return;
  for (const h of $$(body, 'h1, h2, h3, h4, h5')) {
    const next = doc.createElement(`h${Number(h.tagName[1]) + 1}`);
    for (const a of Array.from(h.attributes)) next.setAttribute(a.name, a.value);
    while (h.firstChild) next.appendChild(h.firstChild);
    h.replaceWith(next);
  }
}

function makeTurndown() {
  const td = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    emDelimiter: '_',
    strongDelimiter: '**',
    hr: '---',
  });
  td.use(gfm);
  // Empty links (Elementor wraps thumbnails in an <a> with only a background image).
  td.addRule('emptyLink', {
    filter: (node) => node.nodeName === 'A' && !node.textContent.trim() && !node.querySelector('img'),
    replacement: () => '',
  });
  // Column blocks stay as HTML wrappers around Markdown: blank lines inside each <div> let the
  // content between them parse as Markdown.
  td.addRule('columns', {
    filter: (node) => node.nodeName === 'DIV' && node.classList.contains('wp-block-columns'),
    replacement: (content, node) => {
      const va = node.className.match(/are-vertically-aligned-(center|bottom)/)?.[1];
      return `\n\n<div class="${['columns', va && `va-${va}`].filter(Boolean).join(' ')}">\n\n${content.trim()}\n\n</div>\n\n`;
    },
  });
  td.addRule('column', {
    filter: (node) => node.nodeName === 'DIV' && node.classList.contains('wp-block-column'),
    replacement: (content, node) => {
      const basis = (node.getAttribute('style') || '').match(/flex-basis:\s*([0-9.]+%)/)?.[1];
      const style = basis && basis !== '100%' && !/^100(\.0+)?%$/.test(basis) ? ` style="flex-basis:${basis}"` : '';
      return `\n\n<div class="column"${style}>\n\n${content.trim()}\n\n</div>\n\n`;
    },
  });
  td.addRule('raw', {
    filter: (node) => node.nodeName === 'DIV' && node.getAttribute('data-raw') === '1',
    replacement: (_c, node) => `\n\n${node.getAttribute('data-html')}\n\n`,
  });
  // Keep WordPress heading anchors when they differ from what the site would generate, using the
  // `{#id}` attribute syntax (handled by src/lib/remark-heading-id.mjs).
  td.addRule('heading', {
    filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    replacement: (content, node) => {
      const level = Number(node.nodeName.charAt(1));
      const body = content.replace(/\s*\n\s*/g, ' ').trim();
      if (!body) return '';
      const suffix = headingIdSuffix(td.__ids, node.getAttribute('id'), node.textContent.trim());
      return `\n\n${'#'.repeat(level)} ${body}${suffix}\n\n`;
    },
  });
  return td;
}

const turndown = makeTurndown();

function htmlToMarkdown(html) {
  const doc = domino.createDocument(`<!doctype html><html><body>${html}</body></html>`);
  preprocess(doc, doc.body);
  demoteHeadings(doc, doc.body);
  turndown.__ids = { occurrences: new Map(), used: new Set() };
  return turndown
    .turndown(doc.body)
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+$/gm, '')
    .trim();
}

// ---------------------------------------------------------------------------------------------
// Front matter

function yamlValue(v) {
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  return JSON.stringify(String(v)); // JSON strings are valid YAML double-quoted scalars
}

function frontMatter(obj) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null || v === '') continue;
    if (Array.isArray(v)) {
      if (!v.length) {
        lines.push(`${k}: []`);
        continue;
      }
      lines.push(`${k}:`);
      for (const item of v) lines.push(`  - ${yamlValue(item)}`);
    } else if (typeof v === 'object') {
      const entries = Object.entries(v).filter(([, x]) => x !== undefined && x !== null && x !== '');
      if (!entries.length) continue;
      lines.push(`${k}:`);
      for (const [kk, vv] of entries) lines.push(`  ${kk}: ${yamlValue(vv)}`);
    } else {
      lines.push(`${k}: ${yamlValue(v)}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

function seo(item) {
  const y = item.yoast_head_json || {};
  return {
    title: y.title ? decodeHTML(y.title) : undefined,
    description: y.description ? decodeHTML(y.description) : undefined,
    ogImage: y.og_image?.[0]?.url,
    canonical: y.canonical,
  };
}

const iso = (gmt) => (gmt ? `${gmt}Z` : undefined);

// ---------------------------------------------------------------------------------------------
// Main

async function writeIfChanged(file, content) {
  try {
    if ((await fs.readFile(file, 'utf8')) === content) return false;
  } catch {}
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, content);
  return true;
}

async function pruneExported(dir, keep) {
  const removed = [];
  for (const name of await fs.readdir(dir).catch(() => [])) {
    if (!/\.mdx?$/.test(name) || keep.has(name)) continue;
    const head = (await fs.readFile(path.join(dir, name), 'utf8')).slice(0, 2000);
    if (/^wpId:/m.test(head)) {
      await fs.rm(path.join(dir, name));
      removed.push(name);
    }
  }
  return removed;
}

async function main() {
  console.log(cached ? 'Using cached WordPress JSON from .cache/wp/' : `Fetching ${API} (read-only)`);
  const [posts, pages, categories, tags, users] = await Promise.all(
    ['posts', 'pages', 'categories', 'tags', 'users'].map(fetchAll),
  );
  console.log(`WordPress: ${posts.length} posts, ${pages.length} pages, ${categories.length} categories, ${tags.length} tags, ${users.length} users`);

  const catById = new Map(categories.map((c) => [c.id, c]));
  const tagById = new Map(tags.map((t) => [t.id, t]));
  const userById = new Map(users.map((u) => [u.id, u]));

  const skipped = [];
  const wpIds = {};
  const usedCats = new Set();
  const usedTags = new Set();
  const usedAuthors = new Set();

  // Posts
  const keepPosts = new Set();
  let changed = 0;
  for (const p of posts) {
    if (p.status !== 'publish') {
      skipped.push(`${p.slug} (status ${p.status})`);
      continue;
    }
    if (p.content?.protected) {
      skipped.push(`${p.slug} (password-protected)`);
      continue;
    }
    const cats = p.categories.map((id) => catById.get(id)?.slug).filter(Boolean);
    const tgs = p.tags.map((id) => tagById.get(id)?.slug).filter(Boolean);
    const author = userById.get(p.author)?.slug || 'civitai';
    cats.forEach((c) => usedCats.add(c));
    tgs.forEach((t) => usedTags.add(t));
    usedAuthors.add(author);
    const fm = frontMatter({
      title: decodeHTML(p.title.rendered),
      slug: decodeURIComponent(p.slug), // WordPress stores non-ASCII slugs percent-encoded
      date: iso(p.date_gmt),
      modified: iso(p.modified_gmt),
      categories: cats,
      tags: tgs,
      author,
      wpId: p.id,
      excerpt: text(p.excerpt?.rendered),
      image: p.jetpack_featured_media_url || undefined,
      sticky: p.sticky || undefined,
      seo: seo(p),
    });
    const name = `${p.slug}.md`;
    keepPosts.add(name);
    if (await writeIfChanged(path.join(POSTS_DIR, name), `${fm}\n\n${htmlToMarkdown(p.content.rendered)}\n`)) changed++;
    wpIds[p.id] = `/${p.slug}/`;
  }

  // Pages
  const keepPages = new Set();
  for (const p of pages) {
    if (DROP_PAGES.has(p.slug)) {
      skipped.push(`${p.slug} (dropped page)`);
      continue;
    }
    if (p.status !== 'publish' || p.content?.protected) {
      skipped.push(`${p.slug} (page ${p.content?.protected ? 'password-protected' : p.status})`);
      continue;
    }
    const pagePath = p.slug === FRONT_PAGE_SLUG ? '/' : new URL(p.link).pathname;
    const fm = frontMatter({
      title: decodeHTML(p.title.rendered),
      slug: decodeURIComponent(p.slug),
      path: pagePath,
      date: iso(p.date_gmt),
      modified: iso(p.modified_gmt),
      wpId: p.id,
      parent: p.parent || undefined,
      menuOrder: p.menu_order || undefined,
      excerpt: text(p.excerpt?.rendered),
      seo: seo(p),
    });
    const name = `${p.slug}.md`;
    keepPages.add(name);
    // Elementor pages open with their own title as a heading; the layout already prints it.
    const body = htmlToMarkdown(p.content.rendered);
    const title = decodeHTML(p.title.rendered).trim().toLowerCase();
    const repeat = body.match(/^#{1,6} (.+?)(?: \{#[^}]+\})?\n+/);
    const trimmed = repeat && repeat[1].trim().toLowerCase() === title ? body.slice(repeat[0].length) : body;
    if (await writeIfChanged(path.join(PAGES_DIR, name), `${fm}\n\n${trimmed}\n`)) changed++;
    wpIds[p.id] = pagePath;
  }

  const removed = [...(await pruneExported(POSTS_DIR, keepPosts)), ...(await pruneExported(PAGES_DIR, keepPages))];

  // Taxonomies and authors as WordPress describes them (counts are recomputed from content at build).
  const taxonomies = {
    categories: categories.map((c) => ({ id: c.id, slug: c.slug, name: decodeHTML(c.name), description: text(c.description), parent: c.parent || undefined })),
    tags: tags.map((t) => ({ id: t.id, slug: t.slug, name: decodeHTML(t.name), description: text(t.description) })),
    authors: users.map((u) => ({ id: u.id, slug: u.slug, name: decodeHTML(u.name), description: text(u.description) })),
  };
  await writeIfChanged(path.join(DATA_DIR, 'taxonomies.json'), JSON.stringify(taxonomies, null, 2) + '\n');
  const sortedIds = Object.fromEntries(Object.entries(wpIds).sort((a, b) => Number(a[0]) - Number(b[0])));
  await writeIfChanged(path.join(DATA_DIR, 'wp-ids.json'), JSON.stringify(sortedIds, null, 2) + '\n');

  // Cloudflare Pages redirects. Query-string redirects (?p=, ?page_id=) cannot be expressed here;
  // src/data/wp-ids.json is the map for a Pages Function to do those.
  const emptyCats = categories.filter((c) => !usedCats.has(c.slug)).map((c) => c.slug);
  const emptyTags = tags.filter((t) => !usedTags.has(t.slug)).map((t) => t.slug);
  const emptyAuthors = users.filter((u) => !usedAuthors.has(u.slug)).map((u) => u.slug);
  const protectedSlugs = posts.filter((p) => p.content?.protected).map((p) => p.slug);
  const lines = [
    '# Generated by scripts/export-wp.mjs. Do not edit by hand: re-run the export.',
    '# Format: Cloudflare Pages _redirects (https://developers.cloudflare.com/pages/configuration/redirects/)',
    '',
    '# Legacy WordPress endpoints',
    '/comments/feed/ /feed/ 301',
    '/sitemap.xml /sitemap_index.xml 301',
    '/wp-sitemap.xml /sitemap_index.xml 301',
    '',
    '# Removed content',
    ...[...DROP_PAGES].map((s) => `/${s}/ / 301`),
    ...protectedSlugs.map((s) => `/${s}/ / 301`),
    '',
    '# Empty archives (WordPress serves an empty listing; we send people home)',
    ...emptyCats.flatMap((s) => [`/category/${s}/ / 301`, `/category/${s}/feed/ / 301`]),
    ...emptyTags.flatMap((s) => [`/tag/${s}/ / 301`, `/tag/${s}/feed/ / 301`]),
    ...emptyAuthors.flatMap((s) => [`/author/${s}/ / 301`, `/author/${s}/feed/ / 301`]),
    '',
  ];
  await writeIfChanged(path.join(ROOT, 'public/_redirects'), lines.join('\n'));

  console.log(`Wrote ${keepPosts.size} posts and ${keepPages.size} pages (${changed} changed, ${removed.length} removed${removed.length ? `: ${removed.join(', ')}` : ''})`);
  console.log(`Skipped: ${skipped.join('; ') || 'none'}`);
  console.log(`Categories in use ${usedCats.size}/${categories.length}, tags in use ${usedTags.size}/${tags.length}, wp-ids ${Object.keys(wpIds).length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
