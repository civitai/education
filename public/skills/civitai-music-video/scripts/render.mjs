// Render the video to a 1080p mp4. Run it from the project folder.
//
//   node <skill>/scripts/render.mjs                      # the whole song -> out/video.mp4
//   node <skill>/scripts/render.mjs --from 0 --to 15     # a test clip of seconds 0-15 -> out/test.mp4
//   node <skill>/scripts/render.mjs --out out/v2.mp4 --crf 24
//   node <skill>/scripts/render.mjs --concurrency 2      # use fewer CPU cores, so the computer stays responsive
//
// CRF sets quality and size: 20 is sharper and bigger, 26 is smaller. 22 is a good default for an entry.
import { spawn } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { args, probeSeconds, readJson } from './lib.mjs';

const FPS = 30;
const a = args();
const video = readJson('video.json');
const part = a.from !== undefined || a.to !== undefined;
const from = Math.max(0, Number(a.from ?? 0));
const to = Math.min(video.duration, Number(a.to ?? video.duration));
const out = a.out ?? (part ? 'out/test.mp4' : 'out/video.mp4');
const crf = Number(a.crf ?? 22);

const scenes = readJson('scenes.json').scenes;
const missing = scenes.filter((s) => s.to > from && s.from < to && (!s.file || !existsSync(`public/${s.file}`)));
if (missing.length) console.log(`note: ${missing.length} scene(s) in this range have no image yet and render as placeholders: ${missing.map((s) => s.id).join(', ')}`);

const conc = a.concurrency ? `--concurrency=${Number(a.concurrency)}` : '';
const frames = part ? `--frames=${Math.round(from * FPS)}-${Math.round(to * FPS) - 1}` : '';
const cmd = `npx remotion render src/index.ts MusicVideo "${out}" --codec h264 --crf ${crf} ${frames} ${conc}`;
console.log(cmd);

// Remotion prints a progress line for nearly every frame. Keep every other message, but show progress
// only every 10 percent, so the output stays short enough for an agent to read.
const ANSI = new RegExp(String.fromCharCode(27) + '\\[[0-9;]*m', 'g');
const PROGRESS = /(Rendered|Encoded|Rendering|Stitching|Encoding)\D*(\d+)\s*\/\s*(\d+)/;
const code = await new Promise((resolve) => {
  const p = spawn(cmd, { shell: true });
  const shown = {};
  let buf = '';
  const onData = (d) => {
    buf += d.toString().replace(ANSI, '');
    const lines = buf.split(/\r?\n|\r/);
    buf = lines.pop();
    for (const line of lines) {
      const m = line.match(PROGRESS);
      if (m) {
        const pct = Math.floor((Number(m[2]) / Math.max(1, Number(m[3]))) * 10) * 10;
        const what = m[1].toLowerCase();
        if (shown[what] !== pct) {
          shown[what] = pct;
          console.log(`${what} ${pct}%`);
        }
      } else if (line.trim()) console.log(line);
    }
  };
  p.stdout.on('data', onData);
  p.stderr.on('data', onData);
  p.on('close', (c) => {
    if (buf.trim() && !PROGRESS.test(buf)) console.log(buf);
    resolve(c);
  });
});
if (code !== 0) {
  console.error(`render failed (exit ${code})`);
  process.exit(code ?? 1);
}
const mb = (statSync(out).size / 1e6).toFixed(1);
console.log(`\n${out}: ${probeSeconds(out).toFixed(1)}s, ${mb} MB`);
