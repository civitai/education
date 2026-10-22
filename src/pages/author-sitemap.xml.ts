import type { APIRoute } from 'astro';
import { latest, urlset } from '../lib/sitemap';
import { getAuthors, getPosts } from '../lib/content';

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  return urlset(
    (await getAuthors()).map((a) => ({
      path: `/author/${a.slug}/`,
      lastmod: latest(posts.filter((p) => p.data.author === a.slug).map((p) => p.data.modified || p.data.date)),
    })),
  );
};
