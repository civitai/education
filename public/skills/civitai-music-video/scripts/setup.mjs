// Scaffold a music video project: copy the Remotion template, install it, load the song and its .lrc,
// and write a starter scenes.json with one scene per lyric line.
//
//   node setup.mjs <project-dir> --zip <song.zip>
//   node setup.mjs <project-dir> --song <song.mp3> --lrc <song.lrc> [--title "My Title"]
//
// The project folder gets: video.json (settings), lyrics.json (timed lines), scenes.json (what to show when),
// public/song/song.mp3, and the Remotion source in src/.
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { execFileSync, execSync } from 'node:child_process';
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
for (const d of ['public/song', 'public/scenes', 'public/clips', 'out']) mkdirSync(join(target, d), { recursive: true });
cpSync(song, join(target, 'public/song/song.mp3'));

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
  scenes: planScenes(lines, duration),
});
// Keep the API key and build output out of git, in case the folder becomes a repo.
writeFileSync(join(target, '.gitignore'), ['.env', 'node_modules/', 'out/', ''].join('\n'));

console.log('installing Remotion (about a minute; an npm warning about esbuild install scripts is harmless)...');
execSync('npm install --no-audit --no-fund', { cwd: target, stdio: 'inherit' });
console.log(`
project ready: ${target}
  song: ${duration}s, ${lines.length} lyric lines
  next: write a prompt for every scene in scenes.json, then run gen.mjs from the project folder.`);

// One scene per lyric line. An intro before the first line and any instrumental gap longer
// than 4 seconds get their own scene. Scenes shorter than 1.5 seconds merge into the one before.
function planScenes(lines, duration) {
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
  return merged.map((c, i) => ({
    id: `s${String(i + 1).padStart(2, '0')}`,
    from: round(c.from),
    to: round(i + 1 < merged.length ? merged[i + 1].from : duration),
    line: c.line,
    prompt: '',
  }));
}

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
