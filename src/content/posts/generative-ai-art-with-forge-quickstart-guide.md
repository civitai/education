---
title: "Generative AI Art with Forge – Quickstart Guide"
slug: "generative-ai-art-with-forge-quickstart-guide"
date: "2024-03-15T20:23:00Z"
modified: "2024-08-20T20:13:53Z"
categories:
  - "quickstart-guides"
tags:
  - "forge"
  - "guide"
  - "interface"
author: "civitai"
wpId: 3906
excerpt: "Civitai guide to getting started with Forge."
image: "https://education.civitai.com/wp-content/uploads/2024/03/MarkuryFLUX_01331_.png"
seo:
  title: "Generative AI Art with Forge - Quickstart Guide - Civitai Education"
  description: "Learn how to use lightweight Automatic1111 fork \"Forge\", from the creator of ControlNet, to generate your Stable Diffusion images!"
  ogImage: "https://education.civitai.com/wp-content/uploads/2024/03/MarkuryFLUX_01331_.png"
  canonical: "https://education.civitai.com/generative-ai-art-with-forge-quickstart-guide/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 3/13/2023 | First Version |
| 6/10/2023 | Shock update! Forge End-of-Life? |
| 8/20/2024 | Surprise Major Update! |

## What is Forge?

?? **Signs of Life! – 8/20/2024** ??

The repository received a surprise [Major Update](https://github.com/lllyasviel/stable-diffusion-webui-forge/discussions/981?utm_source=newsletter.civitai.com&utm_medium=newsletter&utm_campaign=discover-flux-1-s-stunning-power-with-civitai-new-early-access-features-forge-s-surprise-update-new-maintenance-mode-image-contest-project-odyssey-season-1-recap-more&_bhlid=64e9a6bd12958e8390c592800126e14817a5d660) this week, bringing [Flux](/quickstart-guide-to-flux-1/) [mod](/quickstart-guide-to-flux-1/)[el support](/quickstart-guide-to-flux-1/), and a number of interface enhancements!

?? **Announcement from Forge Developer – 6/8/2024** ??

In a surprise [announcement](https://github.com/lllyasviel/stable-diffusion-webui-forge/discussions/801) from Developer [Illyasviel](https://github.com/lllyasviel), posted June 8th 2024, it was confirmed what many had feared – Forge is now an _experimental_ interface/repository, and all users are encouraged to switch back to [Automatic1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui/).

Going forward, **_do not_** install Forge looking for a useable Stable Diffusion Interface.

[Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) is an interface for creating images (inference) with Stable Diffusion, aimed at advanced users who may have previously used [Automatic 1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui/). Building on Automatic 1111, Forge offers many improvements, additions and adjustments to both the back and front-end, to enhance the image creation experience.

**Forge** comes from the same [developer](https://github.com/lllyasviel/) who brought us the excellent beginner/intermediate level interface **Fooocus** (see our [Quickstart guide](/generative-ai-art-with-fooocus-quickstart-guide/)!) and the original ControlNet implementation (see our [ControlNet guide](/civitai-guide-to-controlnet/)!).

## Why should I be excited by Forge?

While Forge is built on the bones of Automatic 1111, through some coding magic it promises **_tremendous image generation speed increases_** and stability over the original interface;

Compared to original Automatic 1111 (for SDXL inference at 1024px), you can expect the following speed increases and VRAM utilization improvements:

-   If you use common **GPU like 8GB vram**, you can expect to get about **30~45% speed up** in inference speed (it/s), the GPU memory peak (in task manager) will drop about 700MB to 1.3GB, the maximum diffusion resolution (that will not **_out of memory_** (OOM)) will increase about 2x to 3x, and the maximum diffusion batch size (that will not OOM) will increase about 4x to 6x.

-   If you use less powerful **GPU like 6GB vram**, you can expect to get about **60~75% speed up** in inference speed (it/s), the GPU memory peak (in task manager) will drop about 800MB to 1.5GB, the maximum diffusion resolution (that will not OOM) will increase about 3x, and the maximum diffusion batch size (that will not OOM) will increase about 4x.

-   If you use powerful **GPU like 4090** with 24GB vram, you can expect to get about **3~6% speed up** in inference speed (it/s), the GPU memory peak (in task manager) will drop about 1GB to 1.4GB, the maximum diffusion resolution (that will not OOM) will increase about 1.6x, and the maximum diffusion batch size (that will not OOM) will increase about 2x.

And the claims are true!

Forge also integrates many advanced extensions and features, including **Self-Attention Guidance**, **Kohya High Res Fix**, **FreeU**, **StyleAlign**, **Hypertile**, **Stable Video Diffusion**, and **Z123**.

<figure><img src="http://education.civitai.com//wp-content/uploads/2024/03/Screenshot-2024-03-15-102942.png" alt="Civitai - Forge Extensions" width="698" height="502" loading="lazy"><figcaption><em>Integrated features</em></figcaption></figure>

## How can I use Forge?

The good news is that installing Forge is super simple! There are two methods – one for users familiar with Github (anyone who has previously used Auto1111 will most likely be), and one extremely straightforward method for less experienced users. We’ll look at the extremely straightforward method!

On Windows, [click here to download the zipped package!](https://github.com/lllyasviel/stable-diffusion-webui-forge/releases/download/latest/webui_forge_cu121_torch21.7z) It’s **1.7 GB zipped**, which, when uncompressed, expands to around **5.3 GB**, and when installed, takes up about **10 GB of disk space** (without any models).

Once you have downloaded and extracted the zipped package, you’ll see the following files;

![Civitai - Forge Installation](http://education.civitai.com//wp-content/uploads/2024/03/Screenshot-2024-03-15-114921.png)

It’s important to first run **`update.bat`** – this ensures the latest files are pulled down for install.

After running **`update.bat`**, run **`run.bat`** to install and launch!

On subsequent launches, you’ll need to find **`webui-user.bat`** to launch the Forge Interface.

![Civitai - Forge Launch](http://education.civitai.com//wp-content/uploads/2024/03/Screenshot-2024-03-15-121830.png)

## Architecture {#requirements-limitations}

Per the Forge documentation;

`Forge backend removes all WebUI's codes related to resource management and reworked everything. All previous CMD flags like medvram, lowvram, medvram-sdxl, precision full, no half, no half vae, attention_xxx, upcast unet, ... are all **REMOVED**. Adding these flags will not cause error but they will not do anything now. **We highly encourage Forge users to remove all cmd flags and let Forge to decide how to load models.**`

Without any cmd flag, Forge can run **SDXL with 4GB vram** and **SD1.5 with 2GB vram**.

Note: There was some **drama** in the Forge Github about the backend being “stolen” from ComfyUI, to [which the developer responded](https://github.com/lllyasviel/stable-diffusion-webui-forge/discussions/169). The claim was shown to be unsubstantiated – forge is 100% Automatic 1111, with coding and infrastructure changes to boost performance.

## Advanced Features

Thanks to a **Unet Patcher**, _many_ advanced features are implemented in Forge which are not natively available, supported, or much slower and VRAM hungry in Automatic 1111. Some are explored below;

#### IP Adapter with Masking

Via ControlNet and the IP Adapter Preprocessor, we can supply two images, and mask them together to provide a single unified image! We’ll expand upon this section in future to show exactly how to do this!

![Civitai - Forge IP Adapter Example](http://education.civitai.com//wp-content/uploads/2024/03/Screenshot-2024-03-15-140842.png)

#### New Samplers

-   DDPM
-   DDPM Karras
-   DPM++ 2M Turbo
-   DPM++ 2M SDE Turbo
-   LCM Karras
-   Euler A Turbo

#### Stable Video Diffusion (SVD)

Forge supports Stable Video Diffusion natively, with **reduced requirements** to generate short SVD videos. You can also easily pass your generations from the **txt2img** tab into the **SVD tab** for generation!

<div class="columns va-center">

<div class="column">

<div data-embed="videopress" data-src="https://video.wordpress.com/embed/KvsqQCxj?cover=1&amp;autoPlay=1&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;posterUrl=https%3A%2F%2Fcivitai-education-hub-1063ae6.ingress-alpha.ewp.livewp-content%2Fuploads%2F2024%2F03%2F20240315-143720-6ozrs-1_mp4_dvd.original.jpg&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="666" data-height="1000"></div>

</div>

<div class="column">

<div data-embed="videopress" data-src="https://video.wordpress.com/embed/fVdWvzLL?cover=1&amp;autoPlay=1&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="666" data-height="1000"></div>

</div>

</div>

## Requirements, Notes, & Limitations

-   Forge has very low VRAM requirements in comparison to Automatic 1111, and other interfaces, but you’ll still need a _**minimum**_ of **4GB of VRAM** for **SDXL** image generation, and **2GB of VRAM** for **SD 1.5** image generation!

-   Not all of the thousands of Automatic 1111 extensions work with Forge! You may come across extensions which install, but don’t load and throw errors in the console.

## The Future

We’ll continue to expand this quickstart guide with more information as it becomes available!
