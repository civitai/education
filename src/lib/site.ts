export const SITE = {
  title: 'Civitai Education',
  description: 'Guides, tutorials and news for generative AI on Civitai.',
  url: 'https://education.civitai.com',
  locale: 'en_US',
  twitter: '@Hellocivitai',
  /** Posts per listing page (WordPress "Blog pages show at most"). */
  perPage: 10,
  /** Items per RSS feed (WordPress "Syndication feeds show the most recent"). */
  feedItems: 10,
  /** The WordPress "posts page": the blog index lives at /<slug>/, paginated /<slug>/page/N/. */
  postsPageSlug: 'civitai',
  /** The WordPress static front page, served at /. */
  frontPageSlug: 'home',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/category/beginner-guides/', label: 'Beginner Guides' },
  { href: '/category/guides/', label: 'Guides' },
  { href: '/category/quickstart-guides/', label: 'Quickstart Guides' },
  { href: '/category/news/', label: 'News' },
  { href: '/about-us/', label: 'About' },
  { href: '/search/', label: 'Search' },
];
