// Scaffold a music video project: copy the Remotion template, install it, load the song and its .lrc,
// and write a starter scenes.json with one scene per lyric line.
//
//   node setup.mjs <project-dir> --zip <song.zip>
//   node setup.mjs <project-dir> --song <song.mp3> --lrc <song.lrc> [--shots <folder of screenshots>] [--title "My Title"]
//
// The project folder gets: video.json (settings), lyrics.json (timed lines), scenes.json (what to show when),
// public/song/song.mp3, and the Remotion source in src/.
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { execFileSync, execSync, spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { args, parseLrc, probeSeconds, round, writeJson } from './lib.mjs';

const a = args();
const NEGATIVE = 'text, letters, words, logo, watermark, signature, nsfw, nudity, revealing clothing, lingerie, swimsuit';
const dest = a._[0];
if (!dest || (!a.zip && !(a.song && a.lrc))) {
  console.error('usage: node setup.mjs <project-dir> --zip <song.zip>\n   or: node setup.mjs <project-dir> --song <song.mp3> --lrc <song.lrc> [--title "..."]');
  process.exit(1);
}
for (const tool of ['ffmpeg', 'ffprobe']) {
  try {
    execFileSync(tool, ['-version'], { stdio: 'ignore' });
  } catch {
    console.error(`${tool} was not found on PATH. Install ffmpeg first (https://ffmpeg.org/download.html).`);
    process.exit(1);
  }
}

let song = a.song;
let lrc = a.lrc;
if (a.zip) {
  const dir = mkdtempSync(join(tmpdir(), 'mv-song-'));
  const zip = resolve(a.zip);
  // Try each unzip tool this machine might have until one works.
  const tries = [
    ['unzip', ['-q', '-o', zip, '-d', dir]],
    ['tar', ['-xf', zip, '-C', dir]], // bsdtar on macOS and Windows 10+ reads zips; GNU tar does not
    ['powershell', ['-NoProfile', '-Command', `Expand-Archive -LiteralPath '${zip}' -DestinationPath '${dir}' -Force`]],
  ];
  for (const [cmd, argv] of tries) {
    try {
      execFileSync(cmd, argv, { stdio: 'ignore' });
    } catch {}
    if (walk(dir).length) break;
  }
  const files = walk(dir);
  song = files.find((f) => /\.(mp3|wav|m4a)$/i.test(f));
  lrc = files.find((f) => /\.lrc$/i.test(f));
  // Feature screenshots ship in a screenshots/ folder inside the zip (optional).
  const shot = files.find((f) => /[\\/]screenshots[\\/][^\\/]+\.(png|jpe?g|webp)$/i.test(f));
  if (shot && !a.shots) a.shots = dirname(shot);
  if (!song || !lrc) {
    console.error(`the zip needs an audio file and a .lrc file; found: ${files.map((f) => f.slice(dir.length + 1)).join(', ')}`);
    process.exit(1);
  }
}

const target = resolve(dest);
if (existsSync(join(target, 'package.json'))) {
  console.error(`${target} already has a package.json; refusing to overwrite it`);
  process.exit(1);
}
const template = join(dirname(fileURLToPath(import.meta.url)), '..', 'template');
cpSync(template, target, { recursive: true });
for (const d of ['public/song', 'public/scenes', 'public/clips', 'public/shots', 'out']) mkdirSync(join(target, d), { recursive: true });
cpSync(song, join(target, 'public/song/song.mp3'));

// Feature screenshots: sorted by their number prefix, captioned from their file names
// ("02-place-your-cap.png" -> "place your cap"). A README.txt next to them is kept as crucible-notes.txt.
const shots = [];
if (a.shots && existsSync(a.shots)) {
  const names = readdirSync(a.shots).filter((n) => /\.(png|jpe?g|webp)$/i.test(n));
  names.sort((x, y) => (parseInt(x, 10) || 0) - (parseInt(y, 10) || 0) || x.localeCompare(y));
  for (const n of names) {
    const safe = n.replace(/[^\w.-]+/g, '-');
    cpSync(join(a.shots, n), join(target, 'public/shots', safe));
    const file = `shots/${safe}`;
    const caption = n.replace(/\.[^.]+$/, '').replace(/^\d+[-_ ]*/, '').replace(/[-_]+/g, ' ').trim();
    shots.push({ file, caption, focus: detectFocus(join(target, 'public', file)) });
  }
  const readme = readdirSync(a.shots).find((n) => /^readme(\.txt|\.md)?$/i.test(n));
  if (readme) cpSync(join(a.shots, readme), join(target, 'crucible-notes.txt'));
}

const duration = round(probeSeconds(join(target, 'public/song/song.mp3')));
const lrcText = readFileSync(lrc, 'utf8');
const lines = parseLrc(lrcText, duration);
if (!lines.length) {
  console.error(`no timed lines found in ${lrc}. Expected lines like "[00:12.34]Some lyric".`);
  process.exit(1);
}
// The [ti:] tag may carry a take name, e.g. "Hat Turf (a-stomp)"; keep the part before the brackets.
const title = a.title ?? lrcText.match(/\[ti:([^\]]+)\]/)?.[1]?.replace(/\s*\(.*\)\s*$/, '').trim() ?? 'My Music Video';

writeJson(join(target, 'lyrics.json'), lines);
writeJson(join(target, 'video.json'), {
  title,
  subtitle: '',
  song: 'song/song.mp3',
  duration,
  palette: ['#4dabf7', '#f06595', '#b197fc', '#38d9a9', '#ffd43b'],
  bpm: null,
  beatOffset: 0,
  titleSeconds: 3.5,
  outro: null,
});
writeJson(join(target, 'scenes.json'), {
  style: '',
  negativePrompt: NEGATIVE,
  model: null,
  width: 1344,
  height: 768,
  scenes: planScenes(lines, duration, shots),
});
writeJson(join(target, 'shots.json'), shots);
// Keep the API key and build output out of git, in case the folder becomes a repo.
writeFileSync(join(target, '.gitignore'), ['.env', 'node_modules/', 'out/', ''].join('\n'));

console.log('installing Remotion (about a minute; an npm warning about esbuild install scripts is harmless)...');
execSync('npm install --no-audit --no-fund', { cwd: target, stdio: 'inherit' });
console.log(`
project ready: ${target}
  song: ${duration}s, ${lines.length} lyric lines
  ${
    shots.length
      ? `feature screenshots: ${shots.length} (${shots.map((s) => s.caption).join(', ')}), placed on every other sung line as a first draft`
      : 'feature screenshots: none found (no screenshots/ folder), so every scene is a generated picture'
  }
  next: ${shots.length ? 'match screenshots to lines, ' : ''}write a prompt for every picture scene in scenes.json, then run gen.mjs.`);

// One scene per lyric line. An intro before the first line and any instrumental gap longer
// than 4 seconds get their own scene. Scenes shorter than 1.5 seconds merge into the one before.
// With feature screenshots, every other sung line (starting with the second) shows the next screenshot,
// so the video cuts between the feature and the generated pictures. Up to 3 picture scenes on lines
// that repeat (the chorus) are marked to be animated ("animate": "" until a motion prompt is written).
function planScenes(lines, duration, shots = []) {
  const cuts = [];
  if (lines[0].start > 1) cuts.push({ from: 0, line: '(intro, no singing)' });
  lines.forEach((l, i) => {
    cuts.push({ from: i === 0 && lines[0].start <= 1 ? 0 : l.start, line: l.text });
    const next = i + 1 < lines.length ? lines[i + 1].start : duration;
    if (next - l.end > 4) cuts.push({ from: l.end + 0.5, line: '(instrumental, no singing)' });
  });
  const merged = [];
  for (const c of cuts) {
    const prev = merged[merged.length - 1];
    if (prev && c.from - prev.from < 1.5) prev.line += ` / ${c.line}`;
    else merged.push({ ...c });
  }
  const scenes = merged.map((c, i) => ({
    id: `s${String(i + 1).padStart(2, '0')}`,
    from: round(c.from),
    to: round(i + 1 < merged.length ? merged[i + 1].from : duration),
    line: c.line,
    prompt: '',
  }));
  const sung = scenes.filter((s) => !s.line.startsWith('('));
  let next = 0;
  sung.forEach((s, i) => {
    if (i % 2 === 1 && next < shots.length) {
      const shot = shots[next++];
      delete s.prompt;
      Object.assign(s, { kind: 'shot', file: shot.file, caption: shot.caption, focus: shot.focus, highlight: true });
    }
  });
  // Mark up to 3 picture scenes to animate: chorus lines (lines that are sung more than once) first.
  const count = (txt) => lines.filter((l) => l.text === txt).length;
  const pics = scenes.filter((s) => s.kind !== 'shot' && !s.line.startsWith('('));
  const pick = [...pics.filter((s) => count(s.line) > 1), ...pics.filter((s) => count(s.line) <= 1)];
  const chosen = [];
  for (const s of pick) {
    if (chosen.length >= 3) break;
    if (chosen.every((c) => Math.abs(c.from - s.from) > 8)) chosen.push(s); // spread them out
  }
  for (const s of chosen) s.animate = '';
  return scenes;
}

// A first guess at where a screenshot's content is: ffmpeg's cropdetect finds the box that holds
// everything brighter than a dark background. Mockups on a dark canvas get a focus on the content and a
// zoom that fits it; busy or light screenshots fall back to the center at a gentle zoom.
function detectFocus(file) {
  const fallback = { x: 0.5, y: 0.5, zoom: 1.25 };
  try {
    const r = spawnSync('ffmpeg', ['-hide_banner', '-loop', '1', '-t', '0.2', '-i', file, '-vf', 'cropdetect=limit=0.2:round=2:reset=0', '-f', 'null', '-'], { encoding: 'utf8' });
    const m = [...`${r.stderr}`.matchAll(/crop=(\d+):(\d+):(\d+):(\d+)/g)].pop();
    const [W, H] = `${execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', file])}`.trim().split(',').map(Number);
    if (!m || !W || !H) return fallback;
    const [w, h, x, y] = m.slice(1).map(Number);
    if (w / W > 0.9 && h / H > 0.9) return fallback;
    const zoom = Math.min(2, Math.max(1.1, 0.85 * Math.min(W / w, H / h)));
    return { x: round((x + w / 2) / W), y: round((y + h / 2) / H), zoom: round(zoom) };
  } catch {
    return fallback;
  }
}

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
