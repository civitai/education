---
title: "Quickstart Guide to LCM LoRA – Acceleration Modules!"
slug: "quickstart-guide-to-lcm-lora-acceleration-modules"
date: "2023-11-17T05:07:43Z"
modified: "2025-02-04T04:28:49Z"
categories:
  - "quickstart-guides"
tags:
  - "acceleration-modules"
  - "guide"
  - "lcm"
author: "civitai"
wpId: 2723
excerpt: "Civitai guide to getting started with LCM Stable Diffusion Acceleration Modules! Everything you need to know to getting started generating super fast!"
image: "/wp-content/uploads/2023/11/workflow.webp"
seo:
  title: "Quickstart Guide to LCM LoRA - Acceleration Modules! - Civitai Education"
  description: "Learn how to leverage the new LCM LoRA for fast Stable Diffusion inference! Boost generation speeds on both SDXL and SD 1.5!"
  ogImage: "/wp-content/uploads/2023/11/workflow.webp"
  canonical: "https://education.civitai.com/quickstart-guide-to-lcm-lora-acceleration-modules/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 11/16/2023 | First version published |
| 11/24/2023 | Update on near real-time processing |

## What is an LCM?

Latent Consistency Models (LCMs) are quickly becoming the hottest new Stable Diffusion technology, but there’s a lot of confusion about what they are, and how they can be used. In this guide we’ll try to dispel some of the fog surrounding the technology, and help you get started creating your own LCM-assisted images!

The [LCM LoRA](https://civitai.com/models/195519?modelVersionId=219782) behaves exactly like a normal LoRA – there’s an [SDXL version](https://civitai.com/models/195519?modelVersionId=219782), and an [SD 1.5 version](https://civitai.com/models/195519?modelVersionId=225222). You place it in the same LoRA directory as you’d normal download your LoRAs to, and include it in your positive prompt just like any other image generation. The LCM magic only happens when we drop the **CFG down to ~1.0**, and the **Sample Steps down to between ~3 and 8 steps**!

<div data-embed="videopress" data-src="https://videopress.com/embed/iFNixlxS?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="382"><figcaption><em>A batch of <strong>10 1024×1024</strong> images generating, with the LCM Acceleration Modules enabled</em></figcaption></div>

To seasoned Prompters, these values seem absolutely absurd, but they allow us to to produce excellent quality images in a fraction of the time needed without the LCM model; in some cases, to **sub one-second times**.

You can [read more about the math, and technical implementation here](https://github.com/luosiallen/latent-consistency-model/blob/main/LCM-LoRA%20Technical%20Report/LCM-LoRA-Technical-Report.pdf).

## Why should I be excited by LCM LoRAs?

**Speed**! Images generated with the LCM LoRA active generate _much faster_ than typical generations, and with reduced VRAM usage. We’re seeing _near instantaneous generations_ on the highest end hardware, and **significant speed boosts across all GPUs**!

A few examples below;

The following **SDXL** images were generated on an **RTX 4090** at **1280×1024** and upscaled to **1920×1152**, in **4.8 seconds** each, in the Automatic1111 interface.

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/11/00602-3811230654-1024x614.webp)

</div>

<div class="column">

![](/wp-content/uploads/2023/11/00603-3047174923-1024x614.webp)

</div>

</div>

The following **SDXL** images were generated on an **RTX 4090** at **1024×1024**, with **0.7 second** generation times, via the ComfyUI interface.

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/11/ComfyUI_00009_.png)

</div>

<div class="column">

![](/wp-content/uploads/2023/11/ComfyUI_00030_.png)

</div>

</div>

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/11/ComfyUI_00090_.png)

</div>

<div class="column">

![](/wp-content/uploads/2023/11/ComfyUI_00128_.png)

</div>

</div>

_Prompts by [Wizz](https://civitai.com/user/_Wizz_)_

## How can I use the LCM LoRAs?

[ComfyUI](https://github.com/comfyanonymous/ComfyUI) is leading the pack when it comes to leveraging the LCM LoRAs, but it _is_ possible to generate (and get excellent results) with [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui).

There’s support for both **SDXL** and **SD 1.5** models, with corresponding LoRA files (in **.safetensors** format) which can be downloaded from the following locations and **placed within the normal LoRA folder** for your preferred Stable Diffusion Interface.

| Model | Civitai Link | Original Author Link |
| --- | --- | --- |
| LCM SDXL LoRA | [Link](https://civitai.com/models/195519?modelVersionId=219782) | [HF Lin](https://huggingface.co/latent-consistency/lcm-lora-sdxl/tree/main)[k](https://huggingface.co/latent-consistency/lcm-lora-sdxl/tree/main) |
| LCM SD 1.5 LoRA | [Link](https://civitai.com/models/195519?modelVersionId=225222) | [HF Link](https://huggingface.co/latent-consistency/lcm-lora-sdv1-5) |

We then need to **include the LoRA in our prompt**, as we would any other LoRA. Lastly, we need to **_drastically lower_** both the **CFG** and **Step Count**! It is necessary to experiment with the CFG, Steps, and the LoRA strength, to get good results. Different models and even different _**prompts**_ will require tweaks to the settings. Some guide ranges;

| Setting | Suggested Value Range |
| --- | --- |
| LCM LoRA Strength | Between 1.0 (full strength) and 0.5 (half strength), depending on model |
| Step Count | 3 to 8 |
| CFG | 1 to 2.5 |
| Sampler | ComfyUI now has **LCM Sampler** support! Select it from the **sampler name** in the **KSampler node**. There’s no need to use any third-party nodes. **Automatic1111** users should use **Euler a**, or _experiment_ with samplers until LCM support is added! |

## Caveats – What’s the Catch? {#caveats-what-s-the-catch}

**Image quality**! There _is_ often a noticeable loss of image quality in many cases, and as mentioned previously, much tweaking is required to generate good images – there’s definitely a sweet-spot to be found, balancing generation speed for visual fidelity.

The examples below are all **sub 5 second generations**, and showcase the kind of quality that can be achieved with a bit of experimentation;

<div data-embed="gallery"><img src="/wp-content/uploads/2023/11/1699625912-1591038555-1-614x1024.webp" alt="" data-orig-file="/wp-content/uploads/2023/11/1699625912-1591038555-1.jpeg" width="1152" height="1920" loading="lazy"><img src="/wp-content/uploads/2023/11/1699622970-490107229-1-614x1024.webp" alt="" data-orig-file="/wp-content/uploads/2023/11/1699622970-490107229-1.webp" width="1152" height="1920" loading="lazy"><img src="/wp-content/uploads/2023/11/1699622969-1252707533-2-614x1024.webp" alt="" data-orig-file="/wp-content/uploads/2023/11/1699622969-1252707533-2.webp" width="1152" height="1920" loading="lazy"><img src="/wp-content/uploads/2023/11/1699622039-1623182716-2-614x1024.webp" alt="" data-orig-file="/wp-content/uploads/2023/11/1699622039-1623182716-2.webp" width="1152" height="1920" loading="lazy"><img src="/wp-content/uploads/2023/11/1699623205-3349485722-2-614x1024.webp" alt="" data-orig-file="/wp-content/uploads/2023/11/1699623205-3349485722-2.webp" width="1152" height="1920" loading="lazy"></div>

_Images/Prompts by [Wizz](https://civitai.com/user/_Wizz_)_

## Advanced: Near Real-Time Usage

We’re able to leverage the rapid image generation speed to create **_near real-time_** interactive workflows, processing images on-the-fly. A couple of implementations of this include;

### Webcam-to-Image

Using Creator [ToyXYZ’s experimental ComfyU](https://github.com/toyxyz/ComfyUI_toyxyz_test_nodes)[I](https://github.com/toyxyz/ComfyUI_toyxyz_test_nodes) [nodes](https://github.com/toyxyz/ComfyUI_toyxyz_test_nodes), we can capture a .jpg or .png webcam image stream, bringing it into ComfyUI with a new node type;

![](/wp-content/uploads/2023/11/Screenshot-2023-11-24-124630.webp)

This allows us to capture a webcam output image stream (see [ToyXYZ’s CaptureCam Github](https://github.com/toyxyz/ComfyUI_toyxyz_test_nodes)), passing it into our flow as the input image (instead of a latent image), to create wonderful outputs like the following!

<div data-embed="videopress" data-src="https://videopress.com/embed/E1jIScO3?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="327"><figcaption><em>Webcam stream to SD image, RTX 4090</em></figcaption></div>

The possibilities for this tech are really exciting! Check back often, as we’ll keep this guide up to date to show off the latest developments.

### Live OpenPose

We can leverage those [sam](https://github.com/toyxyz/ComfyUI_toyxyz_test_nodes)[e](https://github.com/toyxyz/ComfyUI_toyxyz_test_nodes) [nodes](https://github.com/toyxyz/ComfyUI_toyxyz_test_nodes), combined with [OBS Studio and a Virtual Camera](https://obsproject.com/), to pose our characters in real-time with OpenPose and ControlNet!

<div data-embed="videopress" data-src="https://videopress.com/embed/tVqY0KHX?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="446"></div>

We’ll create an **LCM advanced usage guide**, as this workflow and process are a little too complex to explain in a **Quickstart** guide! Also keep an eye on our [Twitch stream](https://www.twitch.tv/civitai) where you’ll see this being demonstrated and explained soon!

## The Future

We’ll continue to expand this quickstart guide with more information as it becomes available!
