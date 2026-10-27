---
title: "Which Model Should I Use in the Civitai Generator?"
slug: "which-model-should-i-use-in-the-civitai-generator"
date: "2026-10-26T21:00:00Z"
author: "civitai"
categories:
  - "civitai"
  - "guides"
tags:
  - "generative-ai"
  - "buzz"
  - "guide"
excerpt: "Pick a model for photorealism, anime, text in images, editing, video, speed or low cost, with a one-line reason for each and what it costs in Buzz."
image: "/images/guides/which-model-should-i-use-in-the-civitai-generator/cover.webp"
seo:
  title: "Which Model Should I Use in the Civitai Generator? - Civitai Education"
  description: "A decision guide for the Civitai generator: which model to pick for photorealism, anime, text in images, editing, video, speed or low cost, with Buzz cost bands."
  ogImage: "/images/guides/which-model-should-i-use-in-the-civitai-generator/cover.webp"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 10/26/2026 | First version. |

![A chart of goals (photoreal, anime, text, editing, video, speed, low cost) each pointing to a model family](/images/guides/which-model/which-model-cover.webp)

## How to use this guide

The generator offers dozens of models, and it adds more often. You do not need to know them all. Start with what you want to make, find it in the table below, and try the first pick. If it is not right, try the second.

You switch models with the base model selector in the generator form. It shows the model you are using now, and selecting it opens the list of models. On a phone the list is a full-screen **Select Base Model** dialog. Use the search box to find a model by name. Open the generator from the **Create** button. For the basics of writing a prompt and generating, see [Using Civitai: The On-Site Image Generator](/using-civitai-the-on-site-image-generator/).

:::note
Prices in this guide are about what one default image or clip cost on October 26, 2026. They change, and your price can differ. **The cost button next to Generate is the source of truth.** For how Buzz colors work, see [Buzz Colors: Blue, Yellow and Green](/buzz-colors-blue-yellow-and-green/).
:::

## Quick picks {#quick-picks}

| I want | Try first | Then | Costs about |
| --- | --- | --- | --- |
| A photorealistic image | Flux.2 | Krea 2, Flux.1, a photoreal SDXL checkpoint | 3 to 40 Buzz, more for Krea 2 Raw and the larger tiers |
| Anime or illustration | Illustrious | Anima, NoobAI, Pony | About 3 to 11 Buzz |
| Readable text in the image | Z-Image Turbo | Qwen, Flux.2, GPT Image, Seedream | 4 to 135 Buzz |
| To edit my own picture | See the [editing guide](/image-editing-models-on-civitai/) | | 13 to 135 Buzz (8 for GPT Image at low quality) |
| A video clip | LTX Video 2.5 (cheapest), Veo 3.1 (with sound) | Kling, Seedance, Wan | 40 to 1,500 Buzz |
| Few steps | Z-Image Turbo | Flux.2 Klein 4B, Krea 2 Turbo | 4 to 12 Buzz |
| The lowest cost | SDXL, Illustrious or Pony V7 | Z-Image Turbo, Flux.2 Klein 4B | 3 to 4 Buzz |
| My own LoRA or a community checkpoint | An SDXL family model | Flux.1, Qwen, Z-Image | 3 to 23 Buzz |

## What a model costs {#costs}

Costs are for one image at 1:1 with default settings, or one default clip with audio off, except where a quality or size is named. Each row is the price we saw on October 26, 2026. Veo and Seedance prices here are with audio off. Turning audio on costs more.

| Band | Image models | About Buzz |
| --- | --- | --- |
| Under 20 | SDXL, Illustrious and Pony V7 (3), Flux.2 Klein 4B (4), Z-Image Turbo (4), GPT Image 2.5 at low quality (8), Anima (11), Flux.1 Dev (12), Krea 2 Turbo (12), Muse Image (13), GPT Image 2.5 at medium (18) | 3 to 18 |
| 20 to 60 | Qwen (23), HiDream (30), Flux.2 Dev (40), Ideogram (42), Nano Banana V2.1 at 1K (44), Krea 3 at 1K (45), Seedream v5.0 Lite (52) | 23 to 52 |
| 60 to 150 | Flux.3 at 1K (63), GPT Image 2.5 at high quality (69), Seedream v5.0 Pro at 2K (135) | 63 to 135 |

| Band | Video models | About Buzz |
| --- | --- | --- |
| Under 150 | LTX Video 2.5 distilled (40) and dev (58), Wan 2.2 (101) | 40 to 101 |
| 400 to 700 | MiniMax H3 6 seconds (408), Seedance v2 mini (490), Kling V2.5 Turbo (600), Wan 2.7 and 3.0 (650), Veo 3.1 Fast 4 seconds (670) | 408 to 670 |
| 900 and up | Happy Horse (910), Wan 2.5 (1,000), Seedance v2 (1,000), Vidu Q3 (1,000), Grok v1.5 6 seconds (1,092), Veo 3.1 Standard 4 seconds (1,117), Seedance v2.5 (1,500) | 910 to 1,500 |

Clip lengths differ, and length changes the price. Treat video prices as a rough band, not a comparison. Several image models list a higher price at higher resolution: Flux.3 at 2K is about 130 Buzz.

## Where each model runs, and why it matters {#where-they-run}

Some models run on Civitai's own GPUs. Others are partner models that Civitai calls through the partner's service. The difference decides two things you may care about:

- **Your own LoRAs and community checkpoints.** These work with many of the models on Civitai's GPUs (including SD 1.x, the SDXL family (SDXL, Illustrious, NoobAI, Pony), Pony V7, Anima, Flux.1, Chroma, HiDream, Qwen, Z-Image, Flux.2 Klein and Flux.3 Klein), and with Flux.2 Dev and Krea 2 Raw and Turbo. Partner models like GPT Image, Nano Banana, Seedream, Krea 3, Flux.3 and Muse Image take no LoRAs.
- **Cost.** The cheapest image options, at 3 to 4 Buzz, all run on Civitai's GPUs.

The LoRA picker shows LoRAs that match the model you picked. If you pick a community checkpoint that is not loaded yet, a free account may be refused and a download may add a wait. See [Model Loading: Coverage, Boost and Featured Models](/model-loading-coverage-boost-and-featured-models/).

## Photorealistic images {#photoreal}

- **Flux.2** (Dev about 40 Buzz; Klein 4B, the smallest Flux.2 build, about 4). Civitai's ecosystem page describes Flux.2 as sharper in prompt adherence, in-image text and photorealism than the original Flux.1. **Flux.1** (about 12) is the older version and costs less than Flux.2 Dev.
- **Krea 2** (Turbo about 12). Civitai's ecosystem page describes it as built for sharp photorealism and dependable prompt adherence. Civitai's page says Raw is the generator's default Krea 2 checkpoint, so pick Turbo yourself for the low price. Raw and the larger hosted tiers cost more, so check the cost button.
- **A photoreal SDXL checkpoint** (about 3). The SDXL family (SDXL, Pony, Illustrious, NoobAI) has some of the largest libraries of community checkpoints and LoRAs on Civitai (Civitai's Illustrious page lists over 200,000 LoRAs), so you will find many photoreal styles there. Search the Models page for a checkpoint made for realism, then generate with it.

Civitai describes both Flux.2 and Krea 2 as strong on prompt adherence, so start with one of them when you have a plain prompt. Pick an SDXL checkpoint when you want a specific look, or need to run a LoRA at the lowest cost.

## Anime and illustration {#anime}

- **Illustrious** (about 3). Civitai's ecosystem page describes it as an SDXL-based model built for anime and illustration, with a large library of LoRAs.
- **Anima** (about 11). An open-weight anime and illustration model, described on Civitai as built for clean linework, expressive characters and vivid color from a prompt.
- **NoobAI** (SDXL-based, so check the cost button). An Illustrious-based checkpoint family trained on a large booru dataset, with deep character knowledge and strong tag-based prompting.
- **Pony** (SDXL-based, so check the cost button). Tag-based prompting with the `score_` system, aimed at characters and stylized art. **Pony V7** (about 3) is the newer model, built on the AuraFlow architecture instead of SDXL.

These families prompt differently. Illustrious, NoobAI and Pony respond to tag lists such as `1girl, silver hair, rain`. Check the model page of the checkpoint you pick for its recommended tags.

## Readable text inside the image {#text}

- **Z-Image Turbo** (about 4). Civitai's ecosystem page lists legible in-image text, in Chinese and English, as a strength of the Z-Image family. It is our first pick because it is among the cheapest options and Civitai lists its text as a strength.
- **Qwen** (about 23). Listed on Civitai for unusually legible in-image text.
- **GPT Image 2.5** (about 18 at medium, 69 at high). In our editing test every model spelled OPEN LATE correctly, GPT Image included. We did not test text in new images.
- **Seedream** (about 52 for v5.0 Lite, 135 for Pro). Built for fine-grained typography and high resolution, per Civitai's page.

Put the exact words in quotation marks in your prompt, and keep them short. Shorter text is easier to get right.

## Editing an image you already have {#editing}

Use an edit model when you have a picture and want to change one thing. The [Image Editing Models on Civitai](/image-editing-models-on-civitai/) guide compares eight of them on the same three edits, with prices. In short:

- **Nano Banana**: Civitai describes it as built to keep a person's or pet's likeness across edits.
- **Krea 3** kept the rest of the scene intact in our tests, as several other models did.
- **Muse Image** (about 13) is the lowest fixed price. GPT Image 2.5 at low quality is about 8.
- **Flux.3** takes up to 10 reference images.

## Video {#video}

- **LTX Video 2.5** (about 40 to 58). Civitai describes LTX as tuned for speed, with text-to-video and image-to-video. It runs on Civitai's GPUs and is the cheapest video option.
- **Veo 3.1** (about 670 Fast, 1,117 Standard, for 4 seconds). Google's model. Its headline feature is native audio: dialogue, sound effects and music generated with the picture.
- **Seedance** (about 490 to 1,500, by version). ByteDance's model. It generates audio with the clip, including dialogue and lip sync.
- **Happy Horse** (about 910). Also generates matching sound with the clip.
- **Kling** (V2.5 Turbo about 600; check the cost button for other versions). A high-end text-to-video and image-to-video model from Kuaishou.
- **Wan** (about 101 for Wan 2.2, 650 for Wan 2.7 and 3.0, 1,000 for Wan 2.5). A family of video models from Alibaba that turn a prompt or still image into short, realistic clips.

Video prices change with length, resolution and audio, so compare them with the cost button on the exact settings you want. The [video engines guide](/video-engines-on-civitai-in-2026/) compares every video engine in the generator, with lengths, audio and prices.

## Models built for speed {#speed}

We have not timed these, so this is a guide to models that Civitai describes as fast or as needing few steps, not a measurement.

- **Z-Image Turbo** (about 4). Civitai's Z-Image page says Turbo renders in just a handful of steps.
- **Flux.2 Klein 4B** (about 4). Civitai's Flux.2 page calls the Klein line its fastest Flux.2 line.
- **Krea 2 Turbo** (about 12). Civitai describes it as an 8-step distilled build of Krea 2 Raw.
- **LTX Video 2.5** (about 40 for the distilled build). Civitai describes LTX as tuned for speed.

## The lowest cost {#cost}

For images, SDXL, Illustrious and Pony V7 are the cheapest at about 3 Buzz, followed by Flux.2 Klein 4B and Z-Image Turbo at about 4, and GPT Image 2.5 at low quality at about 8. For editing, Muse Image at about 13 is the lowest fixed price. For video, LTX Video 2.5 at about 40 is the lowest by a wide margin.

Quality settings, resolution, number of images and extra steps all change the price. The cost button updates as you change them.

## Worked example {#worked-example}

You want a poster for a coffee shop with the words OPEN LATE, and you want to spend little while you test ideas.

1. Open the generator and choose **Z-Image Turbo** in the base model selector. The cost button shows about 4 Buzz.
2. Write the prompt with the words in quotation marks: a poster of a neon coffee cup in a dark window, with the text "OPEN LATE".
3. Generate. If the text is wrong, run it again, because text can change from one run to the next.
4. When the layout is right, switch the selector to **GPT Image** and choose a 2.5 build (Flare) in the version picker, then run the same prompt. Set the quality to Medium and it shows about 18 Buzz. At high quality, the default, it shows about 69.
5. Keep whichever result you prefer. You spent about 4 Buzz to find the layout, and the higher price only once.

Test cheap, then pay for the model you want only when the idea works.

## Troubleshooting {#troubleshooting}

**The model I want is missing from the selector.** The list first shows models that fit your current workflow. Search by name, or open the **All** tab if you see one, to find others. Picking one may switch the workflow. Models are also added and retired often. Check the cost button and the selector again later, or see the [changelog](https://civitai.com/changelog) for recent additions.

**My LoRA does not show up.** LoRAs only show for models they were trained for. A LoRA for SDXL does not appear when Flux.1 is selected, and most partner models do not take LoRAs at all.

**The price is not what this guide says.** Prices change, and options such as resolution, quality, duration and audio change them. The cost button is correct for your settings.

**Text in the image has the wrong letters.** Put the exact words in quotation marks, keep them short, and try Z-Image Turbo, Qwen or GPT Image.

**A video costs far more than an image.** That is normal. Video prices are in the hundreds of Buzz for most models. Start with LTX Video 2.5 to test an idea.

## I need more help {#more-help}

- [Using Civitai: The On-Site Image Generator](/using-civitai-the-on-site-image-generator/)
- [Image Editing Models on Civitai](/image-editing-models-on-civitai/)
- [Video Engines on Civitai in 2026](/video-engines-on-civitai-in-2026/)
- [Model Loading: Coverage, Boost and Featured Models](/model-loading-coverage-boost-and-featured-models/)
- [Buzz Colors: Blue, Yellow and Green](/buzz-colors-blue-yellow-and-green/)
- Civitai's list of model families is at civitai.com/ecosystems.
