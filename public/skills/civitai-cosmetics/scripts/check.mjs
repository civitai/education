// Check finished files against the Creator Shop's artwork rules, the same checks the submit form runs.
//
//   node check.mjs                          every item in set.json (out/<id>.webp if present, else .png)
//   node check.mjs path/to/file.png --type badge    any file
//
// Exits 1 if any required check fails. Writes out/checks.json.
import { existsSync, readFileSync, statSync } from 'node:fs';
import { MAX_BYTES, MAX_FRAMES, MAX_FPS, MIN_FRAME_DELAY_MS, RATIO_TOLERANCE, SPECS, TYPES, args, readJson, webpInfo, writeJson } from './lib.mjs';
import { decodePng, isPng, pngInfo } from './png.mjs';

const a = args();

function checkFile(file, type) {
  const spec = SPECS[type];
  if (!spec) throw new Error(`unknown type "${type}". Use one of: ${TYPES.join(', ')}`);
  const buf = readFileSync(file);
  const bytes = statSync(file).size;
  const checks = [];
  const add = (label, passed, detail, required = true) => checks.push({ label, passed, detail, required });

  let width = 0, height = 0, transparent = false, frames = 1, minDelayMs = null, format = 'unknown';
  if (isPng(buf)) {
    format = 'png';
    const info = pngInfo(buf);
    ({ width, height } = info);
    if (info.animated) frames = 2; // APNG: the site only plays animated WebP
    const hasAlphaChannel = info.colorType === 4 || info.colorType === 6 || buf.includes(Buffer.from('tRNS'));
    if (hasAlphaChannel) {
      // The form also wants more than 2% of the picture actually see-through.
      const img = decodePng(buf);
      let clear = 0;
      for (let i = 3; i < img.data.length; i += 4) if (img.data[i] < 16) clear++;
      transparent = clear / (width * height) > 0.02;
      if (type === 'avatar-frame') {
        // Guideline from the cosmetic standards: at least half of the avatar stays visible.
        const r = Math.min(width, height) / 2;
        let inside = 0, open = 0;
        for (let y = 0; y < height; y++)
          for (let x = 0; x < width; x++) {
            const dx = x + 0.5 - width / 2, dy = y + 0.5 - height / 2;
            if (dx * dx + dy * dy > r * r) continue;
            inside++;
            if (img.data[(y * width + x) * 4 + 3] < 128) open++;
          }
        add('At least 50% of the avatar stays visible (standards guideline)', open / inside >= 0.5, `${Math.round((open / inside) * 100)}% open`, false);
      }
    }
  } else if (buf.toString('latin1', 0, 4) === 'RIFF' && buf.toString('latin1', 8, 12) === 'WEBP') {
    format = 'webp';
    const info = webpInfo(buf);
    ({ width, height, frames, minDelayMs } = info);
    transparent = info.alpha;
  }

  add('PNG or WebP', format !== 'unknown', format);
  let dimsOk, dimsLabel;
  if (spec.longEdge) {
    const long = Math.max(width, height), short = Math.min(width, height);
    dimsOk = long >= spec.longEdge[0] && long <= spec.longEdge[1] && short > 0 && long / short <= spec.maxRatio;
    dimsLabel = `${spec.longEdge[0]}-${spec.longEdge[1]}px on the long edge, at most ${spec.maxRatio}:1`;
  } else {
    const [mw, mh] = spec.min;
    const target = mw / mh;
    dimsOk = width >= mw && height >= mh && height > 0 && Math.abs(width / height - target) <= RATIO_TOLERANCE * target;
    dimsLabel = `At least ${mw}x${mh}px at the same ratio`;
  }
  add(dimsLabel, dimsOk, `${width}x${height}px`);
  if (spec.transparent) add('Transparent background', transparent, transparent ? 'yes' : 'no alpha, or under 2% see-through');
  if (frames > 1) {
    if (format !== 'webp') add('Animation must be an animated WebP', false, 'animated PNG');
    if (!spec.animated) add(`${spec.label}s cannot be animated`, false, `${frames} frames`);
    add(`At most ${MAX_FRAMES} frames`, frames <= MAX_FRAMES, `${frames} frames`);
    if (minDelayMs !== null) add(`At most ${MAX_FPS} fps`, minDelayMs >= MIN_FRAME_DELAY_MS, `~${Math.round(1000 / Math.max(1, minDelayMs))} fps peak`);
  }
  add('Under 50 MB', bytes <= MAX_BYTES, `${(bytes / 1024).toFixed(0)} KB`);
  return { file, type, width, height, frames, bytes, checks, passed: checks.every((c) => c.passed || !c.required) };
}

const jobs = [];
if (a._.length) {
  if (!a.type) {
    console.error(`give the type: --type ${TYPES.join('|')}`);
    process.exit(1);
  }
  for (const f of a._) jobs.push([f, a.type]);
} else {
  const doc = readJson('set.json');
  for (const it of doc.items) {
    const f = [`out/${it.id}.webp`, `out/${it.id}.png`].find((p) => existsSync(p));
    if (f) jobs.push([f, it.type]);
    else console.log(`${it.id}: no out/${it.id}.png or .webp yet`);
  }
}

const results = [];
for (const [f, t] of jobs) {
  const r = checkFile(f, t);
  results.push(r);
  console.log(`\n${r.passed ? 'PASS' : 'FAIL'}  ${f}  (${SPECS[t].label})`);
  for (const c of r.checks) console.log(`  ${c.passed ? 'ok  ' : c.required ? 'FAIL' : 'warn'}  ${c.label}  [${c.detail}]`);
}
if (!a._.length && existsSync('out')) writeJson('out/checks.json', results);
const failed = results.filter((r) => !r.passed).length;
console.log(`\n${results.length - failed}/${results.length} file(s) pass.`);
if (!results.length || failed) process.exitCode = 1;
