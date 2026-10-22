// Sitemaps with the same file names WordPress (Yoast) served: /sitemap_index.xml pointing at
// /post-sitemap.xml, /page-sitemap.xml, /category-sitemap.xml, /post_tag-sitemap.xml and
// /author-sitemap.xml.
import { absolute } from './content';

export const SITEMAPS = ['post-sitemap.xml', 'page-sitemap.xml', 'category-sitemap.xml', 'post_tag-sitemap.xml', 'author-sitemap.xml'];

export type SitemapUrl = { path: string; lastmod?: Date; images?: string[] };

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function xml(body: string) {
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n${body}\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}

export function urlset(urls: SitemapUrl[]) {
  const items = urls.map((u) => {
    const parts = [`<loc>${esc(absolute(u.path))}</loc>`];
    if (u.lastmod) parts.push(`<lastmod>${u.lastmod.toISOString()}</lastmod>`);
    for (const img of u.images || []) parts.push(`<image:image><image:loc>${esc(img)}</image:loc></image:image>`);
    return `  <url>${parts.join('')}</url>`;
  });
  return xml(
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${items.join('\n')}\n</urlset>`,
  );
}

export function sitemapIndex(entries: Array<{ file: string; lastmod?: Date }>) {
  const items = entries.map(
    (e) => `  <sitemap><loc>${esc(absolute(`/${e.file}`))}</loc>${e.lastmod ? `<lastmod>${e.lastmod.toISOString()}</lastmod>` : ''}</sitemap>`,
  );
  return xml(`<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items.join('\n')}\n</sitemapindex>`);
}

export const latest = (dates: Array<Date | undefined>) =>
  dates.filter((d): d is Date => !!d).reduce<Date | undefined>((a, b) => (!a || b > a ? b : a), undefined);
