// Start a cosmetic set: make the folder, drop in an example set.json, and check the tools.
//
//   node <skill>/scripts/setup.mjs my-set
import { execFileSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const dir = resolve(process.argv[2] ?? 'cosmetic-set');
mkdirSync(join(dir, 'raw'), { recursive: true });
mkdirSync(join(dir, 'out'), { recursive: true });
if (!existsSync(join(dir, 'set.json'))) copyFileSync(join(here, '..', 'template', 'set.json'), join(dir, 'set.json'));
if (!existsSync(join(dir, '.gitignore'))) writeFileSync(join(dir, '.gitignore'), '.env\n');

const ok = (b) => (b ? 'ok     ' : 'MISSING');
const major = Number(process.versions.node.split('.')[0]);
let ffmpeg = false;
try {
  execFileSync('ffmpeg', ['-hide_banner', '-encoders'], { stdio: 'pipe' }).toString().includes('libwebp_anim') && (ffmpeg = true);
} catch {}
const key = !!process.env.CIVITAI_API_KEY || existsSync(join(dir, '.env'));

console.log(`set folder: ${dir}`);
console.log(`${ok(major >= 18)}  Node.js 18+ (you have ${process.versions.node})`);
console.log(`${ok(key)}  CIVITAI_API_KEY (environment, or a .env file in the set folder)`);
console.log(`${ffmpeg ? 'ok     ' : 'optional'}  ffmpeg with libwebp, only needed for animate.mjs (animated WebP)`);
console.log(`\nNext: edit ${join(dir, 'set.json')}, then from that folder run`);
console.log(`  node ${join(here, 'gen.mjs')}          (price only)`);
if (major < 18 || !key) process.exitCode = 1;
