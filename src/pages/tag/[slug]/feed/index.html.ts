// /tag/<slug>/feed/ (see src/lib/feed.ts for why the file is index.html).
import type { APIRoute, GetStaticPaths } from 'astro';
import { feedResponse } from '../../../../lib/feed';
import { getTags, getListedPosts, type Term } from '../../../../lib/content';
import { SITE } from '../../../../lib/site';

export const getStaticPaths = (async () => {
  const terms = await getTags();
  return terms.map((term) => ({ params: { slug: term.slug }, props: { term } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const term = props.term as Term;
  const posts = (await getListedPosts()).filter((p) => p.data.tags.includes(term.slug));
  return feedResponse({ title: `${SITE.title} » ${term.name} Tag Feed`, description: term.description || SITE.description, path: `/tag/${term.slug}/`, posts });
};
