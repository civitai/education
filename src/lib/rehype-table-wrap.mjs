import { visit } from 'unist-util-visit';

// Wraps every <table> in <div class="table-wrap"> so wide tables scroll inside the column on phones
// instead of widening the page.
export default function rehypeTableWrap() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'table' || !parent || index == null) return;
      if (parent.tagName === 'div' && parent.properties?.className?.includes('table-wrap')) return;
      parent.children[index] = { type: 'element', tagName: 'div', properties: { className: ['table-wrap'] }, children: [node] };
      return 'skip';
    });
  };
}
