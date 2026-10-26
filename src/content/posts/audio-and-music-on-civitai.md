---
title: "Audio and Music on Civitai"
slug: "audio-and-music-on-civitai"
date: "2026-10-26T22:00:00Z"
author: "civitai"
categories:
  - "civitai"
  - "guides"
  - "audio"
tags:
  - "audio"
  - "music"
  - "ace-step"
  - "guide"
excerpt: "How to make music and sound effects in the Civitai generator with ACE Audio, MiniMax Music 3, YuE2 and Sonilo: what each engine takes, how long a track can be, what it costs in Buzz, and how to train your own audio LoRA in Training Studio."
seo:
  title: "Audio and Music on Civitai - Civitai Education"
  description: "Generate music and sound effects on Civitai with ACE Audio, MiniMax Music 3, YuE2 and Sonilo, and train an ACE-Step audio LoRA in Training Studio. Lengths, controls and Buzz costs."
---

| **Last Updated** | **Changes** |
| --- | --- |
| 10/26/2026 | First version. |

## What is on offer {#what-is-on-offer}

The Civitai generator can make **music** and **sound effects** from a text description. It does this with four engines: **ACE Audio**, **MiniMax Music 3**, **YuE2** and **Sonilo**. You describe the sound, and for the song engines you can also write the lyrics.

There is **no text-to-speech** in the generator. It can't read a script aloud in a chosen voice. If you want spoken sound inside a video, some video engines can generate audio with the clip; see [Video Engines on Civitai in 2026](/video-engines-on-civitai-in-2026/).

You can also train your own audio LoRA on the ACE-Step models in Training Studio. That is covered [near the end](#train-your-own).

## Start a track {#start-a-track}

1. Open the generator from the **Create** button.
2. In the workflow selector, choose **Create Music**. The app describes it as "Generate music from text description and lyrics". It sits in the **Audio** group beside Image and Video.
3. Pick an engine in the base model selector: **ACE Audio**, **MiniMax Music 3**, **YuE2** or **Sonilo**. ACE Audio is the default.
4. Describe the track, set a length, and generate. The cost button next to Generate shows the price before you spend.

The form changes with the engine. The next section compares them.

## The engines at a glance {#the-engines-at-a-glance}

Prices are what the generator's price check returned on October 26, 2026, in Buzz, for the length shown. Your price can differ, because the simple mode and the cover image add steps, so **the cost button is the source of truth**. For how Buzz colors work, see [Buzz Colors: Blue, Yellow and Green](/buzz-colors-blue-yellow-and-green/).

| Engine | Makes | Length you can set | Lyrics | About Buzz |
| --- | --- | --- | --- | --- |
| ACE Audio | Songs | 1 to 190 seconds (60 by default) | Optional, in Custom mode | 16 for 60 s (XL Turbo) |
| MiniMax Music 3 | Songs | 30 to 300 seconds, in steps of 10 (60 by default) | Required in Custom mode | 45 for 60 s |
| YuE2 | Songs | 1 to 360 seconds (120 by default) | Required in Custom mode | 35 for 120 s |
| Sonilo | Music, or a sound effect | Music 5 to 360 s; sound effect 0.5 to 180 s | None; a prompt only | 176 for 60 s of music; 19 for an 8 s sound effect |

Everything except Sonilo has two modes, **Simple** and **Custom**. Simple takes one prompt and a chat model drafts the lyrics and the music description for you. Custom lets you write both. Simple mode runs that drafting step first, so it can cost slightly more than the table.

## ACE Audio {#ace-audio}

ACE Audio is the default music engine and the cheapest per minute in the table. The version picker offers **XL Turbo** (the default), **Turbo**, **XL SFT**, **XL Base** and **Base**. The Turbo versions are the fast ones. The Base and SFT versions run more steps.

- **Simple mode:** type one prompt, "Describe the song you want to generate". A chat model writes the lyrics, a music description, a tempo and a key, and ACE makes the song.
- **Custom mode:** you fill in these fields:
  - **Title** (up to 100 characters).
  - **Music Description:** "the music style, genre, mood, and instruments", up to 1,000 characters. Required.
  - **Lyrics:** optional. Use section markers like `[Verse]`, `[Chorus]` and `[Bridge]`.
  - **BPM:** 40 to 200, 120 by default.
  - **Instrumental Weight** and **Vocal Weight:** each from 0 to 1, 0.5 by default.
- **Duration (seconds):** 1 to 190.
- **Cover image:** tick **Generate cover image** ("Auto-generate an album cover using AI") and the generator also makes cover art from your description. Or upload a square (1:1) **Cover image** of your own. The cover is an extra step, so it adds to the price.
- **Advanced:** CFG Scale, Steps and Seed. In Custom mode the generator holds CFG and steps at the right values for the version you picked (CFG 1 and 8 steps on Turbo versions, CFG 4 and 50 steps on Base and SFT versions), so changing them does nothing there.

## MiniMax Music 3 {#minimax-music-3}

MiniMax Music 3 makes longer songs, from 30 seconds up to 5 minutes, with a seed for repeatable results. It has one version, v3.0.

- **Simple mode:** one prompt, and a chat model drafts the caption and lyrics.
- **Custom mode:** a **Music Description** (up to 2,000 characters) and **Lyrics**. Unlike ACE, MiniMax Music 3 needs both in Custom mode.
- **Duration:** a slider from 30 to 300 seconds in steps of 10.

## YuE2 {#yue2}

YuE2 makes songs up to 6 minutes long. It has one version, v2, and a default of 120 seconds. The length setting is labeled **Maximum duration (seconds)**, a cap rather than an exact length.

- **Simple mode:** one prompt. A chat model drafts the lyrics and style.
- **Custom mode:** **Music Description**, **Lyrics**, a **Steps** slider (1 to 100, 32 by default) and **Score planning**. Score planning guides the song with a musical score. **Melody + chords** plans the tune and the chord progression, **Melody only** plans just the tune, and **Off** skips the score. You can paste an **ABC score** of your own to skip the automatic composing. The app notes that automatic planning adds time and cost.

## Sonilo {#sonilo}

Sonilo is the only engine that makes **sound effects**, and the only one without lyrics. Its version is V1.1. Choose what to make with the **Generate** switch:

- **Music:** 5 to 360 seconds, in steps of 5, 60 by default.
- **Sound effect:** 0.5 to 180 seconds, in steps of 0.5, 8 by default.

Write a prompt of up to 2,000 characters. There is no Simple or Custom mode, no lyrics field and no tempo control; the prompt and the length are all you set.

## Writing a good prompt {#writing-a-good-prompt}

- **Name the genre and the feel first.** "Warm neo-soul with Rhodes chords and brushed drums" tells the engine more than "a nice song".
- **List instruments and mood.** The Music Description field exists for this.
- **Mark the structure in lyrics.** Put `[Verse]`, `[Chorus]` and `[Bridge]` on their own lines. Short lines sing better than long ones.
- **For a sound effect, describe the source and the space.** "A wooden door creaks open in a stone hallway" gives more to work from than "door sound".
- **Match the length to the lyrics.** A 30 second track can't hold three verses and two choruses. If the lyrics are long, give the engine more seconds.

## A worked example: a short song in Custom mode {#worked-example}

Goal: a 60 second acoustic song about leaving a small town.

1. Open the generator from **Create** and choose **Create Music**. Keep **ACE Audio** and the default **XL Turbo** version.
2. Switch the **Mode** to **Custom**.
3. In **Title**, type "Last Bus Home".
4. In **Music Description**, type: *Warm acoustic folk, fingerpicked guitar, soft brushed drums, gentle male vocal, nostalgic and hopeful.*
5. In **Lyrics**, write a short structure, for example:

   ```text
   [Verse]
   The station light is flickering
   My bag is by the door
   [Chorus]
   Take me home on the last bus
   Past the hills I used to know
   ```

6. Set **BPM** to 90 and **Duration** to 60. Leave **Instrumental Weight** and **Vocal Weight** at 0.5.
7. Check the cost button. The table above suggests about 16 Buzz for 60 seconds. Turning on **Generate cover image** adds a step, and the button will show it.
8. Generate. If the balance of voice and instruments is off, adjust **Instrumental Weight** or **Vocal Weight** and run again.

To compare engines, run the same description and lyrics on MiniMax Music 3 (the lyrics are required there) and YuE2 and listen to the three side by side.

## Train your own audio LoRA {#train-your-own}

**Training Studio** can train a LoRA on ACE-Step, so you can teach a model a genre, a sound or a style from your own tracks. Audio training is open to everyone. The full tour of the Studio, including payment, results and the classic trainer, is in [Civitai's Guide to Training Studio](/civitais-guide-to-training-studio/). This section covers what is specific to audio.

1. Open Training Studio. In the media picker choose **Audio**.
2. Choose a type. For audio the types are **Style** and **Concept**. (Character is for images and video, and Effect is for video.)
3. Choose a base model: **ACE-Step 1.5** (3.5B), **ACE-Step 1.5 XL Base** (4B) or **ACE-Step 1.5 XL SFT** (4B). The app describes ACE-Step as the way to "teach it a genre or an artist's sound from a few tracks".
4. Add audio files. The Studio accepts **MP3, WAV, FLAC, OGG and M4A**. Each tile has a player so you can hear a clip while you label it.
5. Label every clip. Audio models use **captions**: a description of the sound, with the lyrics where there are any. **Auto-label** can write these for you, and you can edit them by hand.
6. The Studio recommends at least **15 clips** for a Style or Concept LoRA. This is a recommendation, not a hard stop.
7. Review the settings and start. The Studio shows a price quote for your exact settings before you start. A run that fails is refunded automatically.

Audio runs default to 5 epochs. When the run finishes, you can listen to the sample from each epoch, then **download** or **publish** the one you like. See the Studio guide for how epochs, samples and publishing work.

## Troubleshooting {#troubleshooting}

- **Generate is disabled or says a field is required.** In Custom mode, ACE needs a Music Description. MiniMax Music 3 and YuE2 need a Music Description and Lyrics. Simple mode needs only the prompt.
- **My CFG and Steps changes did nothing.** On ACE in Custom mode the generator keeps them at the values for the version you picked. Switch versions to change the behavior.
- **The track is shorter or longer than I set.** YuE2's length is a maximum. Each engine also has its own range, so a number that works on ACE may be out of range on MiniMax Music 3, which starts at 30 seconds.
- **The cost is higher than the table.** Simple mode runs an extra drafting step, a generated cover is an extra step, and YuE2's automatic score planning adds cost.
- **I wanted a spoken voice.** Text-to-speech isn't offered. Some video engines can generate speech with a clip; see the [video engines guide](/video-engines-on-civitai-in-2026/).

## I need more help! {#i-need-more-help}

If your audio problem isn't solved here, write to our Support Team at [support@civitai.com](mailto:support@civitai.com). Say which engine and which mode you used.
