// Renders the embed placeholders written by scripts/export-wp.mjs:
//
//   <div data-embed="youtube|videopress|iframe|video|gallery|image-compare|tweet" data-src="...">
//
// Every embed's markup is decided here, in one place, so the site theme can restyle (or swap in
// interactive components for) galleries, image comparisons and videos without touching content.
// Source URLs are passed through unchanged, except VideoPress: those videos are self-hosted under
// /videos/<guid>/<file> (src/data/videopress.json) and play in a plain <video>, keeping the embed's
// autoplay/loop/muted settings. A guid missing from the map keeps the VideoPress iframe.
import { readFileSync } from 'node:fs';

const videopress = JSON.parse(readFileSync(new URL('../data/videopress.json', import.meta.url), 'utf8'));

const h =(tagName, properties = {}, children = []) => ({ type: 'element', tagName, properties, children });

function walk(node, fn) {
  if (!node.children) return;
  node.children = node.children.map((child) => fn(child) ?? child);
  for (const child of node.children) walk(child, fn);
}

const textOf = (node) => (node.type === 'text' ? node.value : (node.children || []).map(textOf).join(''));

function split(children) {
  const caption = children.find((c) => c.type === 'element' && c.tagName === 'figcaption');
  const rest = children.filter((c) => c !== caption && !(c.type === 'text' && !c.value.trim()));
  return { caption, rest };
}

function frame(p) {
  const width = Number(p.dataWidth) || 16;
  const height = Number(p.dataHeight) || 9;
  return h('iframe', {
    src: p.dataSrc,
    title: p.dataTitle || 'Embedded content',
    loading: 'lazy',
    allowFullScreen: true,
    allow: 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; web-share',
    referrerPolicy: 'strict-origin-when-cross-origin',
    width: p.dataWidth || undefined,
    height: p.dataHeight || undefined,
    style: `aspect-ratio: ${width} / ${height}`,
  });
}

function selfHosted(p) {
  const src = String(p.dataSrc || '');
  const guid = src.match(/videopress\.com\/(?:embed|v)\/([A-Za-z0-9]{8})/)?.[1];
  const v = guid && videopress[guid];
  if (!v) return undefined;
  const flags = new URL(src, 'https://videopress.com').searchParams;
  const auto = flags.get('autoPlay') === '1';
  return h('video', {
    src: `/videos/${guid}/${v.file}`,
    controls: true,
    preload: 'metadata',
    playsInline: true,
    autoPlay: auto || undefined,
    muted: auto || flags.get('muted') === '1' || undefined,
    loop: flags.get('loop') === '1' || undefined,
    width: v.width || undefined,
    height: v.height || undefined,
    style: v.width && v.height ? `aspect-ratio: ${v.width} / ${v.height}` : undefined,
  });
}

export default function rehypeEmbeds() {
  return (tree) => {
    walk(tree, (node) => {
      // Many posts open with a "Last Updated | Changes" table; keep it out of search snippets.
      if (node.type === 'element' && node.tagName === 'table' && /^\s*last\s+updated/i.test(textOf(node))) {
        node.properties = { ...node.properties, dataPagefindIgnore: '' };
        return;
      }
      if (node.type !== 'element' || !node.properties?.dataEmbed) return;
      const p = node.properties;
      const kind = String(p.dataEmbed);
      const { caption, rest } = split(node.children);
      const tail = caption ? [caption] : [];
      const orientation = Number(p.dataHeight) > Number(p.dataWidth) ? 'portrait' : 'landscape';
      switch (kind) {
        case 'videopress': {
          const video = selfHosted(p);
          if (video) return h('figure', { className: ['embed', 'embed-videopress', `embed-${orientation}`] }, [video, ...tail]);
          return h('figure', { className: ['embed', `embed-${kind}`, `embed-${orientation}`] }, [frame(p), ...tail]);
        }
        case 'youtube':
        case 'iframe':
          return h('figure', { className: ['embed', `embed-${kind}`, `embed-${orientation}`] }, [frame(p), ...tail]);
        case 'video':
          return h('figure', { className: ['embed', 'embed-video'] }, [
            h('video', { src: p.dataSrc, controls: true, preload: 'metadata', playsInline: true }),
            ...tail,
          ]);
        case 'gallery':
          return h('div', { className: ['gallery'] }, rest);
        case 'image-compare':
          return h('figure', { className: ['image-compare'], dataMode: p.dataMode }, [h('div', { className: ['image-compare-pair'] }, rest), ...tail]);
        case 'tweet':
          return h('figure', { className: ['embed', 'embed-tweet'] }, [...rest, ...tail]);
        default:
          return h('div', { className: ['embed', 'embed-unknown'], dataEmbed: kind }, node.children);
      }
    });
  };
}
