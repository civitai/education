import { visit } from 'unist-util-visit';

// `:::tip[Title]` ... `:::` renders <div class="callout callout-tip"><p class="callout-title">Title</p>...</div>.
// Without a [Title] the title is the kind itself ("Tip"); prose.css draws its icon.
// Needs remark-directive earlier in the remarkPlugins list.
const CLASS = { note: 'note', tip: 'tip', warning: 'warn', caution: 'danger' };
const LABEL = { note: 'Note', tip: 'Tip', warning: 'Warning', caution: 'Caution' };

export default function remarkCallouts() {
  return (tree, file) => {
    const source = String(file.value ?? '');
    visit(tree, (node, index, parent) => {
      if (!node.type.endsWith('Directive')) return;

      if (node.type === 'containerDirective' && node.name in CLASS) {
        const data = (node.data ??= {});
        data.hName = 'div';
        data.hProperties = { className: ['callout', `callout-${CLASS[node.name]}`] };
        const first = node.children[0];
        const labelled = Boolean(first?.data?.directiveLabel);
        const title = {
          type: 'paragraph',
          data: { hName: 'p', hProperties: { className: ['callout-title'] } },
          children: labelled ? first.children : [{ type: 'text', value: LABEL[node.name] }],
        };
        node.children.splice(0, labelled ? 1 : 0, title);
        return;
      }

      // Anything else that merely looks like a directive (":fire:", "12:30", ":::") is ordinary text.
      const { start, end } = node.position ?? {};
      if (!parent || index == null || start?.offset == null || end?.offset == null) return;
      if (node.type === 'containerDirective') {
        // Keep the children; only the unknown fence itself is dropped back to text.
        const open = source.slice(start.offset, node.children[0]?.position?.start?.offset ?? end.offset);
        parent.children.splice(index, 1, { type: 'text', value: open.trimEnd() + '\n' }, ...node.children);
        return index + 1;
      }
      parent.children[index] = { type: 'text', value: source.slice(start.offset, end.offset) };
    });
  };
}
