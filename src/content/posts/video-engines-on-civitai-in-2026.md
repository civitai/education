---
title: "Video Engines on Civitai in 2026"
slug: "video-engines-on-civitai-in-2026"
date: "2026-10-26T21:00:00Z"
author: "civitai"
categories:
  - "civitai"
  - "guides"
  - "video"
tags:
  - "video"
  - "text2video"
  - "img2video"
  - "guide"
excerpt: "Every video engine in the Civitai generator today: what each one accepts (text, image, first and last frame, references), how long and how sharp its clips can be, which can make audio, and what a clip costs in Buzz."
image: "/wp-content/uploads/2025/03/ComfyUI_00041_.webp"
seo:
  title: "Video Engines on Civitai in 2026 - Civitai Education"
  description: "Compare Veo 3, Vidu, MiniMax H3, Kling, Grok, Seedance, HappyHorse, Flux 3 Video, LTX and Wan in the Civitai generator, with durations, resolutions, audio support and Buzz costs."
  ogImage: "/wp-content/uploads/2025/03/ComfyUI_00041_.webp"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 10/26/2026 | First version. Replaces the Mochi, Hunyuan and Wan 2.1, and Stable Video Diffusion guides. |

## What this guide covers {#what-this-guide-covers}

The Civitai generator can make video from text, from an image, from a first and last frame, or from a set of reference images. Each of those jobs is open to a different set of engines, and the engines differ in clip length, resolution, audio and price.

This guide is the comparison. It lists every video engine in the generator today and tells you what each one accepts and what it costs, so you can pick one before you spend Buzz. For how to open the generator, how Image to Video starts from an existing image, and the Bring Your Own Image upload, read [Civitai's Guide to Video in the Civitai Generator](/civitais-guide-to-video-in-the-civitai-generator/). That guide also has the Buzz refund and content-policy notes for engines that run through outside providers, and they apply here too.

Prices in this guide are what the generator's price check returned on October 26, 2026, in Buzz, at the form's default settings plus the length and resolution named in each row. Video prices change often and move with every setting. **The cost button next to Generate is the source of truth.** For how Buzz colors work, see [Buzz Colors: Blue, Yellow and Green](/buzz-colors-blue-yellow-and-green/).

## Pick an engine {#pick-an-engine}

| You want | Start with | Why |
| --- | --- | --- |
| The cheapest way to test an idea | LTX 2.3 or 2.5 Distilled | About 40 Buzz for a 5 second 720p clip |
| A low-cost clip from a still image | Wan 2.2, or MiniMax H3 (Comfy build, with Turbo on) | About 101 Buzz at default settings, and about 150 for 6 seconds |
| Sound that comes with the clip | For example Veo 3, Kling V3, Seedance, Vidu Q3 or Q4, Flux 3 Video, LTX 2.3 or 2.5 | Each makes audio; see [the audio column](#engines-at-a-glance) |
| A clip longer than 10 seconds | Wan 3.0 (30 s), Seedance v2.5 (30 s), Flux 3 Video (20 s), LTX 2.3 and 2.5 (20 s), Vidu Q3 and Q4 (16 s), or Kling V3, MiniMax H3, Grok, HappyHorse and Wan 2.7 (15 s) | See [the length column](#engines-at-a-glance) |
| A video that starts on one image and ends on another | Wan 2.7, Wan 3.0, Kling V3, Vidu, MiniMax H3, LTX, Flux 3 Video | These take an optional last frame |
| A video that keeps a character or object from your pictures | For example Seedance, Kling V3, Vidu, HappyHorse, Wan 2.7, MiniMax H3, Veo 3 or LTX 2.3 and 2.5 | These take reference images |
| An existing video changed by a prompt | Wan 2.7, HappyHorse v1.0, Grok v1.0 | The Edit Video workflow |
| The highest resolution | Vidu Q4 (up to 4K, from an image) | The other engines go up to 1080p |

## Pick the workflow first {#pick-the-workflow-first}

In the generator you choose a **workflow**, and the base model selector then shows only the engines that support it. The video workflows are:

| Workflow | What you provide | Engines |
| --- | --- | --- |
| **Create Video** (Text to Video) | A prompt | Veo 3, Vidu Q1 and Q3, MiniMax H3, Kling, Grok, Seedance, HappyHorse, Flux 3 Video, LTX, Wan 2.2 and newer |
| **Image to Video** | A start image and a prompt describing the motion. Some engines add an optional last frame | Every engine above, and Vidu Q4 |
| **Reference to Video** | Several images the clip should draw on | Vidu (Q1 and Q4), Veo 3, Kling V3, LTX 2.3 and 2.5, Wan 2.7, HappyHorse, MiniMax H3, Grok v1.5, Seedance |
| **Keyframes to Video** | Images placed at chosen moments in the clip | Flux 3 Video Max only |
| **Edit Video** | A source video and a prompt | Wan 2.7, HappyHorse v1.0, Grok v1.0 |

If you pick an engine that doesn't support the workflow you are on, the generator may switch you to a version or engine that does, as it does for Kling V3 and Flux 3 Video Max. Check the engine name and the version before you press Generate.

**Last frame.** These engines accept an optional end image beside the start image, so the clip travels from one picture to the other: Vidu (not Q4), Kling V3, LTX, Wan 2.7, Wan 3.0, MiniMax H3 (not HeyGen) and Flux 3 Video. The other engines take a start image only.

Two more video tools work on a clip you already have: **Upscale** (raise a clip's resolution) and **Interpolate** (smooth a clip by adding frames).

## Engines at a glance {#engines-at-a-glance}

Length and resolution are the maximums the generator's form offers. Audio means the form has a switch to generate sound with the clip.

| Engine | Versions | Longest clip | Highest resolution | Audio |
| --- | --- | --- | --- | --- |
| Veo 3 | Veo 3.1, Fast Mode and Standard | 8 s | Set by aspect ratio (up to 1920 by 1080) | Switch, off by default |
| Vidu | Q1, Q3, Q4 | 16 s (Q3, Q4) | 1080p (Q3), 4K (Q4) | Q3 switch; Q4 always on from an image |
| MiniMax H3 | Comfy, Api, Max by Fal, HeyGen | 15 s | 1080p (Max) | No switch |
| Kling | V1.6, V2, V2.5 Turbo, V3 | 15 s (V3) | Not set on the form | V3 switch |
| Grok | v1.0, v1.5 | 15 s | 1080p (v1.5, not in Reference to Video) | No switch |
| Seedance | v2 mini, v2 fast, v2, v2.5 | 30 s (v2.5), 15 s others | 1080p (v2 only), 720p others | Switch |
| HappyHorse | v1.0, v1.1 | 15 s | 1080p | No switch |
| Flux 3 Video | v3.0, v3.0 Max | 20 s | 1080p | Switch (off on v3.0, on by default on Max) |
| LTX | 2.0, 2.3, 2.5 (Dev and Distilled) | 20 s at 720p (2.3, 2.5), 7 s (2.0) | 1080p (2.3, 2.5) | 2.3 and 2.5 switch, on by default |
| Wan | 2.2, 2.2 5B, 2.5, 2.7, 3.0 | 30 s (3.0) | 1080p (2.5, 2.7, 3.0) | No switch |

Per-engine details follow, in the order of the table.

## Veo 3 {#veo-3}

Google's Veo 3, at API version 3.1. Pick **Fast Mode** or **Standard** in the version picker. It takes text, one start image, or up to 3 reference images.

- **Length:** 4, 6 or 8 seconds. Reference to Video is fixed at 8 seconds.
- **Shape:** 16:9, 1:1 or 9:16 on text prompts. From an image, the clip follows the image, and the form asks for a 16:9 or 9:16 source.
- **Audio:** the **Generate audio** switch is off by default.
- **Cost:** about 670 Buzz for 4 seconds on Fast Mode, 1,340 for 8 seconds, and 1,000 and 2,000 with audio. Standard is about 1,117 for 4 seconds and 2,234 for 8, and 1,666 and 3,333 with audio.
- **Note:** the live video guide says Veo 3 is a PG-only model. A prompt with profanity or sexually explicit language returns a generic PG clip, with no refund.

## Vidu {#vidu}

Vidu has three versions, and they differ a lot.

- **Q1:** text, start image with an optional last frame, or up to 7 references. It has a **Style** choice (General or Anime) on text prompts, a **Movement amplitude** choice (Auto, Small, Medium, Large) and a prompt enhancer. Ratios are 16:9, 1:1 and 9:16. About 600 Buzz.
- **Q3:** adds a resolution choice (360p, 540p, 720p, 1080p), five ratios (16:9, 1:1, 9:16, 4:3, 3:4), a length slider from 1 to 16 seconds, a **Draft Mode** switch and an audio switch. It takes text, a start image with an optional last frame, but not references. About 1,000 Buzz at 720p for 5 seconds.
- **Q4:** works from images only. It takes one start frame, or up to 15 references. Resolutions run 540p, 720p, 1080p, 2K and 4K. Image to Video lasts 3 to 16 seconds and always makes audio. Reference to Video lasts 1 to 16 seconds and has an audio switch. About 618 Buzz at 720p for 5 seconds.

## MiniMax H3 {#minimax-h3}

MiniMax H3 is the default video engine in the generator, and the one the **Animate** button on an image uses. The version picker offers four builds:

| Build | What is different | About Buzz for 6 s |
| --- | --- | --- |
| **Comfy** (default) | Takes LoRAs, a seed, a steps slider and a **Turbo** switch. Text to Video can also take a control video | 408, or 150 with Turbo |
| **Api** | No extra settings | 1,020 |
| **Max by Fal** | A **Turbo** switch (Max or Max Turbo), and 480p, 768p or 1080p | 624 at 768p, 312 with Max Turbo |
| **HeyGen** | 480p or 768p; start frame only | 141 at 768p |

All builds take text, a start image with an optional last frame (HeyGen takes the start frame only), or up to 9 reference images. Length runs from 4 or 5 seconds up to 15, with a default of 6. Ratios are 16:9, 4:3, 1:1, 3:4 and 9:16. A prompt is required even when you supply images, and there is no negative prompt.

## Kling {#kling}

Kling has two lines. The older one is **V1.6, V2 and V2.5 Turbo** (V2.5 Turbo is the default): text or one start image, 5 or 10 seconds, 16:9, 1:1 or 9:16, a prompt enhancer and a CFG scale. V1.6 also has a **Standard** or **Professional** mode. About 600 Buzz for V2.5 Turbo at 5 seconds.

**V3** is the newer line. It takes text, a start image with an optional end image, or up to 7 references, and lasts 5 to 15 seconds. It has a **Standard** or **Professional** mode and an audio switch, and it has no negative prompt. About 1,095 Buzz for 5 seconds, 1,460 with audio, and 2,920 for 10 seconds with audio. Reference to Video is only available on V3, so choosing it switches you to V3.

## Grok {#grok}

Grok's video engine has two versions, **v1.0** and **v1.5**. Clips run 6 to 15 seconds at 480p or 720p, and v1.5 adds 1080p. Ratios are 16:9, 3:2, 4:3, 1:1, 3:4, 2:3 and 9:16. It takes text, one start image, or up to 7 references on v1.5, and v1.0 supports **Edit Video**. About 1,092 Buzz for v1.5 at 720p for 6 seconds.

## Seedance {#seedance}

Seedance has four versions: **v2 mini** (the default), **v2 fast**, **v2** and **v2.5**.

- **Resolution:** 480p or 720p, and 1080p on v2 only.
- **Length:** 4 to 15 seconds, and up to 30 seconds on v2.5.
- **Shape:** 21:9, 16:9, 4:3, 1:1, 3:4 or 9:16.
- **Inputs:** text, one start image, or up to 9 references. There is an audio switch, off by default, and no negative prompt.
- **Cost:** at 720p for 5 seconds, about 490 on v2 mini, 1,000 on v2 and 1,500 on v2.5.

## HappyHorse {#happyhorse}

HappyHorse has **v1.0** and **v1.1** (the default). Clips run 3 to 15 seconds at 720p or 1080p. Ratios are 16:9, 4:3, 1:1, 3:4 and 9:16, and v1.1 adds 21:9, 5:4 and 4:5. It takes text, one start image, or up to 9 references. **Edit Video** works on v1.0 only, with an audio setting of **Auto** or **Origin**. About 910 Buzz for v1.1 at 720p for 5 seconds, and 1,170 at 1080p.

## Flux 3 Video {#flux-3-video}

Flux 3 Video has **v3.0** and **v3.0 Max**. Both run 720p or 1080p, take text or a start image with an optional end image, and cost about 1,105 Buzz at 720p for 5 seconds.

- **v3.0:** 4 to 20 seconds, a **Draft Mode** switch, and a **Generate audio** switch that is off by default.
- **v3.0 Max:** 5 to 20 seconds, audio on by default, a **Reasoning** setting of Low or High, and a seed. Max is also the only engine with **Keyframes to Video**: you place up to 10 images at chosen frames of the clip, which plays at 24 frames per second.
- **Limit:** Flux 3 Video can't animate images rated above PG-13, because its provider rejects them. The generator says so and suggests MiniMax H3.

## LTX {#ltx}

LTX is the low-cost family. The version picker offers **2.0**, **2.3** and **2.5**, and each has a Dev and Distilled variant. Distilled hides the CFG and steps settings and costs less. The default is 2.3 Dev. All versions take LoRAs from the resource picker.

- **2.3 and 2.5:** 720p or 1080p, 3 to 20 seconds at 720p and 3 to 15 at 1080p, five ratios (16:9, 3:2, 1:1, 2:3, 9:16), text, a start image with an optional end image, and references. Audio is on by default. These two are the only engines with a **Quantity** setting, so one run can make more than one clip. About 58 Buzz for Dev and 40 for Distilled at 720p for 5 seconds.
- **2.0:** an older, smaller-format build: clips of 3, 5 or 7 seconds at a size near 480p. About 200 Buzz at default settings.

## Wan {#wan}

Wan is Alibaba's video family. The generator offers these versions:

| Version | Resolution | Length | What it adds | About Buzz |
| --- | --- | --- | --- | --- |
| **2.2** | 480p, 720p | 3 or 5 s | Takes up to 2 LoRAs; shift and CFG settings | 101 at defaults |
| **2.2 5B** | 580p, 720p | No length setting | Smaller model; steps slider; optional FILM or RIFE smoothing | 143 at defaults |
| **2.5** | 480p, 720p, 1080p | 5 or 10 s | Text and start image | 1,000 for 5 s and 2,000 for 10 s at 720p |
| **2.7** | 720p, 1080p | 2 to 15 s | First and last frame, up to 5 references, Edit Video, prompt enhancer | 650 at 720p for 5 s |
| **3.0** | 480p, 720p, 1080p | 2 to 30 s | First and last frame, prompt enhancer | 650 at 720p for 5 s |

References and Edit Video are limited to 10 seconds on Wan 2.7.

## Sound in your clips {#sound-in-your-clips}

Engines with an audio switch can make sound from your prompt, such as sound effects. Describe the sound in the same prompt, for example: *"A kettle whistles on a stove, then a hand lifts it off. Sound of steam, then quiet kitchen noise."* For music and sound effects made on their own, see [Audio and Music on Civitai](/audio-and-music-on-civitai/).

Audio changes the price on some engines: Veo 3 adds about half again (670 to 1,000 Buzz on Fast Mode for 4 seconds), and Kling V3 about a third (1,095 to 1,460). On the other engines, watch the cost button when you flip the switch.

## Spending less Buzz {#spending-less-buzz}

Price follows length, resolution, version and mode. Doubling the length doubled the cost on the three engines we checked: Veo 3 Fast went from 670 to 1,340 Buzz, Wan 2.5 from 1,000 to 2,000, and Kling V3 with audio from 1,460 to 2,920. Some ways to spend less:

- **Draft cheap, finish dear.** Try the idea on LTX Distilled (about 40 Buzz) or MiniMax H3 Comfy with Turbo (about 150), then run the final on the engine you want.
- **Start at the lowest resolution that shows the idea.** Raise it for the final.
- **Use the engines' cheaper versions.** Veo 3 Fast Mode (670 against 1,117 Buzz for 4 seconds), Seedance v2 mini (490 against 1,000 on v2) and Max Turbo on MiniMax H3 (312 against 624) all cost less. Flux 3 Video v3.0 and Vidu Q3 also have a Draft Mode switch; check the cost button to see what it saves.
- **Keep it short.** Make a 3 to 5 second clip first.

## A worked example: animate a still in two passes {#worked-example}

Goal: a 5 second clip of a lantern on a pier at dusk, made from a still image.

1. Open the generator from the **Create** button and choose the **Image to Video** workflow.
2. Drop the image in the image area. A PNG, JPG or WebP up to 16 MB works. (See the live guide for upload details.)
3. For the draft, pick **LTX 2.3** and the **Distilled** variant. Set 720p and 5 seconds. Write the motion, not the picture: *"The lantern flame flickers. The camera pushes in slowly. Water ripples below."* The cost button should show about 40 Buzz.
4. Generate and watch the clip. If the motion is right, keep the prompt. If it isn't, change one thing (the camera move, or how strong the flicker is) and run it again. Each draft costs little.
5. For the final, switch to **Wan 2.7** at 720p and 5 seconds, which should read about 650 Buzz, or to **Kling V3** if you want audio. Keep the prompt that worked.
6. Compare the two clips. If you need the clip to end on a second image, Wan 2.7 takes an optional last frame in the same Image to Video form. Add the end image there.

## Engines that are no longer offered {#older-engines}

Earlier Education guides covered **Mochi**, **Hunyuan Video**, **Wan 2.1** and **Stable Video Diffusion**. Mochi and Stable Video Diffusion are no longer offered. This guide does not cover Hunyuan Video or Wan 2.1. If you want the same kind of result, **Wan 2.2** and newer, **LTX** and **MiniMax H3** (Comfy) cover that ground, and they take video LoRAs where noted above.

## Troubleshooting {#troubleshooting}

- **The engine I want is missing from the picker.** The picker shows only engines that support your current workflow. Switch to a workflow the engine supports (for example Image to Video), or check the table above.
- **Vidu Q4 won't take my text.** Q4 works from images only. Use Q1 or Q3 for text prompts.
- **MiniMax H3 asks for a prompt when I gave it an image.** It needs a prompt even with images. Describe the motion.
- **Flux 3 Video refuses my image.** It rejects images rated above PG-13. Use MiniMax H3 (Comfy) instead.
- **Reference to Video changed my Kling version.** On Kling it exists only on V3, so the generator switches you to V3. Other engines limit it by version too: Vidu Q3 and Grok v1.0 don't have it.
- **The clip is shorter or smaller than I set.** Each engine has its own limits, and switching engines can change your length or resolution. Check the settings after you change engine.
- **The cost is higher than the table.** Length, resolution, version, mode, audio and extras such as the prompt enhancer all move it. The cost button is the number that counts.
- **A generation failed or was rejected by the provider.** The live video guide explains refunds for failed jobs and the content rules of provider-hosted engines.

## I need more help! {#i-need-more-help}

If a video problem isn't solved here, write to our Support Team at [support@civitai.com](mailto:support@civitai.com). Include the engine, the version and the workflow you used.
