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

![A finished frame: generated scene, title and karaoke lyrics](/images/guides/make-a-launch-music-video-with-your-ai-agent/cover.webp)

You don't need to know how to code. You need to be comfortable pasting a few commands into a terminal
and reading what your agent tells you.

## What you need

| Thing | Where to get it |
| --- | --- |
| An AI coding agent: **Claude Code** or **Codex** | Either one, installed and signed in on your computer |
| **Node.js** 18 or newer | [nodejs.org](https://nodejs.org) (the LTS download) |
| **ffmpeg** | macOS: `brew install ffmpeg`. Windows: `winget install ffmpeg`. Linux: your package manager |
| A **Civitai account with some Buzz** | The video's pictures are paid for in Buzz from your account |
| A **Civitai API key** | Your account settings (next section) |
| **The song zip** from the Crucible | The Crucible page links to it: an `.mp3` and a timed `.lrc` lyrics file |

Your agent checks Node and ffmpeg before it starts and helps you install whatever is missing.

## 1. Get your Civitai API key

The API key lets the agent's scripts generate images on your account, paid with your Buzz.

1. Sign in on civitai.com and open your account settings: [civitai.com/user/account](https://civitai.com/user/account).
2. Scroll to **API Keys** and choose **Add API key**.
3. Give it a **Name** you will recognize, like "music video". Leave the permission preset as it is. If
   you see a **Buzz spend limit** switch, you can turn it on to cap what the key can spend.
4. Choose **Save**, then copy the key with the copy button. Civitai shows it only once ("you won't be
   able to see it again"), so keep it somewhere safe until the agent asks for it.

Treat the key like a password: anyone with it can spend your Buzz. You can delete it on the same page
when the video is done.

When your agent asks for the key, it saves it in a file named `.env` in the video's project folder. If
you would rather not paste it into the chat, create that file yourself with one line:
`CIVITAI_API_KEY=your-key-here`.

## 2. Install the skill

The **skill** is a small folder of instructions and scripts that tells your agent exactly how to build
the video. It is free and lives on this site:

- Instructions: [education.civitai.com/skills/civitai-music-video/SKILL.md](/skills/civitai-music-video/SKILL.md)
- Everything as one download: [civitai-music-video.zip](/skills/civitai-music-video.zip)

### Claude Code

Claude Code picks up skills from the `skills` folder in your home directory. Install it once:

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

Codex doesn't need an install step. Make a folder for your video, open Codex in it, and paste the prompt
in the next section: it tells Codex where to download the skill. If you make videos often, unzip the skill
into that folder and add this line to the folder's `AGENTS.md`, so Codex follows it every time:

```text
When asked to make a music video, follow civitai-music-video/SKILL.md.
```

### Any other agent

Any agent that can run terminal commands and read a web page can follow the same instructions. Paste
the prompt below.

## 3. Paste this to your agent

Download the song zip from the Crucible, open your agent in an empty folder, and paste this. Fill in the
two lines in angle brackets.

```text
Make me a music video for my Civitai Crucible song.
Follow the skill at https://education.civitai.com/skills/civitai-music-video/SKILL.md
(the full skill, with its scripts, is https://education.civitai.com/skills/civitai-music-video.zip).
My song zip is: <path to the zip you downloaded from the Crucible>
The look I want: <for example: glossy 3D cartoon, neon party colors, a fox mascot in a green cap>
Show me the scene prompts and the Buzz price before you generate anything.
```

That's the whole setup. Your agent takes it from here, and checks in with you at each step.

## 4. What your agent does

You will see these steps go by. Each one ends with something for you to look at.

1. **Checks your tools.** Node, ffmpeg, and your API key.
2. **Sets up the project.** It copies a video template, installs it (about a minute), loads the song,
   and reads the timed lyrics. It plans one scene per lyric line, plus an intro scene and a scene for any
   long instrumental break. An 80-second song gets about 18 scenes.
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

This is the contact sheet from a test run on the first Hat Turf song, with the first five scenes
generated:

![Contact sheet of a 19-second preview: five generated scenes with karaoke lyrics](/images/guides/make-a-launch-music-video-with-your-ai-agent/contact-sheet.webp)

The lyrics sit on a dark band at the bottom, and each word lights up in turn as it is sung:

![A verse scene with the second lyric line lighting up](/images/guides/make-a-launch-music-video-with-your-ai-agent/frame-verse.webp)

And this frame is from a 5-second moving clip of the marching band scene, made from its still image:

![A frame from an animated clip scene](/images/guides/make-a-launch-music-video-with-your-ai-agent/frame-clip.webp)

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
They close Friday, November 6th.

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
| `CIVITAI_API_KEY is not set` | Put `CIVITAI_API_KEY=your-key` in a file named `.env` in the project folder |
| An error with 401 or 403 | The key is wrong or was deleted. Make a new one on your account page |
| Not enough Buzz | Add Buzz to your account. The failed request didn't charge you |
| A prompt is refused | It tripped a content check. Change the idea of the scene; don't try to word around it |
| A scene looks wrong | Ask the agent to rewrite that one prompt and redo just that scene (about 4 Buzz) |
| Lyrics early or late on a line | Ask the agent to nudge that line's timing in `lyrics.json` |
| `ffmpeg` not found | Install it (see "What you need"), then open a new terminal |
| The file is too big to upload | Ask the agent to render again at a higher CRF (smaller file), such as 26 |

## For the curious

**The lyrics file.** Crucible songs come with a standard LRC file: one lyric line per line, each starting
with its time in minutes and seconds, like `[00:14.92]Take the turf, take the turf`. LRC times each line,
not each word, so the video spreads the highlight evenly across a line's words. That reads naturally for
karaoke. If you use your own tools instead of the skill, most video editors and karaoke apps read LRC.

**What's in the skill.** A Remotion video template (React code that renders video), and small Node
scripts: `setup.mjs` makes the project, `gen.mjs` generates scene images, `clip.mjs` animates a scene,
`render.mjs` renders, and `sheet.mjs` makes contact sheets. They talk to Civitai's generation API directly
with your API key. Nothing else is installed on your computer beyond the project folder.

**Civitai's MCP servers.** If your agent supports MCP, you can also connect Civitai's MCP server at
`https://mcp.civitai.com/mcp`, which lets the agent search models on Civitai to pick a different image
model for your scenes. The skill works without it. Setup for Claude Code and Codex is at the end of the
[skill instructions](/skills/civitai-music-video/SKILL.md).
