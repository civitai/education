#!/usr/bin/env node
// Check that every public WordPress URL still answers on a build of this site.
//
//   node scripts/check-urls.mjs                                   # against `pnpm preview` (localhost:4321)
//   node scripts/check-urls.mjs --base https://education-new.civitai.com
//   node scripts/check-urls.mjs --extra /some/path/ --extra /other/
//   node scripts/check-urls.mjs --live --save                     # re-freeze the list (WordPress must be up)
//
// The URL list is src/data/wp-urls.json, frozen from the LIVE WordPress site before cutover: every
// <loc> in its Yoast sitemaps, plus every post, page, category, tag and author link in the REST API,
// plus the feeds, paginated archives and legacy endpoints WordPress serves for them. `--live` collects
// it from WordPress again (read-only, public endpoints) instead; `--live --save` also rewrites the
// file. Each path is requested from --base. A URL passes if it answers 200, or redirects (up to 5
// hops) to something that does.
//
// `astro preview` does not apply public/_redirects (Cloudflare Pages does). Against a localhost base
// the script therefore resolves a 404 through the rules in dist/_redirects and checks the target
// instead, and reports those separately as "redirect (_redirects rule)". Pass --no-redirect-rules to
// turn that off, or --redirects <file> to use another rules file.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WP = 'https://education.civitai.com';
const LIST = path.join(ROOT, 'src/data/wp-urls.json');
const PER_PAGE = 10; // WordPress "Blog pages show at most"
const POSTS_PAGE = '/civitai/'; // WordPress "posts page"

// ---------------------------------------------------------------------------------------------
// Arguments

function parseArgs(argv) {
  const opts = { base: 'http://localhost:4321', extra: [], concurrency: 4, redirectRules: undefined, verbose: false, live: false, save: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--base') opts.base = argv[++i];
    else if (a === '--live') opts.live = true;
    else if (a === '--save') opts.save = true;
    else if (a === '--extra') opts.extra.push(argv[++i]);
    else if (a === '--concurrency') opts.concurrency = Number(argv[++i]);
    else if (a === '--redirects') opts.redirectRules = argv[++i];
    else if (a === '--no-redirect-rules') opts.redirectRules = false;
    else if (a === '--verbose' || a === '-v') opts.verbose = true;
    else if (a === '--') continue;
    else throw new Error(`Unknown argument: ${a}`);
  }
  if (opts.save && !opts.live) throw new Error('--save rewrites the frozen list from WordPress; pass --live with it.');
  opts.base = opts.base.replace(/\/$/, '');
  if (opts.redirectRules === undefined && /^https?:\/\/(localhost|127\.0\.0\.1)(:|\/|$)/.test(opts.base)) {
    opts.redirectRules = path.join(ROOT, 'dist/_redirects');
  }
  return opts;
}

// ---------------------------------------------------------------------------------------------
// Collect URLs from live WordPress

const UA = { 'User-Agent': 'civitai-education-url-check/1.0' };

async function getText(url) {
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return res.text();
}

async function restAll(type) {
  const out = [];
  for (let page = 1, total = 1; page <= total; page++) {
    const url = `${WP}/wp-json/wp/v2/${type}?per_page=100&page=${page}`;
    const res = await fetch(url, { headers: UA });
    if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
    total = Number(res.headers.get('x-wp-totalpages') || 1);
    out.push(...(await res.json()));
  }
  return out;
}

const locs = (xml) => [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1].replace(/&amp;/g, '&'));

/** Path (+ query) of a WordPress URL, or undefined for other hosts. */
function toPath(u) {
  const url = new URL(u, WP);
  if (url.hostname !== 'education.civitai.com') return undefined;
  return url.pathname + url.search;
}

const pagesFor = (base, count) => Array.from({ length: Math.max(0, Math.ceil(count / PER_PAGE) - 1) }, (_, i) => `${base}page/${i + 2}/`);

async function collect() {
  const urls = new Map(); // path -> Set(sources)
  const add = (p, source) => {
    if (!p) return;
    if (!urls.has(p)) urls.set(p, new Set());
    urls.get(p).add(source);
  };

  // Sitemaps
  const indexXml = await getText(`${WP}/sitemap_index.xml`);
  add('/sitemap_index.xml', 'sitemap');
  for (const sm of locs(indexXml)) {
    const smPath = toPath(sm);
    add(smPath, 'sitemap');
    for (const loc of locs(await getText(new URL(smPath, WP).href))) add(toPath(loc), `sitemap:${smPath.slice(1)}`);
  }

  // REST
  const [posts, pages, categories, tags, users] = await Promise.all(['posts', 'pages', 'categories', 'tags', 'users'].map(restAll));
  for (const p of posts) add(toPath(p.link), 'rest:posts');
  for (const p of pages) add(toPath(p.link), 'rest:pages');
  for (const c of categories) {
    add(toPath(c.link), 'rest:categories');
    add(`${toPath(c.link)}feed/`, 'feed');
  }
  for (const t of tags) {
    add(toPath(t.link), 'rest:tags');
    add(`${toPath(t.link)}feed/`, 'feed');
  }
  for (const u of users) {
    add(toPath(u.link), 'rest:users');
    add(`${toPath(u.link)}feed/`, 'feed');
  }

  // Pagination WordPress serves, counted from public (non-protected) posts.
  const visible = posts.filter((p) => !p.content?.protected);
  for (const p of pagesFor('/', visible.length)) add(p, 'pagination');
  for (const p of pagesFor(POSTS_PAGE, visible.length)) add(p, 'pagination');
  for (const c of categories) for (const p of pagesFor(toPath(c.link), visible.filter((x) => x.categories.includes(c.id)).length)) add(p, 'pagination');
  for (const t of tags) for (const p of pagesFor(toPath(t.link), visible.filter((x) => x.tags.includes(t.id)).length)) add(p, 'pagination');
  for (const u of users) for (const p of pagesFor(toPath(u.link), visible.filter((x) => x.author === u.id).length)) add(p, 'pagination');

  // Feeds and legacy endpoints
  for (const p of ['/feed/', '/comments/feed/', '/sitemap.xml']) add(p, 'legacy');

  return urls;
}

// ---------------------------------------------------------------------------------------------
// Redirect rules (Cloudflare Pages _redirects; exact paths and trailing /* splats)

async function loadRules(file) {
  if (!file) return [];
  const text = await fs.readFile(file, 'utf8').catch(() => {
    throw new Error(`No redirect rules at ${file}. Build first (pnpm build), or pass --no-redirect-rules.`);
  });
  return text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'))
    .map((l) => {
      const [from, to, status = '302'] = l.split(/\s+/);
      return { from, to, status: Number(status) };
    });
}

function matchRule(rules, p) {
  const pathname = p.split('?')[0];
  for (const r of rules) {
    if (r.from === pathname) return r.to;
    if (r.from.endsWith('/*') && pathname.startsWith(r.from.slice(0, -1))) return r.to.replace(':splat', pathname.slice(r.from.length - 1));
  }
  return undefined;
}

// ---------------------------------------------------------------------------------------------
// Checking

async function check(base, p, rules) {
  const chain = [];
  let url = base + encodePath(p);
  for (let hop = 0; hop <= 5; hop++) {
    let res;
    try {
      res = await fetch(url, { redirect: 'manual', headers: UA });
    } catch (err) {
      return { ok: false, how: `request failed: ${err.cause?.code || err.message}`, chain };
    }
    await res.arrayBuffer().catch(() => {});
    chain.push(`${res.status} ${url.replace(base, '')}`);
    if (res.status === 200) return { ok: true, how: hop === 0 ? '200' : 'redirect', chain };
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      url = new URL(res.headers.get('location'), url).href;
      continue;
    }
    if (res.status === 404 && hop === 0 && rules.length) {
      const to = matchRule(rules, p);
      if (to) {
        chain.push(`rule -> ${to}`);
        url = new URL(to, base).href;
        const r = await check(base, new URL(url).pathname + new URL(url).search, []);
        return { ...r, how: r.ok ? 'redirect (_redirects rule)' : r.how, chain: [...chain, ...r.chain] };
      }
    }
    return { ok: false, how: `HTTP ${res.status}`, chain };
  }
  return { ok: false, how: 'too many redirects', chain };
}

/** Percent-encode non-ASCII path characters, keeping existing escapes. */
function encodePath(p) {
  return p.replace(/[^\x21-\x7e]/g, (c) => encodeURIComponent(c));
}

async function pool(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: Math.min(n, items.length) }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx]);
      }
    }),
  );
  return out;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  let urls;
  if (opts.live) {
    console.log(`Collecting URLs from ${WP} (sitemaps + REST, read-only)…`);
    urls = await collect();
    if (opts.save) {
      const sorted = Object.fromEntries([...urls].sort(([a], [b]) => (a < b ? -1 : 1)).map(([p, s]) => [p, [...s].sort()]));
      await fs.writeFile(LIST, `${JSON.stringify(sorted, null, 1)}\n`);
      console.log(`Saved ${urls.size} paths to ${path.relative(ROOT, LIST)}`);
    }
  } else {
    urls = new Map(Object.entries(JSON.parse(await fs.readFile(LIST, 'utf8'))).map(([p, s]) => [p, new Set(s)]));
    console.log(`Read ${urls.size} WordPress paths from ${path.relative(ROOT, LIST)} (frozen; --live re-collects)`);
  }
  for (const e of opts.extra) {
    if (!urls.has(e)) urls.set(e, new Set());
    urls.get(e).add('extra');
  }
  const rules = await loadRules(opts.redirectRules);
  console.log(`Checking ${urls.size} paths against ${opts.base}${rules.length ? ` (resolving 404s through ${rules.length} rules in ${path.relative(ROOT, opts.redirectRules)})` : ''}`);

  const paths = [...urls.keys()].sort();
  const results = await pool(paths, opts.concurrency, async (p) => ({ path: p, sources: [...urls.get(p)], ...(await check(opts.base, p, rules)) }));

  const bySource = new Map();
  for (const r of results)
    for (const s of r.sources) {
      const k = s.split(':')[0];
      const row = bySource.get(k) || { total: 0, failed: 0 };
      row.total++;
      if (!r.ok) row.failed++;
      bySource.set(k, row);
    }
  const byHow = results.reduce((m, r) => m.set(r.ok ? r.how : 'FAILED', (m.get(r.ok ? r.how : 'FAILED') || 0) + 1), new Map());

  if (opts.verbose) for (const r of results) console.log(`${r.ok ? 'ok  ' : 'FAIL'} ${r.path}  [${r.chain.join(' => ')}]`);
  console.log('\nBy source:');
  for (const [k, v] of [...bySource].sort()) console.log(`  ${k.padEnd(12)} ${String(v.total).padStart(4)} checked, ${v.failed} failed`);
  console.log('Outcomes:');
  for (const [k, v] of byHow) console.log(`  ${k.padEnd(28)} ${v}`);

  const failed = results.filter((r) => !r.ok);
  if (failed.length) {
    console.log(`\n${failed.length} FAILED:`);
    for (const r of failed) console.log(`  ${r.path}  ${r.how}  (${r.sources.join(', ')})  [${r.chain.join(' => ')}]`);
    process.exit(1);
  }
  console.log(`\nAll ${results.length} paths OK.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
