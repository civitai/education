---
name: civitai-music-video
description: Make a 1080p music video for a Civitai launch song (an mp3 plus an .lrc file, often with a screenshots/ folder of the feature) using Civitai-generated pictures animated into short clips, framed feature screenshots, karaoke lyrics, and a Remotion render, paid with the user's Civitai API key. Use when someone wants a music video for a Civitai launch song or a Civitai music video Crucible, or says "make a music video for this song".
---

# Civitai music video

You are helping someone make a music video for a song they already have, usually the song from a
Civitai music video Crucible. The song comes as an audio file and an `.lrc` file with a time for every
lyric line, and usually a `screenshots/` folder showing the feature the song is about. You will scaffold
a small video project and build a video that cuts between two kinds of scene:

- **Feature scenes:** the real screenshots, framed on a card, with the camera easing in on the part that
  matters and a ring highlighting it. These show the feature in action, which is what a launch video is for.
- **Picture scenes:** pictures you generate on Civitai with the person's API key, one per lyric line, with
  the most important ones animated into short moving clips.

Karaoke lyrics run on top, and you render a 1080p mp4. The person uploads it to the Crucible themselves.

Work in this order and show the person something at each step. They decide what looks good; you do the
plumbing.

## What you need before starting

- **Node.js 18 or newer** (`node -v`).
- **ffmpeg and ffprobe** on PATH (`ffmpeg -version`). If missing: macOS `brew install ffmpeg` (Homebrew
  first, from https://brew.sh, if `brew` is missing), Windows `winget install ffmpeg`, Linux your package
  manager.
- **After installing Node or ffmpeg mid-session**, your own shell usually won't see it yet. Ask the person
  to quit you and start again in the same folder (`claude --continue` for Claude Code, `codex resume` for
  Codex), then carry on from where you were.
- **A Civitai API key.** The person creates one at https://civitai.com/user/account#api-keys (in the newer
  settings layout: Security & Apps), in the
  "API Keys" section: **Add API key**, a name, **Permission preset: AI Services** (enough to generate;
  "Full Access" also works but can do far more on the account), **Save**, then copy the key (it is shown
  once). Generations are paid in Buzz from that account: Blue Buzz first, then Green (see "What it costs").
- **The song zip** from the Crucible page or its linked article. It holds an `.mp3` and an `.lrc` (there
  may also be a `.txt`; ignore it), and usually a `screenshots/` folder: numbered images named after what
  they show (`01-invite.png`, `02-place-your-cap.png`, ...) plus a `README.txt` about the feature.
- **The Crucible page**, if they have the link: its description says what the feature does. Ask for the
  link or for them to paste the description. Pages on civitai.com may not load for a plain web fetch; if
  you can't read it, the pasted text, the lyrics and the screenshots' README are enough.

### The API key

The scripts read the key from a file named `.env` in the project folder (the one step 2 creates), one
line: `CIVITAI_API_KEY=their-key`, or from the `CIVITAI_API_KEY` environment variable.

- Easiest: after step 2, ask the person to paste the key, write the `.env` file yourself, and do not repeat
  the key back.
- If they make the file themselves, it must be inside the project folder, named exactly `.env`. On Windows,
  Notepad may save it as `.env.txt`; check with `dir` (or `ls -a`) and rename it if so.

- Never print the key, echo it back, paste it into a prompt, or commit it. If the project is a git
  repo, add `.env` to `.gitignore`.

## Get these skill files

This skill is a folder: `SKILL.md`, `scripts/` and `template/`. If you only have this file, download
the whole folder as a zip and unzip it:

```bash
curl -fsSL -o civitai-music-video.zip https://education.civitai.com/skills/civitai-music-video.zip
unzip civitai-music-video.zip        # makes a civitai-music-video/ folder
```

On Windows PowerShell use `curl.exe` (plain `curl` is a different command there) and
`Expand-Archive civitai-music-video.zip .` instead of `unzip`.

Below, `SKILL_DIR` means the folder that holds this `SKILL.md`: for Claude Code usually
`~/.claude/skills/civitai-music-video`, for Codex `~/.agents/skills/civitai-music-video`. On Windows, `~` does
not work in every command; use the full path in PowerShell: `$HOME\.claude\skills\civitai-music-video` (Claude Code) or
`$HOME\.agents\skills\civitai-music-video` (Codex).

## Two starting points

- **From scratch (the usual path):** the song zip only. Follow steps 1 to 9 below.
- **From a recreate kit:** some launches also publish a kit for each house cut (for Hat Turf:
  `hat-turf-a-kit.zip`, `hat-turf-b-kit.zip`, `hat-turf-c-kit.zip`, attached to the program article at
  https://civitai.com/articles/37938). A kit
  is the full Remotion project of an official example video: its source, characters in several poses, card
  art, the song and lyrics, and a `README.md` and `SCRIPT.md`. If the person has one, start from it and
  remix it instead of building from scratch:
  1. Unzip it in its own folder and read its `README.md` and `SCRIPT.md` first. They are the
     authoritative how-to for that kit (install and render commands, where each scene is defined, how to
     swap the song, art and characters, and its licenses). Follow them over anything here.
  2. Install and render the original once, as its README says, so you both know the project works before
     changing anything.
  3. Ask the person what to change: the story, which lines get which scene, new characters, new card art,
     a new look. Make the changes in the kit's own source, the way its README describes.
  4. For new art, generate single images with this skill's one-off mode, which needs no `scenes.json`
     (run it from the kit folder, with the API key in `.env` there; size them the way the kit's README
     asks, e.g. portrait for card art):
     `node SKILL_DIR/scripts/gen.mjs --one "<prompt>" --out public/cards/<name>.jpg --width 832 --height 1216`
     (price only; add `--go` to generate, about 4 Buzz).
  5. Use `render.mjs` and `sheet.mjs` only in projects made by `setup.mjs`; in a kit, render with the
     kit's own commands, and make a contact sheet with ffmpeg if you want one.
  Entering the Crucible is the same (step 9). Remind the person that the community judges the
  entries, so the remix should be their own take, not the example re-rendered.

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
node SKILL_DIR/scripts/setup.mjs my-video --song song.mp3 --lrc song.lrc --shots path/to/screenshots --title "My Title"
```

This copies the Remotion template, installs it (about a minute; an npm warning about esbuild install
scripts is harmless), copies the song to `public/song/song.mp3`, and turns the `.lrc` into `lyrics.json`.
It writes `scenes.json` with one scene per lyric line, plus an intro scene if the singing starts after
the first second and a scene for any instrumental gap over 4 seconds. It also writes a `.gitignore` that
keeps `.env`, `node_modules` and `out` out of git. Run every later command from inside the project folder
(`cd my-video`).

**Screenshots.** If the zip has a `screenshots/` folder (or you pass `--shots`), setup copies the images to
`public/shots/` in number order, lists them with a caption taken from each file name in `shots.json`, and
saves the folder's `README.txt` as `crucible-notes.txt`. As a first draft it puts the screenshots, in
order, on every other sung line, so the video alternates feature and picture scenes. You will rematch
them by meaning in step 3. If there is no `screenshots/` folder, setup says so and every scene is a
picture scene: tell the person the video will have no feature shots, and carry on.

**Motion.** Setup also marks up to 3 picture scenes to be animated (`"animate": ""`), preferring chorus
lines (lines that are sung more than once), spread out across the song.

Project files you will edit:

| File | What it holds |
|---|---|
| `video.json` | Title, subtitle, colors (`palette`), song length, optional `bpm`, optional `outro` |
| `lyrics.json` | Timed lines from the `.lrc`: `{ text, start, end }` in seconds. Usually leave it alone |
| `scenes.json` | `style` (added to every prompt), `negativePrompt` (what to keep out of every image), optional `model`, image size (1344x768, close to 16:9), and the `scenes` list |
| `shots.json` | The feature screenshots and their captions (read only) |
| `crucible-notes.txt` | The screenshots' README, if there was one (read only) |

A **picture scene** is `{ id, from, to, line, prompt }`, plus `animate` if it should move. `from`/`to` are
song seconds, `line` is the lyric sung during it, and `prompt` is yours to write. After generation it also
gets `file` (and `still`, once animated).

A **feature scene** is `{ id, from, to, line, kind: "shot", file, focus, highlight }`: `file` is a
screenshot under `public/`, `focus` is where the camera eases in (`x`, `y` from 0 to 1 across the
screenshot, `zoom` from 1 for the whole screen to about 1.6), and `highlight` draws a pulsing ring at the
focus point. An optional `label` adds a short caption chip above the card.

### About the lyrics file

The `.lrc` is standard LRC: one line per lyric, each starting with its time, for example
`[00:14.92]Take the turf, take the turf`. Tags like `[ti:...]` are skipped. LRC gives start times only,
so each line ends when the next one starts (or shortly after its last word, if a long instrumental
follows), and inside a line the words light up evenly. That reads well for karaoke. If a line looks
early or late in the preview, nudge its `start`/`end` in `lyrics.json`.

## 3. Read the feature and match the screenshots

Skip this step if there are no screenshots.

1. Read the Crucible description (if you have it), `crucible-notes.txt` and every lyric line. Work out what
   the feature does and which lines describe an action in it.
2. Look at every screenshot (open the images in `public/shots/`; you can view images). Note what each one
   shows and where the important part is: a button, a badge, a counter.
3. Rematch: put each screenshot on the line it illustrates best, and turn it into a feature scene there.
   Lines that describe a step in the feature ("one press puts your cap on") should get a screenshot; lines
   about the mood ("the party's spreading") are better as pictures. A screenshot can be used twice if the
   chorus repeats the same idea. A video that alternates roughly every other line reads well.
4. Set each feature scene's `focus` on the important part, with `zoom` around 1.3 to 1.6 (1.15 for a screen
   where everything matters).
5. These screenshots may be mockups of a feature that isn't released yet, so don't add claims about it that
   aren't in the lyrics, the Crucible text or the README.

To turn a feature scene back into a picture scene, remove `kind`, `file`, `focus` and `highlight`, and give
it a `prompt`.

## 4. Plan the pictures with the person

Ask two or three quick questions before writing prompts:

- What look? (glossy 3D cartoon, anime, watercolor, photoreal, pixel art, claymation...)
- Who is in it? (a recurring character or two helps a lot; describe them the same way in every prompt)
- Anything they want to see at a particular line?

Then:

1. Write a `prompt` for each picture scene that shows **what its line means**. A picture that matches the
   words is the single biggest quality win.
2. Put the shared look in `style`, e.g. `"glossy 3D cartoon, vivid party colors, cinematic lighting, no text"`.
   It is appended to every prompt, so scenes match.
3. Repeat the character description word for word in every prompt where they appear.
4. For each scene marked `"animate": ""`, write a short motion prompt: what moves, not what it looks like
   (`"the mascots dance side to side, hats bouncing, slow push in"`). Move the mark to other scenes if they
   matter more (the chorus and the ending are good choices). Delete `animate` from a scene to keep it still.
5. Set `title` (and `subtitle` if wanted) in `video.json`. Setup guesses the title from the `.lrc`; check it.
   The title shows for the first 3.5 seconds.
   For an ending card, set `"outro": { "text": "Made on Civitai", "from": <song second it appears> }`, where `from`
   is counted from the start of the song: for a card over the last 5 seconds use `duration` (in
   `video.json`) minus 5, e.g. `"from": 75.68` for an 80.68-second song.
6. Show the person the plan: every line with its screenshot or prompt, and which scenes will move. Adjust
   before spending anything.

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
  adults in full, everyday clothing ("in baggy hoodies and jeans"). "Plush toy mascot, not human" kept
  characters non-human in our tests. The default `negativePrompt` already lists revealing clothing and
  text; add to it, don't remove from it. Check every image before using it.

## 5. Price, then generate the pictures

Always price first. This spends nothing:

```bash
node SKILL_DIR/scripts/gen.mjs
```

Tell the person the quote and get a yes before spending. The quote also says which Buzz would pay
(`paid from: blue` or `green`); if the balance is too low it says so and spends nothing. Feature scenes are
never generated. Generate a couple of scenes first so they can judge the look cheaply:

```bash
node SKILL_DIR/scripts/gen.mjs --limit 2 --go
```

Look at them: `node SKILL_DIR/scripts/sheet.mjs --scenes` tiles every scene image (pictures and
screenshots) into `out/scenes.png`, in scene order. Show the person too. If the look is right, generate the rest:

```bash
node SKILL_DIR/scripts/gen.mjs --go
```

To redo one: `node SKILL_DIR/scripts/gen.mjs --only s07 --redo --go`. Every spend is recorded in
`buzz-log.json`. A run refuses to spend more than 250 Buzz at once unless you pass `--max-buzz`.

Using a specific Civitai model: set `"model"` in `scenes.json` to a checkpoint AIR such as
`urn:air:sdxl:checkpoint:civitai:<modelId>@<versionId>`, and set `width`/`height` to suit it
(1344x768 and 1216x832 work for SDXL and Flux). Find models and their AIR with the Civitai MCP server (below) or on
civitai.com. Leave `"model": null` for Civitai's default image model.

## 6. Animate the key pictures

Moving clips make the video feel alive, and they are the default: every scene with an `animate` motion
prompt becomes a 5-second clip (it loops if the scene is longer). Animate the pictures you are happy with;
a clip keeps the picture's look.

```bash
node SKILL_DIR/scripts/clip.mjs          # price every scene with an "animate" prompt (spends nothing)
node SKILL_DIR/scripts/clip.mjs --go     # generate them, all in one workflow (1 to 3 minutes)
```

Tell the person the quote first. A batch refuses to spend more than 300 Buzz unless you pass `--max-buzz`.
For one scene: `node SKILL_DIR/scripts/clip.mjs s05 "the band marches forward, confetti falls" --go`.
Options: `--duration`, `--res 480p|768p` (480p is the default and plenty behind lyrics), `--engine`.
The default engine, HeyGen's image-to-video (`heygen`), was the cheapest per 5 seconds in our price
checks (see "What it costs"). The clip's own audio is removed; the song carries the video. If the person
wants every picture moving, add `animate` prompts to more scenes, but say the price first: each clip costs
about 16 times as much as its picture.

## 7. Preview a short clip

```bash
node SKILL_DIR/scripts/render.mjs --from 0 --to 15     # -> out/test.mp4
node SKILL_DIR/scripts/sheet.mjs --video out/test.mp4 --every 1.5   # -> out/sheet.png
```

Look at `out/sheet.png` yourself (it is one image with a frame every 1.5 seconds) and check: the lyric
band is readable, each picture and screenshot matches its line, the camera lands on the right part of each
screenshot, and nothing important is hidden behind the lyrics. Then ask the person to watch `out/test.mp4`.
Scenes with no image yet render as labeled placeholders, so you can preview timing before generating
everything; you can preview the screenshots before spending anything.

Renders use most CPU cores; add `--concurrency 2` to keep the computer responsive (it renders slower).
For live editing, `npm run studio` opens Remotion Studio in a browser. Stop it when done.

## 8. Render the full video

```bash
node SKILL_DIR/scripts/render.mjs          # -> out/video.mp4, 1920x1080, 30 fps, H.264 with the song
node SKILL_DIR/scripts/sheet.mjs           # -> out/sheet.png, a frame every 3 seconds
```

Check the sheet, then check the file against the Crucible's rules (for the first round: the song as
supplied, start to finish, and up to 2 minutes). `ffprobe out/video.mp4` shows the length. If the file is too
big for the upload, re-render with `--crf 26`.

Optional extras in `video.json`: `"bpm": 128` with `"beatOffset": <seconds of the first beat>` adds a
small pulse on the beat; `"titleSeconds": 0` hides the title. `"palette"` is a list of hex colors: the
first three color the title gradient, sung words light up in each color in turn, and feature cards and
their highlight rings take the colors in turn. Unsung words are white, so don't put white (or a very light
color) in the palette.

## 9. Enter the Crucible

The person enters, not you: they open the Crucible page on civitai.com (all Crucibles are listed at
https://civitai.com/crucibles), choose **Submit Entry**, open the **Upload New** tab, drop in
`out/video.mp4`, wait for the upload's safety check to finish, and submit. Remind them of the rules on the Crucible page (entries per person, length,
content rating, and that the song must be used as supplied).

## What it costs

Measured on test runs with the default image model at 1344x768, and price-only checks of the clip engines;
prices can change, so the price-only run is the real number.

| Item | Buzz |
|---|---|
| One picture | about 4 |
| One 5-second clip, `heygen` at 480p (the default) | about 65 |
| Feature screenshots | free (nothing is generated) |
| A full song with screenshots: about 11 pictures and 3 clips | about 240 |
| A full song with no screenshots: about 18 pictures and 3 clips | about 270 |
| Every picture animated (about 11 clips) | about 760 |

Other engines we priced for a 5-second clip (price-only, November 2026): `heygen` at 768p about 117,
`ltx2` about 133 (about 80 for 3 seconds), `wan` v2.2-5b at 480p about 150, `minimax-h3-comfy` about 125
for 6 seconds, `wan` v2.5 at 480p about 500, `kling` v2.5-turbo about 600.

## If something goes wrong

- **`CIVITAI_API_KEY is not set`**: create `.env` in the project folder (step "The API key").
- **401 or 403**: the key is wrong or was deleted. Make a new one at https://civitai.com/user/account#api-keys with the AI Services preset.
- **`not enough Buzz on this account`**: the price-only check found the balance too low and stopped before
  spending anything. The person adds Buzz on civitai.com, or you generate or animate fewer scenes.
  To pay only with Green Buzz, add `"pay": ["green"]` to `scenes.json`.
- **A prompt or image is refused for content policy**: do not reword it to sneak past the check. Change
  the idea of the scene, or skip it.
- **A step failed**: run the same command again; it only generates scenes that still have no image or clip.
- **The camera misses the important part of a screenshot**: adjust that scene's `focus` (`x`, `y`, `zoom`)
  and preview again.
- **Render fails on fonts or downloads**: the render needs internet once, for the font and Chrome.
- **Lyrics out of sync**: edit `start`/`end` for that line in `lyrics.json` and render the preview again.

## Optional: the Civitai MCP servers

The scripts above only need the API key. If the agent supports MCP, two Civitai servers can help:

- `https://mcp.civitai.com/mcp`: search models, images and creators on Civitai (to pick a `model` AIR).
  Browsing needs no key.
- `https://orchestration.civitai.com/mcp/v2`: the generation service itself, with price-only (`whatif`) runs.

Browsing (search) needs no key, so connect it without one. Claude Code:

```bash
claude mcp add --transport http civitai https://mcp.civitai.com/mcp
```

Codex, in `~/.codex/config.toml`:

```toml
[mcp_servers.civitai]
url = "https://mcp.civitai.com/mcp"
```

Account actions (posting, for example) need the key as a bearer token: in Claude Code add
`--header "Authorization: Bearer <key>"` to the command (this stores the key in Claude Code's config); in
Codex add `bearer_token_env_var = "CIVITAI_API_KEY"` and set that variable where Codex runs. This skill
needs neither.
