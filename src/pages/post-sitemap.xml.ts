// Like Yoast: the posts page first, then every post.
import type { APIRoute } from 'astro';
import { latest, urlset } from '../lib/sitemap';
import { getSitemapPosts, postPath } from '../lib/content';
import { SITE } from '../lib/site';

export const GET: APIRoute = async () => {
  const posts = await getSitemapPosts();
  return urlset([
    { path: `/${SITE.postsPageSlug}/`, lastmod: latest(posts.map((p) => p.data.modified || p.data.date)) },
    ...[...posts]
      .reverse()
      .map((p) => ({ path: postPath(p), lastmod: p.data.modified || p.data.date, images: p.data.image ? [p.data.image] : [] })),
  ]);
};
