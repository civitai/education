// Optional: turn one scene's image into a short moving clip with Civitai (image to video).
// Clips cost far more than images, so use them for a few key moments (the chorus, the ending).
// Run it from the project folder, after gen.mjs made the scene's image.
//
//   node <skill>/scripts/clip.mjs s05 "the dancers spin, confetti falls, slow push in"          # price only
//   node <skill>/scripts/clip.mjs s05 "the dancers spin, confetti falls, slow push in" --go     # generate
// Options: --duration 5 (seconds), --res 480p|768p (default 480p), --max-buzz 150
//
// The clip is saved to public/clips/<id>.mp4 with its own audio removed (the song carries the video),
// and the scene in scenes.json switches to it. It loops if the scene is longer than the clip.
// The what-if quote can be higher than the final bill; buzz-log.json records what was billed.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync } from 'node:fs';
import { DEFAULT_PAY, apiKey, args, buzz, payInfo, download, logBuzz, probeSeconds, readJson, round, submit, waitFor, whatIf, writeJson } from './lib.mjs';

const a = args();
const [id, motion] = a._;
if (!id || !motion) {
  console.error('usage: node clip.mjs <scene-id> "<what moves>" [--go] [--duration 5] [--res 480p] [--max-buzz 150]');
  process.exit(1);
}
const doc = readJson('scenes.json');
const scene = doc.scenes.find((s) => s.id === id);
if (!scene) throw new Error(`no scene ${id} in scenes.json`);
const still = scene.still ?? scene.file;
if (!still || /\.(mp4|webm|mov)$/i.test(still) || !existsSync(`public/${still}`)) {
  console.error(`scene ${id} needs an image first: run gen.mjs --only ${id} --go`);
  process.exit(1);
}

const key = apiKey();
const mime = /\.png$/i.test(still) ? 'image/png' : /\.webp$/i.test(still) ? 'image/webp' : 'image/jpeg';
const firstFrame = `data:${mime};base64,` + readFileSync(`public/${still}`).toString('base64');
const prompt = `${motion}. Keep the look of the first frame. No text, no captions, no speech.`;
const body = {
  allowMatureContent: false,
  currencies: doc.pay ?? DEFAULT_PAY,
  steps: [
    {
      $type: 'videoGen',
      name: id,
      input: {
        engine: a.engine ?? 'heygen',
        operation: 'imageToVideo',
        duration: Number(a.duration ?? 5),
        resolution: a.res ?? '480p',
        firstFrameImage: firstFrame,
        prompt,
      },
    },
  ],
};

// Exit by returning: calling process.exit() right after a fetch can crash Node on Windows.
async function run() {
  const q = await whatIf(key, body);
  const quote = buzz(q);
  const pay = payInfo(q);
  console.log(`${id}: quoted ${quote} Buzz for a ${body.steps[0].input.duration}s ${body.steps[0].input.resolution} clip, paid from: ${pay.insufficient ? 'not enough Buzz' : pay.from}`);
  if (pay.insufficient) {
    console.error(`not enough Buzz on this account for ${quote}. Nothing was spent.`);
    return 1;
  }
  if (a.go !== true) {
    console.log('price only. Add --go to generate.');
    return 0;
  }
  const maxBuzz = Number(a['max-buzz'] ?? 150);
  if (quote > maxBuzz) {
    console.error(`quote ${quote} is over --max-buzz ${maxBuzz}. Raise --max-buzz if you mean it.`);
    return 1;
  }
  const wf = await submit(key, body);
  console.log(`workflow ${wf.id} submitted, waiting (usually 1 to 3 minutes)...`);
  const done = await waitFor(key, wf.id, { timeoutMs: 20 * 60 * 1000 });
  const billed = buzz(done);
  const total = logBuzz({ what: 'clip', workflow: wf.id, scenes: [id], status: done.status, buzz: billed });
  const v = done.steps?.[0]?.output?.video;
  const url = typeof v === 'object' ? v?.url : v;
  if (done.status !== 'succeeded' || !url) {
    console.error(`${id}: ${done.status}, no video. Billed ${billed} Buzz. ${JSON.stringify(done.steps?.[0]?.output ?? {}).slice(0, 300)}`);
    return 1;
  }
  const raw = `public/clips/${id}.raw.mp4`;
  const out = `public/clips/${id}.mp4`;
  await download(url, raw);
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', raw, '-an', '-c:v', 'copy', out]);
  rmSync(raw, { force: true });
  scene.still = still;
  scene.file = `clips/${id}.mp4`;
  scene.clipSeconds = round(probeSeconds(out));
  writeJson('scenes.json', doc);
  console.log(`${id}: ${out} (${scene.clipSeconds}s), billed ${billed} Buzz (project total ${total})`);
  return 0;
}

process.exitCode = await run().catch((e) => {
  console.error(e.message);
  return 1;
});
