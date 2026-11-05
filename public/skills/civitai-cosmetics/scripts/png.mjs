// Minimal PNG reader and writer: 8-bit, non-interlaced, any color type. Node built-ins only.
// Everything works on { width, height, data } with data an RGBA Uint8Array (4 bytes per pixel).
import { deflateSync, inflateSync } from 'node:zlib';

const SIG = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
const crc32 = (buf) => {
  let c = 0xffffffff;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};

export const isPng = (buf) => buf.length > 8 && buf.subarray(0, 8).equals(SIG);

/** Header only: width, height, colorType, bitDepth, interlace. Cheap. */
export function pngInfo(buf) {
  if (!isPng(buf)) throw new Error('not a PNG file');
  return {
    width: buf.readUInt32BE(16),
    height: buf.readUInt32BE(20),
    bitDepth: buf[24],
    colorType: buf[25],
    interlace: buf[28],
    animated: buf.includes(Buffer.from('acTL')),
  };
}

/** Decode a PNG to RGBA. */
export function decodePng(buf) {
  const info = pngInfo(buf);
  const { width, height, bitDepth, colorType, interlace } = info;
  if (bitDepth !== 8) throw new Error(`only 8-bit PNGs are supported (this one is ${bitDepth}-bit); re-save it as 8-bit`);
  if (interlace) throw new Error('interlaced PNGs are not supported; re-save it without interlacing');
  let palette = null;
  let trns = null;
  const idat = [];
  for (let o = 8; o < buf.length; ) {
    const len = buf.readUInt32BE(o);
    const type = buf.toString('latin1', o + 4, o + 8);
    const body = buf.subarray(o + 8, o + 8 + len);
    if (type === 'PLTE') palette = body;
    else if (type === 'tRNS') trns = body;
    else if (type === 'IDAT') idat.push(body);
    else if (type === 'IEND') break;
    o += 12 + len;
  }
  const channels = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[colorType];
  if (!channels) throw new Error(`unknown PNG color type ${colorType}`);
  const raw = inflateSync(Buffer.concat(idat));
  const stride = width * channels;
  const px = Buffer.alloc(stride * height);
  let prev = Buffer.alloc(stride);
  for (let y = 0; y < height; y++) {
    const f = raw[y * (stride + 1)];
    const line = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
    const out = px.subarray(y * stride, (y + 1) * stride);
    for (let x = 0; x < stride; x++) {
      const a = x >= channels ? out[x - channels] : 0;
      const b = prev[x];
      const c = x >= channels ? prev[x - channels] : 0;
      let v = line[x];
      if (f === 1) v += a;
      else if (f === 2) v += b;
      else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
      }
      out[x] = v & 0xff;
    }
    prev = out;
  }
  const data = new Uint8Array(width * height * 4);
  for (let i = 0, j = 0; i < width * height; i++, j += channels) {
    let r, g, b, al = 255;
    if (colorType === 0) {
      r = g = b = px[j];
      if (trns && trns.length >= 2 && px[j] === trns[1]) al = 0;
    } else if (colorType === 2) {
      r = px[j]; g = px[j + 1]; b = px[j + 2];
      if (trns && trns.length >= 6 && r === trns[1] && g === trns[3] && b === trns[5]) al = 0;
    } else if (colorType === 3) {
      const k = px[j];
      r = palette[k * 3]; g = palette[k * 3 + 1]; b = palette[k * 3 + 2];
      if (trns && k < trns.length) al = trns[k];
    } else if (colorType === 4) {
      r = g = b = px[j]; al = px[j + 1];
    } else {
      r = px[j]; g = px[j + 1]; b = px[j + 2]; al = px[j + 3];
    }
    data[i * 4] = r; data[i * 4 + 1] = g; data[i * 4 + 2] = b; data[i * 4 + 3] = al;
  }
  return { width, height, data };
}

const chunk = (type, body) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(body.length);
  const tb = Buffer.concat([Buffer.from(type, 'latin1'), body]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(tb));
  return Buffer.concat([len, tb, crc]);
};

/** Encode RGBA to an 8-bit RGBA PNG (color type 6), so the file always carries an alpha channel. */
export function encodePng({ width, height, data }) {
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    // Filter 1 (Sub) on every row: a cheap win over no filter for flat cut-out art.
    raw[y * (stride + 1)] = 1;
    for (let x = 0; x < stride; x++) {
      const v = data[y * stride + x];
      const left = x >= 4 ? data[y * stride + x - 4] : 0;
      raw[y * (stride + 1) + 1 + x] = (v - left) & 0xff;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  return Buffer.concat([
    SIG,
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/** A blank RGBA image. */
export const blank = (width, height) => ({ width, height, data: new Uint8Array(width * height * 4) });

/**
 * Resize RGBA with premultiplied alpha, so transparent pixels never bleed their color into edges.
 * Box-averages when shrinking (sharp, no aliasing) and interpolates bilinearly when growing.
 */
export function resize(img, w, h) {
  const { width: W, height: H, data: s } = img;
  const out = blank(w, h);
  const d = out.data;
  const sx = W / w;
  const sy = H / h;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let r = 0, g = 0, b = 0, a = 0, n = 0;
      if (sx > 1 || sy > 1) {
        const x0 = x * sx, x1 = Math.min(W, (x + 1) * sx);
        const y0 = y * sy, y1 = Math.min(H, (y + 1) * sy);
        for (let yy = Math.floor(y0); yy < Math.ceil(y1); yy++) {
          const wy = Math.min(yy + 1, y1) - Math.max(yy, y0);
          for (let xx = Math.floor(x0); xx < Math.ceil(x1); xx++) {
            const wx = Math.min(xx + 1, x1) - Math.max(xx, x0);
            const wgt = wx * wy;
            const i = (yy * W + xx) * 4;
            const al = s[i + 3] / 255;
            r += s[i] * al * wgt; g += s[i + 1] * al * wgt; b += s[i + 2] * al * wgt; a += al * wgt; n += wgt;
          }
        }
      } else {
        const fx = Math.max(0, Math.min(W - 1, (x + 0.5) * sx - 0.5));
        const fy = Math.max(0, Math.min(H - 1, (y + 0.5) * sy - 0.5));
        const xa = Math.floor(fx), ya = Math.floor(fy);
        const xb = Math.min(W - 1, xa + 1), yb = Math.min(H - 1, ya + 1);
        const tx = fx - xa, ty = fy - ya;
        for (const [xx, yy, wgt] of [[xa, ya, (1 - tx) * (1 - ty)], [xb, ya, tx * (1 - ty)], [xa, yb, (1 - tx) * ty], [xb, yb, tx * ty]]) {
          const i = (yy * W + xx) * 4;
          const al = s[i + 3] / 255;
          r += s[i] * al * wgt; g += s[i + 1] * al * wgt; b += s[i + 2] * al * wgt; a += al * wgt; n += wgt;
        }
      }
      const o = (y * w + x) * 4;
      if (a > 0) {
        d[o] = Math.round(r / a); d[o + 1] = Math.round(g / a); d[o + 2] = Math.round(b / a);
      }
      d[o + 3] = Math.round((a / n) * 255);
    }
  }
  return out;
}

/** Copy src onto dst at (dx, dy), alpha-blended ("over"). */
export function paste(dst, src, dx, dy) {
  for (let y = 0; y < src.height; y++) {
    const ty = y + dy;
    if (ty < 0 || ty >= dst.height) continue;
    for (let x = 0; x < src.width; x++) {
      const tx = x + dx;
      if (tx < 0 || tx >= dst.width) continue;
      const i = (y * src.width + x) * 4;
      const o = (ty * dst.width + tx) * 4;
      const sa = src.data[i + 3] / 255;
      if (sa === 0) continue;
      const da = dst.data[o + 3] / 255;
      const oa = sa + da * (1 - sa);
      for (let c = 0; c < 3; c++)
        dst.data[o + c] = Math.round((src.data[i + c] * sa + dst.data[o + c] * da * (1 - sa)) / oa);
      dst.data[o + 3] = Math.round(oa * 255);
    }
  }
  return dst;
}

/** Bounding box of pixels with alpha above `min`, or null if the image is empty. */
export function alphaBox(img, min = 8) {
  let x0 = img.width, y0 = img.height, x1 = -1, y1 = -1;
  for (let y = 0; y < img.height; y++)
    for (let x = 0; x < img.width; x++)
      if (img.data[(y * img.width + x) * 4 + 3] > min) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
  return x1 < 0 ? null : { x: x0, y: y0, w: x1 - x0 + 1, h: y1 - y0 + 1 };
}

/** Crop to a box. */
export function crop(img, { x, y, w, h }) {
  const out = blank(w, h);
  for (let yy = 0; yy < h; yy++)
    out.data.set(img.data.subarray(((y + yy) * img.width + x) * 4, ((y + yy) * img.width + x + w) * 4), yy * w * 4);
  return out;
}
