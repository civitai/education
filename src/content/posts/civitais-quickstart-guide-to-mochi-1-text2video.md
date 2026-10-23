---
title: "Civitai’s Quickstart Guide to Mochi 1 text2video!"
slug: "civitais-quickstart-guide-to-mochi-1-text2video"
date: "2024-11-07T23:04:42Z"
modified: "2025-02-04T20:25:34Z"
categories:
  - "quickstart-guides"
  - "video"
tags:
  - "guide"
  - "mochi"
  - "text2video"
author: "civitai"
wpId: 5662
excerpt: "Civitai’s Guide to getting started with Mochi 1 text2video!"
image: "/wp-content/uploads/2024/11/text2video.png"
seo:
  title: "Civitai's Quickstart Guide to Mochi 1 text2video! - Civitai Education"
  description: "Civitai's Guide to getting started with Mochi 1 text2video! Start generating great videos on your local PC now!"
  ogImage: "/wp-content/uploads/2024/11/text2video.png"
  canonical: "https://education.civitai.com/civitais-quickstart-guide-to-mochi-1-text2video/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 11/6/2024 | First Version |
| 11/14/2024 | Mochi – now on-site at Civitai.com! |

## Update! Mochi Available on Civitai.com! {#update-mochi-available-on-civitai-com}

That’s right! We’ve just pushed our first text2img and img2img tools to Civitai.com’s Generator, and Mochi is one of them! Check out the full [Guide to Video in the Civitai Generator](/civitais-guide-to-video-in-the-civitai-generator/) for details!

## Mochi 1?

Mochi 1 preview, by creators [Genmo](https://www.genmo.ai/), is an open source, state-of-the-art, video generation model with high-fidelity motion and strong prompt adherence.

This model dramatically closes the gap between closed and open video generation systems, and it’s released under the permissive Apache 2.0 license.

<figure><img src="/wp-content/uploads/2024/11/mochi_rank-1024x562.webp" alt="" width="1024" height="562" loading="lazy"><figcaption><em>Genmo’s Mochi 1 ranked at #2, based upon ELO scoring, HuggingFace <a href="https://huggingface.co/spaces/ArtificialAnalysis/Video-Generation-Arena-Leaderboard" target="_blank" rel="noreferrer noopener">Video Generation Arena Leaderboard</a></em></figcaption></figure>

Even better, we can now run it _**locally**_ on mid-tier consumer GPUs\*! A huge development from launch, when it required 3 x H100 GPUs to output results!

The model can currently output videos in 480p, but an HD model is slated to appear later this year.

## Output Examples

<div class="columns va-center">

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/CQv6CzF7?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="453"></div>

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/nvPdULEd?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="453"></div>

</div>

</div>

<div class="columns va-center">

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/a8zdcfO1?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="453"></div>

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/cJPaE9V0?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="453"></div>

</div>

</div>

## Mochi in Civitai’s Generator {#mochi-in-civitai-s-generator}

It’s here! Check out our [Guide to Video in the Civitai Generator](/civitais-guide-to-video-in-the-civitai-generator/)!

## Local Generation with Mochi {#notifications}

### Required Files

The official Mochi weights are available on Civitai, along with the Mochi VAE, and text encoders. You may already have one of the required text encoders from a previous SD 3/3.5 installation.

Note that local video generation with these Mochi models is, at time of writing, currently only available via ComfyUI;

| Model | Download Location | Download Source |
| --- | --- | --- |
| Mochi 1 Preview BF16 | models/diffusion\_models | [Civitai](https://civitai.com/models/922390/mochi-1-preview-video-model) |
| Mochi 1 FP8 Scaled | models/diffusion\_models | [Civitai](https://civitai.com/models/922390?modelVersionId=1032472) |
| Mochi VAE | ComfyUI/models/vae | [Civita](https://civitai.com/models/922390?modelVersionId=1035187)[i](https://civitai.com/models/922390?modelVersionId=1035187) |
| T5XXL FP16 | models/clip | [Civitai](https://civitai.com/models/497255?modelVersionId=568485) |
| T5XXL FP8 e4m3fn Scaled | models/clip | [Civitai](https://civitai.com/models/922390?modelVersionId=1038246) |

### ComfyUI

ComfyUI added native Mochi support in early November, allowing anyone with a consumer GPU to generate locally. 24 GB+ of VRAM is recommended, but we’ve seen reports of Mochi already running on 12GB VRAM systems with some 3rd party nodes and wrappers!

Getting started in ComfyUI is as simple as;

1.  **Updating ComfyUI** to the latest version which includes Mochi Support
2.  **Download the weights** (see above)
3.  **Download a text encoder** (see above)
4.  **Download the VAE** (see above)
5.  **Download and load the example workflow** (see below) – plug in the models – and start generating!

#### Sample Workflow

![](/wp-content/uploads/2024/11/workflow-1024x425.webp)

[Mochi Basic Workflow for ComfyUI](/wp-content/uploads/2024/11/Mochi_basic.zip)

#### Low VRAM Options

If you have a GPU with less than 24GB of VRAM, you can try the following options to get running, but beware, generation times might be significant!

-   Switch to the [Mochi 1 FP8 Scaled](https://civitai.com/models/922390?modelVersionId=1032472) weights
-   Switch to the [T5XXL FP8 e4](https://civitai.com/models/922390?modelVersionId=1038246)[m3fn](https://civitai.com/models/922390?modelVersionId=1038246) [Scaled](https://civitai.com/models/922390?modelVersionId=1038246) text encoder

If you’re still having trouble running on your hardware, you can check out [ComfyUI-MochiWrapper](https://github.com/kijai/ComfyUI-MochiWrapper/tree/main) by creator [Kijai](https://github.com/kijai), which offers significant speed boosts at the expense of some quality, via quantized GGUF models and custom nodes;

| Kijai Model | Download Source |
| --- | --- |
| Mochi 1 preview GGUF Q4 0 V1 | [HuggingFace](https://huggingface.co/Kijai/Mochi_preview_comfy/blob/main/mochi_preview_dit_GGUF_Q4_0_v1.safetensors) |
| Mochi 1 preview GGUF Q4 0 V2 | [HuggingFace](https://huggingface.co/Kijai/Mochi_preview_comfy/blob/main/mochi_preview_dit_GGUF_Q4_0_v2.safetensors) |
| Mochi 1 preview GGUF Q8 0 | [HuggingFace](https://huggingface.co/Kijai/Mochi_preview_comfy/blob/main/mochi_preview_dit_GGUF_Q8_0.safetensors) |
| Mochi 1 preview BF16 VAE Decoder | [HuggingFace](https://huggingface.co/Kijai/Mochi_preview_comfy/blob/main/mochi_preview_vae_decoder_bf16.safetensors) |
| Mochi 1 preview BF16 VAE Encoder | [HuggingFace](https://huggingface.co/Kijai/Mochi_preview_comfy/blob/main/mochi_preview_vae_encoder_bf16_.safetensors) |
| Mochi 1 preview FP32 VAE Encoder | [HuggingFace](https://huggingface.co/Kijai/Mochi_preview_comfy/blob/main/mochi_preview_vae_encoder_fp32.safetensors) |

## Limitations

-   **Pricing**! The pricing of Mochi in the Civitai Generator is subject to change as we discuss options with our Partners. We’re aware that the cost for Mochi generation is high, and that’s something we’re hoping to address.

-   **Complexity**! While we now have native ComfyUI support for local generation, this is still a complex model to get running offline. The information above should provide the basics to getting started, but some further reading and experimentation will be required to get the most out of Mochi in an offline environment!

## I need more help!

If you’re experiencing issues generating Video with the Civitai Generator and a solution isn’t mentioned on this page, please reach out to our Support team at [support@civitai.com](mailto:support@civitai.com). If you’re having trouble setting up Mochi for local generation, please join the [Civitai Discord](https://www.discord.gg/civitai) and seek assistance in the **#ai-help** channel!
