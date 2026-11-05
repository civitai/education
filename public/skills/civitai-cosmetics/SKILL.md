---
name: civitai-cosmetics
description: Make a set of Civitai cosmetics (stickers, badges, avatar frames, profile backgrounds) with art generated on Civitai, cut out to a transparent background, sized and checked against the Creator Shop's artwork rules, ready for the person to submit. Paid with the user's Civitai API key. Use when someone wants to make Civitai stickers, a badge, an avatar frame, a profile background or a cosmetic set to sell in the Creator Shop.
---

# Civitai cosmetics

You are helping someone make a set of cosmetics for Civitai's Creator Shop. You plan the set with them,
generate the art on Civitai with their API key, cut it out, size it, check it against the shop's artwork
rules, and hand them finished files. **You never submit anything and never pay a listing fee.** The person
uploads each file on civitai.com themselves, where the submit form shows the fee and runs the same checks.

Work in this order and show the person something at each step. They decide what looks good; you do the
plumbing.

## What you need before starting

- **Node.js 18 or newer** (`node -v`). Nothing to install with npm: the scripts use Node's built-ins only.
- **ffmpeg** (optional) only for animated WebP (`animate.mjs`). Stills work without it. If missing:
  macOS `brew install ffmpeg`, Windows `winget install ffmpeg`, Linux your package manager. After installing
  mid-session, your own shell may not see it until the person restarts you in the same folder
  (`claude --continue` for Claude Code, `codex resume` for Codex).
- **A Civitai API key.** The person creates one at https://civitai.com/user/account (in the newer settings
  layout: Security & Apps), in "API Keys": **Add API key**, a name, **Permission preset: AI Services**
  (enough to generate), **Save**, then copy it (it is shown once). Generation is paid in Buzz from that
  account, in Blue or Green Buzz.
- **To sell:** the Creator Shop is open to Creator Program members. Anyone can make the files; only a
  member can submit them.

### The API key

The scripts read `CIVITAI_API_KEY` from the environment, or from a `.env` file in the set folder with one
line, `CIVITAI_API_KEY=their-key`. Easiest: after setup, ask the person to paste the key and write `.env`
yourself. Never print it, echo it back, put it in a prompt, or commit it (setup writes a `.gitignore` that
keeps `.env` out of git). The scripts send the key only to `https://*.civitai.com`, and refuse any other host.

## Get these skill files

This skill is a folder: `SKILL.md`, `scripts/` and `template/`. If you only have this file, download the
whole folder:

```bash
curl -fsSL -o civitai-cosmetics.zip https://education.civitai.com/skills/civitai-cosmetics.zip
unzip civitai-cosmetics.zip        # makes a civitai-cosmetics/ folder
```

On Windows PowerShell use `curl.exe` and `Expand-Archive civitai-cosmetics.zip .` instead of `unzip`.

Below, `SKILL_DIR` means the folder that holds this `SKILL.md`, for example
`~/.claude/skills/civitai-cosmetics` (Claude Code) or `~/.agents/skills/civitai-cosmetics` (Codex). In
PowerShell use the full path (`$HOME\.claude\skills\civitai-cosmetics`).

## The artwork rules

These are the checks the Creator Shop's submit form runs. `check.mjs` runs the same ones, except the
loop-seam check for animations (`animate.mjs` never makes a blank frame, so its output can't fail it).

| Type (`type` in set.json) | Size | Transparent | Animated |
| --- | --- | --- | --- |
| Badge (`badge`) | at least 144x144, square | yes | yes |
| Avatar Frame (`avatar-frame`) | at least 120x120, square | yes | yes |
| Profile background (`profile-background`) | at least 450x144, 25:8 | no | yes |
| Sticker (`sticker`) | 320 to 512px on the long edge, at most 2:1 | yes | yes |

All types: PNG or WebP, under 50 MB. A ratio may be off by 2% at most. "Transparent" means the file has an
alpha channel and more than 2% of it is see-through. Animation means an animated WebP with at most 150
frames, at most 30 fps, and no blank frame where the loop restarts.

The shop's quality standards (https://civitai.com/content/cosmetic-standards) add:

- Safe for work everywhere (PG / PG-13). Original designs only: no characters, logos or symbols from
  brands or franchises the person does not own, even redrawn.
- **Badges** are built on a hexagon (Civitai's starter template is a pointy-top hexagon). Elements may
  break out of it, but the hexagon stays the base, at a consistent size across a set. The file itself
  must still be square: the hexagon sits in the middle of a square canvas.
- **Profile backgrounds** stay light on text: one large piece is fine, small readable text is not. They
  sit behind the creator card, so they should not compete with it.
- **Avatar Frames** keep at least half of the avatar visible. They frame it; they do not cover it. The
  image is drawn over the round avatar, edge to edge, so a ring that touches the canvas edge sits at the
  avatar's rim. On the submit form, **Adjust fit** nudges the frame per side to make it stick out past
  the avatar.

Stickers show at 160px on a line of their own and at 22px inline in text, so they need a bold silhouette
and one clear idea each, and no words or small text.

## 1. Check the tools and make the set folder

```bash
node SKILL_DIR/scripts/setup.mjs my-set
cd my-set
```

It makes `my-set/` with `raw/`, `out/`, an example `set.json`, and a `.gitignore`, and reports Node, the
key and ffmpeg. Write `.env` now if the key is missing. Run every other script from inside the set folder.

## 2. Plan the set with the person

Ask what the set is for and who it is for. Agree on:

- **One character or motif and one style line** that every item shares (`style` in set.json). Consistency
  is what makes a set feel like a set.
- **The items:** for a sticker pack, 6 to 12 reactions people actually type in chat (yes, no, lol, thanks,
  wow, sad, on it, gg). For a profile kit, one badge, one Avatar Frame and one profile background in
  the same style.
- **The key color** (`key`): the flat background the art is generated on and then cut out. `green` by
  default. If the art itself is green, use `magenta`; if it is green and pink, use `blue`. Per item, set
  `key` on the item.

Write `set.json`:

```json
{
  "name": "Night Owl",
  "style": "cute chibi night owl character, flat vector illustration, bold clean dark outlines, soft cel shading, purple and teal palette",
  "key": "green",
  "items": [
    { "id": "owl-wave", "type": "sticker", "outline": 8, "prompt": "the owl waving one wing with a big friendly smile" },
    { "id": "owl-badge", "type": "badge", "prompt": "a hexagon badge with a thick teal hexagon rim and a purple night sky inside, the owl's face peeking over the top edge" }
  ]
}
```

`gen.mjs` adds the type's shape rule and the flat-background instruction to every prompt, so prompts only
describe the art. `node SKILL_DIR/scripts/gen.mjs --show` prints the full prompts without spending.

## 3. Price, then generate

```bash
node SKILL_DIR/scripts/gen.mjs                 # price only: asks Civitai what it would cost, spends nothing
node SKILL_DIR/scripts/gen.mjs --go            # generate every item without a raw image
node SKILL_DIR/scripts/gen.mjs --go --only owl-wave --redo    # try one again
```

Always show the person the quote before `--go`. The default model is `gpt-image-2.5-flare`; change it with
`"model"` in set.json. `--max-buzz` (default 500) refuses a run quoted above it. Every workflow and its Buzz
goes into `buzz-log.json`.

Look at every `raw/<id>.png` yourself before moving on. Regenerate (`--only <id> --redo`) when: the
background is not one flat color (a gradient, a shadow, a drawn checkerboard), the art touches the image
edge, the key color appears inside the art, or the character drifted off-model.

## 4. Cut out, size and check

```bash
node SKILL_DIR/scripts/cutout.mjs     # raw/<id>.png -> out/<id>.png at the export size
node SKILL_DIR/scripts/check.mjs      # the shop's checks on every out/ file; exits 1 on a failure
node SKILL_DIR/scripts/sheet.mjs      # sheet.png: each item on dark, on light, and small
```

`cutout.mjs` samples the background from the image border, keys it out with a soft edge, un-mixes edge
pixels from the background color and removes leftover tint along the edges (the defringe step), trims,
adds the optional white die-cut `outline`, and places the art on the type's export canvas: 256x256 for
badges and Avatar Frames, 1350x432 for profile backgrounds (cropped to
25:8, no keying), and 512px on the long edge for stickers.

Open `sheet.png` and look at it with the person. Fixes, per item in set.json:

- A haze or speckles of background left: raise `"tolerance"` (default 70) to 90 or 110.
- Thin parts of the art eaten away, or holes: lower `"tolerance"` to 50.
- A colored rim on the light tile: raise `"despill"` (default about 4px on a 1024px image).
- Too much empty margin: `"pad": 0`. An Avatar Frame that is not round enough: `"fill": true` stretches it
  to the whole square.

Re-run `cutout.mjs`, `check.mjs` and `sheet.mjs` after each change. Everything must say PASS.

## 5. Optional: animate

```bash
node SKILL_DIR/scripts/animate.mjs owl-wave --effect bob       # out/owl-wave.webp
node SKILL_DIR/scripts/check.mjs
```

Effects: `bob`, `pulse`, `wiggle`, `shine` (good for badges). `--frames 24 --fps 12` by default (a 2-second
loop); the shop allows at most 150 frames and 30 fps. `check.mjs` checks
the `.webp` when there is one. Keep the still too: if the person prefers it, delete the `.webp`.

## 6. Hand over

Tell the person:

- Which files to upload: `out/<id>.webp` if it exists, else `out/<id>.png`.
- What it cost: the total in `buzz-log.json`.
- How to submit: on civitai.com, their profile's **Shop** tab, then manage the shop and submit a cosmetic.
  Pick the type, upload the file, name it, set a price (at least 500 Buzz; stickers sell as a number of
  uses, at least 5 Buzz per use), and confirm they hold the rights to the art. The form shows the
  submission fee for that type before they pay; it is not refunded if the item is rejected. Staff review
  every item before it goes on sale. Once several items are approved they can bundle them as a pack.

Do not submit for them, and do not call any Civitai API other than generation.

## Troubleshooting

- **`401` or `403` from Civitai:** the key is wrong, expired, or lacks the AI Services permission.
- **"not enough Buzz":** nothing was spent. Add Buzz or generate fewer items (`--only`, `--limit`).
- **A drawn checkerboard instead of a flat background:** the model was asked for transparency somewhere.
  Remove words like "transparent" or "no background" from the prompt and regenerate.
- **"only 8-bit PNGs are supported":** the raw image is 16-bit. Regenerate, or convert it to 8-bit PNG.
- **ffmpeg says `Unknown encoder 'libwebp_anim'`:** that ffmpeg build lacks libwebp. Install a full build.
