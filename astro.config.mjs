// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import rehypeRaw from 'rehype-raw';
import remarkDirective from 'remark-directive';
import remarkCallouts from './src/lib/remark-callouts.mjs';
import remarkHeadingId from './src/lib/remark-heading-id.mjs';
import rehypeEmbeds from './src/lib/rehype-embeds.mjs';
import rehypeTableWrap from './src/lib/rehype-table-wrap.mjs';

export default defineConfig({
  site: 'https://education.civitai.com',
  // WordPress paths all end in a slash; keep them identical.
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [mdx()],
  markdown: {
    // The remark/rehype pipeline (not Astro's default Sätteri) so the plugins below can run.
    processor: unified({
      // :::note|tip|warning|caution blocks; remarkCallouts turns any other ":word" back into plain text.
      remarkPlugins: [remarkDirective, remarkCallouts, remarkHeadingId],
      // Raw HTML in Markdown (the export's embed placeholders) must be parsed before rehypeEmbeds sees it.
      rehypePlugins: [rehypeRaw, rehypeEmbeds, rehypeTableWrap],
      // Content is already typeset (curly quotes from WordPress); leave prompts and "--flags" alone.
      smartypants: false,
    }),
  },
});
