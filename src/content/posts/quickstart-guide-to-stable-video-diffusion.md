---
title: "Quickstart Guide to Stable Video Diffusion"
slug: "quickstart-guide-to-stable-video-diffusion"
date: "2023-11-24T21:44:51Z"
modified: "2025-02-04T04:22:03Z"
categories:
  - "video"
tags:
  - "guide"
  - "stable-video-diffusion"
  - "svd"
author: "civitai"
wpId: 2790
excerpt: "Civitai guide to getting started with Stable Video Diffusion! Everything you need to know to getting started turning your images into video!"
image: "/wp-content/uploads/2023/11/ComfyUI_00507_.webp"
seo:
  title: "Quickstart Guide to Stable Video Diffusion - Civitai Education"
  description: "Quickstart guide to Stable Video Diffusion (SVD) in ComfyUI. Turn your still images into moving animations easily with Stable Video Diffusion"
  ogImage: "/wp-content/uploads/2023/11/ComfyUI_00507_.webp"
  canonical: "https://education.civitai.com/quickstart-guide-to-stable-video-diffusion/"
deprecated:
  date: "2026-10-26"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 11/24/2023 | First version published |
| 11/28/2023 | New ComfyUI Workflows |
| 2/6/2024 | SVD 1.1 Released |

## What is Stable Video Diffusion (SVD)?

Stable Video Diffusion (SVD) from Stability AI, is an extremely powerful image-to-video model, which accepts an image input, into which it “injects” motion, producing some fantastic scenes.

SVD is a latent diffusion model trained to generate short video clips from image inputs. There are two models. The first, `**img2vid**`, was trained to generate **14 frames** of motion at a resolution of 576×1024, and the second, **`img2vid-xt`** is a finetune of the first, trained to generate **25 frames** of motion at the same resolution.

The newly released (2/2024) **SVD 1.1** is further finetuned on a set of parameters to produce excellent, high-quality outputs, but requires specific settings, detailed below.

The official [Stability AI SVD release page can be found here.](https://huggingface.co/stabilityai/stable-video-diffusion-img2vid)

## Why should I be excited by SVD?

SVD creates beautifully consistent video movement from our static images!

<div class="columns">

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/I1Y2gh66?cover=1&amp;autoPlay=1&amp;controls=0&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="562" data-height="1000"></div>

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/6Yokf7UO?cover=1&amp;autoPlay=1&amp;controls=0&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="562" data-height="1000"></div>

</div>

</div>

<div data-embed="videopress" data-src="https://videopress.com/embed/PDbwKNMk?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="451"></div>

## How can I use SVD?

[ComfyUI](https://github.com/comfyanonymous/ComfyUI) is leading the pack when it comes to SVD image generation, [with official S](https://comfyanonymous.github.io/ComfyUI_examples/video/)[VD support](https://comfyanonymous.github.io/ComfyUI_examples/video/)! **25 frames** of **1024×576** video uses **< 10 GB VRAM** to generate.

It’s entirely possible to run the **img2vid** and **img2vid-xt** models on a **GTX 1080 with 8GB** of VRAM!

There’s still no word (as of **11/28**) on [official SVD suppor](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues/14056)[t in A](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues/14056)[utomatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues/14056).

If you’d like to try SVD on **Google Colab**, this workbook works on the Free Tier; [https://github.com/sagiodev/stable-video-diffusion-img2vid/](https://github.com/sagiodev/stable-video-diffusion-img2vid/). Generation time varies, but is generally around 2 minutes on a V100 GPU.

You’ll need to download one of the SVD models, from the links below, placing them in the **_`ComfyUI/models/checkpoints`_** directory.

| Model | Civitai Link | Original Author Link |
| --- | --- | --- |
| img2vid | [Link](https://civitai.com/models/207992) | [HF Lin](https://huggingface.co/latent-consistency/lcm-lora-sdxl/tree/main)[k](https://huggingface.co/stabilityai/stable-video-diffusion-img2vid) |
| img2vid-xt | [Lin](https://civitai.com/models/195519?modelVersionId=225222)[k](https://civitai.com/models/207992?modelVersionId=234202) | [HF Lin](https://huggingface.co/latent-consistency/lcm-lora-sdv1-5)[k](https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt) |
| img2vid-xt-1.1 (latest, see below for settings) | [Link](https://civitai.com/models/207992?modelVersionId=329995) | [HF Link](https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt-1-1) |

After **updating your ComfyUI installation**, you’ll see new nodes for **VideoLinearCFGGuidance** and **SVD\_img2vid \_Conditioning**. The Conditioning node takes the following inputs;

| Setting | Description |
| --- | --- |
| video frames | The number of frames of motion to generate. |
| motion\_bucket\_id | The higher the number, the more motion will be in the output. |
| fps | Higher FPS results in less choppy video output |
| augmentation level | The amount of noise added to the input image. Higher noise will decrease the video’s resemblance to the input image, but will result in greater motion. |
| VideoLinearCFGGuidance | Improves sampling for video by scaling the CFG across the frames – frames farther away from the initial image frame receive a gradually higher CFG value. |

You can download ComfyUI workflows for **img2vide**o and **txt2video** below, but keep in mind you’ll need to have an **updated ComfyUI**, and also may be missing additional [nodes for Video](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite). I recommend using the [ComfyUI Manager](https://civitai.com/models/71980/comfyui-manager) to identify and download missing nodes!

![](/wp-content/uploads/2023/11/SVD_img2img-929x1024.webp)

[SVD\_img2video](/wp-content/uploads/2023/11/SVD_img2video.zip)

[SVD with Film Interpolation](/wp-content/uploads/2023/11/SVD-with-Film-Interpolation.zip)

![](/wp-content/uploads/2023/11/SVD_txt2img-1-1024x519.webp)

[SVD\_txt2video](/wp-content/uploads/2023/11/SVD_txt2video.zip)

## Suggested Settings

The settings below are suggested settings for each SVD component (node), which I’ve found produce the most consistently useable outputs, with the **img2vid** and **img2vid-xt** models.

| Node | Setting | Value |
| --- | --- | --- |
| VideoLinearCFGGuidance | min\_cfg | 1   |
| KSampler | Steps | 25  |
| KSampler | CFG | 2.9 |
| SVD\_img2vid\_Conditioning | Width | 576 |
| SVD\_img2vid\_Conditioning | Height | 1024 |
| SVD\_img2vid\_Conditioning | Video Frames | 25  |
| SVD\_img2vid\_Conditioning | Motion Bucket ID | 60  |
| SVD\_img2vid\_Conditioning | FPS | 8   |
| SVD\_img2vid\_Conditioning | Augmentation Level | 0.07 |

## Settings – Img2vid-xt-1.1 {#settings-img2vid-xt-1-1}

February 2024 saw the release of a finetuned SVD model, version 1.1. This version only works with a very specific set of parameters to improve the consistency of outputs. **If using the Img2vid-xt-1.1 model, the following settings must be applied to produce the best results**;

| Node | Setting | Value |
| --- | --- | --- |
| SVD\_img2vid\_Conditioning | Width | 1024 |
| SVD\_img2vid\_Conditioning | Height | 576 |
| SVD\_img2vid\_Conditioning | Video Frames | 25  |
| SVD\_img2vid\_Conditioning | Motion Bucket ID | 127 |
| SVD\_img2vid\_Conditioning | FPS | 6   |
| SVD\_img2vid\_Conditioning | Augmentation Level | 0.00 |

## Output Examples (img2vid-xt-1.1) {#output-examples-img2vid-xt-1-1}

<div class="columns">

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/CQfviLp6?cover=1&amp;autoPlay=1&amp;controls=0&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="451"></div>

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/X2mQGhLA?cover=1&amp;autoPlay=1&amp;controls=0&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="451"></div>

</div>

</div>

<div class="columns">

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/hxjUB48v?cover=1&amp;autoPlay=1&amp;controls=0&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="451"></div>

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/cQ9BXKtb?cover=1&amp;autoPlay=1&amp;controls=0&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;posterUrl=http%3A%2F%2Feducation.civitai.com%2Fwp-content%2Fuploads%2F2025%2F02%2Fcomfyui_00086_mp4_avc_240p_mp4_hd.original-1.jpg&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="451"></div>

</div>

</div>

## Output Examples (img2vid-xt – v1.0) {#output-examples-img2vid-xt-v1-0}

<div class="columns">

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/1WjCwZdv?cover=1&amp;autoPlay=1&amp;controls=0&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="562" data-height="1000"></div>

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/nhmyKI35?cover=1&amp;autoPlay=1&amp;controls=0&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="562" data-height="1000"></div>

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/0qfddCAI?cover=1&amp;autoPlay=1&amp;controls=0&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="562" data-height="1000"></div>

</div>

</div>

## Limitations

It’s not perfect! Currently there are a few issues with the implementation, including;

-   Generations are short! Only <=4 second generations are possible, at present.
-   Sometimes there’s no motion in the outputs. We can tweak the conditioning parameters, but sometimes the images just refuse to move.
-   The models cannot be controlled through text.
-   Faces, and bodies in general, often aren’t the best!

## The Future

We’ll continue to expand this quickstart guide with more information as it becomes available, and we’ll create a full, advanced, usage guide, soon!
