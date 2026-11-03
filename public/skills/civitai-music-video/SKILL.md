---
name: civitai-music-video
description: Make a 1080p music video for a song with timed lyrics (an mp3 plus an .lrc file), using images and short clips generated on Civitai with the user's Civitai API key, karaoke lyrics, and a Remotion render. Use when someone wants a music video for a Civitai launch song or a Civitai music video Crucible, or says "make a music video for this song".
---

# Civitai music video

You are helping someone make a music video for a song they already have, usually the song from a
Civitai music video Crucible. The song comes as an audio file and an `.lrc` file with a time for every
lyric line. You will scaffold a small video project, write one image prompt per lyric line, generate the
images (and optionally a few moving clips) on Civitai with their API key, and render a 1080p mp4 with
karaoke lyrics. They upload the mp4 to the Crucible themselves.

Work in this order and show the person something at each step. They decide what looks good; you do the
plumbing.

## What you need before starting

- **Node.js 18 or newer** (`node -v`).
- **ffmpeg and ffprobe** on PATH (`ffmpeg -version`). If missing: macOS `brew install ffmpeg`,
  Windows `winget install ffmpeg` (then open a new terminal), Linux your package manager.
- **A Civitai API key.** The person creates one at https://civitai.com/user/account, in the
  "API Keys" section ("Add API key"). Generations are paid in Buzz from that account, so the account
  needs some Buzz (see "What it costs").
- **The song zip** from the Crucible page or its linked article: an `.mp3` and an `.lrc` (there may also be a `.txt`; ignore it).

### The API key

Ask the person to put the key in a file named `.env` in the project folder (after step 2 creates it), as
one line: `CIVITAI_API_KEY=their-key`. Or they can set it in their shell (`export CIVITAI_API_KEY=...`
on macOS/Linux, `$env:CIVITAI_API_KEY="..."` in PowerShell). The scripts read either.

- Never print the key, echo it back, paste it into a prompt, or commit it. If the project is a git
  repo, add `.env` to `.gitignore`.
- If they paste the key into the chat, write it to `.env` for them and do not repeat it.

## Get these skill files

This skill is a folder: `SKILL.md`, `scripts/` and `template/`. If you only have this file, download
the whole folder as a zip and unzip it:

```bash
curl -fsSL -o civitai-music-video.zip https://education.civitai.com/skills/civitai-music-video.zip
unzip civitai-music-video.zip        # makes a civitai-music-video/ folder
```

On Windows PowerShell use `curl.exe` (plain `curl` is a different command there) and
`Expand-Archive civitai-music-video.zip .` instead of `unzip`.

Below, `SKILL_DIR` means the folder that holds this `SKILL.md` (for Claude Code, usually
`~/.claude/skills/civitai-music-video`).

## 1. Check the tools

```bash
node -v
ffmpeg -version
```

Stop and help them install anything missing before going on.

## 2. Make the project

From the folder where the person wants the project (not inside `SKILL_DIR`), run setup. It creates the
project folder (`my-video` here) itself:

```bash
node SKILL_DIR/scripts/setup.mjs my-video --zip path/to/song.zip
# or, with loose files:
node SKILL_DIR/scripts/setup.mjs my-video --song song.mp3 --lrc song.lrc --title "My Title"
```

This copies the Remotion template, installs it (about a minute; an npm warning about esbuild install
scripts is harmless), copies the song to
`public/song/song.mp3`, turns the `.lrc` into `lyrics.json`, and writes `scenes.json` with one scene per
lyric line, plus an intro scene if the singing starts after the first second and a scene for any
instrumental gap over 4 seconds. It also writes a `.gitignore` that keeps `.env`, `node_modules` and
`out` out of git. Run every later command from inside the project folder (`cd my-video`).

Project files you will edit:

| File | What it holds |
|---|---|
| `video.json` | Title, subtitle, colors (`palette`), song length, optional `bpm`, optional `outro` |
| `lyrics.json` | Timed lines from the `.lrc`: `{ text, start, end }` in seconds. Usually leave it alone |
| `scenes.json` | `style` (added to every prompt), `negativePrompt` (what to keep out of every image), optional `model`, image size (1344x768, close to 16:9), and the `scenes` list |

Each scene is `{ id, from, to, line, prompt }`. `from`/`to` are song seconds, `line` is the lyric sung
during it, and `prompt` is yours to write. After generation a scene also gets `file`.

### About the lyrics file

The `.lrc` is standard LRC: one line per lyric, each starting with its time, for example
`[00:14.92]Take the turf, take the turf`. Tags like `[ti:...]` are skipped. LRC gives start times only,
so each line ends when the next one starts (or shortly after its last word, if a long instrumental
follows), and inside a line the words light up evenly. That reads well for karaoke. If a line looks
early or late in the preview, nudge its `start`/`end` in `lyrics.json`.

## 3. Plan the look with the person

Ask two or three quick questions before writing prompts:

- What look? (glossy 3D cartoon, anime, watercolor, photoreal, pixel art, claymation...)
- Who is in it? (a recurring character or two helps a lot; describe them the same way in every prompt)
- Anything they want to see at a particular line?

Then:

1. Read every `line` in `scenes.json`. Write a `prompt` for each scene that shows **what that line means**.
   A picture that matches the words is the single biggest quality win.
2. Put the shared look in `style`, e.g. `"glossy 3D cartoon, vivid party colors, cinematic lighting, no text"`.
   It is appended to every prompt, so scenes match.
3. Repeat the character description word for word in every prompt where they appear.
4. Set `title` (and `subtitle` if wanted) in `video.json`. Setup guesses the title from the `.lrc`; check it.
   The title shows for the first 3.5 seconds.
   For an ending card, set `"outro": { "text": "Made on Civitai", "from": <seconds before the end> }`.
5. Show the person the list of lines and prompts, and adjust before spending anything.

Prompt tips (from test runs):

- Describe a scene, not a picture of one. Words like "frame", "poster", "painting" or "image" often make
  the model draw a literal framed picture.
- Image models take words literally: "cap" may give a baseball and a pitcher. Say exactly what should be visible.
- Add "no text" to `style`; generated text is usually gibberish and fights with the lyrics.
- Keep the bottom fifth of each image simple. The lyrics sit there.
- Keep the subject near the middle and away from the top edge: the frame is cropped a little to fit 16:9.
- Keep it within the Crucible's content rating (the first round allows PG and PG-13). No real people,
  celebrities, or other creators' characters or art.
- **Young-looking characters:** with the default model, "cute girls" or "kids" can come back as teens in
  revealing outfits. Prefer non-human mascots (animals, robots, toy-like figures), or describe people as
  adults in full, everyday clothing ("in baggy hoodies and jeans"). The default `negativePrompt` already
  lists revealing clothing and text; add to it, don't remove from it. Check every image before using it.

## 4. Price, then generate the images

Always price first. This spends nothing:

```bash
node SKILL_DIR/scripts/gen.mjs
```

Tell the person the quote and get a yes before spending. Then generate a couple of scenes first so they
can judge the look cheaply:

```bash
node SKILL_DIR/scripts/gen.mjs --limit 2 --go
```

Look at them: `node SKILL_DIR/scripts/sheet.mjs --scenes` tiles every generated image into `out/scenes.png`
(in scene order). Show the person too. If the look is right, generate the rest:

```bash
node SKILL_DIR/scripts/gen.mjs --go
```

To redo one: `node SKILL_DIR/scripts/gen.mjs --only s07 --redo --go`. Every spend is recorded in
`buzz-log.json`. A run refuses to spend more than 250 Buzz at once unless you pass `--max-buzz`.

Using a specific Civitai model: set `"model"` in `scenes.json` to a checkpoint AIR such as
`urn:air:sdxl:checkpoint:civitai:<modelId>@<versionId>`, and set `width`/`height` to suit it
(1344x768 and 1216x832 work for SDXL and Flux). Find models and their AIR with the Civitai MCP server (below) or on
civitai.com. Leave `"model": null` for Civitai's default image model.

## 5. Preview a short clip

```bash
node SKILL_DIR/scripts/render.mjs --from 0 --to 15     # -> out/test.mp4
node SKILL_DIR/scripts/sheet.mjs --video out/test.mp4 --every 1.5   # -> out/sheet.png
```

Look at `out/sheet.png` yourself (it is one image with a frame every 1.5 seconds) and check: the lyric
band is readable, each picture matches its line, nothing important is hidden behind the lyrics. Then ask
the person to watch `out/test.mp4`. Scenes with no image yet render as labeled placeholders, so you can
preview timing before generating everything.

Renders use most CPU cores; add `--concurrency 2` to keep the computer responsive (it renders slower).
For live editing, `npm run studio` opens Remotion Studio in a browser. Stop it when done.

## 6. Optional: a few moving clips

A clip animates one scene's image for about 5 seconds and loops if the scene is longer. Clips cost far
more than images, so save them for the moments that matter (a chorus, the ending).

```bash
node SKILL_DIR/scripts/clip.mjs s05 "the band marches forward in step, confetti falls, slow push in"        # price only
node SKILL_DIR/scripts/clip.mjs s05 "the band marches forward in step, confetti falls, slow push in" --go   # generate
```

Describe the motion only; the image already sets the look. Options: `--duration`, `--res 480p|768p`
(480p is the default and plenty behind lyrics). The clip's own audio is removed; the song carries the video.

## 7. Render the full video

```bash
node SKILL_DIR/scripts/render.mjs          # -> out/video.mp4, 1920x1080, 30 fps, H.264 with the song
node SKILL_DIR/scripts/sheet.mjs           # -> out/sheet.png, a frame every 3 seconds
```

Check the sheet, then check the file against the Crucible's rules (for the first round: the song as
supplied, start to finish, and up to 2 minutes). `ffprobe out/video.mp4` shows the length. If the file is too
big for the upload, re-render with `--crf 26`.

Optional extras in `video.json`: `"bpm": 128` with `"beatOffset": <seconds of the first beat>` adds a
small pulse on the beat; `"titleSeconds": 0` hides the title. `"palette"` is a list of hex colors: the
first three color the title gradient, and sung words light up in each color in turn. Unsung words are
white, so don't put white (or a very light color) in the palette.

## 8. Enter the Crucible

The person enters, not you: they open the Crucible page on civitai.com (all Crucibles are listed at
https://civitai.com/crucibles), choose **Submit Entry**, open the **Upload New** tab, drop in
`out/video.mp4`, wait for the upload's safety check to finish, and submit. Remind them of the rules on the Crucible page (entries per person, length,
content rating, and that the song must be used as supplied).

## What it costs

Measured on test runs with the default image model at 1344x768 and 1216x832; prices can change, so the price-only
run is the real number.

| Item | Buzz |
|---|---|
| One scene image | about 4 |
| A full song, about 18 scenes, images only | about 70 to 80 |
| Redoing a few scenes you did not like | about 4 each |
| One 5-second moving clip at 480p | about 65 |
| Full video with 3 moving clips | about 270 |

## If something goes wrong

- **`CIVITAI_API_KEY is not set`**: create `.env` in the project folder (step "The API key").
- **401 or 403**: the key is wrong or was deleted. Make a new one at https://civitai.com/user/account.
- **Not enough Buzz**: the account needs more Buzz. Nothing was charged for the failed request.
- **A prompt or image is refused for content policy**: do not reword it to sneak past the check. Change
  the idea of the scene, or skip it.
- **A step failed**: run the same command again; it only generates scenes that still have no image.
- **Render fails on fonts or downloads**: the render needs internet once, for the font and Chrome.
- **Lyrics out of sync**: edit `start`/`end` for that line in `lyrics.json` and render the preview again.

## Optional: the Civitai MCP servers

The scripts above only need the API key. If the agent supports MCP, two Civitai servers can help:

- `https://mcp.civitai.com/mcp`: search models, images and creators on Civitai (to pick a `model` AIR).
  Browsing needs no key.
- `https://orchestration.civitai.com/mcp/v2`: the generation service itself, with price-only (`whatif`) runs.

Claude Code:

```bash
claude mcp add --transport http civitai https://mcp.civitai.com/mcp --header "Authorization: Bearer $CIVITAI_API_KEY"
```

Codex, in `~/.codex/config.toml` (with `CIVITAI_API_KEY` set in the environment Codex runs in):

```toml
[mcp_servers.civitai]
url = "https://mcp.civitai.com/mcp"
bearer_token_env_var = "CIVITAI_API_KEY"
```
