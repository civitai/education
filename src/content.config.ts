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
