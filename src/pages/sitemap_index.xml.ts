import type { APIRoute } from 'astro';
import { SITEMAPS, latest, sitemapIndex } from '../lib/sitemap';
import { getSitemapPosts } from '../lib/content';

export const GET: APIRoute = async () => {
  const lastmod = latest((await getSitemapPosts()).map((p) => p.data.modified || p.data.date));
  return sitemapIndex(SITEMAPS.map((file) => ({ file, lastmod })));
};
