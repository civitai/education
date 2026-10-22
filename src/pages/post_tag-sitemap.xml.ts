import type { APIRoute } from 'astro';
import { latest, urlset } from '../lib/sitemap';
import { getTags, getPosts } from '../lib/content';

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const terms = await getTags();
  return urlset(
    terms.map((t) => ({
      path: `/tag/${t.slug}/`,
      lastmod: latest(posts.filter((p) => p.data.tags.includes(t.slug)).map((p) => p.data.modified || p.data.date)),
    })),
  );
};
