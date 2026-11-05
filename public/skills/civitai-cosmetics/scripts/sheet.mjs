// Contact sheet of every finished still: each item on a dark tile and a light tile, so a leftover
// fringe or haze shows on one or the other. Stickers also get a 22px inline preview.
//
//   node sheet.mjs        writes sheet.png
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { readJson } from './lib.mjs';
import { blank, decodePng, encodePng, paste, resize } from './png.mjs';

const TILE = 200, ART = 160, GAP = 8;
const items = readJson('set.json').items.filter((it) => existsSync(`out/${it.id}.png`));
if (!items.length) {
  console.error('no out/<id>.png files yet (run cutout.mjs first).');
  process.exit(1);
}
const fill = (img, x, y, w, h, [r, g, b]) => {
  for (let yy = y; yy < y + h; yy++)
    for (let xx = x; xx < x + w; xx++) img.data.set([r, g, b, 255], (yy * img.width + xx) * 4);
};
const cols = 3; // dark, light, inline
const sheet = blank(cols * TILE + (cols + 1) * GAP, items.length * (TILE + GAP) + GAP);
fill(sheet, 0, 0, sheet.width, sheet.height, [128, 128, 128]);
items.forEach((it, row) => {
  const img = decodePng(readFileSync(`out/${it.id}.png`));
  const s = Math.min(ART / img.width, ART / img.height);
  const big = resize(img, Math.max(1, Math.round(img.width * s)), Math.max(1, Math.round(img.height * s)));
  const y = GAP + row * (TILE + GAP);
  [[26, 27, 30], [255, 255, 255]].forEach((bg, c) => {
    const x = GAP + c * (TILE + GAP);
    fill(sheet, x, y, TILE, TILE, bg);
    paste(sheet, big, x + ((TILE - big.width) >> 1), y + ((TILE - big.height) >> 1));
  });
  const x = GAP + 2 * (TILE + GAP);
  fill(sheet, x, y, TILE, TILE, [49, 51, 56]);
  const h = it.type === 'sticker' ? 22 : 48;
  const k = h / img.height;
  const small = resize(img, Math.max(1, Math.round(img.width * k)), h);
  paste(sheet, small, x + ((TILE - small.width) >> 1), y + ((TILE - small.height) >> 1));
});
writeFileSync('sheet.png', encodePng(sheet));
console.log(`sheet.png: ${items.length} item(s), dark | light | small (${items.map((i) => i.id).join(', ')})`);
