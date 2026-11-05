// Generate the raw artwork for every item in set.json on Civitai, one image per item.
//
//   node gen.mjs                 price it (what-if, spends nothing)
//   node gen.mjs --go            generate (asks Civitai for the price first, then runs)
//   node gen.mjs --go --only owl-wave,owl-badge   just these ids
//   node gen.mjs --go --redo     regenerate items that already have a raw image
//   --limit N   at most N items     --max-buzz N   refuse a run quoted above N (default 500)
//
// Writes raw/<id>.png and records each workflow and its Buzz in buzz-log.json.
import { existsSync, mkdirSync } from 'node:fs';
import { DEFAULT_PAY, SPECS, apiKey, args, buzz, download, logBuzz, payInfo, readJson, submit, waitFor, whatIf } from './lib.mjs';

const a = args();
const go = a.go === true;
const maxBuzz = Number(a['max-buzz'] ?? 500);
const doc = readJson('set.json');

const KEYS = {
  green: { name: 'chroma-key green', hex: '#00FF00' },
  magenta: { name: 'magenta', hex: '#FF00FF' },
  blue: { name: 'pure blue', hex: '#0000FF' },
};

function promptFor(item) {
  const spec = SPECS[item.type];
  if (!spec) throw new Error(`${item.id}: unknown type "${item.type}". Use one of: ${Object.keys(SPECS).join(', ')}`);
  const sentence = (t) => (/[.!?]$/.test(t) ? t : `${t}.`);
  const parts = [sentence(item.prompt.trim())];
  if (doc.style?.trim()) parts.push(`Style: ${sentence(doc.style.trim())}`);
  parts.push(`This is ${spec.brief}.`);
  if (spec.transparent) {
    const k = KEYS[item.key ?? doc.key ?? 'green'];
    if (!k) throw new Error(`${item.id}: key must be one of ${Object.keys(KEYS).join(', ')}`);
    parts.push(
      `Centered, with clear empty space on every side, on a perfectly flat solid ${k.name} (${k.hex}) background that fills the whole image edge to edge, ` +
        `including any empty center. No shadow, no gradient, no texture, no checkerboard, no border around the image. ` +
        `Do not use ${k.name} anywhere in the artwork itself.`,
    );
  } else {
    parts.push('Fill the whole image edge to edge. No border, no frame, no text unless the prompt asks for it.');
  }
  return parts.join(' ');
}

const only = a.only ? String(a.only).split(',').map((s) => s.trim()) : null;
let todo = doc.items.filter((it) => (only ? only.includes(it.id) : true));
if (!a.redo) todo = todo.filter((it) => !existsSync(`raw/${it.id}.png`));
todo = todo.filter((it) => it.prompt?.trim());
if (a.limit) todo = todo.slice(0, Number(a.limit));
if (!todo.length) {
  console.log('nothing to generate (every item already has raw/<id>.png; use --redo to make new ones).');
  process.exit(0);
}

const step = (it) => {
  const [width, height] = it.size ?? SPECS[it.type].gen;
  return {
    $type: 'imageGen',
    name: it.id,
    input: {
      engine: 'openai',
      model: it.model ?? doc.model ?? 'gpt-image-2.5-flare',
      operation: 'createImage',
      prompt: promptFor(it),
      width,
      height,
      quantity: 1,
      outputFormat: 'png',
    },
  };
};
const body = { allowMatureContent: false, currencies: doc.pay ?? DEFAULT_PAY, steps: todo.map(step) };

if (a.show) {
  for (const s of body.steps) console.log(`${s.name} (${s.input.width}x${s.input.height}): ${s.input.prompt}\n`);
  process.exit(0);
}

async function run() {
  const key = apiKey();
  const q = await whatIf(key, body);
  const quote = buzz(q);
  const p = payInfo(q);
  console.log(`${todo.length} image(s): ${todo.map((it) => it.id).join(', ')}`);
  console.log(`quoted: ${quote} Buzz (about ${Math.round((quote / todo.length) * 10) / 10} per image), paid from: ${p.insufficient ? 'not enough Buzz' : p.from}`);
  if (p.insufficient) {
    console.error(`not enough Buzz on this account for ${quote}. Nothing was spent.`);
    return 1;
  }
  if (!go) {
    console.log('price only. Add --go to generate.');
    return 0;
  }
  if (quote > maxBuzz) {
    console.error(`quote ${quote} is over --max-buzz ${maxBuzz}. Nothing was spent. Use --only or --limit, or raise --max-buzz if you mean it.`);
    return 1;
  }
  mkdirSync('raw', { recursive: true });
  const wf = await submit(key, body);
  console.log(`workflow ${wf.id} submitted, waiting...`);
  const done = await waitFor(key, wf.id);
  const billed = buzz(done);
  for (const st of done.steps ?? []) {
    const img = st.output?.images?.find((x) => x.url);
    if (st.status !== 'succeeded' || !img) {
      console.log(`${st.name}: ${st.status ?? 'no output'}${img ? '' : ' (no image)'}`);
      continue;
    }
    const type = await download(img.url, `raw/${st.name}.png`);
    console.log(`${st.name}: raw/${st.name}.png${type.includes('png') ? '' : ` (warning: served as ${type})`}`);
  }
  const total = logBuzz({ what: 'images', workflow: wf.id, items: todo.map((it) => it.id), status: done.status, buzz: billed });
  console.log(`workflow ${wf.id}: ${done.status}, billed ${billed} Buzz (set total ${total})`);
  return done.status === 'succeeded' ? 0 : 1;
}

// Exit by returning: calling process.exit() right after a fetch can crash Node on Windows.
process.exitCode = await run().catch((e) => {
  console.error(e.message);
  return 1;
});
