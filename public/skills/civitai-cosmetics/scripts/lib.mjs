// Shared helpers for the civitai-cosmetics scripts. Node 18+ built-ins only.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

export const ORCHESTRATION = 'https://orchestration.civitai.com/v2/consumer/workflows';

/**
 * The Civitai Creator Shop's artwork rules, per cosmetic type, as the submit form checks them.
 * min: smallest allowed size (and the ratio the upload must keep, within 2%).
 * export: the size these scripts write, comfortably above the minimum so it stays sharp on 2x screens.
 * gen: the size asked of the image model before cut-out.
 */
export const SPECS = {
  badge: {
    label: 'Badge', min: [144, 144], export: [256, 256], gen: [1024, 1024],
    transparent: true, animated: true,
    brief: 'a hexagon badge: the hexagon is the base, elements may break out of it',
  },
  'avatar-decoration': {
    label: 'Avatar decoration', min: [120, 120], export: [256, 256], gen: [1024, 1024],
    transparent: true, animated: true,
    brief: 'a frame drawn around a round avatar: keep at least half of the avatar visible, the center stays empty',
  },
  'content-frame': {
    label: 'Content frame', min: [256, 256], export: [512, 512], gen: [1024, 1024],
    transparent: true, animated: false,
    brief: 'a square frame drawn over a post or image card: the center stays empty',
  },
  'profile-background': {
    label: 'Profile background', min: [450, 144], export: [1350, 432], gen: [1600, 512],
    transparent: false, animated: true,
    brief: 'a wide 25:8 banner behind the creator card: light on text, nothing that competes with the stats on top',
  },
  sticker: {
    label: 'Sticker', longEdge: [320, 512], maxRatio: 2, export: [512, 512], gen: [1024, 1024],
    transparent: true, animated: true,
    brief: 'a die-cut sticker that reads at 22px inline and 160px on its own',
  },
};
export const TYPES = Object.keys(SPECS);
export const MAX_BYTES = 50 * 1024 ** 2; // 50 MB
export const MAX_FRAMES = 150;
export const MAX_FPS = 30;
export const MIN_FRAME_DELAY_MS = Math.floor(1000 / MAX_FPS); // 33 ms
export const RATIO_TOLERANCE = 0.02;

/** --flag value / --flag (true) / positional args. */
export const args = () => {
  const out = { _: [] };
  const a = process.argv.slice(2);
  for (let i = 0; i < a.length; i++) {
    if (a[i].startsWith('--')) {
      const k = a[i].slice(2);
      const v = a[i + 1] !== undefined && !a[i + 1].startsWith('--') ? a[++i] : true;
      out[k] = v;
    } else out._.push(a[i]);
  }
  return out;
};

export const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));
export const writeJson = (p, v) => writeFileSync(p, JSON.stringify(v, null, 2) + '\n');

/** CIVITAI_API_KEY from the environment, or from a .env file in the current folder. */
export function apiKey() {
  if (!process.env.CIVITAI_API_KEY && existsSync('.env')) {
    for (const line of readFileSync('.env', 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*CIVITAI_API_KEY\s*=\s*"?([^"\s]+)"?/);
      if (m) process.env.CIVITAI_API_KEY = m[1];
    }
  }
  const key = process.env.CIVITAI_API_KEY;
  if (!key) {
    console.error(
      'CIVITAI_API_KEY is not set. Create a key at https://civitai.com/user/account (API Keys), then either\n' +
        '  export CIVITAI_API_KEY=...   (PowerShell: $env:CIVITAI_API_KEY="...")\n' +
        'or put CIVITAI_API_KEY=... in a .env file in this folder.',
    );
    process.exit(1);
  }
  return key;
}

/** True only for civitai.com and its subdomains over https. The key is never sent anywhere else. */
export const isCivitaiHost = (url) => {
  const u = new URL(url);
  return u.protocol === 'https:' && (u.hostname === 'civitai.com' || u.hostname.endsWith('.civitai.com'));
};

async function call(key, url, init = {}) {
  if (!isCivitaiHost(url)) throw new Error(`refusing to send the API key to ${new URL(url).host}`);
  const res = await fetch(url, {
    ...init,
    redirect: 'manual', // a redirect could carry the key to another host
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
  });
  const body = await res.text();
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${body.slice(0, 600)}`);
  return body ? JSON.parse(body) : {};
}

/** Price a workflow without running it. Spends nothing. */
export const whatIf = (key, body) => call(key, `${ORCHESTRATION}?whatif=true`, { method: 'POST', body: JSON.stringify(body) });
export const submit = (key, body) => call(key, ORCHESTRATION, { method: 'POST', body: JSON.stringify(body) });
export const getWorkflow = (key, id) => call(key, `${ORCHESTRATION}/${encodeURIComponent(id)}`);

/** Poll until the workflow finishes. Returns the final workflow. */
export async function waitFor(key, id, { timeoutMs = 15 * 60 * 1000, everyMs = 4000 } = {}) {
  const t0 = Date.now();
  for (;;) {
    const wf = await getWorkflow(key, id);
    if (['succeeded', 'failed', 'expired', 'canceled'].includes(wf.status)) return wf;
    if (Date.now() - t0 > timeoutMs) throw new Error(`timed out waiting for workflow ${id} (status ${wf.status})`);
    await new Promise((r) => setTimeout(r, everyMs));
  }
}

/** Blue Buzz first (the free Buzz from daily rewards), then Green. Override with "pay" in set.json. */
export const DEFAULT_PAY = ['blue', 'green'];

export const payInfo = (wf) => ({
  insufficient: wf?.transactions?.insufficientBuzz === true,
  from: [...new Set((wf?.transactions?.list ?? []).map((t) => t.accountType).filter(Boolean))].join(' + ') || 'unknown',
});

/** Total Buzz on a workflow or what-if response. */
export const buzz = (wf) => Number(wf?.cost?.total ?? wf?.cost?.base ?? 0);

/** Download a generated image. No key is sent: output URLs are signed links. */
export async function download(url, file) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`download failed ${res.status} for ${url}`);
  writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  return res.headers.get('content-type') ?? '';
}

/** Append a line to buzz-log.json so the total spend is always on disk. Returns the running total. */
export function logBuzz(entry) {
  const p = 'buzz-log.json';
  const log = existsSync(p) ? readJson(p) : [];
  log.push({ at: new Date().toISOString(), ...entry });
  writeJson(p, log);
  return log.reduce((s, e) => s + (e.buzz ?? 0), 0);
}

/**
 * WebP header facts from the RIFF container: size, alpha flag, and for an animation the frame
 * count and shortest frame delay. Mirrors what the submit form reads.
 */
export function webpInfo(buf) {
  const fourcc = (o) => buf.toString('latin1', o, o + 4);
  if (buf.length < 16 || fourcc(0) !== 'RIFF' || fourcc(8) !== 'WEBP') throw new Error('not a WebP file');
  let width = 0, height = 0, alpha = false, frames = 0, minDelayMs = Infinity;
  for (let o = 12; o + 8 <= buf.length; ) {
    const id = fourcc(o);
    const size = buf.readUInt32LE(o + 4);
    const p = o + 8;
    if (id === 'VP8X') {
      alpha = (buf[p] & 0x10) !== 0;
      width = 1 + buf.readUIntLE(p + 4, 3);
      height = 1 + buf.readUIntLE(p + 7, 3);
    } else if (id === 'VP8 ' && !width) {
      width = buf.readUInt16LE(p + 6) & 0x3fff;
      height = buf.readUInt16LE(p + 8) & 0x3fff;
    } else if (id === 'VP8L' && !width) {
      const bits = buf.readUInt32LE(p + 1);
      width = (bits & 0x3fff) + 1;
      height = ((bits >> 14) & 0x3fff) + 1;
      alpha = ((bits >> 28) & 1) === 1;
    } else if (id === 'ANMF') {
      frames++;
      minDelayMs = Math.min(minDelayMs, buf.readUIntLE(p + 12, 3));
    }
    o = p + size + (size % 2);
  }
  return { width, height, alpha, frames: Math.max(1, frames), minDelayMs: frames > 1 ? minDelayMs : null };
}
