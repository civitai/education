---
title: "Make a Launch Music Video with Your AI Agent"
slug: "make-a-launch-music-video-with-your-ai-agent"
date: "2026-11-03T21:00:00Z"
categories:
  - "civitai"
  - "guides"
  - "video"
tags:
  - "video"
  - "crucibles"
  - "api"
  - "guide"
author: "civitai"
unlisted: true
covers:
  - "crucibles"
  - "api-keys"
  - "music-video-crucibles"
reviewed: "2026-11-03"
excerpt: "Hand your AI coding agent (Claude Code or Codex) a Crucible song and a Civitai API key, and it builds a 1080p music video with Civitai-generated scenes and karaoke lyrics, ready to enter."
image: "/images/guides/make-a-launch-music-video-with-your-ai-agent/cover.webp"
seo:
  title: "Make a Launch Music Video with Your AI Agent - Civitai Education"
  description: "Use Claude Code or Codex and a free skill to turn a Civitai Crucible song into a 1080p music video: scenes generated on Civitai, karaoke lyrics, about 75 Buzz."
  ogImage: "/images/guides/make-a-launch-music-video-with-your-ai-agent/cover.webp"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 11/03/2026 | First version. |

:::note
Review copy for the music video Crucibles. This page is not listed anywhere and is hidden from search engines.
:::

When Civitai launches a feature, we write a song about it, and the community makes the music video in a
Crucible. The best video becomes the official launch video. This guide shows how to make one with an AI
coding agent doing the heavy lifting: you pick the look, your agent writes the scene prompts, generates
the pictures on Civitai, times the lyrics to the song and renders the video.

**What you'll make:** a 1920x1080 mp4 of the whole song, with one generated scene per lyric line, slow
camera moves and crossfades, a few optional moving clips, and karaoke lyrics that light up as they are
sung. A full song with images only costs about 75 Buzz.

![A finished frame: a generated disco scene with two fox mascots, the title, and karaoke lyrics](/images/guides/make-a-launch-music-video-with-your-ai-agent/cover.webp)

You don't need to know how to code. You need to be comfortable pasting a few commands into a terminal
and reading what your agent tells you.

## What you need

| Thing | Where to get it |
| --- | --- |
| An AI coding agent: **Claude Code** or **Codex** | See "Install your agent" below. Both need a paid plan |
| **Node.js** 18 or newer | [nodejs.org](https://nodejs.org) (the LTS download) |
| **ffmpeg** | macOS: `brew install ffmpeg`. Windows: `winget install ffmpeg`. Linux: your package manager |
| A **Civitai account with some Buzz** | The video's pictures are paid for in Buzz from your account |
| A **Civitai API key** | Your account settings (step 1) |
| **The song zip** from the Crucible | Linked from the Crucible page or its announcement article: an `.mp3` and a timed `.lrc` lyrics file |

Your agent checks Node and ffmpeg before it starts and helps you install whatever is missing.

### Install your agent

**Claude Code** needs a Claude Pro, Max, Team or Enterprise plan, or an Anthropic Console account (the free
plan doesn't include it). Install it from a terminal, following
[Anthropic's setup page](https://code.claude.com/docs/en/setup):

- macOS or Linux: `curl -fsSL https://claude.ai/install.sh | bash`
- Windows PowerShell: `irm https://claude.ai/install.ps1 | iex`

**Codex** signs in with your ChatGPT account; check its page for which plans include it. Install it
following [OpenAI's Codex CLI page](https://developers.openai.com/codex/cli) (macOS or Linux:
`curl -fsSL https://chatgpt.com/codex/install.sh | sh`).

To start either one: open a terminal, go to the folder you want to work in (`cd` followed by the folder),
and type `claude` or `codex`. The first time, it asks you to sign in.

## 1. Get your Civitai API key

The API key lets the agent's scripts generate images on your account, paid with your Buzz.

1. Sign in on civitai.com and open your account settings: [civitai.com/user/account](https://civitai.com/user/account).
2. Scroll to **API Keys** and choose **Add API key**.
3. Give it a **Name** you will recognize, like "music video", and set **Permission preset** to
   **AI Services**. That is enough to generate, and the key can't do anything else on your account.
4. Choose **Save**, then copy the key with the copy button. Civitai shows it only once ("you won't be
   able to see it again"), so keep it somewhere safe until the agent asks for it.

Treat the key like a password: anyone with it can spend your Buzz. You can delete it on the same page
when the video is done.

**Giving the key to your agent.** The easiest way: paste it when your agent asks, and it saves it in a
file named `.env` inside the video's project folder. To do it yourself instead, wait until the agent has
made the project folder, then create `.env` inside that folder with one line:
`CIVITAI_API_KEY=your-key-here`. On Windows, check that Notepad didn't save it as `.env.txt`.

**Which Buzz pays.** The scripts ask Civitai to charge Blue Buzz (the free Buzz from daily rewards)
first, and Green Buzz when there isn't enough Blue. Every price check says which one it would use, and if your balance is
too low it says so and spends nothing. [Buzz Colors](/buzz-colors-blue-yellow-and-green/) explains the
colors.

## 2. Install the skill

The **skill** is a small folder of instructions and scripts that tells your agent exactly how to build
the video. It is free and lives on this site:

- Instructions: [education.civitai.com/skills/civitai-music-video/SKILL.md](/skills/civitai-music-video/SKILL.md)
- Everything as one download: [civitai-music-video.zip](/skills/civitai-music-video.zip)

Both agents read skills from a folder in your home directory: `.claude/skills` for Claude Code and
`.agents/skills` for Codex. Install it once.

### Claude Code

macOS or Linux:

```bash
mkdir -p ~/.claude/skills && cd ~/.claude/skills
curl -fsSL -o civitai-music-video.zip https://education.civitai.com/skills/civitai-music-video.zip
unzip -o civitai-music-video.zip && rm civitai-music-video.zip
```

Windows (PowerShell):

```powershell
New-Item -ItemType Directory -Force "$HOME\.claude\skills" | Out-Null
cd "$HOME\.claude\skills"
curl.exe -fsSL -o civitai-music-video.zip https://education.civitai.com/skills/civitai-music-video.zip
Expand-Archive -Force civitai-music-video.zip .
Remove-Item civitai-music-video.zip
```

Start a new Claude Code session afterward so it sees the skill.

### Codex

The same commands, with `.agents` in place of `.claude`:

macOS or Linux:

```bash
mkdir -p ~/.agents/skills && cd ~/.agents/skills
curl -fsSL -o civitai-music-video.zip https://education.civitai.com/skills/civitai-music-video.zip
unzip -o civitai-music-video.zip && rm civitai-music-video.zip
```

Windows (PowerShell):

```powershell
New-Item -ItemType Directory -Force "$HOME\.agents\skills" | Out-Null
cd "$HOME\.agents\skills"
curl.exe -fsSL -o civitai-music-video.zip https://education.civitai.com/skills/civitai-music-video.zip
Expand-Archive -Force civitai-music-video.zip .
Remove-Item civitai-music-video.zip
```

Start a new Codex session afterward. You can also mention the skill by name: type `$` and pick
`civitai-music-video`.

### Any other agent

Skip the install. Any agent that can run terminal commands and read a web page can follow the prompt in
the next step, which tells it where to download the skill.

## 3. Paste this to your agent

Download the song zip from the Crucible, make an empty folder for your video, start your agent in it,
and paste this. Fill in the two lines in angle brackets. Tip: to get the zip's path, drag the zip file
into the terminal window.

```text
Make me a music video for my Civitai Crucible song.
Follow the skill at https://education.civitai.com/skills/civitai-music-video/SKILL.md
(the full skill, with its scripts, is https://education.civitai.com/skills/civitai-music-video.zip).
My song zip is: <path to the zip you downloaded from the Crucible>
The look I want: <for example: glossy 3D cartoon, neon party colors, a fox mascot in a gold jacket>
Show me the scene prompts and the Buzz price before you generate anything.
```

That's the whole setup. Your agent takes it from here, and checks in with you at each step.

**Expect permission prompts.** Your agent asks before it downloads files, installs the video template or
runs a script ("Allow this command?"). That's normal: approve them. If you see one that would spend Buzz,
check that you already agreed to the price.

## 4. What your agent does

You will see these steps go by. Each one ends with something for you to look at.

1. **Checks your tools.** Node, ffmpeg, and your API key.
2. **Sets up the project.** It copies a video template, installs it (about a minute), loads the song,
   and reads the timed lyrics. It plans one scene per lyric line, plus a scene for any long instrumental
   break. An 80-second song gets about 18 scenes.
3. **Plans the look with you.** It asks about the style and any characters, then writes a picture prompt
   for every lyric line. Read the list. This is where your video gets good: each picture should show what
   its line means.
4. **Prices, then generates.** It runs a price-only check (this spends nothing), tells you the Buzz, and
   waits for your yes. It generates two scenes first so you can judge the look cheaply, then the rest.
5. **Renders a 15-second preview** and a contact sheet, one image with a frame every second and a half,
   so you and the agent can catch problems before the full render.
6. **Optional: moving clips.** It can animate a few key scenes (a chorus, the ending) into 5-second
   clips. These cost much more than still images, so it prices each one first.
7. **Renders the full video** to `out/video.mp4`: 1920x1080, 30 frames per second, with the song.

### A worked example

We ran the skill on the disco take of the Hat Turf song, with the look "glossy 3D cartoon, retro disco
party, warm neon lights, mirror ball sparkles, no text" and a fox mascot in a gold jacket. These are the
first four lyric lines and the prompts the agent wrote for them:

| Lyric line | Prompt |
| --- | --- |
| Round two, the party's spreading, every image is in play | a round toy-like fox mascot in a shiny gold jacket dances in the middle of a packed disco floor, the crowd of toy-like animal mascots wears yellow, blue, pink and green caps |
| Yellow, blue, pink and green, go claim some turf today | four teams of round toy-like animal mascots in yellow, blue, pink and green caps race across a huge glowing dance floor split into four colored zones, seen from above at an angle |
| Join Hat Turf, your work's in too, that's how the game is played | a round toy-like fox mascot in a shiny gold jacket holds up a sketchbook proudly while a teammate in a green cap gives a thumbs up, disco dance floor behind them |
| One press puts your cap on, drag it into place | a round toy-like fox mascot in a shiny gold jacket presses a big glowing button, and a green cap pops out and flies onto a canvas on an easel |

Those four images cost 16 Buzz. This is the contact sheet of the first 17 seconds:

![Contact sheet of a 17-second preview: four generated disco scenes with karaoke lyrics](/images/guides/make-a-launch-music-video-with-your-ai-agent/contact-sheet.webp)

It is a first pass, and it shows what to look for. The default image model followed some prompts better
than others: the second scene has the glowing floor but no mascots, and the button scene has no cap
flying. Each is a one-line fix ("redo scene 2 with the mascots running across the floor") for about 4
Buzz. The lyrics sit on a dark band at the bottom, and each word lights up in turn as it is sung:

![The karaoke lyrics lighting up word by word over a scene with two mascots giving a thumbs up](/images/guides/make-a-launch-music-video-with-your-ai-agent/karaoke.webp)

This frame is from a 5-second moving clip made from a still image in an earlier test, a marching band
in team caps:

![A frame from an animated clip scene: a marching band in colorful uniforms](/images/guides/make-a-launch-music-video-with-your-ai-agent/frame-clip.webp)

## 5. What it costs

Measured on our test runs with Civitai's default image model. Prices can change; your agent's price-only
check is always the real number, and every spend is written to `buzz-log.json` in the project folder.

| What | Buzz |
| --- | --- |
| One scene image | about 4 |
| A whole song with images only (about 18 scenes) | about 75 |
| Redoing a scene you didn't like | about 4 |
| One 5-second moving clip (480p) | about 65 |
| A whole song plus 3 moving clips | about 270 |

The agent's scripts also refuse to spend more than 250 Buzz in one run unless you tell them to.

## 6. Make it better

- **Follow the lyrics.** The song tells you what the feature does. A picture that matches each line is
  what makes a launch video work. If a line says "drag it into place", show something being dragged.
- **Keep a cast.** One or two characters, described the same way in every prompt, make the video feel
  like a story instead of a slideshow. Tell your agent who they are.
- **Mascots beat "cute kids".** Crucible entries must fit the content rating. In our tests, asking the
  default model for cute young characters sometimes gave teens in revealing outfits. Animal or toy-like
  mascots, or adults in everyday clothes, came out right, and your agent checks every image before using it.
- **Spend clips on the chorus.** If you add moving clips, put them where the song lifts.
- **Ask for changes in plain words.** "Make scene 7 a night scene", "the lyrics are too small", "slow
  the camera down". Your agent edits the project and renders the preview again.
- **Check the beginning and the end.** The title shows for the first few seconds; ask for an ending card
  too if you want one.

## 7. Enter the Crucible

Before you enter, check the video against the Crucible's rules on its page. For the first round, the
Hat Turf Crucibles, that means: use the song as supplied, start to finish, without remixing or replacing
the audio; videos up to 2 minutes; content rated PG or PG-13; up to 2 entries per person, free to enter.
They close Friday, November 6th; check the Crucible page for the exact closing time.

Then:

1. Open the Crucible's page. All Crucibles are listed at [civitai.com/crucibles](https://civitai.com/crucibles).
2. Choose **Submit Entry** and open the **Upload New** tab.
3. Drop in `out/video.mp4` from your project folder.
4. Wait for the safety check to finish (the new upload shows a yellow badge until it does), then submit.

[Civitai's Guide to Crucibles](/civitais-guide-to-crucibles/#enter-a-crucible) covers entering, judging and
prizes in full.

## Troubleshooting

| What you see | What to do |
| --- | --- |
| `CIVITAI_API_KEY is not set` | The `.env` file is missing or in the wrong folder. It goes inside the project folder, named exactly `.env` |
| An error with 401 or 403 | The key is wrong, was deleted, or has a preset that can't generate. Make a new one with the **AI Services** preset |
| `not enough Buzz on this account` | The price check found your balance too low and spent nothing. Add Buzz, or ask the agent to generate fewer scenes at a time |
| A prompt is refused | It tripped a content check. Change the idea of the scene; don't try to word around it |
| A scene looks wrong | Ask the agent to rewrite that one prompt and redo just that scene (about 4 Buzz) |
| Lyrics early or late on a line | Ask the agent to nudge that line's timing in `lyrics.json` |
| `ffmpeg` not found | Install it (see "What you need"), then open a new terminal |
| The file is too big to upload | Ask the agent to render again at a higher CRF (smaller file), such as 26 |
| The computer is slow while rendering | Ask the agent to render with fewer CPU cores (`--concurrency 2`) |

## For the curious

**The lyrics file.** Crucible songs come with a standard LRC file: one lyric line per line, each starting
with its time in minutes and seconds, like `[00:14.92]Take the turf, take the turf`. LRC times each line,
not each word, so the video spreads the highlight evenly across a line's words. That reads naturally for
karaoke. If you use your own tools instead of the skill, most video editors and karaoke apps read LRC.

**What's in the skill.** A Remotion video template (React code that renders video), and small Node
scripts: `setup.mjs` makes the project, `gen.mjs` generates scene images, `clip.mjs` animates a scene,
`render.mjs` renders, and `sheet.mjs` makes contact sheets. They talk to Civitai's generation API directly
with your API key. Besides Node, ffmpeg and the skill itself, everything goes in the project folder.

**Remotion's license.** The skill is free, and Remotion is free for individuals and small teams. Larger
companies need a Remotion company license; see [Remotion's pricing page](https://www.remotion.dev/docs/license/pricing).

**Civitai's MCP servers.** If your agent supports MCP, you can also connect Civitai's MCP server at
`https://mcp.civitai.com/mcp`, which lets the agent search models on Civitai to pick a different image
model for your scenes. The skill works without it. Setup for Claude Code and Codex is at the end of the
[skill instructions](/skills/civitai-music-video/SKILL.md).
