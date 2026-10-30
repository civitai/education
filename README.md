# Civitai Education

The source for [education.civitai.com](https://education.civitai.com): guides, tutorials and news,
written in Markdown and built into a static site with [Astro](https://astro.build). Search is
[Pagefind](https://pagefind.app).

The content was exported from the old WordPress site, and every public WordPress URL is kept:
posts and pages at `/<slug>/`, `/category/<slug>/`, `/tag/<slug>/`, `/author/<slug>/`, pagination
at `…/page/N/`, feeds at `…/feed/` and the Yoast sitemap file names.

## Requirements

- Node.js 22 or newer
- pnpm (`corepack enable` picks up the version pinned in `package.json`)

## Commands

| Command            | What it does                                                         |
| ------------------ | -------------------------------------------------------------------- |
| `pnpm install`     | Install dependencies                                                 |
| `pnpm dev`         | Local dev server at http://localhost:4321 (search is not built here) |
| `pnpm build`       | Build the site into `dist/`, then build the search index             |
| `pnpm preview`     | Serve `dist/` at http://localhost:4321                               |
| `pnpm check`       | Type-check the project                                               |
| `pnpm check:urls`  | Check that every WordPress URL answers on a running build (below)    |
| `pnpm export:wp`   | Re-export content from WordPress (below)                             |

## Adding a post

New and rewritten articles get an independent content review before they merge: accuracy (every claim
checked against civitai.com), quality against our best guides, images, links and voice. The checklist
is `.claude/skills/content-review/SKILL.md`; the PR body carries the reviewer's verdict.

1. Create `src/content/posts/<slug>.md`. The slug is the URL: `my-new-guide` is served at
   `/my-new-guide/`. It must not clash with another post or page, or with `category`, `tag`,
   `author`, `page`, `feed`, `search` or `civitai`; the build fails if it does.
2. Start it with front matter:

   ```markdown
   ---
   title: "My New Guide"
   slug: "my-new-guide"
   date: "2026-10-21T15:00:00Z"
   categories:
     - "guides"
   tags:
     - "flux"
   excerpt: "One or two sentences shown in listings, feeds and search results."
   image: "https://…/cover.png"   # optional: listing thumbnail and social image
   ---

   Write the post in Markdown. Start with `##` headings; the page title is the `#`.
   ```

   Optional fields: `modified` (last updated date), `author` (default `civitai`), `draft: true`
   (left out of the build), `unlisted: true` (built at its URL for review, but kept out of every
   listing, feed, search and sitemap, with a noindex tag; remove it to launch), `covers`, `reviewed` (below), and `seo` with `title`, `description` and
   `ogImage` overrides. The schema is in `src/content.config.ts`.

   Guides about a Civitai feature or model should also declare what they cover and when they were
   last checked:

   ```yaml
   covers:                 # short kebab-case keys, one per feature or model the guide explains
     - "creator-studio"
     - "early-access"
   reviewed: "2026-10-26"  # the day every claim was last checked against Civitai
   ```

   The weekly review matches changes on Civitai against `covers`, and lists any guide whose
   `reviewed` date is more than 90 days old. Set `reviewed` whenever you check or update a guide,
   and reuse an existing key (`grep -rh '^  - ' src/content/posts` shows them) before inventing one.
3. Categories and tags are slugs. Existing ones, with their display names, are in
   `src/data/taxonomies.json`; a new slug works too and shows under its slug until it is added there.
4. Run `pnpm dev` and open the post. The table of contents is generated from the `##` and `###`
   headings, so there is no need to write one.

Use `.mdx` instead of `.md` if a post needs components.

## Retiring old content

Two ways to take a post off the shelf:

- **Deprecate** it when the page is still worth reading but out of date. Add to its front matter:

  ```yaml
  deprecated:
    date: "2026-10-26"
    replacedBy: "newer-guide-slug"   # optional: the banner links there; must be a post's slug
    note: "One line for the banner." # optional: replaces the default text
  ```

  The post keeps its URL and its sitemap entry and shows an "out of date" banner. It leaves the
  home page, the category, tag and author archives, the feeds, search and "Up next". Code that lists
  posts for readers uses `getListedPosts()`; `getPosts()` is for routes and sitemaps.
- **Retire** it when the URL should go away: delete its file, and add it to `RETIRED` in
  `scripts/export-wp.mjs` and to the "Retired posts" block of `public/_redirects` (slug and the post
  its URL now 301s to). Point its id in `src/data/wp-ids.json` at the same target. If that empties a
  tag, category or archive page that WordPress served, redirect that too; `pnpm check:urls` finds them.

### Embeds

Videos and other rich blocks use a placeholder `div` that `src/lib/rehype-embeds.mjs` turns into
markup, so their look is decided in one place:

```html
<div data-embed="youtube" data-src="https://www.youtube.com/embed/VIDEO_ID" data-title="Video title" data-width="800" data-height="450"></div>
```

Kinds: `youtube`, `videopress`, `iframe`, `video`, `gallery` (wraps `<img>`s), `image-compare`
(two `<img>`s, before and after) and `tweet`. A `<figcaption>` inside the `div` becomes the caption.

### Heading anchors

Headings get ids from their text. To keep a specific id (for an existing `#link`), add it at the
end: `## Some heading {#old-anchor}`.

Astro caches rendered Markdown in `node_modules/.astro/`. After changing a remark or rehype plugin,
delete that folder so every post is rendered again.

## Pages

Pages live in `src/content/pages/` with a `path` in their front matter (`/about-us/`). Two are
special, matching the old WordPress reading settings in `src/lib/site.ts`: `home` is the front page
(`/`, generated; its file supplies the SEO fields) and `civitai` is the posts page (`/civitai/`,
the full list of posts).

## Styling

The theme is deliberately plain for now. Site chrome is in `src/styles/base.css`; all Markdown
typography (and the embed markup) is in `src/styles/prose.css`, applied by
`src/components/Prose.astro`.

## Media

All media is in this repository, so a clone builds the whole site.

- **Images and downloads** are in `public/wp-content/uploads/`, at their old WordPress paths. Most were
  converted to WebP. The old `.png`/`.jpg` URLs redirect to the new names
  (`src/data/media-renames.json`). PNGs that carry ComfyUI or A1111 generation data (`workflow`,
  `prompt`, `parameters`) are kept as they are, so readers can still load them into ComfyUI.
- **Videos** (`public/videos/`, the former VideoPress embeds) and the one download over GitHub's
  100 MB limit are in **Git LFS**. Run `git lfs install` before cloning to get them; without it they
  are small pointer files and the videos won't play locally.

To add an image, put it under `public/` and link it by its path, e.g. `/wp-content/uploads/2026/10/x.webp`
or a new folder. Prefer WebP, and keep it under about 1 MB.

On the hosted site the image build cannot fetch Git LFS files, so `.dockerignore` leaves them out and
nginx serves them from a B2 copy (`nginx/default.conf`). A new video therefore also needs uploading to
that bucket; ask an infra owner.

## WordPress export

`scripts/export-wp.mjs` reads the public WordPress REST API (read-only, no login) and writes:

- `src/content/posts/*.md` and `src/content/pages/*.md`
- `src/data/taxonomies.json`: categories, tags and authors
- `src/data/wp-ids.json`: WordPress id → path, for redirecting old `?p=<id>` and `?page_id=<id>`
  links (those need a function, since `_redirects` cannot match query strings)
- `public/_redirects`: Cloudflare Pages redirects for removed content and empty archives

```sh
pnpm export:wp            # fetch and convert
pnpm export:wp --cached   # re-convert from the last fetch in .cache/wp/
```

It is safe to re-run: unchanged files are left alone, exported files whose post no longer exists are
removed, and files without a `wpId` (written here, not exported) are never touched.
Password-protected posts are skipped and never written.

## Checking URLs

`scripts/check-urls.mjs` reads the live WordPress sitemaps and REST API for every public URL and
requests each one from a build:

```sh
pnpm build && pnpm preview     # in one terminal
pnpm check:urls                # in another; or: pnpm check:urls -- --base https://education-new.civitai.com
```

It fails on any URL that is not a 200 or a redirect to a 200.
