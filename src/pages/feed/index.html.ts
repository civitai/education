// /feed/: the site RSS feed (see src/lib/feed.ts for why the file is index.html).
import type { APIRoute } from 'astro';
import { feedResponse } from '../../lib/feed';
import { getPosts } from '../../lib/content';
import { SITE } from '../../lib/site';

export const GET: APIRoute = async () => feedResponse({ title: SITE.title, description: SITE.description, path: '/', posts: await getPosts() });
