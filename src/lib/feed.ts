import rss from '@astrojs/rss';
import { SITE } from './site';
import { absolute, postPath, termName, type Post } from './content';

// WordPress serves feeds at /feed/, /category/<slug>/feed/ and so on. A static host can only serve
// /feed/ from feed/index.html, so feed endpoints are named index.html.ts and public/_headers gives
// them the RSS content type.

export function feedResponse(opts: { title: string; description: string; path: string; posts: Post[] }) {
  const posts = opts.posts.slice(0, SITE.feedItems);
  return rss({
    title: opts.title,
    description: opts.description,
    site: absolute(opts.path),
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: `<language>en-US</language><atom:link href="${absolute(feedPath(opts.path))}" rel="self" type="application/rss+xml" />`,
    trailingSlash: true,
    items: posts.map((p) => ({
      title: p.data.title,
      link: absolute(postPath(p)),
      pubDate: p.data.date,
      description: p.data.excerpt,
      categories: [...p.data.categories.map((c) => termName('categories', c)), ...p.data.tags.map((t) => termName('tags', t))],
    })),
  });
}

export const feedPath = (archivePath: string) => `${archivePath}feed/`;
