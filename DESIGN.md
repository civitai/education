---
name: Civitai Journal
description: Civitai's education hub as a dark-first publication on civitai.com's own Mantine palette.
colors:
  primary: "#228BE6"
  primary-hover: "#1C7ED6"
  button-fill: "#1971C2"
  button-fill-hover: "#1864AB"
  on-primary: "#FFFFFF"
  pro-violet: "#7950F2"
  pro-indigo: "#4C6EF5"
  ground-dark: "#1A1B1E"
  sunken-dark: "#141517"
  surface-dark: "#25262B"
  surface-2-dark: "#2C2E33"
  border-strong-dark: "#373A40"
  text-dark: "#C1C2C5"
  text-dim-dark: "#A6A7AB"
  heading-dark: "#FEFEFE"
  link-dark: "#4DABF7"
  primary-soft-dark: "rgba(34, 139, 230, 0.15)"
  ground-light: "#FEFEFE"
  sunken-light: "#F8F9FA"
  surface-light: "#F1F3F5"
  surface-2-light: "#E9ECEF"
  border-strong-light: "#CED4DA"
  text-light: "#373A40"
  text-dim-light: "#5C5F66"
  heading-light: "#101113"
  link-light: "#1971C2"
  primary-soft-light: "#E7F5FF"
  success-dark: "#51CF66"
  warning-dark: "#FFA94D"
  danger-dark: "#FF8787"
  success-light: "#2F9E44"
  warning-light: "#E8590C"
  danger-light: "#E03131"
typography:
  display:
    fontFamily: "'Mona Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(2.125rem, 1.3rem + 2.6vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "'Mona Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(1.5625rem, 1.4rem + 0.5vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 115"
  title:
    fontFamily: "'Mona Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 108"
  body:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    fontFeature: "'cv11', 'ss01'"
  ui:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
  label:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  mono:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  archive:
    fontFamily: "'Mona Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(2.125rem, 1.6rem + 1.6vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 125"
  section:
    fontFamily: "'Mona Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 115"
  title-sm:
    fontFamily: "'Mona Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 108"
  deck:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
  deck-sm:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
  field:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  xs: "4px"
  mark: "2px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  pill: "999px"
spacing:
  sp-1: "4px"
  sp-2: "8px"
  sp-3: "12px"
  sp-4: "16px"
  sp-5: "24px"
  sp-6: "32px"
  sp-7: "48px"
  sp-8: "64px"
components:
  button-primary:
    backgroundColor: "{colors.button-fill}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.button-fill-hover}"
  button-pro:
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "44px"
  chip:
    textColor: "{colors.text-dark}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
  chip-active:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.heading-dark}"
    rounded: "{rounded.pill}"
  tag:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  search-field:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.text-dim-dark}"
    rounded: "{rounded.md}"
    height: "38px"
  panel:
    backgroundColor: "{colors.surface-dark}"
    rounded: "{rounded.lg}"
    padding: "32px"
  step-card:
    backgroundColor: "{colors.surface-dark}"
    rounded: "{rounded.lg}"
    padding: "12px"
  pager-current:
    backgroundColor: "{colors.button-fill}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
    height: "40px"
  code-block:
    backgroundColor: "{colors.sunken-dark}"
    textColor: "{colors.text-dark}"
    typography: "{typography.mono}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
---

# Design System: Civitai Journal

## Overview

**Creative North Star: "The Civitai Journal"**

A publication, not a handbook and not an app. The front page reads as an issue: one lead story with its cover beside a wide, heavy headline, a numbered start-here strip, a cover grid of the latest posts, a topic index, and one closing invitation back to civitai.com. The article reads as a blog post: a wide-set title over its cover, a single reading column of about 70 characters, a sticky contents rail that marks where the reader stopped, and a Follow-along card that sends them to try it.

Everything sits on civitai.com's own Mantine ramp, so the site is recognizably a sibling of the app while staying calmer and more editorial than the app's dense UI. Dark is the native ground; light mirrors it. The theme follows the OS until the visitor toggles it (`html[data-theme]`). Chrome recedes: depth comes from tonal surface steps and hairline rules, colour is spent on links, actions and the one Pro gradient, and the cover art carries the imagery.

The type voice is Mona Sans run wide (width axis tiers) and heavy for headings, Inter for reading, JetBrains Mono for anything literal. Inter as the reading face is a sanctioned exception: it matches civitai.com and reads well at 17px in long guides.

**Key Characteristics:**
- Dark-first Mantine palette; light theme mirrors every role.
- Wide, heavy Mona Sans headings in three width tiers; Inter body; mono for literals and numbers.
- Covers are the image language; no illustration, no decorative graphics.
- Flat tonal layering with 1px rules; shadows only on floating overlays.
- One Pro-gradient action per page, always the link to civitai.com.
- Real Civitai logo SVG in the header, its accent filled with the button blue.

## Colors

Civitai's Mantine palette: graphite dark ramp, Mantine blue for action and wayfinding, the Pro violet-to-indigo gradient held back for a single call to action.

### Primary
- **Civitai Blue** (`primary`): accent and wayfinding. Focus outlines, the current contents-rail marker and its soft fill, the phone reading-progress bar, search focus border, `accent-color` and caret, the numbered prose-h2 counters (via the link token).
- **Deep Action Blue** (`button-fill`, hover `button-fill-hover`): fill for every solid button and the current pager page, chosen because white text on it clears 4.5:1. It also fills the logo's accent.
- **Link Blue** (`link-dark` / `link-light`): links, category labels in card meta, "more" links, active numbers. Light theme links share the action-blue value.
- **Blue Wash** (`primary-soft-dark` / `primary-soft-light`): the highlighted current section in the contents rail and search-result marks.

### Secondary
- **Pro Gradient** (`pro-violet` → `pro-indigo`, 135deg): civitai.com's Pro colours, used only as the fill of the one "Try it on Civitai" action per page.

### Neutral
- **Graphite Ground** (`ground-dark`) / **Paper White** (`ground-light`): page ground, header, menus.
- **Sunken** (`sunken-dark` / `sunken-light`): the Up-next band below an article; dark code-block ground.
- **Raised Surface** (`surface-dark` / `surface-light`): cards that hold content (start-here steps, glossary, Follow-along, closing band), active chip, tags, search field, inline code.
- **Surface 2** (`surface-2-dark` / `surface-2-light`): hover on tags and copy buttons, avatars; doubles as the default 1px rule colour.
- **Strong Rule** (`border-strong-dark` / `border-strong-light`): inputs, icon buttons, code blocks, the closing band, table header rules, blockquote rule.
- **Body Text** (`text-dark` / `text-light`), **Dim Text** (`text-dim-dark` / `text-dim-light`) for meta, counts and labels, **Heading** (`heading-dark` / `heading-light`) for titles, strong text and active states.

### Status
Callout roles only: note uses the link blue, tip `success-*`, warning `warning-*`, caution `danger-*`, each in its theme's value.

### Named Rules
**The One Gradient Rule.** The Pro gradient fills at most one action per page, and that action always goes to civitai.com. Every other solid action is Deep Action Blue.

**The Two Blues Rule.** Fills use Deep Action Blue so white text passes AA; the brighter Civitai Blue family is for accents, rails, focus and links, never a white-text fill.

## Typography

**Display Font:** Mona Sans (variable, wdth 75-125, wght 600-900), falling back to Inter and the system stack
**Body Font:** Inter (400/500/600) with the system stack, `cv11` and `ss01` on
**Label/Mono Font:** JetBrains Mono (400/600)

**Character:** A wide, heavy grotesk headline voice over a neutral, highly legible reading face; mono marks what is literal.

### Hierarchy
- **Display** (800, `display` size, 1.05, wdth 125): article title, front-page lead headline, archive title (archive uses its own clamp up to 3rem).
- **Headline** (700, `headline` size, 1.2, wdth 115): prose h2; heavier (800) on the closing band and the archive's lead card.
- **Title** (700, 1.375rem card / 1.1875-1.375rem h3, 1.25, wdth 108): card titles, front-page section heads, prose h3. Up-next head runs 1.625rem at wdth 115.
- **Body** (400, 1.0625rem, 1.7 in prose, 1.65 elsewhere): reading column capped at 720px. Lead decks run 1.125-1.25rem.
- **UI** (500, 0.875-0.9375rem): chips, meta, decks, search, buttons (buttons are Mona Sans 600 at 0.9375rem).
- **Label** (600, 0.75rem, 0.08em tracking, uppercase): only where the label is itself the heading or a field/column label: "On this page", the Follow-along title, menu group labels, table headers, code-language tags.
- **Mono** (400, 0.875rem, 1.6): code and prompt blocks, inline code, glossary terms, counts, section and step numbers, list markers, the search shortcut key.

### Named Rules
**The Width Tiers Rule.** Mona Sans width carries the hierarchy: 125% for display titles, 115% for section-level heads, 108% for every other heading. Set `font-stretch` after any `font` shorthand, which resets it.

**The Literal Mono Rule.** Anything the reader copies, types or counts is JetBrains Mono: prompts, commands, terms, counts, numbers. Prompts wrap rather than scroll, and smartypants stays off.

## Layout

Page width 1344px plus a 48px gutter each side (16px below 1024px); header height 68px (56px on phones). The spacing scale steps 4/8/12/16/24/32/48/64px; front-page sections are separated by 88px (48px on phones).

- **Front page:** lead story as a 1.25fr cover / 1fr copy grid with 56px gap; start-here as three equal step cards; Latest as a three-column cover grid (48px row, 32px column gap), two columns below 1024px, one below 700px where only the three newest show; a 1.45fr / 1fr band holds the topic index and the glossary card; a closing band ends the issue. Everything stacks to one column below 1024px.
- **Article:** a three-track grid, 240px contents rail, a 720px reading column, and an aside up to 300px for Follow-along, with a 64px gap. Below 1280px the rail narrows to 220px and the aside drops under the column; below 1024px the rail becomes a sticky phone contents bar with a sheet, and the cover goes edge to edge. Pages without a rail centre the column. The article hero shares the body grid: breadcrumb, title, deck and byline start on the reading column's left edge, so the eye returns to one edge from the hero into the body. The whole hero stays in that 720px column (the deck at about 65 characters a line); the title fills each line (`text-wrap: pretty`, never `balance`). The cover spans the full shell as the visual break. Pages keep the hero on their centred column.
- **Archives:** a ruled header, then the Latest grid where the newest post spans the row as cover-left, copy-right; a pager closes the list.
- **Big screens (1920px and up):** the page width grows to 1600px; Latest and archive grids go four across (the front page renders eight latest and shows six below 1920px; the archive lead spans three columns with the next post in the fourth), the lead cover may reach 640px tall, and the article keeps its 720px column centred while the rail and the Follow-along card sit at the shell's outer edges and the cover follows the 1600px shell. Nothing below 1920px changes.
- Breakpoints: 700px, 1024px, 1280px, 1440px (header tightening), 1920px (big screens), 2200px (the big-monitor greeting).

### Named Rules
**The Big Monitor Exception.** One decoration is allowed outside the shell: "Wow, you have a big monitor!" set vertically (top to bottom) in Mona Sans 800 at the 125% width, in the strong-rule colour, fixed to the right edge below the header. It shows only from 2200px, where the right gutter is far wider than the line, never overlaps content or the header, and is `aria-hidden`, unselectable, ignored by Pagefind and never printed. Its only motion is a one-time fade-in that reduced motion skips.

## Elevation & Depth

Flat by default. Depth comes from tonal steps (sunken, ground, surface, surface 2) and 1px rules in the border or strong-border colour. A shadow appears only where a layer actually floats over content.

### Shadow Vocabulary
- **Pop** (`0 12px 32px rgba(16, 17, 19, 0.14)` light, `0 12px 32px rgba(0, 0, 0, 0.45)` dark): the search results dropdown and the phone contents sheet.

### Named Rules
**The Tonal Lift Rule.** Cards and bands lift by surface colour and a hairline, never by shadow. A shadow means the layer floats above the page.

## Shapes

Gentle, consistent corners: 6px for small inner pieces (step numbers, copy buttons, rail items), 8px for buttons, inputs, code blocks, callouts and square covers, 12px for wide covers and content cards, full pills for chips, tags and pager pages. Rules are 1px; the only 2px lines are the blockquote rule and the contents rail's current-section marker. Covers clip to their radius; on phones the article cover runs square-edged to the screen edges.

### Named Rules
**The Intrinsic Cover Rule.** Grid covers are 16:9, cropped from the centre. The lead story and article covers keep their own ratio, because covers carry their own lettering, capped in height and contained over a blurred copy of themselves; square thumbnails do the same inside a 1:1 frame.

## Components

### Buttons
Solid, compact, confident.
- **Shape:** gently curved (8px), min height 44px (48px in phone sheets), 24px side padding, Mona Sans 600 at 0.9375rem, optional 16px trailing icon.
- **Primary:** Deep Action Blue fill, white text; hover steps to `button-fill-hover`. Used for "Read the guide", the phone menu CTA, search submit.
- **Pro:** the Pro gradient, white text; hover brightens (`filter: brightness(1.1)`). One per page: the closing band on the front page, Follow-along on articles.
- **Icon button:** 38px square (40px on phones, borderless), 1px strong border, transparent; hover fills surface.
- **Focus:** 2px Civitai Blue outline, 2px offset, everywhere.

### Chips
- **Style:** pill, no border, body text colour, 0.875rem/500, 7px 14px padding.
- **State:** hover gets a 60% surface wash and heading text; the current topic gets the full surface fill. In the header the row fades at an overflowing edge instead of clipping a chip.
- **Tags** (article footer): pill on surface, hover to surface 2.

### Cards / Containers
- **Post card:** no frame. A 16:9 cover (12px), then title (Title role, heading colour, link blue on hover of title or cover), meta "Category · date" with the category in link blue, then a three-line deck. Cover hover brightens the image 1.08.
- **Step card:** surface fill, 1px rule, 12px radius, 12px padding, a 112px square thumbnail (72px on small phones) with the step number in a ground-coloured tab on its corner; hover strengthens the border.
- **Panels** (glossary, Follow-along, closing band): surface fill, 12px radius, 1px rule (strong rule on the closing band), 20-48px padding.

### Inputs / Fields
- **Search:** 38px tall, surface fill, 1px strong border, 8px radius, dim icon and placeholder, a mono `/` key hint. Hover mixes the border toward dim text; focus turns the border Civitai Blue and hides the key hint. Results float below in a 12px-radius ground panel with the Pop shadow.

### Navigation
- **Header:** sticky, ground fill, bottom rule. Logo (22px tall) and an "Education" sub-label, topic chips, search, theme toggle. Below 1440px it tightens; below 1280px the sub-label goes; below 1024px chips and search give way to search and menu icon buttons and a full-height menu sheet listing topics in Mona Sans 600 with mono counts.
- **Pager:** pill page numbers (40px), Newer/Older pills with a strong border, current page in Deep Action Blue.
- **Footer:** one quiet row of dim links on a top rule.

### Contents Rail (signature)
A sticky list beside the article with a 1px strong left rule. Each entry carries a mono section number; read sections dim, the current one gets a 2px Civitai Blue marker, the Blue Wash fill and heading text, and a "resume" link returns to where the reader stopped. On phones it becomes a sticky bar showing the current section, a 36px progress line and a sheet with the same states.

### Prose Blocks
- **Callouts:** tinted fill (8% of the role colour over ground), full 1px border at 32% of the role colour, 8px radius, 16px role icon at the left, title mixed toward the heading colour for AA.
- **Code and prompts:** sunken ground, strong rule, 8px radius, a header strip with an uppercase mono language tag and a Copy button; mono 0.875rem/1.6, wrapped; syntax colours flattened to the code text colour.
- **Tables:** full width, 1px row rules, uppercase label-role headers, tabular numerals. Revision history is a collapsible ruled box.
- **Numbered sections:** article h2s hang a link-blue mono counter in the margin with a fixed 14px gap.

## Do's and Don'ts

### Do:
- **Do** fill solid buttons with Deep Action Blue (`button-fill`) and keep the brighter Civitai Blue for accents, focus and rails.
- **Do** spend the Pro gradient on one action per page, and only on the way back to civitai.com.
- **Do** set every heading in Mona Sans at a width tier (125 / 115 / 108%) and read in Inter at 17px, 720px measure.
- **Do** put code, prompts, terms, counts and numbers in JetBrains Mono.
- **Do** show grid covers at 16:9 and lead/article covers at their own ratio, contained over a blurred copy.
- **Do** separate surfaces with tonal steps and 1px rules; reserve the Pop shadow for floating layers.
- **Do** define every colour in both themes and let the OS choose until the visitor toggles.

### Don't:
- **Don't** put a coloured side stripe on cards or callouts; callouts take a full 1px border in their role colour.
- **Don't** set a small uppercase kicker or eyebrow above a heading; the label role is only for labels that stand in as the heading or name a field or column.
- **Don't** draw value bars, meters or stats that no real content supports.
- **Don't** use the Pro gradient for a second action, a background or text.
- **Don't** crop a lead or article cover; their lettering is part of the art.
- **Don't** use a glyph or emoji as an icon; icons are inline stroke SVGs.
