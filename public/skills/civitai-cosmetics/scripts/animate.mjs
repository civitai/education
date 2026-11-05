// Optional: turn a finished still into a looping animated WebP. Needs ffmpeg on PATH (with libwebp).
//
//   node animate.mjs owl-wave --effect bob          out/owl-wave.png -> out/owl-wave.webp
//   effects: bob (float up and down), pulse (breathe in and out), wiggle (rock side to side),
//            shine (a light sweep across the art: good for badges)
//   --frames 24 --fps 12    defaults: a 2-second loop. The shop allows at most 150 frames and 30 fps.
//
// The art is shrunk a little so
// the motion never leaves the canvas, and every frame has art in it, so the loop never blinks empty.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { MAX_FPS, MAX_FRAMES, SPECS, args, readJson } from './lib.mjs';
import { blank, decodePng, encodePng } from './png.mjs';

const a = args();
const id = a._[0];
if (!id) {
  console.error('usage: node animate.mjs <id> --effect bob|pulse|wiggle|shine [--frames 24] [--fps 12]');
  process.exit(1);
}
const it = readJson('set.json').items.find((x) => x.id === id);
const type = it?.type ?? a.type;
if (!SPECS[type]) {
  console.error(`${id}: not in set.json; pass --type`);
  process.exit(1);
}
if (!SPECS[type].animated) {
  console.error(`${SPECS[type].label}s cannot be animated on Civitai.`);
  process.exit(1);
}
const effect = a.effect ?? 'bob';
const frames = Math.min(MAX_FRAMES, Number(a.frames ?? 24));
const fps = Math.min(MAX_FPS, Number(a.fps ?? 12));

try {
  execFileSync('ffmpeg', ['-hide_banner', '-version'], { stdio: 'ignore' });
} catch {
  console.error('ffmpeg is not installed (or not on PATH). The still PNG is still fine to submit.');
  process.exit(1);
}

const src = decodePng(readFileSync(a.in ?? `out/${id}.png`));
const { width: W, height: H } = src;

/** Sample src at (x, y) bilinearly, premultiplied. Returns [r, g, b, a] with a in 0..1. */
function sample(x, y) {
  const x0 = Math.floor(x), y0 = Math.floor(y);
  const tx = x - x0, ty = y - y0;
  let r = 0, g = 0, b = 0, al = 0;
  for (const [xx, yy, w] of [[x0, y0, (1 - tx) * (1 - ty)], [x0 + 1, y0, tx * (1 - ty)], [x0, y0 + 1, (1 - tx) * ty], [x0 + 1, y0 + 1, tx * ty]]) {
    if (xx < 0 || yy < 0 || xx >= W || yy >= H || w === 0) continue;
    const i = (yy * W + xx) * 4;
    const pa = (src.data[i + 3] / 255) * w;
    r += src.data[i] * pa; g += src.data[i + 1] * pa; b += src.data[i + 2] * pa; al += pa;
  }
  return al > 0 ? [r / al, g / al, b / al, al] : [0, 0, 0, 0];
}

function frame(t) {
  // t in [0, 1): one full loop.
  const ph = Math.sin(t * 2 * Math.PI);
  const opaque = !SPECS[type].transparent;
  let scale = opaque ? 1.06 : 0.9, dx = 0, dy = 0, rot = 0;
  if (effect === 'bob') dy = ph * (opaque ? 0.02 : 0.04) * H;
  else if (effect === 'pulse') scale *= 1 + ph * 0.04;
  else if (effect === 'wiggle') rot = ph * (6 * Math.PI) / 180;
  const out = blank(W, H);
  const cx = W / 2, cy = H / 2, cos = Math.cos(-rot), sin = Math.sin(-rot);
  // A diagonal band for "shine", travelling across and off the art once per loop.
  const band = (x, y) => {
    if (effect !== 'shine') return 0;
    const pos = (t * 1.6 - 0.3) * (W + H);
    const d = Math.abs(x + y - pos);
    return Math.max(0, 1 - d / (0.08 * (W + H))) * 0.55;
  };
  for (let y = 0; y < H; y++)
    for (let x = 0; x < W; x++) {
      const ux = (x - cx - dx) / scale, uy = (y - cy - dy) / scale;
      const [r, g, b, al] = sample(cx + ux * cos - uy * sin, cy + ux * sin + uy * cos);
      const o = (y * W + x) * 4;
      if (al === 0) {
        if (opaque) {
          out.data.set(src.data.subarray(o, o + 3), o);
          out.data[o + 3] = 255;
        }
        continue;
      }
      const k = band(x, y);
      out.data[o] = r + (255 - r) * k;
      out.data[o + 1] = g + (255 - g) * k;
      out.data[o + 2] = b + (255 - b) * k;
      out.data[o + 3] = opaque ? 255 : Math.round(al * 255);
    }
  return out;
}

const dir = mkdtempSync(join(tmpdir(), 'cosmetic-anim-'));
try {
  for (let f = 0; f < frames; f++) writeFileSync(join(dir, `f${String(f).padStart(3, '0')}.png`), encodePng(frame(f / frames)));
  const dest = a.out ?? `out/${id}.webp`;
  execFileSync('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-y',
    '-framerate', String(fps), '-i', join(dir, 'f%03d.png'),
    '-c:v', 'libwebp_anim', '-lossless', '0', '-quality', String(a.quality ?? 85),
    '-pix_fmt', SPECS[type].transparent ? 'yuva420p' : 'yuv420p', '-loop', '0', dest,
  ], { stdio: 'inherit' });
  console.log(`${id}: ${dest} (${frames} frames at ${fps} fps, effect ${effect}). Run check.mjs next.`);
} finally {
  rmSync(dir, { recursive: true, force: true });
}
