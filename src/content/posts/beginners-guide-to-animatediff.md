---
title: "Beginner’s Guide to AnimateDiff"
slug: "beginners-guide-to-animatediff"
date: "2023-09-14T17:19:44Z"
modified: "2025-02-04T04:15:33Z"
categories:
  - "video"
tags:
  - "animatediff"
  - "guide"
author: "civitai"
wpId: 2080
excerpt: "Civitai guide to getting started with AnimateDiff! Everything you need to know to getting started adding stunning animation to your images!"
image: "/wp-content/uploads/2023/09/00047-1828030299.webp"
seo:
  title: "Beginner's Guide to AnimateDiff: Add Motion to Stable Diffusion"
  description: "Explore the fundamentals of AnimateDiff with our Beginner's Guide and learn how to add captivating motion to Stable Diffusion generations."
  ogImage: "/wp-content/uploads/2023/09/00047-1828030299.webp"
  canonical: "https://education.civitai.com/beginners-guide-to-animatediff/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 9/14/2023 | First version published |
| 9/27/2023 | Updated to Automatic1111 Extension |
| 10/3/2023 | ComfyUI Simplified Example Flows added |
| 10/9/2023 | Updated Motion Modules |
| 11/3/2023 | New Info! Comfy Install Guide |
| 1/19/2023 | Basic ComfyUI Workflows Updated |

## What is AnimateDiff?

**AnimateDiff**, based on this [research paper](https://animatediff.github.io/) by Yuwei Guo, Ceyuan Yang, Anyi Rao, Yaohui Wang, Yu Qiao, Dahua Lin, and Bo Dai, is a way to add _**limited**_ motion to Stable Diffusion generations.

Supporting both **txt2img** & **img2img**, the outputs aren’t always perfect, but they can be quite eye-catching, and the fidelity and smoothness of the outputs has improved considerably since AnimateDiff first appeared!

There’s also a **video2video** implementation which works in conjunction with ControlNet, examples below!

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/09/00030-3069168298.webp)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/00002-3844614465-666x1024.webp)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/00062-3616096135.webp)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/image.gif)

</div>

</div>

Examples of **video2video** produced with ComfyUI (from our [Civitai Socials!](https://www.instagram.com/hellocivitai/));

<div class="columns">

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/6pwxrvQi?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="562" data-height="1000"></div>

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/XIVZxA9O?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="562" data-height="1000"></div>

</div>

</div>

## How can I run AnimateDiff?

There are currently a few ways to start creating with AnimateDiff – requiring various amounts of effort to get working. I’ve listed a few of the methods below, and documented the steps to get AnimateDiff working in Automatic1111 – one of the easier ways.

### Requirements & Caveats {#requirements-caveats}

-   Running locally takes _at least_ **12GB** of VRAM to make a **512×512 16** frame image – and I’ve seen usage as high as **21GB** when trying to output **512×768** and 24 frames. If you have an RTX 3090+ you should be good for local generation.

-   The latest VRAM estimates for **_Ubuntu_** are as follows (default settings 512×512, 16 frames, Torch 2.0, RTX 4090;

| Optimization Type | VRAM Usage |
| --- | --- |
| No optimization | 12.13 GB |
| Xformers/SDP | 5.6 GB |
| Sub-quadratic | 10.39 GB |

-   **Try to keep prompts below 75 tokens** **when generating locally**! Prompts over 75 tokens will either exhibit no motion, or will be split into two different “scenes” – the second half of the frames being completely different from the first half. Note that negative prompts should be kept short also!

    If you’re still having trouble with split scenes while using Automatic1111, check that the following settings in Automatic1111’s **Optimization** settings are **_enabled_**;

    **Pad prompt/negative prompt to be the same length**
    **Persistent cond cache**
    **Batch cond/uncond**


-   There’s **_no SDXL support right now_** – the motion modules are injected into the SD1.5 UNet, and won’t work for variations such as SD2.x and SDXL.

-   We must download **Motion Modules** for AnimateDiff to work – models which inject the magic into our static image generations. The table below contains the Motion models currently available on [Civitai](https://www.civitai.com).

| Model Name | Author | Link |
| --- | --- | --- |
| V1.5 v2 (best of the official models) | AnimateDiff team | [Civitai Model Version](https://civitai.com/models/108836?modelVersionId=159987) |
| V1.5 | AnimateDiff team | [Civitai Model Version](https://civitai.com/models/108836?modelVersionId=117231) |
| V1.4 | AnimateDiff team | [Civitai Model Version](https://civitai.com/models/108836?modelVersionId=117232) |
| TemporalDiff v1.0 | [Ciara Rowles](https://twitter.com/CiaraRowles1) | [Civitai Model Version](https://civitai.com/models/144354/temporaldiff-motion-module) |
| mm-Stabilized\_high | [Mansh](https://huggingface.co/manshoety)[oety](https://huggingface.co/manshoety) | [C](https://civitai.com/models/144373?modelVersionId=160485)[ivitai Model Version](https://civitai.com/models/144373?modelVersionId=160485) |
| mm-Stabilized\_mid | [Manshoety](https://huggingface.co/manshoety) | [Civitai Model Version](https://civitai.com/models/144373?modelVersionId=160445) |
| improvedHumansMotion\_refinedHumanMovement | [Manshoety](https://civitai.com/user/manshoety/) | [Civitai Model Version](https://civitai.com/models/155528/improved-humans-motion-module) |
| improved3DMotion\_improved3DV1 | [Manshoety](https://civitai.com/user/manshoety/) | [Civitai Model Version](https://civitai.com/models/158389/improved-3d-motion-module) |

The following table contains **Motion LoRA** – LoRA, called in the prompt like a normal LoRA, which inject camera movement into the scene (examples below).

The following LoRA **will only work with the V1.5 v2 Motion Module**, above.

| MotionLoRA Model Name | Author | Link |
| --- | --- | --- |
| v2\_lora\_ZoomOut | AnimateDiff team | [Civitai Model Version](https://civitai.com/models/153022?modelVersionId=171355) |
| v2\_lora\_ZoomIn | AnimateDiff team | [Civitai Model Version](https://civitai.com/models/153022?modelVersionId=171354) |
| v2\_lora\_RollingClockwise | AnimateDiff team | [Civitai Model Version](https://civitai.com/models/153022?modelVersionId=171357) |
| v2\_lora\_RollingAntiClockwise | AnimateDiff team | [Civitai Model Version](https://civitai.com/models/153022?modelVersionId=171356) |
| v2\_lora\_PanUp | AnimateDiff team | [Civitai Model Version](https://civitai.com/models/153022?modelVersionId=171351) |
| v2\_lora\_PanDown | AnimateDiff team | [Civitai Model Version](https://civitai.com/models/153022?modelVersionId=171349) |
| v2\_lora\_PanLeft | AnimateDiff team | [Civitai Model Version](https://civitai.com/models/153022?modelVersionId=171346) |
| v2\_lora\_PanRight | AnimateDiff team | [Civitai Model Version](https://civitai.com/models/153022?modelVersionId=171348) |

### HuggingFace Space

If you’d like to test AnimateDiff on some pre-defined models, it can be accessed via [this HuggingFace space](https://huggingface.co/spaces/guoyww/AnimateDiff). Note that it’s slow, there’s a queue, but it can output **512×768** images.

[![](/wp-content/uploads/2023/09/image-91-1024x210.webp)](https://huggingface.co/spaces/guoyww/AnimateDiff)

### Google Colab

There are three **AnimateDiff** workbooks authored by [@camenduru](https://github.com/camenduru);

-   [Command Line Only](https://colab.research.google.com/github/camenduru/AnimateDiff-colab/blob/main/AnimateDiff_colab.ipynb)
-   [Command Line with Motion LoRA](https://colab.research.google.com/github/camenduru/AnimateDiff-colab/blob/main/AnimateDiff_motion_lora_colab.ipynb)
-   [Gradio Interface](https://colab.research.google.com/github/camenduru/AnimateDiff-colab/blob/main/AnimateDiff_gradio_colab.ipynb)

They are _meant_ to be runnable on the Free Colab tier – but I hit **13.6GB VRAM** usage while running, so keep an eye on that virtual GPU!

![](/wp-content/uploads/2023/09/image-83-1024x595.webp)

Note that both the Command Line and Gradio Colab interfaces are limited to **24 frames** at **512×512** to try to keep below the Free-tier threshold.

<div class="columns">

<div class="column">

When using the headless Colab, you can edit the prompts by editing these (or creating your own) **.yaml** files. Outputs will appear in the **animatediff/samples/modelname/sample** directory.

![](/wp-content/uploads/2023/09/image-85.webp)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/image-84.webp)

</div>

</div>

### Locally with Automatic 1111

The best implementation of AnimateDiff for WebUI is currently [Continue-Revolution’s sd-webui-animated](https://github.com/continue-revolution/sd-webui-animatediff)[iff](https://github.com/continue-revolution/sd-webui-animatediff).

Installing is as simple as heading to the **Extensions** \> **Available** tab, clicking “**Load From**“, then searching for “**animatediff**“.

![](/wp-content/uploads/2023/09/image-86-1024x423.webp)

You’ll then need to download one of the available **Motion Modules** to be able to inject motion into your generations. Head to [Civitai](https://www.civitai.com) and filter the models page to “**Motion**” – or download from the direct links in the table above.

<figure><img src="/wp-content/uploads/2023/09/image-88.webp" alt="" width="671" height="241" loading="lazy"><figcaption>Motion Modules should be placed in the <code><strong>WebUI\stable-diffusion-webui\extensions\sd-webui-animatediff\model</strong></code> directory</figcaption></figure>

It’s now as simple as opening the **AnimateDiff** drawer from the **left accordion menu** in WebUI, selecting a Motion module, **enabling the extension**, and generating as normal (at **512×512**, or **512×768**, no hires. fix)!

![](/wp-content/uploads/2023/09/animate_update-1024x586.webp)

#### Auto1111 Advanced Usage

A number of additional settings were recently added to the Auto1111 Extension, allowing for **mp4 output**, video2video with ControlNet integration, and controllable camera positioning, with specially trained Motion LoRA!

-   **Motion LoRA** – Available in the table above, from [Civitai](https://civitai.com/models/153022), **Motion LoRA** are saved in the standard LoRA folder, and are called in the prompt exactly like any other LoRA, to add subtle camera movements to the scene. There are eight camera movements to try.

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/09/rollleft2.webp)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/rollright2.webp)

</div>

</div>

-   ControlNet support for Video to Video generation. If you include a Video Source, or a Video Path (to a directory containing frames) you _**must**_ enable at least one ControlNet (e.g. Canny or Depth). There’s no need to include a video/image input in the ControlNet pane; Video Source (or Path) will be the source images for all enabled ControlNet units.

#### Auto1111 Bugs, Issues, & tips {#auto1111-bugs-issues-tips}

There are a couple of problems with the current implementation of AnimateDiff in Automatic1111 WebUI that I’ve come across,

-   ~~**VAE doesn’t seem to be applied**, and **the more frames generated, the darker and more washed out our colors are**.~~ This doesn’t seem to affect the example images on the main AnimateDiff repo – **Appears to be fixed**! Enjoy beautiful colorful outputs!

![](/wp-content/uploads/2023/11/00001-3856861301.webp)

-   Many generations seem to have trouble unloading the Motion modules, leaving generation “stuck” at **~98% completion** and **GPU at 100% load**. The only fix I’ve found is to close and re-start WebUI.

![](/wp-content/uploads/2023/09/image-90-1024x104.webp)

-   You can generate with _**any**_ SD 1.5 model, but some will turn out more muted and show less movement than others. I’ve had good results with the [Beaut](https://civitai.com/models/101888/beautyfool)[yF](https://civitai.com/models/101888/beautyfool)[ool](https://civitai.com/models/101888/beautyfool), [Aniv](https://civitai.com/models/107842/aniverse)[er](https://civitai.com/models/107842/aniverse)[se](https://civitai.com/models/107842/aniverse) & [HelloYoung25d](https://civitai.com/models/134442/helloyoung25d) models.

### ComfyUI

For a full, comprehensive guide on installing ComfyUI and getting started with AnimateDiff in Comfy, we recommend Creator [Inner\_Reflections\_AI’s](https://civitai.com/user/Inner_Reflections_AI) **Community Guide** – **[ComfyUI AnimateDiff Guide/Workflows Including Prompt Scheduling](https://civitai.com/articles/2379/guide-comfyui-animatediff-guideworkflows-including-prompt-scheduling-an-inner-reflections-guide)** which includes some great **ComfyUI workflows** for every type of AnimateDiff process.

<figure><img src="/wp-content/uploads/2023/11/animatediff_gif_inner_reflections_AI.webp" alt="" width="600" height="338" loading="lazy"><figcaption><em>AnimateDiff created by Inner_Reflections_AI, using video2video ComfyUI workflow</em></figcaption></figure>

#### ComfyUI Custom Nodes

Custom Nodes for ComfyUI are available! Clone these repositories into the ComfyUI **custom\_nodes** folder, and download the [Motion Modules](#models), placing them into the respective extension **model directory.** **Note that these custom nodes cannot be installed together** – it’s one or the other.

Two of the most popular repos are;

-   [ArtVe](https://github.com/ArtVentureX)[ntur](https://github.com/ArtVentureX)[eX](https://github.com/ArtVentureX)‘s [com](https://github.com/ArtVentureX/comfyui-animatediff)[fyui](https://github.com/ArtVentureX/comfyui-animatediff)[\-animatediff implementation](https://github.com/ArtVentureX/comfyui-animatediff).

<figure><img src="/wp-content/uploads/2023/09/255335486-a88e2141-c55f-4bdb-b6ca-9155b6639114-1024x550.webp" alt="" width="1024" height="550" loading="lazy"><figcaption>Example txt2img flow from ArtVentureX’s ComfyUI nodes</figcaption></figure>

-   [Kosinkadink](https://github.com/Kosinkadink)‘s [comfyui-animatediff-ev](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)[olv](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)[ed implementation](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved). Adds some extra features to ArtVentureX’s implementation.

<figure><img src="/wp-content/uploads/2023/09/266359996-2e6be92e-8f0b-428c-b7b4-84589ebd701e-1024x494.webp" alt="" width="1024" height="494" loading="lazy"><figcaption>Example txt2img flow from Kosinkadink’s ComfyUI nodes</figcaption></figure>

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/265203419-4f03d03d-839b-484d-b612-8add086a6b8b.webp" alt="" width="768" height="768" loading="lazy"><figcaption>txt2img with latent upscale, Kosinkadink’s Comfy UI nodes</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/265029636-4ca8abd2-0b48-41d6-9eea-ed1467a68f5f.webp" alt="" width="768" height="768" loading="lazy"><figcaption>txt2img with ControlNet-Stabilized Latent Upscale, Kosinkadink’s ComfyUI nodes</figcaption></figure>

</div>

</div>

### ComfyUI Example Workflows

The following workflows are laid out in a particularly easy to follow way, to help understand and control the workflow and outputs.

#### **AnimateDiff with Motion LoRA, SD LoRA, and Upscaling**

Simple **AnimateDiff txt2video** workflow, requiring the following custom nodes;

[https://github.com/pythongosssss/ComfyUI-Custom-Scripts.git](https://github.com/pythongosssss/ComfyUI-Custom-Scripts.git)

[https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

Note that upscaling is VRAM intensive.

![](/wp-content/uploads/2024/01/workflow-1024x713.webp)

[Civitai\_AnimateDiff\_with\_Motion\_LoRA\_and\_Video\_Upscale](/wp-content/uploads/2023/09/Civitai_AnimateDiff_with_Motion_LoRA_and_Video_Upscale-1.zip)

#### AnimateDiff with Motion LoRA, SD LoRA, Upscaling, and Prompt Scheduling

**Prompt Scheduling** workflow, requiring the following cutsom nodes;

[https://github.com/pyt](https://github.com/pythongosssss/ComfyUI-Custom-Scripts.git)[hongosssss/ComfyUI-Custom-Scripts.git](https://github.com/pythongosssss/ComfyUI-Custom-Scripts.git)

[https://github.com](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)[/Kosinkadink/ComfyUI-AnimateDiff-Evolved](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

[https://github.com/Fiz](https://github.com/FizzleDorf/ComfyUI_FizzNodes)[zleDorf/ComfyUI\_FizzNodes](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

Note that upscaling is VRAM intensive.

![](/wp-content/uploads/2024/01/workflow-1-1024x725.webp)

[Civitai\_AnimateDiff\_Motion\_Prompt\_Scheduling](/wp-content/uploads/2023/09/Civitai_AnimateDiff_Motion_Prompt_Scheduling-1.zip)

## The Future

We’re super excited to see where this tech is going, and will continue to update this guide frequently as new information and Motion modules become available!
