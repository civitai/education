import type { MarkdownHeading } from 'astro';
import { getCategories, getListedPosts, type Post, type Term } from './content';

/** Front-page topic order. */
const CATEGORY_ORDER = ['beginner-guides', 'quickstart-guides', 'guides', 'training', 'prompting', 'video', 'news'];

/** Which of a post's categories to show as "its" category (most specific first). */
const PRIMARY_ORDER = ['training', 'quickstart-guides', 'beginner-guides', 'prompting', 'video', 'guides', 'news'];

/** Hand-picked entry points for new readers (post slugs). */
export const START_HERE = [
  'using-civitai-a-guide',
  'using-civitai-the-on-site-image-generator',
  'civitais-guide-to-training-studio',
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

/**
 * Every category with posts, for the phone menu: the chip categories first in chip order, then the
 * rest alphabetically, so a phone reaches every archive, not only the header chips.
 */
export async function getMenuTopics(): Promise<{ main: MenuTopic[]; more: MenuTopic[] }> {
  const categories = (await getCategories()).filter((t) => t.slug !== 'uncategorized' && t.count > 0);
  const href = (t: Term) => `/category/${t.slug}/`;
  const main = CHIPS.flatMap((c) => {
    const term = categories.find((t) => c.href === href(t));
    return term ? [{ ...term, href: c.href }] : [];
  });
  const more = categories
    .filter((t) => !main.some((m) => m.slug === t.slug))
    .map((t) => ({ ...t, href: href(t) }));
  return { main, more };
}

export type MenuTopic = Term & { href: string };

/** The front page's lead story: the newest post (sticky only reorders the posts page). */
export async function getLeadPost(): Promise<Post | undefined> {
  return (await getListedPosts())[0];
}

/**
 * Front-page topic list: the ordered categories, each with a short line. The written lines win;
 * a WordPress description is used only when there is none and it fits on one row.
 */
const TOPIC_DESC_MAX = 48;
const TOPIC_BLURBS: Record<string, string> = {
  'beginner-guides': 'First steps on Civitai',
  'quickstart-guides': 'One model or tool, fast',
  guides: 'Deep dives and workflows',
  training: 'Datasets, LoRAs, settings',
  prompting: 'Writing prompts that work',
  video: 'Wan, Hunyuan, LTXV, AnimateDiff',
  news: 'Releases and site updates',
};

export async function getHomeTopics(): Promise<MenuTopic[]> {
  const categories = await getCategories();
  return CATEGORY_ORDER.flatMap((slug) => {
    const term = categories.find((t) => t.slug === slug);
    if (!term || term.count === 0) return [];
    const own = term.description?.trim();
    const description = TOPIC_BLURBS[slug] || (own && own.length <= TOPIC_DESC_MAX ? own : undefined);
    return [{ ...term, description, href: `/category/${slug}/` }];
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

/** A contents entry: an h2 or h3, numbered 1, 1.1 to match the section numbers prose.css draws. */
export type TocItem = { depth: number; slug: string; text: string; num: string };

/** Fewer headings than this and a post gets no contents rail or bar. */
export const TOC_MIN = 3;

/** The h2 and h3 headings (the WordPress table of contents depth), numbered. */
export function tocItems(headings: MarkdownHeading[]): TocItem[] {
  let section = 0;
  let sub = 0;
  return headings
    .filter((h) => h.depth >= 2 && h.depth <= 3)
    .map((h) => {
      if (h.depth === 2) {
        section += 1;
        sub = 0;
        return { depth: h.depth, slug: h.slug, text: h.text, num: String(section) };
      }
      sub += 1;
      return { depth: h.depth, slug: h.slug, text: h.text, num: `${section}.${sub}` };
    });
}

/** The newest listed posts in a category other than `post`, and how many listed posts the category has. */
export async function getUpNext(post: Post, category: string, limit = 3): Promise<{ posts: Post[]; total: number }> {
  const inCategory = (await getListedPosts()).filter((p) => p.data.categories.includes(category));
  return { posts: inCategory.filter((p) => p.id !== post.id).slice(0, limit), total: inCategory.length };
}
