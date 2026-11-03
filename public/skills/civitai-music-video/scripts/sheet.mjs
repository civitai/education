// Contact sheets, so an agent can look at many moments in one image (kept under about 2000 px wide).
//
//   node <skill>/scripts/sheet.mjs                          # out/video.mp4, a frame every 3 s -> out/sheet.png
//   node <skill>/scripts/sheet.mjs --video out/test.mp4 --every 1.5
//   node <skill>/scripts/sheet.mjs --scenes                 # every generated scene image -> out/scenes.png
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { args, probeSeconds, readJson } from './lib.mjs';

const a = args();
mkdirSync('out', { recursive: true });
const ff = (argv) => execFileSync('ffmpeg', ['-v', 'error', '-y', ...argv], { stdio: 'inherit' });

// Columns for n tiles: 4 or 3, whichever leaves fewer empty tiles (fewer than 4 tiles: one row).
const columns = (n) => (n < 4 ? n : (4 - (n % 4)) % 4 <= (3 - (n % 3)) % 3 ? 4 : 3);

if (a.scenes) {
  const files = readJson('scenes.json')
    .scenes.filter((s) => s.file && !/\.(mp4|webm|mov)$/i.test(s.file) && existsSync(`public/${s.file}`))
    .map((s) => `public/${s.file}`);
  if (!files.length) {
    console.log('no scene images yet.');
  } else {
    const cols = columns(files.length);
    const W = 480;
    const H = 270;
    const inputs = files.flatMap((f) => ['-i', f]);
    const scaled = files.map((_, i) => `[${i}:v]scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H}[v${i}]`).join(';');
    const layout = files.map((_, i) => `${(i % cols) * W}_${Math.floor(i / cols) * H}`).join('|');
    const graph = files.length > 1 ? `${scaled};${files.map((_, i) => `[v${i}]`).join('')}xstack=inputs=${files.length}:layout=${layout}:fill=black` : `${scaled};[v0]null`;
    const out = a.out ?? 'out/scenes.png';
    ff([...inputs, '-filter_complex', graph, '-frames:v', '1', out]);
    console.log(`${out} (${files.length} scenes, in scenes.json order, left to right)`);
  }
} else {
  const video = a.video ?? 'out/video.mp4';
  const every = Number(a.every ?? 3);
  // ffmpeg samples the middle of each interval: every/2, every*1.5, ...
  const n = Math.max(1, Math.floor((probeSeconds(video) - every / 2) / every) + 1);
  const cols = columns(n);
  const rows = Math.ceil(n / cols);
  const out = a.out ?? 'out/sheet.png';
  ff(['-i', video, '-vf', `fps=1/${every},scale=480:-1,tile=${cols}x${rows}:padding=6`, '-frames:v', '1', out]);
  console.log(`${out} (${n} frames, one every ${every}s)`);
}
