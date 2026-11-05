---
title: "Make Your Own Civitai Cosmetic Set with Claude Code or Codex"
slug: "make-your-own-civitai-cosmetic-set-with-claude-code-or-codex"
date: "2026-11-05T21:00:00Z"
categories:
  - "civitai"
  - "guides"
tags:
  - "creator-shop"
  - "stickers"
  - "cosmetics"
  - "api"
  - "guide"
author: "civitai"
unlisted: true
covers:
  - "creator-shop"
  - "stickers"
  - "api-keys"
reviewed: "2026-11-05"
excerpt: "Hand your AI coding agent (Claude Code or Codex) an idea and a Civitai API key, and it generates a matching set of stickers, badges, avatar frames or a profile background on Civitai, cuts them out, and checks them against the Creator Shop's rules, ready to submit."
seo:
  title: "Make Your Own Civitai Cosmetic Set with Claude Code or Codex - Civitai Education"
  description: "Use Claude Code or Codex and a free skill to make Civitai stickers, badges, avatar frames and profile backgrounds: art generated on Civitai, transparent cut-outs, and the Creator Shop's checks run before you submit."
---

| **Last Updated** | **Changes** |
| --- | --- |
| 11/05/2026 | First version. |

:::note
Review copy. This page is not listed anywhere and is hidden from search engines.
:::

A cosmetic set is a handful of items in one style: a sticker pack people use in comments and chat, or a
badge, an Avatar Frame and a profile background that go together. This guide shows how to make one with
an AI coding agent doing the plumbing. You pick the idea and the look. Your agent generates the art on
Civitai, cuts each piece out to a clean transparent background, sizes it, and runs the same checks the
Creator Shop's submit form runs, so every file is ready to upload. You submit it yourself.

**What you'll make:** finished PNG files (and, if you like, animated WebP) for any of the four types you
can sell in the Creator Shop, plus a contact sheet that shows every item on dark and light backgrounds.
A set of four items costs about 280 Buzz to generate.

You don't need to know how to code. You need to be comfortable pasting a few commands into a terminal
and reading what your agent tells you.

## Who can sell, and what

Anyone can make the files. To **sell** them, you need a Creator Shop, which is open to
[Creator Program](/civitais-guide-to-earning-with-the-creator-program/#how-do-i-join-and-who-s-eligible-to-earn)
members. The Shop tab on your profile is where you submit items.

The submit form offers four cosmetic types:

| Type | Where it shows |
| --- | --- |
| **Badge** | A small badge on your profile |
| **Avatar Frame** | Around your profile picture, static or animated |
| **Profile Background** | Behind your mini-profile card, on your profile, and on model and image pages |
| **Sticker** | In comments and chat |

[Civitai's Guide to the Creator Shop and Stickers](/civitais-guide-to-the-creator-shop-and-stickers/#selling)
covers the shop side in full: the submit form, fees, review, packs and payouts. This guide covers making
the art.

## The rules your art has to meet

The submit form checks every file before you pay, and refuses one that fails. Your agent runs the same
checks first (all but the loop check for animations, which the skill's own animations can't fail).

| Type | Size | Transparent background | Can be animated |
| --- | --- | --- | --- |
| Badge | At least 144 x 144 px, square | Yes | Yes |
| Avatar Frame | At least 120 x 120 px, square | Yes | Yes |
| Profile Background | At least 450 x 144 px, 25:8 | No | Yes |
| Sticker | 320 to 512 px on the long edge, at most 2:1 either way | Yes | Yes |

For every type:

- **PNG or WebP**, up to 50 MB.
- **The ratio** may be off by 2% at most.
- **Transparent** means the file has a see-through background, not a white or checkered one.
- **Animation** means an animated WebP: at most 150 frames, at most 30 frames per second, and no blank
  frame where the loop restarts.
- **Duplicates** of artwork already submitted are refused.

Civitai's [Creator Cosmetic Quality Standards](https://civitai.com/content/cosmetic-standards) and the
submit form's design standards add the design rules a reviewer checks:

- **Safe for work** everywhere, PG or PG-13, and **your own original design**: no characters, logos or
  symbols from brands or franchises you don't own, even redrawn.
- **Badges** are built on a hexagon. Elements can break out of it, but the hexagon stays the base. The
  file is still square: the hexagon sits in the middle.
- **Avatar Frames** keep at least half of the avatar visible. They frame the picture; they don't cover it.
- **Profile Backgrounds** stay light on text. One large piece of text is fine; small text meant to be
  read is not.
- **Stickers** must read at 22 px, the size they show inline in text, so a bold shape or face beats fine
  detail, and words are best left out.

The submit form links a starter template for badges and Avatar Frames under its design standards.

## What you need

| Thing | Where to get it |
| --- | --- |
| An AI coding agent: **Claude Code** or **Codex** | See "Install your agent" below. Claude Code needs a paid plan. Codex needs a ChatGPT plan that includes the Codex CLI (Plus or higher at the time of writing; see [OpenAI's Codex pricing](https://developers.openai.com/codex/pricing)) |
| **Node.js** 18 or newer | [nodejs.org](https://nodejs.org) (the LTS download) |
| A **Civitai account with some Buzz** | The art is generated on Civitai and paid for in Buzz from your account |
| A **Civitai API key** | Your account settings (step 1) |
| Optional: **ffmpeg** | Only for animated items. macOS: `brew install ffmpeg`. Windows: `winget install ffmpeg`. Linux: your package manager |

Nothing else to install: the skill's scripts use only what comes with Node. Your agent checks the tools
before it starts and helps you install anything missing. If it installs one for you, quit the agent and
start it again in the same folder (`claude --continue` or `codex resume`) so it can see the new program.

### Install your agent

**Claude Code** needs a Claude Pro, Max, Ultra, Team or Enterprise plan, or an Anthropic Console account (the free
plan doesn't include it). Install it from a terminal, following
[Anthropic's setup page](https://code.claude.com/docs/en/setup):

- macOS or Linux: `curl -fsSL https://claude.ai/install.sh | bash`
- Windows PowerShell: `irm https://claude.ai/install.ps1 | iex`

**Codex** signs in with your ChatGPT account.
Install it following [OpenAI's Codex CLI page](https://learn.chatgpt.com/docs/codex/cli):

- macOS or Linux: `curl -fsSL https://chatgpt.com/codex/install.sh | sh`
- Windows PowerShell: `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"`
  (or `npm install -g @openai/codex` if npm works in your terminal)

To start either one, open a terminal (macOS: the Terminal app; Windows: search the Start menu for
PowerShell; new to terminals? see [Anthropic's terminal guide](https://code.claude.com/docs/en/terminal-guide)),
make a folder for your set and go into it, then start the agent:

```bash
mkdir my-cosmetics
cd my-cosmetics
claude        # or: codex
```

The first time, it asks you to sign in.

## 1. Get your Civitai API key

The API key lets the agent's scripts generate images on your account, paid with your Buzz.

1. Sign in on civitai.com and open the API Keys settings: [civitai.com/user/account#api-keys](https://civitai.com/user/account#api-keys).
   (In the newer settings layout they are under **Security & Apps**.)
2. In **API Keys**, choose **Add API key**.
3. Give it a **Name** you will recognize, like "cosmetics", and set **Permission preset** to
   **AI Services**. That is enough to generate, and it can't post, change settings or tip.
4. Choose **Save**, then copy the key with the copy button. Civitai shows it only once, so keep it
   somewhere safe until the agent asks for it.

Treat the key like a password: anyone with it can spend your Buzz. You can delete it on the same page
when you're done.

**Giving the key to your agent.** Paste it when your agent asks. It saves it in a file named `.env` in
your set's folder and keeps that file out of git. The skill's scripts send the key only to civitai.com
addresses.

**Which Buzz pays.** The scripts let Civitai charge Blue Buzz (the free Buzz from daily rewards) or
Green Buzz; our test run was paid from Blue. Every run is priced before it spends anything, and if
your balance is too low it says so and spends nothing. [Buzz Colors](/buzz-colors-blue-yellow-and-green/)
explains the colors.

## 2. Install the skill

The **skill** is a small folder of instructions and scripts that tells your agent exactly how to make a
set. It is free and lives on this site:

- Instructions: [education.civitai.com/skills/civitai-cosmetics/SKILL.md](/skills/civitai-cosmetics/SKILL.md)
- Everything as one download: [civitai-cosmetics.zip](/skills/civitai-cosmetics.zip)

Both agents read skills from a folder in your home directory: `.claude/skills` for Claude Code and
`.agents/skills` for Codex. Install it once.

### Claude Code

macOS or Linux:

```bash
mkdir -p ~/.claude/skills && cd ~/.claude/skills
curl -fsSL -o civitai-cosmetics.zip https://education.civitai.com/skills/civitai-cosmetics.zip
unzip -o civitai-cosmetics.zip && rm civitai-cosmetics.zip
```

Windows (PowerShell):

```powershell
New-Item -ItemType Directory -Force "$HOME\.claude\skills" | Out-Null
cd "$HOME\.claude\skills"
curl.exe -fsSL -o civitai-cosmetics.zip https://education.civitai.com/skills/civitai-cosmetics.zip
Expand-Archive -Force civitai-cosmetics.zip .
Remove-Item civitai-cosmetics.zip
```

Start a new Claude Code session afterward so it sees the skill.

### Codex

The same commands, with `.agents` in place of `.claude`:

macOS or Linux:

```bash
mkdir -p ~/.agents/skills && cd ~/.agents/skills
curl -fsSL -o civitai-cosmetics.zip https://education.civitai.com/skills/civitai-cosmetics.zip
unzip -o civitai-cosmetics.zip && rm civitai-cosmetics.zip
```

Windows (PowerShell):

```powershell
New-Item -ItemType Directory -Force "$HOME\.agents\skills" | Out-Null
cd "$HOME\.agents\skills"
curl.exe -fsSL -o civitai-cosmetics.zip https://education.civitai.com/skills/civitai-cosmetics.zip
Expand-Archive -Force civitai-cosmetics.zip .
Remove-Item civitai-cosmetics.zip
```

Start a new Codex session afterward. You can also mention the skill by name: type `$` and pick
`civitai-cosmetics`.

### Any other agent

Skip the install. Any agent that can run terminal commands and read a web page can follow the prompt in
the next step, which tells it where to download the skill.

## 3. Paste this to your agent

Start your agent in your set's folder and paste this. Fill in the two lines in angle brackets.

```text
Make me a Civitai cosmetic set to sell in my Creator Shop.
Follow the skill at https://education.civitai.com/skills/civitai-cosmetics/SKILL.md
(the full skill, with its scripts, is https://education.civitai.com/skills/civitai-cosmetics.zip).
What I want: <for example: 8 reaction stickers of a grumpy cartoon cat, plus a matching badge>
The look: <for example: thick black outlines, flat pastel colors, chunky kawaii style>
Generate the art on Civitai with my API key. Show me the prompts and the Buzz price before you generate,
and show me the contact sheet before you call anything finished. Don't submit anything to the shop.
```

That's the whole setup. Your agent takes it from here and checks in with you at each step.

**Expect permission prompts.** Your agent asks before it downloads files or runs a script ("Allow this
command?"). That's normal: approve them. If you see one that would spend Buzz, check that you already
agreed to the price.

## 4. What your agent does

1. **Checks the tools and makes the set folder.** It reports Node, your key and ffmpeg, and writes an
   example `set.json`, the one file that describes your set.
2. **Plans the set with you.** One character or motif and one style line that every item shares, which
   is what makes a set look like a set. For stickers, it suggests reactions people actually type (yes,
   no, lol, thanks, wow, gg). For a profile kit, a badge, an Avatar Frame and a profile background.
3. **Prices the run, then generates.** Each item is generated on Civitai on a perfectly flat background
   color, by default bright green, which the next step removes. If your art is green, it uses magenta
   instead. It shows you the price and waits for your OK.
4. **Looks at every raw image** and regenerates any where the background isn't flat, the art touches the
   edge, or the character drifted off-model.
5. **Cuts out, sizes and checks.** The background color is keyed out with a soft edge. Edge pixels are
   cleaned so no green rim is left. The art is trimmed, given an optional white die-cut outline, and
   placed on the right canvas for its type. Then every file goes through the shop's checks: format,
   size, ratio, transparency, animation limits and file size.
6. **Shows you a contact sheet** with each item on a dark tile, a light tile and at small size. A leftover
   fringe shows on one tile or the other, and the small one tells you whether a sticker reads at chat size.
7. **Optionally animates** a still into a looping WebP (a gentle float, a pulse, a wiggle, or a light
   sweep across a badge), and checks it again.
8. **Hands over** the finished files, the Buzz it spent, and the submit steps. It never submits for you.

### A worked example

We ran the skill's example set as it ships: a night owl in a purple and teal palette, three reaction
stickers (waving, yawning over a coffee, amazed) and a matching hexagon badge. The style line in
`set.json` was "cute chibi night owl character, flat vector illustration, bold clean dark outlines, soft
cel shading, purple and teal palette", and each item's prompt was one line, like "the owl waving one
wing with a big friendly smile".

- **The price check** quoted 276 Buzz for the four images, about 69 each, paid from Blue Buzz. The run
  billed exactly that.
- **Generation** returned each item on a flat green screen at 1024 x 1024.
- **The cut-out** made the stickers 512 px on the long edge (436 x 512, 377 x 512 and 512 x 500) with an
  8 px white die-cut outline, and the badge 256 x 256. No settings needed changing.
- **The checks** passed all four. As a control, the raw green-screen image checked as a sticker fails
  twice, on size and on transparency.
- **The badge** was then animated with a light sweep: 24 frames at 12 frames per second. It still passed.

![Left: a generated owl sticker on a flat green screen. Right: the same owl cut out, with a white die-cut outline, on a dark background](/images/guides/make-your-own-civitai-cosmetic-set-with-claude-code-or-codex/before-after.webp)

The contact sheet shows each item on a dark tile, a light tile, and at small size (22 px for stickers).
No green rim on either background, and the owl still reads at chat size.

![Contact sheet: three owl stickers and a hexagon owl badge, each on dark, on light, and small](/images/guides/make-your-own-civitai-cosmetic-set-with-claude-code-or-codex/contact-sheet.webp)

## 5. What it costs

**Making the art:** each image is generated with GPT Image 2.5 Flare at 1024 x 1024, which cost 69 Buzz per
image in our run, so a 4-item set is about 280 Buzz and a 12-sticker pack about 830, plus
any images you redo. The price is always shown before anything is spent, and the scripts refuse a run
priced above a cap (500 Buzz unless you raise it). Cutting out, checking and animating run on your
computer and cost nothing.

**Selling it:** every item you submit has a **submission fee** in Buzz, set per cosmetic type and shown
on the submit form before you pay. It is not refunded if the item is rejected, so read the number and work
out how many sales it takes to cover it. A pack has its own, separate fee. Each item sells for at least
500 Buzz, and you keep **70%** of each sale. A sticker sells as a number of uses, up to 100 per purchase, at
no less than 5 Buzz per use. [The Creator Shop guide](/civitais-guide-to-the-creator-shop-and-stickers/#fees)
has the details.

## 6. Make it better

- **Keep the character on-model.** Put everything that defines the character in the style line (species,
  colors, one or two distinctive details) and keep each item's prompt to the pose or expression.
- **Redo just one item.** Ask your agent to regenerate one id; the rest are kept.
- **A haze or speckles left around the art:** ask for a higher cut-out tolerance on that item. **Thin
  parts eaten away:** a lower one. **A colored rim:** a stronger defringe. None of these regenerate the
  image, so they cost nothing.
- **Animate the best one.** A badge with a light sweep or a sticker that bobs stands out in the shop.
  Keep the still too, in case you prefer it.
- **Bundle the set.** Once several items are approved, a pack sells them together. See
  [Building packs](/civitais-guide-to-the-creator-shop-and-stickers/#building-packs).

## 7. Submit your set

Open the **Shop** tab on your profile, then **Manage Your Shop**, then **Submit an item**, once per
file. Pick the type, upload the file your agent named (`out/<name>.webp` if there is one, otherwise
`out/<name>.png`), and fill in the rest: title, description, price, and for a sticker its slug and uses.
For an Avatar Frame, **Adjust fit** lines it up with a sample avatar. The form shows the fee and runs its
checks before you pay, then a moderator reviews the item before it goes on sale.
[Submit an item](/civitais-guide-to-the-creator-shop-and-stickers/#submit) walks through every field.

## For teams and partners: hats, nameplates and card glows

Some cosmetics can't be submitted through the Creator Shop. Hats, nameplates and card glows are added to
Civitai by staff, usually for an event or a partner project. If you're making art for one of these, the
method is the same as above, with a hand-off at the end:

1. **Get the brief and the specs from Civitai staff:** canvas size, where the art sits (on an avatar, a
   card or an image), whether it can be animated, and how many color variants are needed. Don't guess
   these; each placement has its own.
2. **Make one master per design** on a flat key-color background, then the color variants from it, so
   every variant lines up exactly.
3. **Cut out and defringe** the same way the skill does: key out the background with a soft edge and clean
   the key color out of the edge pixels, so nothing tinted shows against light or dark themes.
4. **Check the fit** on the real placement at more than one size (a small card and a large one) before
   calling it done. Art that looks centered on a canvas can clip at the edge of a card.
5. **Export** a transparent PNG for every still and an animated WebP for anything that moves, within the
   same limits as the shop (at most 150 frames, at most 30 frames per second).
6. **Hand the finished files and the specs back to staff.** They review them and add them to Civitai.

The skill's `cutout.mjs`, `check.mjs` and `sheet.mjs` work on any PNG, so they help with steps 3 and 5
even for types the shop doesn't list.

## Troubleshooting

| What you see | What to do |
| --- | --- |
| `CIVITAI_API_KEY is not set` | The `.env` file is missing or in the wrong folder. It goes in the set's folder, named exactly `.env` |
| An error with 401 or 403 | The key is wrong, was deleted, or has a preset that can't generate. Make a new one with the **AI Services** preset |
| `not enough Buzz on this account` | The price check found your balance too low and spent nothing. Add Buzz, or ask the agent to generate fewer items at a time |
| A prompt is refused | It tripped a content check. Change the idea; don't try to word around it |
| A checkerboard pattern instead of a flat background | The prompt asked for transparency somewhere. Ask the agent to remove words like "transparent" and regenerate that item |
| A check fails on the submit form but passed here | Tell your agent which check and what the form says. The form is the final word |
| `ffmpeg` not found, or `Unknown encoder 'libwebp_anim'` | Only animation needs it. Install a full ffmpeg build (see "What you need"), then restart the agent in the same folder |

## For the curious

**What's in the skill.** Small Node scripts with no dependencies: `setup.mjs` makes the set folder,
`gen.mjs` generates the art, `cutout.mjs` removes the background and sizes each item, `check.mjs` runs the
shop's checks, `sheet.mjs` makes the contact sheet, and `animate.mjs` makes an animated WebP with ffmpeg.
They talk to Civitai's generation API directly with your API key.

**Civitai's MCP servers.** If your agent supports MCP, Civitai has two servers. The
[generation server](https://developer.civitai.com/orchestration/mcp/) at
`https://orchestration.civitai.com/mcp/v2` runs the same generation the skill uses. The
[site server](https://developer.civitai.com/site/mcp/) at `https://mcp.civitai.com/mcp` browses models and
images and can post and comment on civitai.com, but doesn't generate. The skill works without either.
