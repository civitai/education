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
| 11/03/2026 | Feature screenshots in the video, moving clips by default, and starting from a recreate kit. |
| 11/03/2026 | First version. |

:::note
Review copy for the music video Crucibles. This page is not listed anywhere and is hidden from search engines.
:::

When Civitai launches a feature, we write a song about it, and the community makes the music video in a
Crucible. The best video becomes the official launch video. This guide shows how to make one with an AI
coding agent doing the heavy lifting: you pick the look, your agent reads the Crucible and the feature
screenshots that come with the song, writes the scene prompts, generates the pictures and moving clips
on Civitai, times the lyrics to the song and renders the video.

**What you'll make:** a 1920x1080 mp4 of the whole song that cuts between two kinds of scene: the
feature itself (its screenshots, framed, with the camera easing in on the part that matters) and pictures
generated on Civitai, the key ones animated into short clips. Karaoke lyrics light up as they are sung.
A full song costs about 240 Buzz with the default 3 clips, or about 45 Buzz with no clips.

![A finished frame: a generated concert stage of toy mascots in party hats, the title, and karaoke lyrics](/images/guides/make-a-launch-music-video-with-your-ai-agent/cover.webp)

You don't need to know how to code. You need to be comfortable pasting a few commands into a terminal
and reading what your agent tells you.

## What you need

| Thing | Where to get it |
| --- | --- |
| An AI coding agent: **Claude Code** or **Codex** | See "Install your agent" below. Claude Code needs a paid plan; Codex works on any ChatGPT plan, including Free |
| **Node.js** 18 or newer | [nodejs.org](https://nodejs.org) (the LTS download) |
| **ffmpeg** | macOS: `brew install ffmpeg` (install [Homebrew](https://brew.sh) first if you don't have it). Windows: `winget install ffmpeg`. Linux: your package manager |
| A **Civitai account with some Buzz** | The video's pictures are paid for in Buzz from your account |
| A **Civitai API key** | Your account settings (step 1) |
| **The song zip** from the Crucible | Linked from the Crucible page or its announcement article: an `.mp3`, a timed `.lrc` lyrics file, and a `screenshots/` folder showing the feature |
| Optional: a **recreate kit** | Some launches also publish the full project of an official example video, to remix (see "Start from a recreate kit") |

Your agent checks Node and ffmpeg before it starts and helps you install whatever is missing. If it
installs one of them for you, quit the agent and start it again in the same folder so it can see the new
program: `claude --continue` or `codex resume` picks up where you left off.

### Install your agent

**Claude Code** needs a Claude Pro, Max, Ultra, Team or Enterprise plan, or an Anthropic Console account (the free
plan doesn't include it). Install it from a terminal, following
[Anthropic's setup page](https://code.claude.com/docs/en/setup):

- macOS or Linux: `curl -fsSL https://claude.ai/install.sh | bash`
- Windows PowerShell: `irm https://claude.ai/install.ps1 | iex`

**Codex** signs in with your ChatGPT account and is included on every ChatGPT plan, including Free.
Install it following [OpenAI's Codex CLI page](https://learn.chatgpt.com/docs/codex/cli):

- macOS or Linux: `curl -fsSL https://chatgpt.com/codex/install.sh | sh`
- Windows PowerShell: `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"`
  (or `npm install -g @openai/codex` if npm works in your terminal)

To start either one, open a terminal (macOS: the Terminal app; Windows: search the Start menu for
PowerShell; new to terminals? see [Anthropic's terminal guide](https://code.claude.com/docs/en/terminal-guide)),
make a folder for your video and go into it, then start the agent:

```bash
mkdir hat-turf-video
cd hat-turf-video
claude        # or: codex
```

The first time, it asks you to sign in.

## 1. Get your Civitai API key

The API key lets the agent's scripts generate images on your account, paid with your Buzz.

1. Sign in on civitai.com and open the API Keys settings: [civitai.com/user/account#api-keys](https://civitai.com/user/account#api-keys).
   (In the newer settings layout they are under **Security & Apps**.)
2. In **API Keys**, choose **Add API key**.
3. Give it a **Name** you will recognize, like "music video", and set **Permission preset** to
   **AI Services**. That is enough to generate. The key can also read your profile, settings, email, Buzz balance and
   generation history, but it can't post, change settings or tip.
4. Choose **Save**, then copy the key with the copy button. Civitai shows it only once ("you won't be
   able to see it again"), so keep it somewhere safe until the agent asks for it.

Treat the key like a password: anyone with it can spend your Buzz. You can delete it on the same page
when the video is done.

**Giving the key to your agent.** The easiest way: paste it when your agent asks, and it saves it in a
file named `.env` inside the video's project folder. To do it yourself instead, wait until the agent has
made the project folder (a new folder, usually `my-video`, inside the one you started in), then create
`.env` inside that new folder with one line:
`CIVITAI_API_KEY=your-key-here`. On Windows, check that Notepad didn't save it as `.env.txt`.

**Which Buzz pays.** The scripts ask Civitai to charge Blue Buzz (the free Buzz from daily rewards)
first, and Green Buzz when there isn't enough Blue. Every price check covers the whole batch you asked
for (up to 50 images at once), says which Buzz it would use, and if your balance is too low it says so
and spends nothing. [Buzz Colors](/buzz-colors-blue-yellow-and-green/) explains the
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

Download the song zip from the Crucible, start your agent in your video folder (see "Install your agent"),
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

### Start from a recreate kit

Some launches also publish a **recreate kit** for each official example video (for Hat Turf, three kits
attached to the program article). A kit is the whole project behind that video: its code, its
characters in several poses, its card art, the song, and a README that explains how to change each
part. If you have one, your agent can start from it and remix it, which gets you a polished video
faster. Unzip the kit, start your agent in that folder, and paste:

```text
Help me remix this Civitai recreate kit into my own music video for the Crucible.
Follow the skill at https://education.civitai.com/skills/civitai-music-video/SKILL.md
(the full skill, with its scripts, is https://education.civitai.com/skills/civitai-music-video.zip),
section "Two starting points", and the kit's own README.md.
What I want to change: <for example: new characters, my own card art, a different story for the chorus>
Show me the plan and the Buzz price before you generate anything.
```

The community judges the entries, so make it your own take rather than the example re-rendered.

## 4. What your agent does

You will see these steps go by. Each one ends with something for you to look at.

1. **Checks your tools.** Node, ffmpeg, and your API key.
2. **Sets up the project.** It copies a video template, installs it (about a minute), loads the song,
   and reads the timed lyrics and the feature screenshots. It plans one scene per lyric line, plus a
   scene for any long instrumental break: the 89-second Hat Turf J-pop take got 18 scenes.
3. **Matches the screenshots to the lyrics.** It reads the Crucible description (paste it in if it
   asks) and the screenshots' notes, looks at each screenshot, and puts each one on the line it shows
   best ("one press puts your cap on" gets the screenshot of placing a cap). If the song zip has no
   screenshots, it tells you and makes every scene a generated picture.
4. **Plans the pictures with you.** It asks about the style and any characters, then writes a picture
   prompt for every other line and a motion prompt for the 3 pictures it will animate (chorus lines
   first). Read the list. Each picture should show what its line means.
5. **Prices, then generates.** It runs a price-only check (this spends nothing), tells you the Buzz, and
   waits for your yes. It generates two pictures first so you can judge the look cheaply, then the rest,
   then animates the chosen ones into 5-second clips.
6. **Renders a 15-second preview** and a contact sheet, one image with a frame every second and a half,
   so you and the agent can catch problems before the full render.
7. **Renders the full video** to `out/video.mp4`: 1920x1080, 30 frames per second, with the song.

### A worked example

We ran the skill end to end on the J-pop take of the Hat Turf song, with its 9 feature screenshots, the
look "glossy 3D cartoon, bright J-pop concert stage, pastel neon lights, sparkles, no text", and a cast of
four round toy-like mascots in team party hats. The agent put 7 screenshots on the lines that describe the
feature and wrote pictures for the rest. Some of the plan:

| Lyric line | Scene |
| --- | --- |
| Round two, the party's spreading, every image is in play | Picture: the four mascots jump on a big pastel concert stage, confetti and spotlights |
| Join Hat Turf, your work's in too, that's how the game is played | Screenshot: the "Join the birthday turf war" invite, camera easing in on it |
| One press puts your cap on, drag it into place | Screenshot: placing a cap on an image |
| Take the turf, take the turf, stick your team's hat on | Picture, animated: the mascots run across a glowing gallery floor planting their hats |
| Take the turf, take the turf, watch the badge flip to your side | Screenshot: the turf badge flipping |
| A lock sits on the count, and nobody takes your loot | Screenshot: the locked badge |

The whole video cost 247 Buzz: 11 pictures plus 2 redone (52) and 3 clips (195). This is a frame from a
feature scene, with the ring highlighting the part the line is about:

![A feature scene: the place-your-cap screenshot on a framed card, with a highlight ring and the lyric below](/images/guides/make-a-launch-music-video-with-your-ai-agent/feature-shot.webp)

And this is the contact sheet of the first 45 seconds, alternating feature scenes and pictures:

![Contact sheet of the first 45 seconds: feature screenshots and generated mascot scenes with karaoke lyrics](/images/guides/make-a-launch-music-video-with-your-ai-agent/contact-sheet.webp)

The screenshots in a song zip can be mockups of a feature that isn't released yet (the Hat Turf ones
are), so the final feature may look different. The lyrics sit on a dark band at the bottom, and each word
lights up in turn as it is sung:

![The karaoke lyrics lighting up word by word over a scene with two mascots giving a thumbs up](/images/guides/make-a-launch-music-video-with-your-ai-agent/karaoke.webp)

This frame is from one of the 5-second moving clips, made from its picture:

![A frame from an animated clip scene: toy mascots in party hats dancing under stage lights](/images/guides/make-a-launch-music-video-with-your-ai-agent/frame-clip.webp)

## 5. What it costs

Measured on our test runs with Civitai's default image model, and price-only checks of the clip engines.
Prices can change; your agent's price-only check is always the real number, and every spend is written to
`buzz-log.json` in the project folder.

| What | Buzz |
| --- | --- |
| One picture | about 4 |
| One 5-second moving clip (480p, the default engine) | about 65 |
| Feature screenshots | free |
| A whole song with screenshots and 3 clips (the default) | about 240 |
| The same with no clips | about 45 |
| A whole song with no screenshots and 3 clips | about 270 |
| Every picture animated (about 11 clips) | about 760 |

Why 3 clips: moving clips make the video feel alive, but each costs about 16 times as much as a picture.
Three clips on the chorus and the ending, with the feature scenes and camera moves in between, keep a
song around 240 Buzz. Ask your agent for more or fewer.

Which engine: we priced a 5-second image-to-video clip on several engines. HeyGen's at 480p was the
cheapest (about 65); others ranged from about 117 (the same engine at 768p) and about 125 to 150 (MiniMax
H3 comfy for 6 seconds, LTX 2, Wan 2.2 5B) to 500 or more (Wan 2.5, Kling 2.5 Turbo). The skill uses the cheapest by default,
and your agent can switch.

The agent's scripts also refuse to spend more than 250 Buzz in one picture run or 300 in one batch of
clips, unless you tell them to.

## 6. Make it better

- **Follow the lyrics.** The song tells you what the feature does. A picture that matches each line is
  what makes a launch video work. If a line says "drag it into place", show something being dragged.
- **Keep a cast.** One or two characters, described the same way in every prompt, make the video feel
  like a story instead of a slideshow. Tell your agent who they are.
- **Mascots beat "cute kids".** Crucible entries must fit the content rating. In our tests, asking the
  default model for cute young characters sometimes gave teens in revealing outfits. Animal or toy-like
  mascots, or adults in everyday clothes, came out right, and your agent checks every image before using it.
- **Show the feature.** The screenshots are what make it a launch video. Ask for one on every line that
  describes something you do in the feature, and for the camera to land on the button or badge that matters.
- **Spend clips on the chorus.** Put moving clips where the song lifts.
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
| `ffmpeg` not found | Install it (see "What you need"), then quit the agent and start it again in the same folder (`claude --continue` or `codex resume`) |
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

**Remotion's license.** The skill is free, and Remotion is free for individuals and companies of up to 3 people. Larger
companies need a Remotion company license; see [Remotion's pricing page](https://www.remotion.dev/docs/license/pricing).

**Civitai's MCP servers.** If your agent supports MCP, you can also connect Civitai's MCP server at
`https://mcp.civitai.com/mcp`, which lets the agent search models on Civitai to pick a different image
model for your scenes. The skill works without it. Setup for Claude Code and Codex is at the end of the
[skill instructions](/skills/civitai-music-video/SKILL.md).
