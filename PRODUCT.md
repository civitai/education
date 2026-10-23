# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences with equal weight:

- **Newcomers** arriving from civitai.com or search who need generative-AI terms explained
  (LoRA, checkpoint, CFG, sampler) and a guided path to their first results on Civitai.
- **Experienced creators** who already use Civitai and come for a specific how-to: training LoRAs,
  prompting, video generation, ControlNet, or news about a new model release.

The site must serve guided learning and quick lookup equally well.

## Product Purpose

Civitai's education hub: guides, tutorials, glossary entries and news that teach people to use
Civitai and generative AI tools. Success is a reader who understands the concept or completes the
task, then goes back to civitai.com to make something.

## Positioning

Written by the team that runs the largest generative-AI model hub, about its own on-site tools
(image generator, LoRA trainer) and the open model ecosystem it hosts. Guides are first-party and
kept current with dated change logs.

## Operating Context

- Content is long-form Markdown (103 posts, 4 pages) migrated from WordPress, with tables,
  callouts (`note`, `tip`, `warning`, `caution`), self-hosted videos, images and prompt/code
  snippets that must stay literal.
- Categories: Beginner's Guides, Quickstart Guides, Guides, Training, Prompting, Video, News,
  Glossary, model families (Flux, SDXL, SD3), LLM, Audio, Community Articles.
- Readers move between the site and civitai.com; many guides document Civitai UI step by step.
- Search is Pagefind (static); there is no account, comments or personalization.

## Capabilities and Constraints

- Static Astro site, nginx in-cluster; no client framework.
- Every public WordPress URL must keep working (`/<slug>/`, category/tag/author archives with
  `/page/N/`, feeds, Yoast sitemaps).
- Light and dark themes, following the OS until the visitor picks one.
- Posts have cover images (some square), categories, tags, authors, published/updated dates,
  reading time and optional change-log tables.

## Brand Commitments

- A sibling of civitai.com: recognizably Civitai (logo in the header) with its own editorial
  voice, distinct from the main app's dense UI.
- **Palette is Civitai's** (user-pinned, 2026-10-22). Taken from civitai.com's Mantine theme:
  dark ramp `#C1C2C5 #A6A7AB #8C8FA3 #5C5F66 #373A40 #2C2E33 #25262B #1A1B1E #141517 #101113`
  (body `#1A1B1E`, dark is civitai.com's default), primary blue ramp `#E7F5FF … #228BE6 … #1864AB`,
  Pro gradient `#7950F2 → #4C6EF5`, Buzz yellow `#FCC419`, green `#40C057`. Light theme uses
  body `#FEFEFE`, text `#222`.
- **Structure is a blog** (user-pinned, 2026-10-22): cover-led posts, a front page that reads as
  a publication, article pages that read as blog posts.
- The header uses the official Civitai wordmark SVG (from civitai.com's Newsroom logo asset) and
  civitai.com's favicon set.

## Evidence on Hand

- Cover art per post in `public/covers/`; all WordPress media in `public/wp-content/uploads/` (videos in Git LFS).
- No testimonials, metrics or learner counts exist; do not invent them.

## Product Principles

1. Clarity first: a beginner should never hit an unexplained term without a path to its meaning.
2. Fast lookup: an experienced creator reaches the right section in seconds (search, TOC, anchors).
3. Content is the product: chrome recedes behind long-form reading, images and prompts.
4. Lead back to Civitai: every guide makes the next step on civitai.com obvious.
5. Never break a URL.
