// Zip every agent skill under public/skills/<name>/ into public/skills/<name>.zip, so a reader (or their
// agent) can download a skill in one file. The zip holds one top folder, <name>/, and is byte-for-byte
// reproducible: sorted entries and a fixed timestamp, so an unchanged skill gives an unchanged zip.
//
//   node scripts/zip-skills.mjs           # write the zips
//   node scripts/zip-skills.mjs --check   # exit 1 if any zip is out of date with its folder
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { crc32, deflateRawSync } from 'node:zlib';

const root = join(import.meta.dirname, '..', 'public', 'skills');
const check = process.argv.includes('--check');
let stale = 0;

for (const name of readdirSync(root).sort()) {
  const dir = join(root, name);
  if (!statSync(dir).isDirectory()) continue;
  const files = walk(dir).sort();
  const zip = makeZip(files.map((f) => ({ name: `${name}/${relative(dir, f).split(sep).join('/')}`, data: readFileSync(f) })));
  const out = join(root, `${name}.zip`);
  if (check) {
    if (!existsSync(out) || !readFileSync(out).equals(zip)) {
      console.error(`${relative(process.cwd(), out)} is out of date: run node scripts/zip-skills.mjs`);
      stale++;
    }
  } else {
    writeFileSync(out, zip);
    console.log(`${relative(process.cwd(), out)}: ${files.length} files, ${zip.length} bytes`);
  }
}
if (stale) process.exit(1);

function walk(d) {
  return readdirSync(d).flatMap((n) => {
    const p = join(d, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

// Minimal zip writer: deflated entries, DOS time fixed at 1980-01-01 00:00.
function makeZip(entries) {
  const TIME = 0;
  const DATE = (0 << 9) | (1 << 5) | 1;
  const locals = [];
  const centrals = [];
  let offset = 0;
  for (const e of entries) {
    const name = Buffer.from(e.name, 'utf8');
    const body = deflateRawSync(e.data, { level: 9 });
    const crc = crc32(e.data);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4); // version needed
    local.writeUInt16LE(0x0800, 6); // UTF-8 names
    local.writeUInt16LE(8, 8); // deflate
    local.writeUInt16LE(TIME, 10);
    local.writeUInt16LE(DATE, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(body.length, 18);
    local.writeUInt32LE(e.data.length, 22);
    local.writeUInt16LE(name.length, 26);
    local.writeUInt16LE(0, 28);
    locals.push(local, name, body);
    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(0x0314, 4); // made by: unix, 2.0
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(8, 10);
    central.writeUInt16LE(TIME, 12);
    central.writeUInt16LE(DATE, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(body.length, 20);
    central.writeUInt32LE(e.data.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt32LE((0o100644 << 16) >>> 0, 38); // -rw-r--r--
    central.writeUInt32LE(offset, 42);
    centrals.push(central, name);
    offset += local.length + name.length + body.length;
  }
  const cd = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(cd.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, cd, end]);
}
