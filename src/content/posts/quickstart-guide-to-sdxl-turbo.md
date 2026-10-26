---
title: "Quickstart Guide to SD(XL) Turbo"
slug: "quickstart-guide-to-sdxl-turbo"
date: "2023-11-29T17:20:28Z"
modified: "2025-02-04T04:24:37Z"
categories:
  - "quickstart-guides"
  - "sdxl"
tags:
  - "fast-inference"
  - "guide"
  - "sdxl"
  - "sdxl-turbo"
author: "civitai"
wpId: 2865
excerpt: "Civitai guide to getting started with SDXL Turbo."
image: "/wp-content/uploads/2023/11/sdxl_turbo_gif.webp"
seo:
  title: "Quickstart Guide to SD(XL) Turbo - Civitai Education"
  description: "SDXL Turbo is a newly released (11/28/23) \"distilled\" version of SDXL 1.0, trained for, per Stability AI, \"real-time synthesis\"."
  ogImage: "/wp-content/uploads/2023/11/sdxl_turbo_gif.webp"
  canonical: "https://education.civitai.com/quickstart-guide-to-sdxl-turbo/"
deprecated:
  date: "2026-10-26"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 11/29/2023 | First version published |
| 11/30/2023 | New ComfyUI Nodes |
| 12/8/2023 | Updates! |

## What is SD(XL) Turbo? {#what-is-sd-xl-turbo}

[SDXL Turbo](https://huggingface.co/stabilityai/sdxl-turbo) is a newly released (11/28/23) “distilled” version of SDXL 1.0, trained for, per Stability AI, “real-time synthesis” – that is – generating images extremely quickly. It’s based on a new training method called [Adversarial Diffusion Distillation (ADD)](https://stability.ai/research/adversarial-diffusion-distillation), and essentially allows coherent images to be formed in very few steps – even as low as _**one or two**_.

There’s now an [even faster Turbo version](https://huggingface.co/stabilityai/sd-turbo) based on SD 2.1 (512×512), called **SD Turbo**, which can drastically increase image generation speed, and we’re hearing rumors of an **SD 1.5 based Turbo model** which would outstrip any previous Turbo iteration!

## Why should I be excited by SDXL Turbo?

The use-case for SDXL Turbo is similar to that of the [LCM LoRA/architecture](/quickstart-guide-to-lcm-lora-acceleration-modules/) – **super-fast inference.** There’s a speed/quality trade-off, but if you need to churn out _hundreds_ of images in seconds; this is a viable option.

More exciting than Stability’s base model are the developments coming from the Civitai Community. Creator [SoCalGuitarist](https://civitai.com/user/socalguitarist) has created the [first super-fast SDXL model](https://civitai.com/models/215418), based on the SDXL Turbo architecture, which allows for fast generations at normal SDXL image dimensions, and quality.

<div data-embed="videopress" data-src="https://videopress.com/embed/jHgV36he?cover=1&amp;autoPlay=1&amp;controls=0&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="383"><figcaption><em>Real-time prompting with SDXL Turbo</em> (Windows, RTX 4090)</figcaption></div>

<div data-embed="videopress" data-src="https://videopress.com/embed/gqmSUmts?cover=1&amp;autoPlay=1&amp;controls=0&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="450"><figcaption><a href="https://twitter.com/cumulo_autumn/status/1732309219041571163"><em>Image generation at ~100 frames/images per second with SD Turb</em>o</a></figcaption></div>

<div class="columns">

<div class="column">

![SDXL image quality comparison](/wp-content/uploads/2023/11/image-1024x610.webp)

</div>

<div class="column">

![sdxl prompt alignment comparison](/wp-content/uploads/2023/11/image-1-1024x610.webp)

</div>

</div>

Charts, from [this study](https://static1.squarespace.com/static/6213c340453c3f502425776e/t/65663480a92fba51d0e1023f/1701197769659/adversarial_diffusion_distillation.pdf), indicating user preference, versus similar models tuned for high inference speed.

## How can I use SD Turbo & SDXL Turbo? {#how-can-i-use-sd-turbo-sdxl-turbo}

You can download the SDXL Turbo models from Civitai here, and drop them into either ComfyUI or Automatic1111. You’ll see a speed boost in Automatic1111, but for the greatest results you’ll need to update ComfyUI – **new nodes were added on 11/29 to take full advantage of SDXL Turbo.**

| Model Name | Civitai Link | Original Source |
| --- | --- | --- |
| SDXL Turbo (Full) | [Link](https://civitai.com/models/215478/sdxl-turbo) | [Lin](https://huggingface.co/stabilityai/sdxl-turbo/tree/main)[k](https://huggingface.co/stabilityai/sdxl-turbo/tree/main) |
| SDXL Turbo (Pruned, fp16) | [Link](https://civitai.com/models/215478?modelVersionId=242797) | [Link](https://huggingface.co/stabilityai/sdxl-turbo/blob/main/sd_xl_turbo_1.0_fp16.safetensors) |
| SD Turbo | [Lin](https://civitai.com/models/220609/sd-turbo)[k](https://civitai.com/models/220609/sd-turbo) | [Lin](https://huggingface.co/stabilityai/sd-turbo/tree/main)[k](https://huggingface.co/stabilityai/sd-turbo/tree/main) |

SDXL Turbo is also available on StabilityAI’s [Clipdrop image generation](https://clipdrop.co/stable-diffusion-turbo) service.

## Workflows & Suggested Settings {#workflows-suggested-settings}

The following workflow is an extremely basic txt2img workflow, set up for SDXL Turbo. There’s no upscaling; it’s purely designed for speed of image generation.

| Setting | Suggested Value |
| --- | --- |
| Latent Image Width | 512 |
| Latent Image Height | 512 |
| Steps | 1-5 |
| CFG | 1-2.5 |
| Sampler | Euler a, LCM |

Note: if using **Automatic1111**, install the **AnimateDiff extension** which will add the LCM sampler.

![](/wp-content/uploads/2023/11/SDXL_Turbo_Fast-1024x659.webp)

[SDXL\_Turbo\_Fast](/wp-content/uploads/2023/11/SDXL_Turbo_Fast.zip)

We can use Turbo in a variety of _**super-entertaining**_ ways, including incorporating [Creator ToyXYZ’s Webcam Capture nodes](https://github.com/toyxyz/ComfyUI_toyxyz_test_nodes/tree/main), to overpaint ourselves in near real-time;

<div data-embed="videopress" data-src="https://videopress.com/embed/AECnIYo7?cover=1&amp;autoPlay=1&amp;controls=0&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="487"><figcaption><em>Webcam Capture + SDXL Turbo (RTX 4090)</em></figcaption></div>

![](/wp-content/uploads/2023/12/Turbo-Webcam-1024x695.webp)

[SDXL Turbo Webcam](/wp-content/uploads/2023/11/SD-Turbo-Webcam.zip)

## Output Examples

Below are a number of images generated using the SDXL Turbo base model, and [TurboVisionXL](https://civitai.com/models/215418), along with their generation parameters and time-to-generate, on an **RTX 4090 GPU**.

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/11/1.png)

</div>

<div class="column">

-   **Model**: SDXL Turbo Pruned (fp16)
-   **Dimensions**: 512×512
-   **Steps**: 1
-   **CFG**: 1
-   **Scheduler**: Euler a
-   **Generation Time**: ~0.3 seconds

</div>

</div>

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/11/2.png)

</div>

<div class="column">

-   **Model**: SDXL Turbo Pruned (fp16)
-   **Dimensions**: 512×512
-   **Steps**: 1
-   **CFG**: 1
-   **Scheduler**: Euler a
-   **Generation Time**: ~0.3 seconds

</div>

</div>

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/11/4.png)

</div>

<div class="column">

-   **Model**: SDXL Turbo Pruned (fp16)
-   **Dimensions**: 512×512
-   **Steps**: 1
-   **CFG**: 1
-   **Scheduler**: Euler a
-   **Generation Time**: ~0.3 seconds

</div>

</div>

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/11/5.png)

</div>

<div class="column">

-   **Model**: SDXL Turbo Pruned (fp16)
-   **Dimensions**: 512×768
-   **Steps**: 1
-   **CFG**: 1
-   **Scheduler**: Euler a
-   **Generation Time**: ~0.4 seconds

</div>

</div>

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/11/6.png)

</div>

<div class="column">

-   **Model**: SDXL [Tur](https://civitai.com/models/215418)[bo](https://civitai.com/models/215418)[VisionXL](https://civitai.com/models/215418)
-   **Dimensions**: 1024×1024
-   **Steps**: 9
-   **CFG**: 1.7
-   **Scheduler**: Euler a
-   **Generation Time**: ~0.7 seconds

</div>

</div>

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/11/7.png)

</div>

<div class="column">

-   **Model**: SDXL [Tur](https://civitai.com/models/215418)[bo](https://civitai.com/models/215418)[VisionXL](https://civitai.com/models/215418)
-   **Dimensions**: 1024×1024
-   **Steps**: 8
-   **CFG**: 1.7
-   **Scheduler**: Euler a
-   **Generation Time**: ~0.7 seconds

</div>

</div>

## Limitations

-   This model uses Stability AI’s [Non-Commercial Research Community Licence](https://huggingface.co/stabilityai/sdxl-turbo/blob/main/LICENSE.TXT), allowing for research and non-commercial use only.
-   The native output of the **SDXL Turbo** model is 512×512 pixels.
-   The model cannot render text.
-   Faces, and people in general, can be funky!

## The Future

We’ll continue to expand this quickstart guide with more information as it becomes available!
