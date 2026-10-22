import type { APIRoute } from 'astro';
import { urlset } from '../lib/sitemap';
import { getPage, getStandalonePages } from '../lib/content';
import { SITE } from '../lib/site';

export const GET: APIRoute = async () => {
  const home = await getPage(SITE.frontPageSlug);
  const pages = await getStandalonePages();
  return urlset([
    { path: '/', lastmod: home?.data.modified },
    ...pages.map((p) => ({ path: p.data.path, lastmod: p.data.modified || p.data.date })),
  ]);
};
