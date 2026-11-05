// Turn raw/<id>.png into a submit-ready out/<id>.png for each item in set.json.
//
//   node cutout.mjs              every item with a raw image
//   node cutout.mjs --only owl-wave
//
// Transparent types: the flat background color is keyed out (sampled from the image border), edge
// pixels are un-mixed from the background color so no green or magenta fringe is left, the art is
// trimmed, optionally given a white die-cut outline, and placed on the type's export canvas.
// Profile backgrounds: center-cropped to 25:8 and resized. No keying.
//
// Per-item options in set.json: "tolerance" (default 70: how far from the background color a pixel
// must be to stay; raise it if a haze of background is left, lower it if the art gets eaten),
// "outline" (white die-cut outline in px at export size, e.g. 8 for stickers), "pad" (px of empty
// margin, default 6; 0 for avatar frames), "fill" (stretch the art to the whole canvas),
// "despill" (px band along edges where background tint is removed; 0 turns it off).
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { SPECS, args, readJson } from './lib.mjs';
import { alphaBox, blank, crop, decodePng, encodePng, isPng, paste, resize } from './png.mjs';

const a = args();
const doc = readJson('set.json');
const only = a.only ? String(a.only).split(',').map((s) => s.trim()) : null;
const items = doc.items.filter((it) => (only ? only.includes(it.id) : true));
mkdirSync('out', { recursive: true });

/** Median color of a 2%-wide ring around the image edge: the background the model painted. */
function borderColor(img) {
  const { width: w, height: h, data } = img;
  const ring = Math.max(2, Math.round(Math.min(w, h) * 0.02));
  const rs = [], gs = [], bs = [];
  for (let y = 0; y < h; y += 2)
    for (let x = 0; x < w; x += 2) {
      if (x >= ring && x < w - ring && y >= ring && y < h - ring) continue;
      const i = (y * w + x) * 4;
      rs.push(data[i]); gs.push(data[i + 1]); bs.push(data[i + 2]);
    }
  const med = (v) => v.sort((p, q) => p - q)[v.length >> 1];
  return [med(rs), med(gs), med(bs)];
}

/** Chamfer distance (px) from every pixel to the nearest pixel where `seed(i)` is true. */
function distanceTo(w, h, seed) {
  const dist = new Float32Array(w * h).fill(1e9);
  for (let i = 0; i < w * h; i++) if (seed(i)) dist[i] = 0;
  const D1 = 1, D2 = Math.SQRT2;
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      let v = dist[i];
      if (x > 0) v = Math.min(v, dist[i - 1] + D1);
      if (y > 0) {
        v = Math.min(v, dist[i - w] + D1);
        if (x > 0) v = Math.min(v, dist[i - w - 1] + D2);
        if (x < w - 1) v = Math.min(v, dist[i - w + 1] + D2);
      }
      dist[i] = v;
    }
  for (let y = h - 1; y >= 0; y--)
    for (let x = w - 1; x >= 0; x--) {
      const i = y * w + x;
      let v = dist[i];
      if (x < w - 1) v = Math.min(v, dist[i + 1] + D1);
      if (y < h - 1) {
        v = Math.min(v, dist[i + w] + D1);
        if (x < w - 1) v = Math.min(v, dist[i + w + 1] + D2);
        if (x > 0) v = Math.min(v, dist[i + w - 1] + D2);
      }
      dist[i] = v;
    }
  return dist;
}

/**
 * Key out the background color with a soft edge, un-mix edge pixels from it, then remove what is
 * left of its tint (spill) from a band a few pixels wide along every edge. This is the defringe step.
 */
function key(img, bg, tolerance, band) {
  const lo = tolerance;
  const hi = tolerance + 60;
  const { width: w, height: h } = img;
  const out = blank(w, h);
  const s = img.data, d = out.data;
  for (let i = 0; i < s.length; i += 4) {
    const dr = s[i] - bg[0], dg = s[i + 1] - bg[1], db = s[i + 2] - bg[2];
    const dist = Math.sqrt(dr * dr + dg * dg + db * db);
    let al = Math.min(1, Math.max(0, (dist - lo) / (hi - lo))) * (s[i + 3] / 255);
    if (al < 0.03) al = 0;
    if (al > 0) {
      // observed = al * art + (1 - al) * background, so art = (observed - (1 - al) * background) / al
      for (let c = 0; c < 3; c++) d[i + c] = Math.max(0, Math.min(255, Math.round((s[i + c] - (1 - al) * bg[c]) / al)));
    }
    d[i + 3] = Math.round(al * 255);
  }
  // The background's strong channels (green; red and blue for magenta). Near an edge, any excess of
  // those over the other channels is spill from the background, so it is taken out.
  const strong = [0, 1, 2].filter((c) => bg[c] > 128);
  const weak = [0, 1, 2].filter((c) => bg[c] <= 128);
  if (band > 0 && strong.length && weak.length) {
    const near = distanceTo(w, h, (i) => d[i * 4 + 3] < 250);
    for (let p = 0; p < w * h; p++) {
      const i = p * 4;
      if (d[i + 3] === 0 || near[p] > band) continue;
      const spill = Math.min(...strong.map((c) => d[i + c])) - Math.max(...weak.map((c) => d[i + c]));
      if (spill > 0) for (const c of strong) d[i + c] -= spill;
    }
  }
  return out;
}

/** Add a white outline of `r` px around the art (a die-cut sticker edge). */
function outline(img, r) {
  const { width: w, height: h } = img;
  const dist = distanceTo(w, h, (i) => img.data[i * 4 + 3] >= 128);
  const base = blank(w, h);
  for (let i = 0; i < w * h; i++) {
    const al = Math.min(1, Math.max(0, r + 0.5 - dist[i]));
    base.data.set([255, 255, 255, Math.round(al * 255)], i * 4);
  }
  return paste(base, img, 0, 0);
}

function cutout(it) {
  const spec = SPECS[it.type];
  const src = `raw/${it.id}.png`;
  if (!existsSync(src)) return console.log(`${it.id}: no ${src} yet (run gen.mjs first)`);
  const buf = readFileSync(src);
  if (!isPng(buf)) return console.log(`${it.id}: ${src} is not a PNG; convert it first`);
  const img = decodePng(buf);
  const [W, H] = spec.export;

  if (!spec.transparent) {
    // Center-crop to the export ratio, then resize.
    const ratio = W / H;
    let cw = img.width, ch = Math.round(img.width / ratio);
    if (ch > img.height) { ch = img.height; cw = Math.round(img.height * ratio); }
    const c = crop(img, { x: (img.width - cw) >> 1, y: (img.height - ch) >> 1, w: cw, h: ch });
    const out = resize(c, W, H);
    for (let i = 3; i < out.data.length; i += 4) out.data[i] = 255;
    writeFileSync(`out/${it.id}.png`, encodePng(out));
    return console.log(`${it.id}: out/${it.id}.png ${W}x${H}`);
  }

  const bg = borderColor(img);
  // Despill band scales with the raw image: about 4px on a 1024px generation.
  const band = Number(it.despill ?? Math.max(2, Math.round(Math.min(img.width, img.height) / 256)));
  const keyed = key(img, bg, Number(it.tolerance ?? 70), band);
  const box = alphaBox(keyed, 24);
  if (!box) return console.log(`${it.id}: nothing left after keying out rgb(${bg}); lower "tolerance"`);
  const art = crop(keyed, box);
  const isFrame = it.type === 'avatar-frame';
  const ol = Number(it.outline ?? 0);
  const pad = Number(it.pad ?? (isFrame ? 0 : 6)) + ol;

  let canvasW = W, canvasH = H;
  if (it.type === 'sticker') {
    // Freeform: long edge = 512, ratio capped at 2:1 by padding the short side.
    const long = Math.max(art.width, art.height), short = Math.min(art.width, art.height);
    const s = (spec.longEdge[1] - 2 * pad) / long;
    const shortPx = Math.max(Math.round(short * s) + 2 * pad, Math.ceil(spec.longEdge[1] / spec.maxRatio));
    [canvasW, canvasH] = art.width >= art.height ? [spec.longEdge[1], shortPx] : [shortPx, spec.longEdge[1]];
  }
  const fitW = canvasW - 2 * pad, fitH = canvasH - 2 * pad;
  let w, h;
  if (it.fill) [w, h] = [fitW, fitH];
  else {
    const s = Math.min(fitW / art.width, fitH / art.height);
    [w, h] = [Math.max(1, Math.round(art.width * s)), Math.max(1, Math.round(art.height * s))];
  }
  let out = paste(blank(canvasW, canvasH), resize(art, w, h), (canvasW - w) >> 1, (canvasH - h) >> 1);
  if (ol > 0) out = outline(out, ol);
  writeFileSync(`out/${it.id}.png`, encodePng(out));
  console.log(`${it.id}: out/${it.id}.png ${canvasW}x${canvasH} (keyed rgb(${bg.join(',')}))`);
}

for (const it of items) {
  try {
    cutout(it);
  } catch (e) {
    console.log(`${it.id}: ${e.message}`);
    process.exitCode = 1;
  }
}
