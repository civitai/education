import { getCollection, type CollectionEntry } from 'astro:content';
import taxonomies from '../data/taxonomies.json';
import squareCovers from '../data/square-covers.json';
import { SITE } from './site';

export type Post = CollectionEntry<'posts'>;
export type Page = CollectionEntry<'pages'>;
export type Term = { slug: string; name: string; description?: string; count: number };

/** Paths the site generates itself; no post or page may claim them. */
const RESERVED = new Set(['category', 'tag', 'author', 'page', 'feed', 'search', 'pagefind', SITE.postsPageSlug]);

let postsCache: Post[] | undefined;

/** Published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  if (!postsCache) {
    const posts = await getCollection('posts', (p) => !p.data.draft);
    posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
    postsCache = posts;
  }
  return postsCache;
}

/** Pages rendered at their own path (not the front page or the posts page, which are generated). */
export async function getStandalonePages(): Promise<Page[]> {
  const pages = await getCollection('pages');
  return pages.filter((p) => p.data.path !== '/' && p.data.slug !== SITE.postsPageSlug);
}

export async function getPage(slug: string): Promise<Page | undefined> {
  return (await getCollection('pages')).find((p) => p.data.slug === slug);
}

/** Every /<slug>/ the site serves from content, checked for collisions. */
export async function getSlugEntries(): Promise<Array<{ slug: string; post?: Post; page?: Page }>> {
  const out = new Map<string, { slug: string; post?: Post; page?: Page }>();
  for (const page of await getStandalonePages()) {
    const slug = page.data.path.replace(/^\/|\/$/g, '');
    out.set(slug, { slug, page });
  }
  for (const post of await getPosts()) {
    if (out.has(post.id)) throw new Error(`Slug collision: /${post.id}/ is both a page and a post`);
    out.set(post.id, { slug: post.id, post });
  }
  for (const slug of out.keys()) {
    if (RESERVED.has(slug) || slug.includes('/')) throw new Error(`Slug /${slug}/ is reserved or nested; rename it`);
  }
  return [...out.values()];
}

function terms(kind: 'categories' | 'tags', posts: Post[]): Term[] {
  const counts = new Map<string, number>();
  for (const p of posts) for (const s of p.data[kind]) counts.set(s, (counts.get(s) || 0) + 1);
  const known = new Map((taxonomies[kind] as Array<{ slug: string; name: string; description?: string }>).map((t) => [t.slug, t]));
  return [...counts.entries()]
    .map(([slug, count]) => ({ slug, count, name: known.get(slug)?.name || slug, description: known.get(slug)?.description || undefined }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/** Categories that have at least one post (empty ones redirect home, see public/_redirects). */
export async function getCategories(): Promise<Term[]> {
  return terms('categories', await getPosts());
}

export async function getTags(): Promise<Term[]> {
  return terms('tags', await getPosts());
}

export async function getAuthors(): Promise<Term[]> {
  const posts = await getPosts();
  const counts = new Map<string, number>();
  for (const p of posts) counts.set(p.data.author, (counts.get(p.data.author) || 0) + 1);
  const known = new Map(taxonomies.authors.map((a) => [a.slug, a]));
  return [...counts.entries()].map(([slug, count]) => ({ slug, count, name: known.get(slug)?.name || slug, description: known.get(slug)?.description || undefined }));
}

export function termName(kind: 'categories' | 'tags', slug: string): string {
  return (taxonomies[kind] as Array<{ slug: string; name: string }>).find((t) => t.slug === slug)?.name || slug;
}

export const pageCount = (n: number) => Math.max(1, Math.ceil(n / SITE.perPage));

/** One listing page of `items` (1-based). */
export function paginate<T>(items: T[], page: number): T[] {
  return items.slice((page - 1) * SITE.perPage, page * SITE.perPage);
}

/** getStaticPaths entries for /…/page/N/ (N >= 2; page 1 is the archive root). */
export function extraPages(total: number): number[] {
  return Array.from({ length: pageCount(total) - 1 }, (_, i) => i + 2);
}

export const postPath = (p: Post) => `/${p.id}/`;

/**
 * The post's cover for square cards: a squared re-render (public/covers/) where the WordPress cover
 * isn't square, else the original. Keyed by the original's path, so a re-export keeps the mapping.
 */
export function coverOf(p: Post): string | undefined {
  const src = p.data.image;
  if (!src) return undefined;
  const path = new URL(src, SITE.url).pathname.replace(/\/{2,}/g, '/');
  return (squareCovers as Record<string, string>)[path] ?? src;
}
export const absolute = (path: string) => new URL(path, SITE.url).href;
