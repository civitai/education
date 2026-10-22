import type { APIRoute } from 'astro';
import { latest, urlset } from '../lib/sitemap';
import { getCategories, getPosts } from '../lib/content';

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const terms = await getCategories();
  return urlset(
    terms.map((t) => ({
      path: `/category/${t.slug}/`,
      lastmod: latest(posts.filter((p) => p.data.categories.includes(t.slug)).map((p) => p.data.modified || p.data.date)),
    })),
  );
};
