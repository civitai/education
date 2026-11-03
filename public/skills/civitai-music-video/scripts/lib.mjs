// Shared helpers for the civitai-music-video scripts. No dependencies beyond Node 18+ and ffprobe.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export const ORCHESTRATION = 'https://orchestration.civitai.com/v2/consumer/workflows';

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

export const probeSeconds = (file) =>
  Number(
    execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file])
      .toString()
      .trim(),
  );

/**
 * Parse a standard LRC file into [{ text, start, end }] in seconds.
 * Tags like [ti:...] and [ar:...] are skipped. A line may carry several time tags ([00:12.00][00:40.00]).
 * LRC gives only start times, so each line ends at the next line's start, but never later than
 * about 0.45 s per word (plus a little) so an instrumental gap after a line does not keep it on screen.
 */
export function parseLrc(text, songSeconds = Infinity) {
  const rows = [];
  for (const raw of text.split(/\r?\n/)) {
    const tags = [...raw.matchAll(/\[(\d+):(\d+(?:[.:]\d+)?)\]/g)];
    if (!tags.length) continue;
    const words = raw.replace(/\[[^\]]*\]/g, '').trim();
    if (!words) continue;
    for (const m of tags) rows.push({ text: words, start: Number(m[1]) * 60 + Number(m[2].replace(':', '.')) });
  }
  rows.sort((a, b) => a.start - b.start);
  return rows.map((r, i) => {
    const next = i + 1 < rows.length ? rows[i + 1].start : songSeconds;
    const nWords = r.text.split(/\s+/).length;
    const cap = r.start + Math.max(1.5, nWords * 0.45 + 0.6);
    const end = Math.min(next - 0.05, cap, songSeconds);
    return { text: r.text, start: round(r.start), end: round(Math.max(end, r.start + 0.5)) };
  });
}

export const round = (n) => Math.round(n * 100) / 100;

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
        'or put CIVITAI_API_KEY=... in a .env file in the project folder.',
    );
    process.exit(1);
  }
  return key;
}

const headers = (key) => ({ 'Content-Type': 'application/json', Authorization: `Bearer ${key}` });

async function call(url, init) {
  const res = await fetch(url, init);
  const body = await res.text();
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${body.slice(0, 600)}`);
  return body ? JSON.parse(body) : {};
}

/** Price a workflow without running it. Spends nothing. */
export const whatIf = (key, body) =>
  call(`${ORCHESTRATION}?whatif=true`, { method: 'POST', headers: headers(key), body: JSON.stringify(body) });

export const submit = (key, body) =>
  call(ORCHESTRATION, { method: 'POST', headers: headers(key), body: JSON.stringify(body) });

export const getWorkflow = (key, id) => call(`${ORCHESTRATION}/${id}`, { headers: headers(key) });

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

/**
 * Which Buzz pays. Blue Buzz first (the free Buzz from daily rewards), then Green. Override with
 * "pay": ["green"] in scenes.json. Civitai picks the first listed type the account has enough of.
 */
export const DEFAULT_PAY = ['blue', 'green'];

/** From a what-if: is the balance too low, and which Buzz type would be charged. */
export const payInfo = (wf) => ({
  insufficient: wf?.transactions?.insufficientBuzz === true,
  from: [...new Set((wf?.transactions?.list ?? []).map((t) => t.accountType).filter(Boolean))].join(' + ') || 'unknown',
});

/** Total Buzz on a workflow or what-if response. */
export const buzz = (wf) => Number(wf?.cost?.total ?? wf?.cost?.base ?? 0);

/** Download a URL to a file. Follows redirects. Returns the content type. */
export async function download(url, file) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`download failed ${res.status} for ${url}`);
  writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  return res.headers.get('content-type') ?? '';
}

/** Append a line to buzz-log.json so the total spend is always on disk. */
export function logBuzz(entry) {
  const p = 'buzz-log.json';
  const log = existsSync(p) ? readJson(p) : [];
  log.push({ at: new Date().toISOString(), ...entry });
  writeJson(p, log);
  const total = log.reduce((s, e) => s + (e.buzz ?? 0), 0);
  return total;
}

export const projectFile = (name) => join(process.cwd(), name);
