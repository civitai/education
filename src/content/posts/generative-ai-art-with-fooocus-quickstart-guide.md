---
title: "Generative AI Art with Fooocus – Quickstart Guide"
slug: "generative-ai-art-with-fooocus-quickstart-guide"
date: "2023-12-13T21:51:19Z"
modified: "2024-01-18T07:24:25Z"
categories:
  - "sdxl"
tags:
  - "guide"
  - "interface"
  - "sdxl"
author: "civitai"
wpId: 2945
excerpt: "Civitai guide to getting started with easy-to-use interface Fooocus."
image: "https://education.civitai.com/wp-content/uploads/2023/12/image-8-1.png"
seo:
  title: "Generative AI Art with Fooocus - Quickstart Guide - Civitai Education"
  description: "Create Generative AI art easily with the Fooocus interface for Stable Diffusion! Start making beautiful images in seconds!"
  ogImage: "https://education.civitai.com/wp-content/uploads/2023/12/image-8-1-768x768.png"
  canonical: "https://education.civitai.com/generative-ai-art-with-fooocus-quickstart-guide/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 12/13/2023 | First version published |
| 1/17/2023 | Updated with Advanced options |

## What is Fooocus?

[Fooocus](https://github.com/lllyasviel/Fooocus) is an interface for creating images (inference) with Stable Diffusion, aimed at beginner/intermediate users who may not want or need all the complexity of [Auto1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui/) or [ComfyUI](https://github.com/comfyanonymous/ComfyUI). It’s **super simple to set up**, **easy to use, the system requirements are low, and it produces absolutely beautiful images**!

It doesn’t have all the bells and whistles advanced users have come to expect from Auto or Comfy, but that’s not what it’s for – **Fooocus allows us to return to our prompting roots**; less tweaking and fiddling with advanced settings allowing us to “_fooocus_” on our prompt design. It’s refreshing!

## Why should I be excited by Fooocus?

If you’re a beginner, or looking to get back to basics, you should be super excited by Fooocus! The interface is minimalist, but there are enough features to make it interesting for the seasoned-prompter! Plus, the images are superb quality! It’s 100% offline, it’s open-source, and it’s free!

The following image generations are not cherry picked; they’re based on prompts selected at random from the Civitai community;

<div data-embed="gallery"><img src="https://i2.wp.com/education.civitai.com/wp-content/uploads/2023/12/image-5-1024x1024.png?ssl=1" alt="" data-orig-file="https://education.civitai.com/wp-content/uploads/2023/12/image-5.png" width="2048" height="2048" loading="lazy"><img src="https://i2.wp.com/education.civitai.com/wp-content/uploads/2023/12/image-4-1024x1024.png?ssl=1" alt="" data-orig-file="https://education.civitai.com/wp-content/uploads/2023/12/image-4.png" width="2048" height="2048" loading="lazy"><img src="https://i1.wp.com/education.civitai.com/wp-content/uploads/2023/12/image-7-1024x1024.png?ssl=1" alt="" data-orig-file="https://education.civitai.com/wp-content/uploads/2023/12/image-7.png" width="2048" height="2048" loading="lazy"><img src="https://i0.wp.com/education.civitai.com/wp-content/uploads/2023/12/2023-12-13_10-24-32_3266-1024x341.png?ssl=1" alt="" data-orig-file="https://education.civitai.com/wp-content/uploads/2023/12/2023-12-13_10-24-32_3266.png" width="1728" height="576" loading="lazy"><img src="https://i0.wp.com/education.civitai.com/wp-content/uploads/2023/12/image-8-1024x1024.png?ssl=1" alt="" data-orig-file="https://education.civitai.com/wp-content/uploads/2023/12/image-8.png" width="2048" height="2048" loading="lazy"><img src="https://i1.wp.com/education.civitai.com/wp-content/uploads/2023/12/2023-12-13_10-14-11_4878.png?ssl=1" alt="" data-orig-file="https://education.civitai.com/wp-content/uploads/2023/12/2023-12-13_10-14-11_4878.png" width="1024" height="1024" loading="lazy"><img src="https://i0.wp.com/education.civitai.com/wp-content/uploads/2023/12/2023-12-13_10-46-21_9376-1024x341.png?ssl=1" alt="" data-orig-file="https://education.civitai.com/wp-content/uploads/2023/12/2023-12-13_10-46-21_9376.png" width="1728" height="576" loading="lazy"><img src="https://i1.wp.com/education.civitai.com/wp-content/uploads/2023/12/image-13-1024x1024.png?ssl=1" alt="" data-orig-file="https://education.civitai.com/wp-content/uploads/2023/12/image-13.png" width="2048" height="2048" loading="lazy"><img src="https://i2.wp.com/education.civitai.com/wp-content/uploads/2023/12/image-11-1024x1024.png?ssl=1" alt="" data-orig-file="https://education.civitai.com/wp-content/uploads/2023/12/image-11.png" width="2048" height="2048" loading="lazy"><img src="https://i2.wp.com/education.civitai.com/wp-content/uploads/2023/12/2023-12-13_09-31-07_9265-1024x796.png?ssl=1" alt="" data-orig-file="https://education.civitai.com/wp-content/uploads/2023/12/2023-12-13_09-31-07_9265.png" width="2304" height="1792" loading="lazy"><img src="https://i2.wp.com/education.civitai.com/wp-content/uploads/2023/12/2023-12-13_03-01-47_1215-796x1024.png?ssl=1" alt="" data-orig-file="https://education.civitai.com/wp-content/uploads/2023/12/2023-12-13_03-01-47_1215.png" width="896" height="1152" loading="lazy"></div>

## How can I use Fooocus?

The good news is that [installing Fooocus](https://github.com/lllyasviel/Fooocus#download) is super simple! On Windows, click [here to download the zipped package!](https://github.com/lllyasviel/Fooocus/releases/download/release/Fooocus_win64_2-1-831.7z)

After unzipping into a folder, all you need to do is double click on `**run.bat**` to start the installation process. The first time you run Fooocus, models will be downloaded into the `**fooocus\models\checkpoints**` directory, so the first time launching the app can take quite some time! Subsequent launches will be a lot faster.

There’s also the option to launch a `**run_anime.bat**` and a `**run_realistic.bat**`. These will automatically download models tuned to produce anime, and realism results, respectively.

It’s as easy as that! Each time you’d like to start the Fooocus interface, launch **`run.bat`**`.` Updates are automatically downloaded and installed each time you launch the interface via **`run.bat`**

## Using Resources from Civitai

<div class="columns">

<div class="column" style="flex-basis:66.66%">

We can use _[any SDXL Model or LoRA from Civitai](https://civitai.com/models)_ with Fooocus! It’s as easy as downloading these models into the following directories, then refreshing Fooocus using the “? Refresh all files”.

Model and LoRA selections can be made by checking the “**Advanced**” checkbox, below the prompt box.

-   Fooocus Checkpoint/Model Directory:
    `**Fooocus\models\checkpoints**`

-   Fooocus LoRA Directory:
    `**Fooocus\models\loras**`

</div>

<div class="column" style="flex-basis:33.33%">

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-17-135537.png)

</div>

</div>

## Suggested Settings

Fooocus is aimed at beginner users, perhaps coming from other image generation services such as Midjourney, but it does include some extremely advanced features and options

| Setting/Option/Concept | Fooocus |
| --- | --- |
| Text-to-image prompting | One of the most interesting aspects of Fooocus is the text-to-image processing engine. It passes prompts through an offline GPT-2 engine to ensure that the final images are always beautiful! Even short three-world prompts produce excellent results! |
| Midjourney V1 V2 V3 V4 commands | Variations can be accessed by checking `**Input** **Image**`, `**Upscale or Variation**`, then selecting a Variation type (`**Subtle**`) or (`**Strong**`). |
| Midjourney U1 U2 U3 U4 commands | Upscaling can be accessed by checking `**Input Image**`, `**Upscale or Variation**`, then selecting an Upscale option (`**1.5x**`) or (`**2x**`) |
| Inpainting/Outpainting | Inpainting and Outpainting can be accessed via the **`Input Image`** checkbox. Note that Fooocus uses its own inpainting algorithm and models which are downloaded the first time you try to inpaint! Results are really good! |
| Image Prompting (img2img) | Image Prompting can be accessed via the `**Input Image**` checkbox. Note that Fooocus uses its own image prompting (img2img) algorithm and the results are great! |
| Midjourney –style command | Preset styles can be accessed from the `**Advanced**`, **`Styles`** list. |
| Prompt Weights | Fooocus uses the `**(token:N.N)**` syntax for weighting. Fooocus uses Auto1111’s reweighting algorithm. |
| Embeddings (TIs) | Embeddings can be referenced in the prompt with the syntax `**(embedding:file_name:1.1)**` |
| Midjourney –no command | The no (negative prompt) is accessed from the **`Advanced`** checkbox |
| Midjourney –ar command | The ar (aspect ratio) is accessed from the `**Advanced**` checkbox |
| Face Swapping | InsightFace is used for face swapping between images, and can be accessed from the `**Input Image**` checkbox, `**Advanced**`, `**Face Swap**` |
| Image Describe/Interrogation | Images can be uploaded to the **`Describe`** box to be interrogated for a prompt. |

## Advanced Usage – Input Images {#advanced-usage-input-images}

Fooocus has _excellent_ inpainting, img2img, and Faceswap capabilities, powered by proprietary Fooocus models/engines, accessible from the “**Input Image**” checkbox below the prompt box.

<figure><img src="http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-17-145946-1024x294.png" alt="" width="1024" height="294" loading="lazy"><figcaption><em>Input Image Options</em></figcaption></figure>

The four `input image` boxes are a mix of an; “_IP-Adapter, and a precomputed negative embedding from Fooocus team, an attention hacking algorithm from Fooocus team, and an adaptive balancing/weighting algorithm from Fooocus team._” per the Fooocus documentation. So what do they actually do? Here are some visual examples of what’s possible;

### Single Image Upload – No Prompt {#single-image-upload-no-prompt}

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-17-160521-1024x839.png)

Attempts to “replicate” certain concepts of an input image, no prompt required…

### Single Image Upload – With a Prompt {#single-image-upload-with-a-prompt}

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-17-160625-1024x842.png)

But if a prompt _is_ supplied, attempts to replicate the input image along with the additional context of the prompt.

### Multiple Images – No Prompt {#multiple-images-no-prompt}

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-17-161547-1024x842.png)

Supplying two images results in an image blend.

### Multiple Images – With a Prompt {#multiple-images-with-a-prompt}

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-17-161736-1024x841.png)

Two images, plus a prompt, creates a blend of all three.

### Face Swapping

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-17-192757-1024x962.png)

By checking the **`Advanced`** options below the input images and switching to `**FaceSwap**`, we can swap faces from an input image into our generations. It’s not flawless, but it’s passable in many cases. You may need to adjust the **`Weight`** slider to get better results.

### PyraCanny

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-17-195625-1024x942.png)

Canny is a method of edge detection which users of [ControlNet](/civitai-guide-to-controlnet/) will be familiar with. Fooocus implements Canny in a unique way, based on the principles set forth in [this research paper](https://www.sciencedirect.com/science/article/abs/pii/S1047320312000831).

Essentially, it’s looking for edges and hard lines in a source image, allowing that “_template_” to be filled in by details supplied in a new prompt – in the case above, `**a female athlete**`.

### CPDS

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-17-194232-1024x938.png)

CPDS is similar to PyraCanny. It’s also similar to the `**depth**` ControlNet preprocessor, but is based upon [this research paper – Contrast Preserving Decolorization](https://www.cse.cuhk.edu.hk/leojia/projects/color2gray/index.html). Note that the implementation _doesn’t include_ the decolorization part.

## Advanced Usage – Inpainting and Outpainting {#advanced-usage-inpainting-and-outpainting}

Fooocus has excellent promptless inpainting and outpainting, powered by an internal Fooocus model. To activate these options, check `**input image**` and set the tab to `**inpaint or outpaint**`.

### Outpainting

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-18-013359-1024x937.png)

Outpainting allows us to supply an input image, select an `**Outpaint Direction**` in which to extend the canvas, and “fill” that space.

### Inpainting

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-18-021257-1001x1024.png)

Inpainting on the other hand, is the process of selecting a particular object in an input image, and replacing it with another prompted concept. Here, we’re replacing the woman in the image with a fearsome orc, while retaining the rest of the image.

## Other Ways to Run

If you don’t have a graphics card you can also run Fooocus via [Google Colab](https://colab.research.google.com/github/lllyasviel/Fooocus/blob/main/fooocus_colab.ipynb) (Last tested working 12/13/2023). Most Fooocus features work on the Free Colab tier.

## Fooocus Example Portrait Gallery

![](http://education.civitai.com//wp-content/uploads/2024/01/2023-12-14_10-18-57_2698-796x1024.png)

![](http://education.civitai.com//wp-content/uploads/2023/12/2023-12-14_11-17-14_2033-796x1024.png)

![](http://education.civitai.com//wp-content/uploads/2023/12/2024-01-16_12-59-38_8081-796x1024.png)

![](http://education.civitai.com//wp-content/uploads/2023/12/2024-01-15_20-35-56_4334-796x1024.png)

![](http://education.civitai.com//wp-content/uploads/2023/12/2024-01-10_09-42-23_3966-1024x796.png)

## Requirements & Limitations {#requirements-limitations}

-   The minimum requirements for Fooocus are **4GB of GPU Memory (VRAM)**, and **8GB of system memory (RAM)**.
-   Inference (image generation speed) on a relatively lower-end laptop with 16GB System RAM and an NVidia 3060 (6GB VRAM) can take approximately 1.4 seconds.
-   Fooocus works on Apple M1 and M2, with macOS `**Catalina**` or newer!
-   Fooocus doesn’t currently embed generation metadata into the output images – a feature Auto1111 and ComfyUI users have come to take for granted! This is a limitation, especially for Fooocus users who’d like to post their images on Civitai.

## The Future

We’ll continue to expand this quickstart guide with more information as it becomes available!
