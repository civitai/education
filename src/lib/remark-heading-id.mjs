// Custom heading ids: `## Heading text {#my-id}` renders as <h2 id="my-id">Heading text</h2>.
// The WordPress export uses it to keep old #anchors working where they differ from the ids the
// site would generate itself.
const ID = /\s*\{#([^\s{}]+)\}\s*$/;

function walk(node, fn) {
  fn(node);
  if (node.children) for (const child of node.children) walk(child, fn);
}

export default function remarkHeadingId() {
  return (tree) => {
    walk(tree, (node) => {
      if (node.type !== 'heading') return;
      const last = node.children[node.children.length - 1];
      if (!last || last.type !== 'text') return;
      const m = last.value.match(ID);
      if (!m) return;
      last.value = last.value.replace(ID, '');
      if (!last.value) node.children.pop();
      node.data ??= {};
      node.data.hProperties = { ...(node.data.hProperties || {}), id: m[1] };
    });
  };
}
