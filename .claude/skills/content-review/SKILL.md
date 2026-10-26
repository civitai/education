---
name: content-review
description: Adversarial review of a new or changed education article before its PR can merge. Checks every factual claim against civitai.com or the Civitai codebase, measures the piece against the site's best articles, and checks images, links, voice and front matter. Use on every PR that adds or substantially changes a post or page in src/content/.
---

# Content review

Every PR that adds a post, or rewrites more than a few lines of one, goes through this review before it
can merge. The writer never reviews their own article: run the review in a **separate subagent** that
did not write it, and give that agent the rubric below plus the paths to the changed files. It reports
findings; it does not edit.

## What the reviewer gets

- The changed Markdown files (`git diff --name-only origin/main...HEAD -- src/content`).
- The two benchmark articles, which set the bar: `src/content/posts/build-an-ai-influencer-with-civitai-com.md`
  and `src/content/posts/civitais-guide-to-video-in-the-civitai-generator.md`.
- The brief the writer was given (what the article is for, who reads it).
- Read access to civitai.com (a browser) and, if available, the Civitai app source, to check facts.

## Rubric

Score each line PASS / FIX (with the exact change) / BLOCK.

1. **Accuracy.** List every factual claim: feature names, menu paths, model names and versions, prices,
   limits, defaults, dates. For each, give the source you checked (a civitai.com URL, a file:line, a
   doc). A claim with no source is a FIX. A claim that contradicts the source is a BLOCK. Features
   behind a flag or not yet public must not be presented as available.
2. **Completeness against the reader's task.** Could a reader do the thing the article promises, start to
   finish, using only this article? Name the first step where they would get stuck.
3. **Quality against the benchmarks.** Is it at least as specific, well structured and useful as the two
   benchmark articles? Name what the benchmark does that this one doesn't (worked examples, settings
   tables, before/after images, a troubleshooting section, a clear "what you'll make").
4. **Variety.** Does it repeat material another post already covers? Link to that post instead of
   restating it. Does the structure feel templated next to its sibling articles written in the same batch?
5. **Images.** Every UI step a reader must find on screen has a screenshot or a clear description of
   where it is. Example outputs are shown where the article is about outputs. Every image has alt text,
   lives under `public/`, is WebP where possible and under about 1 MB. No image shows a real user's
   private data or NSFW content.
6. **Links.** Internal links use site paths that exist (`/<slug>/`). External links resolve.
   Replacements for deprecated posts are linked from them.
7. **Voice and format.** American English (dates like "October 23", "color", "license"). No em dashes.
   Plain, direct sentences; no hype ("revolutionary", "game-changing"). Headings make sense on their own,
   since they become the "On this page" list.
8. **Front matter.** Title, slug, date, categories (an existing category), excerpt (one sentence that says
   what the reader gets), cover `image`. `pnpm build` passes.

## Verdict

- **PASS**: no BLOCK, every FIX is cosmetic.
- **REVISE**: any BLOCK, or FIXes that change meaning. The writer fixes and the review runs again, as a
  fresh subagent, on the new diff.

Put the final verdict, the reviewer's claim/source list and the round count in the PR body under a
`## Content review` heading. A PR without a PASS there does not merge.
