import { getCategories, getPosts, type Post, type Term } from './content';

/** Sidebar and front-page order; categories not listed follow alphabetically. */
const CATEGORY_ORDER = ['beginner-guides', 'quickstart-guides', 'guides', 'training', 'prompting', 'video', 'news'];

/** Which of a post's categories to show as "its" category (most specific first). */
const PRIMARY_ORDER = ['training', 'quickstart-guides', 'beginner-guides', 'prompting', 'video', 'guides', 'news'];

/** Hand-picked entry points for new readers (post slugs). */
export const START_HERE = [
  'using-civitai-a-guide',
  'using-civitai-the-on-site-image-generator',
  'using-civitai-the-on-site-lora-trainer',
];

/** Topic chips in the header (and the phone front page), in display order. */
export const CHIPS = [
  { label: 'All', href: '/' },
  { label: 'Beginner', href: '/category/beginner-guides/' },
  { label: 'Quickstart', href: '/category/quickstart-guides/' },
  { label: 'Guides', href: '/category/guides/' },
  { label: 'Training', href: '/category/training/' },
  { label: 'Prompting', href: '/category/prompting/' },
  { label: 'Video', href: '/category/video/' },
  { label: 'Glossary', href: '/category/glossary/' },
  { label: 'News', href: '/category/news/' },
];

/** The chip for a URL path: "All" on the front page, a category on its archive and its pages. */
export function activeChip(path: string): string | undefined {
  if (path === '/') return '/';
  return CHIPS.find((c) => c.href !== '/' && path.startsWith(c.href))?.href;
}

/** The chip categories with their names and post counts, for the phone menu. */
export async function getMenuTopics(): Promise<Array<Term & { href: string }>> {
  const categories = await getCategories();
  return CHIPS.flatMap((c) => {
    const term = categories.find((t) => c.href === `/category/${t.slug}/`);
    return term ? [{ ...term, href: c.href }] : [];
  });
}

export type CategoryGroup = Term & { posts: Post[]; items: Post[] };

/** Categories in display order, each with its posts (newest first) and the latest `limit` of them. */
export async function getCategoryGroups(limit: number): Promise<CategoryGroup[]> {
  const rank = (slug: string) => {
    const i = CATEGORY_ORDER.indexOf(slug);
    return i < 0 ? CATEGORY_ORDER.length : i;
  };
  const posts = await getPosts();
  return (await getCategories())
    .sort((a, b) => rank(a.slug) - rank(b.slug) || a.name.localeCompare(b.name))
    .map((term) => {
      const all = posts.filter((p) => p.data.categories.includes(term.slug));
      return { ...term, posts: all, items: all.slice(0, limit) };
    });
}

export function primaryCategory(post: Post): string | undefined {
  const cats = post.data.categories;
  return PRIMARY_ORDER.find((c) => cats.includes(c)) || cats.find((c) => c !== 'civitai') || cats[0];
}

/**
 * The excerpt as a standfirst, or undefined when it is WordPress's auto-generated teaser (ends in
 * "[…]") or just the opening of the body, which would repeat the first paragraph.
 */
export function entryDeck(excerpt: string | undefined, body: string | undefined): string | undefined {
  if (!excerpt || /\[(…|\.\.\.)\]\s*$/.test(excerpt)) return undefined;
  const plain = (s: string) => s.replace(/[*_`>#[\]()]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
  const start = plain(excerpt).slice(0, 60);
  return plain(body || '').startsWith(start) ? undefined : excerpt;
}

/** Reading time in whole minutes from the raw Markdown body. */
export function readingMinutes(body: string | undefined): number {
  const text = (body || '').replace(/!\[[^\]]*\]\([^)]*\)/g, ' ').replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}
