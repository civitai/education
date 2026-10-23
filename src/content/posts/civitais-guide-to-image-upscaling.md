---
title: "Civitai’s Guide to Image Upscaling!"
slug: "civitais-guide-to-image-upscaling"
date: "2024-01-19T23:32:29Z"
modified: "2024-08-23T04:16:35Z"
categories:
  - "civitai"
tags:
  - "civitai"
  - "guide"
  - "upscale"
  - "upscaling"
author: "civitai"
wpId: 3189
excerpt: "Civitai Guide to the Upscaling Images!"
image: "/wp-content/uploads/2024/01/Screenshot-2024-01-19-103923.webp"
seo:
  title: "Civitai's Guide to Image Upscaling! - Civitai Education"
  description: "Explore methods, processes and workflows to upscale your Stable Diffusion images! Take your SD Generations to new levels!"
  ogImage: "/wp-content/uploads/2024/01/Screenshot-2024-01-19-103923.webp"
  canonical: "https://education.civitai.com/civitais-guide-to-image-upscaling/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 1/19/2023 | First version published |

## What is Upscaling?

Image Upscaling is the process of taking a lower resolution image (or video) and increasing its height and width dimensions (resolution) while trying to **keep the details sharp and clear**. This is extremely useful when you want to make an image larger without losing quality.

There are different ways to upscale an image. Traditional methods just stretched the pixels, often resulting in blurry or pixelated images. But now, with advanced AI techniques, upscaling can actually _**add details**_ that weren’t in the original image, making it look like it was shot or created in high resolution in the first place. This AI-based upscaling is a game-changer for all sorts of visual work.

<div data-embed="image-compare" data-mode="horizontal"><img src="/wp-content/uploads/2024/01/E3292B4A07BDBB7F15CD7CED6D1D73CE7DA352D96BF2FA60E68D8C701060F660.jpg" alt="before" width="512" height="512" data-role="before" loading="lazy"><img src="/wp-content/uploads/2024/01/8k_tree.jpeg" alt="after" width="4096" height="4096" data-role="after" loading="lazy"><figcaption>512×512 from the <strong>Civitai On-Site Generator</strong>, upscaled to 8x, with added detail, using <a href="https://magnific.ai/" target="_blank" rel="noreferrer noopener">Magnific AI</a> (see below)</figcaption></div>

The above is an example of upscaling. A small image (512×512) was upscaled 8 times its original size, while also adding a lot of fine details. In most applications, the level of detail added is configurable – it doesn’t have to come out looking like an entirely different image!

There are many upscaling models, apps, and methods, each producing wildly different results. We’ll explore some of them below!

## Upscaling Models

There are many upscale models designed for image enhancement, and the most popular resource to find them is the [OpenModelDB](https://openmodeldb.info/) – a community driven repository with hundreds of models, trained to upscale different forms of image.

## Upscaling on Civitai

Upscaling for Stable Diffusion image generation has become ubiquitous. Images are often generated at a lower resolution, then through upscaling (sometimes using img2img, or other models) are scaled to the final image size.

The Civitai on-site Image Generator now has the ability to upscale images after generation! [Check out the Guide to get started!](/using-civitai-the-on-site-image-generator/)

<figure><img src="/wp-content/uploads/2024/01/Screenshot-2024-08-23-000521.webp" alt="" width="849" height="417" loading="lazy"><figcaption><em>Upscale option from the kebab (three dots) menu</em>, <em>or the magic wand menu</em></figcaption></figure>

<div data-embed="image-compare" data-mode="horizontal"><img src="/wp-content/uploads/2024/01/1.webp" alt="before" width="832" height="1216" data-role="before" loading="lazy"><img src="/wp-content/uploads/2024/01/2.jpg" alt="after" width="3840" height="5568" data-role="after" loading="lazy"><figcaption>A before and after Upscale from the Civitai Image Generator</figcaption></div>

## Upscaling inside a Local Stable Diffusion Interface

Most Stable Diffusion interfaces provide some form of upscaling. This might be options built into the txt2img pipeline (upscaling after image generation), or it may be a feature which allows _any image_ to be upscaled. Below we’ll look at using some of the most common SD interfaces to upscale;

### Upscaling with Fooocus

The Stable Diffusion Fooocus interface has excellent upscaling capabilities, up to 2x base image size, based on in-built upscaling processes. [Fooocus is also one of the easiest Stable Diffusion interfaces](/generative-ai-art-with-fooocus-quickstart-guide/) to start exploring Stable Diffusion and SDXL specifically.

![](/wp-content/uploads/2024/01/Screenshot-2024-01-19-152740.webp)

<div data-embed="image-compare" data-mode="horizontal"><img src="/wp-content/uploads/2024/01/2024-01-09_00-33-30_1994-4.webp" alt="before" width="1152" height="896" data-role="before" loading="lazy"><img src="/wp-content/uploads/2024/01/fooocus.webp" alt="after" width="2304" height="1792" data-role="after" loading="lazy"><figcaption><strong>2x</strong> Upscale, with Fooocus</figcaption></div>

### Upscaling with Automatic 1111 WebUI

There are many options for upscaling with Automatic 1111. One of the most commonly used ways to increase both the dimensions and fidelity of an output image is to use what’s known as **Hires fix** during the txt2img generation process.

**Hires fix** uses custom upscale models (such as those available from [OpenModelDB](https://openmodeldb.info/)) to increase the dimensions (and detail) of an image, in what is essentially an **img2img** pass, with a customizable Denoising Strength.

<figure><img src="/wp-content/uploads/2024/01/Screenshot-2024-01-19-162317.webp" alt="" width="1025" height="181" loading="lazy"><figcaption>Hires fix options in Automatic 1111 WebUI</figcaption></figure>

<div data-embed="image-compare" data-mode="horizontal"><img src="/wp-content/uploads/2024/01/00287-2748658979-1.png" alt="before" width="512" height="512" data-role="before" loading="lazy"><img src="/wp-content/uploads/2024/01/00288-2748658979.png" alt="after" width="1024" height="1024" data-role="after" loading="lazy"><figcaption>512×512 upscaled to 1024×1024 with Hires fix</figcaption></div>

Images can also be upscaled from the **`Extras`** tab which allows any of the installed upscale models to be used in the process;

<figure><img src="/wp-content/uploads/2024/01/Screenshot-2024-01-19-163422-1024x557.webp" alt="" width="1024" height="557" loading="lazy"><figcaption>Upscaling from the <strong><code>Extras</code> </strong>tab</figcaption></figure>

Another method is to use ControlNet, Custom Scripts or dedicated Upscaling Extensions. Some popular upscaling Extensions are;

-   [multidiffusion upscaler for Automatic1111](https://github.com/pkuliyi2015/multidiffusion-upscaler-for-automatic1111)

-   [Ultimate SD upscale for Automatic1111](https://github.com/Coyote-A/ultimate-upscale-for-automatic1111)

Example outputs to follow.

### Upscaling with ComfyUI

[ComfyUI](https://comfyanonymous.github.io/) provides some of the most flexible upscaling options, with [literally hundreds of workflows](https://civitai.com/search/models?sortBy=models_v5&query=upscale) and nodes dedicated to image upscaling.

In the **_most simple_** form, a ComfyUI upscale workflow would just use an `**Load Upscale Model**` node, and might look something like;

![](/wp-content/uploads/2024/01/comfy_basic_upscale-1024x614.webp)

[comfyui\_basic\_upscale](/wp-content/uploads/2024/01/comfyui_basic_upscale.zip)

Far, far, more complex workflows are available, however, such as [this example, from Olivio Sarikas](https://www.youtube.com/watch?v=-xrNSmofavA).

Examples to follow.

## Upscaling with Local Tools

There are a number of offline, stand-alone, applications for upscaling, some of the most popular include;

### Upscayl

[Upscayl](https://github.com/upscayl/upscayl?tab=readme-ov-file) is a free and Open Source image upscaler made for Linux, MacOS, and Windows. **It does require a GPU, it won’t work on CPU alone**, and it uses popular, common, upscaling models. Custom models can be provided, downloaded from sites like the [OpenModelDB](https://openmodeldb.info/).

<div data-embed="image-compare" data-mode="horizontal"><img src="/wp-content/uploads/2024/01/2024-01-09_00-33-30_1994-2.webp" alt="before" width="1152" height="896" data-role="before" loading="lazy"><img src="/wp-content/uploads/2024/01/2024-01-09_00-33-30_1994_upscayl_3x_ultrasharp.webp" alt="after" width="3456" height="2688" data-role="after" loading="lazy"><figcaption>A <strong>4x </strong>Upscale, with <strong>Upscayl</strong></figcaption></div>

### Topaz Labs Gigapixel

[Gigapixel from Topaz](https://www.topazlabs.com/gigapixel) Labs has long been an industry favorite, with both image and video upscaling. It is a stand-alone desktop application for Windows and MacOS, and requires a GPU with at least 2GB of VRAM.

Gigapixel is a one-time fee of **$99 USD** for unlimited, local, use. It uses proprietary models and _does not_ allow custom upscale models to be used.

<div data-embed="image-compare" data-mode="horizontal"><img src="/wp-content/uploads/2024/01/2024-01-09_00-33-30_1994-3.webp" alt="before" width="1152" height="896" data-role="before" loading="lazy"><img src="/wp-content/uploads/2024/01/Largex4WomanGiga.webp" alt="after" width="4608" height="3584" data-role="after" loading="lazy"><figcaption>A <strong>4x</strong> Upscale, with Gigapixel</figcaption></div>

## Other Upscaling Options

One of the most recent upscalers to enter the market is the **phenomenal** [Magnific AI](https://magnific.ai/). Magnific AI isn’t free – it’s quite costly in-fact, at [$39 USD per month](https://magnific.ai/upgrade/) for about **~200 upscales**, but the results are out of this world, with excellent controllability over the type of image to be processed, fine detail, and scaling up to **16x** (max 10,000×10,000 pixels).

It’s all web-based, so there’s no GPU/hardware requirement.

<div data-embed="gallery"><img src="/wp-content/uploads/2024/01/Screenshot-2024-01-19-103534-1024x409.webp" alt="" data-orig-file="/wp-content/uploads/2024/01/Screenshot-2024-01-19-103534.webp" width="1063" height="425" loading="lazy"><img src="/wp-content/uploads/2024/01/Screenshot-2024-01-19-103923.webp" alt="" data-orig-file="/wp-content/uploads/2024/01/Screenshot-2024-01-19-103923.webp" width="613" height="397" loading="lazy"><img src="/wp-content/uploads/2024/01/Screenshot-2024-01-19-103401.webp" alt="" data-orig-file="/wp-content/uploads/2024/01/Screenshot-2024-01-19-103401.webp" width="659" height="689" loading="lazy"></div>

<div data-embed="image-compare" data-mode="horizontal"><img src="/wp-content/uploads/2024/01/2024-01-09_00-33-30_1994-1.webp" alt="before" width="1152" height="896" data-role="before" loading="lazy"><img src="/wp-content/uploads/2024/01/magnific-PSNWpM0SBQEQb9JYc0Gp-2024-01-09_00-33-30_1994.jpeg" alt="after" width="4608" height="3584" data-role="after" loading="lazy"><figcaption><strong>8x</strong> Upscale with added skin detail via prompt</figcaption></div>

<div data-embed="image-compare" data-mode="horizontal"><img src="/wp-content/uploads/2024/01/2023-12-18_18-42-15_5629.webp" alt="before" width="896" height="1152" data-role="before" loading="lazy"><img src="/wp-content/uploads/2024/01/magnific-yoIE67neEJ6eKfxLWSRm-2023-12-18_18-42-15_5629.jpeg" alt="after" width="7168" height="9216" data-role="after" loading="lazy"><figcaption><strong>8x</strong> Upscale, in Magnific AI</figcaption></div>
