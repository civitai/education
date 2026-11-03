// Animate scene images into short moving clips with Civitai (image to video). Run it from the project
// folder, after gen.mjs made the scene images.
//
//   node <skill>/scripts/clip.mjs                 # price every scene that has an "animate" prompt and no clip yet
//   node <skill>/scripts/clip.mjs --go            # generate them, all in one workflow
//   node <skill>/scripts/clip.mjs s05 "the dancers spin, confetti falls, slow push in" [--go]   # one scene
//
// In scenes.json, "animate" is the motion prompt for a scene: describe what moves, not the look (the image
// already sets the look). Options: --duration 5 (seconds), --res 480p|768p (default 480p),
// --engine (default heygen, the cheapest per 5 s in our price checks), --max-buzz (default 150 for one
// clip, 300 for a batch), --redo (animate scenes that already have a clip again).
//
// Each clip is saved to public/clips/<id>.mp4 with its own audio removed (the song carries the video), and
// its scene switches to it; it loops if the scene is longer than the clip. Spends go to buzz-log.json.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync } from 'node:fs';
import { DEFAULT_PAY, apiKey, args, buzz, payInfo, download, logBuzz, probeSeconds, readJson, round, submit, waitFor, whatIf, writeJson } from './lib.mjs';

const a = args();
const doc = readJson('scenes.json');
const isClip = (f) => /\.(mp4|webm|mov)$/i.test(f ?? '');
const stillOf = (s) => s.still ?? (isClip(s.file) ? undefined : s.file);

let todo;
if (a._.length) {
  const [id, motion] = a._;
  const scene = doc.scenes.find((s) => s.id === id);
  if (!scene || !motion) {
    console.error(scene ? 'usage: node clip.mjs <scene-id> "<what moves>" [--go]' : `no scene ${id} in scenes.json`);
    process.exit(1);
  }
  scene.animate = motion;
  todo = [scene];
} else {
  todo = doc.scenes.filter((s) => s.kind !== 'shot' && typeof s.animate === 'string' && s.animate.trim() && (a.redo || !isClip(s.file)));
  const blank = doc.scenes.filter((s) => s.animate === '');
  if (blank.length) console.log(`skipping ${blank.length} scene(s) marked to animate but with no motion prompt yet: ${blank.map((s) => s.id).join(', ')}`);
}
const noImage = todo.filter((s) => !stillOf(s) || !existsSync(`public/${stillOf(s)}`));
if (noImage.length) {
  console.error(`these scenes need an image first (gen.mjs --only ${noImage.map((s) => s.id).join(',')} --go): ${noImage.map((s) => s.id).join(', ')}`);
  process.exit(1);
}
if (!todo.length) {
  console.log('nothing to animate. Write an "animate" motion prompt on the scenes you want moving.');
  process.exit(0);
}

const key = apiKey();
const duration = Number(a.duration ?? 5);
const res = a.res ?? '480p';
const step = (s) => {
  const still = stillOf(s);
  const mime = /\.png$/i.test(still) ? 'image/png' : /\.webp$/i.test(still) ? 'image/webp' : 'image/jpeg';
  return {
    $type: 'videoGen',
    name: s.id,
    input: {
      engine: a.engine ?? 'heygen',
      operation: 'imageToVideo',
      duration,
      resolution: res,
      firstFrameImage: `data:${mime};base64,` + readFileSync(`public/${still}`).toString('base64'),
      prompt: `${s.animate.trim()}. Keep the look of the first frame. No text, no captions, no speech.`,
    },
  };
};
const body = { allowMatureContent: false, currencies: doc.pay ?? DEFAULT_PAY, steps: todo.map(step) };

// Exit by returning: calling process.exit() right after a fetch can crash Node on Windows.
async function run() {
  const q = await whatIf(key, body);
  const quote = buzz(q);
  const pay = payInfo(q);
  console.log(`${todo.length} clip(s) of ${duration}s at ${res}: ${todo.map((s) => s.id).join(', ')}`);
  console.log(`quoted: ${quote} Buzz (about ${Math.round(quote / todo.length)} per clip), paid from: ${pay.insufficient ? 'not enough Buzz' : pay.from}`);
  if (pay.insufficient) {
    console.error(`not enough Buzz on this account for ${quote}. Nothing was spent.`);
    return 1;
  }
  if (a.go !== true) {
    console.log('price only. Add --go to generate.');
    return 0;
  }
  const maxBuzz = Number(a['max-buzz'] ?? (todo.length > 1 ? 300 : 150));
  if (quote > maxBuzz) {
    console.error(`quote ${quote} is over --max-buzz ${maxBuzz}. Animate fewer scenes, or raise --max-buzz if you mean it.`);
    return 1;
  }
  const wf = await submit(key, body);
  console.log(`workflow ${wf.id} submitted, waiting (usually 1 to 3 minutes)...`);
  const done = await waitFor(key, wf.id, { timeoutMs: 25 * 60 * 1000 });
  const billed = buzz(done);
  const total = logBuzz({ what: 'clips', workflow: wf.id, scenes: todo.map((s) => s.id), status: done.status, buzz: billed });
  let failed = 0;
  for (const st of done.steps ?? []) {
    const scene = doc.scenes.find((s) => s.id === st.name);
    const v = st.output?.video;
    const url = typeof v === 'object' ? v?.url : v;
    if (!scene) continue;
    if (st.status !== 'succeeded' || !url) {
      failed++;
      console.error(`${st.name}: ${st.status ?? 'no output'}, no video`);
      continue;
    }
    const raw = `public/clips/${scene.id}.raw.mp4`;
    const out = `public/clips/${scene.id}.mp4`;
    await download(url, raw);
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', raw, '-an', '-c:v', 'copy', out]);
    rmSync(raw, { force: true });
    scene.still = stillOf(scene);
    scene.file = `clips/${scene.id}.mp4`;
    scene.clipSeconds = round(probeSeconds(out));
    console.log(`${scene.id}: ${out} (${scene.clipSeconds}s)`);
  }
  writeJson('scenes.json', doc);
  console.log(`workflow ${wf.id}: ${done.status}, billed ${billed} Buzz (project total ${total})`);
  return failed ? 1 : 0;
}

process.exitCode = await run().catch((e) => {
  console.error(e.message);
  return 1;
});
