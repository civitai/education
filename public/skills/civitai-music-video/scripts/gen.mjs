// Generate one image per scene with Civitai, from the prompts in scenes.json. Run it from the project folder.
//
//   node <skill>/scripts/gen.mjs                    # price only: what-if quote, spends nothing
//   node <skill>/scripts/gen.mjs --go               # generate every scene that has a prompt and no image yet
//   node <skill>/scripts/gen.mjs --only s01,s04 --go
//   node <skill>/scripts/gen.mjs --limit 2 --go     # the first 2 scenes still missing an image
//   node <skill>/scripts/gen.mjs --only s03 --redo --go   # replace an image you did not like
//
// Images land in public/scenes/<id>.<ext>, and scenes.json gets "file" filled in. Every spend is
// appended to buzz-log.json. A run refuses to spend more than --max-buzz (default 250) in one go.
// Settings at the top of scenes.json: "style" is added to every prompt, so all scenes share a look;
// "model" is an optional checkpoint AIR (urn:air:...), left null for Civitai's default image model;
// "width"/"height" are the image size; "pay" (optional) lists which Buzz to use, default blue then green.
import { existsSync, renameSync, rmSync } from 'node:fs';
import { DEFAULT_PAY, apiKey, args, buzz, download, logBuzz, payInfo, readJson, submit, waitFor, whatIf, writeJson } from './lib.mjs';

const a = args();
const go = a.go === true;
const maxBuzz = Number(a['max-buzz'] ?? 250);
if (!existsSync('scenes.json')) {
  console.error('scenes.json not found. Run this from the project folder that setup.mjs made.');
  process.exit(1);
}
const doc = readJson('scenes.json');
const only = a.only ? String(a.only).split(',').map((s) => s.trim()) : null;
let todo = doc.scenes.filter((s) => (only ? only.includes(s.id) : true));
if (!a.redo) todo = todo.filter((s) => !s.file || !existsSync(`public/${s.file}`));
const noPrompt = todo.filter((s) => !s.prompt?.trim());
if (noPrompt.length) console.log(`skipping ${noPrompt.length} scene(s) with no prompt: ${noPrompt.map((s) => s.id).join(', ')}`);
todo = todo.filter((s) => s.prompt?.trim());
if (a.limit) todo = todo.slice(0, Number(a.limit));
if (!todo.length) {
  console.log('nothing to generate.');
  process.exit(0);
}

const key = apiKey();
const prompt = (s) => (doc.style?.trim() ? `${s.prompt.trim()}, ${doc.style.trim()}` : s.prompt.trim());
const step = (s) => ({
  $type: 'textToImage',
  name: s.id,
  input: {
    prompt: prompt(s),
    ...(doc.negativePrompt ? { negativePrompt: doc.negativePrompt } : {}),
    ...(doc.model ? { model: doc.model } : {}),
    quantity: 1,
    width: doc.width ?? 1216,
    height: doc.height ?? 832,
  },
});

const body = (c) => ({ allowMatureContent: false, currencies: doc.pay ?? DEFAULT_PAY, steps: c.map(step) });

// One workflow for up to 50 scenes (a whole song), so the balance check covers the whole run.
const chunks = [];
for (let i = 0; i < todo.length; i += 50) chunks.push(todo.slice(i, i + 50));

// Exit by returning: calling process.exit() right after a fetch can crash Node on Windows.
async function run() {
  let quote = 0;
  let short = false;
  const from = new Set();
  for (const c of chunks) {
    const q = await whatIf(key, body(c));
    quote += buzz(q);
    const p = payInfo(q);
    short ||= p.insufficient;
    from.add(p.from);
  }
  console.log(`${todo.length} image(s): ${todo.map((s) => s.id).join(', ')}`);
  console.log(`quoted: ${quote} Buzz (about ${Math.round((quote / todo.length) * 10) / 10} per image), paid from: ${short ? 'not enough Buzz' : [...from].join(', ')}`);
  if (short) {
    console.error(`not enough Buzz on this account for ${quote}. Nothing was spent. Add Buzz on civitai.com, or generate fewer with --limit.`);
    return 1;
  }
  if (!go) {
    console.log('price only. Add --go to generate.');
    return 0;
  }
  if (quote > maxBuzz) {
    console.error(`quote ${quote} is over --max-buzz ${maxBuzz}. Use --limit, or raise --max-buzz if you mean it.`);
    return 1;
  }

  let spent = 0;
  for (const c of chunks) {
    const wf = await submit(key, body(c));
    console.log(`workflow ${wf.id} submitted (${c.length} image(s)), waiting...`);
    const done = await waitFor(key, wf.id);
    const billed = buzz(done);
    spent += billed;
    for (const st of done.steps ?? []) {
      const scene = doc.scenes.find((s) => s.id === st.name);
      const img = st.output?.images?.find((x) => x.url);
      if (!scene) continue;
      if (st.status !== 'succeeded' || !img) {
        console.log(`${st.name}: ${st.status ?? 'no output'}${img ? '' : ' (no image)'}`);
        continue;
      }
      const tmp = `public/scenes/${scene.id}.tmp`;
      const type = await download(img.url, tmp);
      const ext = type.includes('png') ? 'png' : type.includes('webp') ? 'webp' : 'jpg';
      const file = `scenes/${scene.id}.${ext}`;
      rmSync(`public/${file}`, { force: true });
      renameSync(tmp, `public/${file}`);
      scene.file = file;
      delete scene.clipSeconds;
      delete scene.still;
      console.log(`${scene.id}: public/${file}`);
    }
    writeJson('scenes.json', doc);
    const total = logBuzz({ what: 'images', workflow: wf.id, scenes: c.map((s) => s.id), status: done.status, buzz: billed });
    console.log(`workflow ${wf.id}: ${done.status}, billed ${billed} Buzz (project total ${total})`);
  }
  console.log(`done. spent ${spent} Buzz this run.`);
  return 0;
}

process.exitCode = await run().catch((e) => {
  console.error(e.message);
  return 1;
});
