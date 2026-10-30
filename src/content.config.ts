import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const seo = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonical: z.string().optional(),
  })
  .optional();

// The entry id is the `slug` front matter field (the glob loader uses it when present), which is
// also the URL: /<slug>/.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    modified: z.coerce.date().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('civitai'),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    sticky: z.boolean().optional(),
    draft: z.boolean().optional(),
    /**
     * Built and reachable at its URL for review, but public nowhere: left out of every listing,
     * feed, search and sitemap, and the page asks search engines not to index it. Remove it to
     * launch the post.
     */
    unlisted: z.boolean().optional(),
    /**
     * Out of date but kept at its URL: the page renders a banner and stays in the sitemaps, but is
     * left out of every listing, feed and search (see getListedPosts in src/lib/content.ts).
     */
    deprecated: z
      .object({
        /** When it was marked out of date. */
        date: z.coerce.date(),
        /** Slug of the post that replaces it; the banner links there. */
        replacedBy: z.string().optional(),
        /** One line for the banner, after "This guide is out of date." */
        note: z.string().optional(),
      })
      .optional(),
    /**
     * Short kebab-case keys for the features and models this guide explains (`creator-studio`,
     * `krea-3`). The weekly review matches what changed on Civitai against these to find guides
     * that may now be wrong.
     */
    covers: z.array(z.string()).optional(),
    /** The last day someone checked every claim in the guide against Civitai. */
    reviewed: z.coerce.date().optional(),
    /** WordPress post id, for ?p= redirects. Only on posts that came from WordPress. */
    wpId: z.number().optional(),
    seo,
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    /** Public path, e.g. /about-us/. The front page is "/". */
    path: z.string(),
    date: z.coerce.date().optional(),
    modified: z.coerce.date().optional(),
    excerpt: z.string().optional(),
    parent: z.number().optional(),
    menuOrder: z.number().optional(),
    wpId: z.number().optional(),
    seo,
  }),
});

export const collections = { posts, pages };
