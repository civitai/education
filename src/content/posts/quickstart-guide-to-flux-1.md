---
title: "Quickstart Guide to Flux.1"
slug: "quickstart-guide-to-flux-1"
date: "2024-08-15T16:05:06Z"
modified: "2025-08-01T01:42:48Z"
categories:
  - "flux"
  - "quickstart-guides"
tags:
  - "flux"
  - "guide"
  - "quickstart-guide"
author: "civitai"
wpId: 4652
excerpt: "Our Quickstart Guide to Flux.1 will help you understand what the model is, what it can do, and how to start using it!"
image: "/images/guides/quickstart-guide-to-flux-1/cover.webp"
seo:
  title: "Quickstart Guide to Flux.1 - Civitai Education"
  description: "Updated! Our Quickstart Guide to Flux.1 will help you understand what the model is, what it can do, and how to start using it!"
  ogImage: "/images/guides/quickstart-guide-to-flux-1/cover.webp"
  canonical: "https://education.civitai.com/quickstart-guide-to-flux-1/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 8/12/2024 | First Version |
| 8/15/2024 | On-Site and Local LoRA Training Information |
| 9/10/2024 | Huge Update! All the latest Flux Info! |
| 9/12/2024 | [Rapid Flux Training!](//quickstart-guide-to-flux-1/#rapid-flux-training) |
| 11/21/2024 | [Flux Tools released](//quickstart-guide-to-flux-1/#flux-tools)! |
| 22/27/2024 | [Inpainting and Outpainting Update](//quickstart-guide-to-flux-1/#a-note-on-inpainting-and-outpainting-workflows)! |
| 7/30/2025 | [Flux Kontext Pro and Max on Civitai](#flux-1-kontext) |
| 7/31/2025 | [Flux Krea Dev – New Model!](#flux-1-krea-dev) |

## What is Flux? Who made it? {#what-is-flux}

In early August 2024, a team of ex-Stability AI developers announced the formation of [Black Forest Labs,](https://blackforestlabs.ai/) with the mission to; “_develop and advance state-of-the-art generative deep learning models for media such as images and videos, and to push the boundaries of creativity, efficiency and diversity._”

Our Quickstart Guide to Flux.1 will help you understand what the model is, and how to start using it!

Shortly following the announcement, their first text-to-image diffusion model was released; **Flux.1**. Trained with 12 billion parameters, and based upon a [novel transformer architecture](https://arxiv.org/abs/2212.09748), Flux has wowed the community with its _fantastically good_ image fidelity and controllability!

Flux.1 consists of a number of distinct model variations;

-   **Flux.1 Krea \[Dev\]** – developed in collaboration with [Krea AI](http://krea.ai/blog/flux-krea-open-source-release). **FLUX.1 Krea \[dev\]** is a new (July 2025) state-of-the-art **_open-weights model_** (can be used offline, locally) for text-to-image generation that overcomes the oversaturated ‘AI look’ to achieve new levels of photorealism with its distinctive aesthetic approach.

<figure><img src="/wp-content/uploads/2024/08/ComfyUI_00259_-1024x701.webp" alt="" width="1024" height="701" loading="lazy"><figcaption><strong>Flux.1 Krea [Dev] </strong></figcaption></figure>

-   **Flux.1 \[Pro 1.1 Ultra & Ultra Raw\]** – Pro 1.1 Ultra, and Ultra Raw are _only available for use via API_. You can use Black Forest Labs’ [ow](https://docs.bfl.ml/)[n A](https://docs.bfl.ml/)[PI](https://docs.bfl.ml/), or a number of their commercial partners, to generate images with Flux.1 Pro 1.1 Ultra, and Ultra Raw. The weights can’t be downloaded, and even if they could, the system requirements would be too high for use with consumer hardware.

    [Flux Pro 1.1 Ultra](https://blackforestlabs.ai/flux-1-1-ultra/) adds 4 megapixel, ultra high resolution outputs, while **Ultra Raw** captures a more natural, candid, aesthetic.

<figure><img src="/wp-content/uploads/2024/08/pro1.1ultra-1024x572.jpeg" alt="" width="1024" height="572" loading="lazy"><figcaption><em><strong>Flux Pro 1.1 Ultra</strong>, generated on-site at Civitai.com</em></figcaption></figure>

<figure><img src="/wp-content/uploads/2024/08/Pro1.1ultra-raw-1024x572.jpeg" alt="" width="1024" height="572" loading="lazy"><figcaption><em><strong>Flux Pro 1.1 Ultra</strong> <strong>Raw</strong>, generated on-site at Civitai.com</em></figcaption></figure>

-   **Flux.1 \[Pro 1.1\]** – Pro 1.1 is _only available for use via API_. You can use Black Forest Labs’ [ow](https://docs.bfl.ml/)[n A](https://docs.bfl.ml/)[PI](https://docs.bfl.ml/), or a number of their commercial partners, to generate images with Flux.1 Pro 1.1. **Pro 1.1 supersedes Pro in many ways – it’s cheaper, and provides better quality images**! The weights can’t be downloaded. Flux.1 \[Pro\] **is available for use via the [Civitai on-site Generator](https://civitai.com/generate)**, as Model Mode: **Pro** 1.1.

<figure><img src="/wp-content/uploads/2024/08/Pro1.1-1-1024x701.webp" alt="" width="1024" height="701" loading="lazy"><figcaption><em><strong>Flux Pro 1.1</strong>, generated on-site at Civitai.com</em></figcaption></figure>

-   **Flux.1 \[Pro\]** – Pro is _only available for use via API_. You can use Black Forest Labs’ [ow](https://docs.bfl.ml/)[n A](https://docs.bfl.ml/)[PI](https://docs.bfl.ml/), or a number of their commercial partners, to generate images with Flux.1 Pro. Pro has largely been replaced by Pro 1.1, which is cheaper, more performant, and provides better outputs. The weights can’t be downloaded. Flux.1 \[Pro\] **is available for use via the [Civitai on-site Generator](https://civitai.com/generate)**, as Model Mode: **Pro**.

<figure><img src="/wp-content/uploads/2024/08/Pro-1024x701.webp" alt="" width="1024" height="701" loading="lazy"><figcaption><em><strong>Flux Pro (legacy)</strong>, generated on-site at Civitai.com</em></figcaption></figure>

-   **Flux.1 \[Dev\]** – Dev is an open-weight, distilled, model for non-commercial applications. Distilled from Flux.1 \[Pro\], it provides similar quality and prompt-adherence capabilities while being more efficient; we can run it locally on consumer hardware. Flux.1 \[Dev\] is released under the [Flux.1 Dev Non Commercial License](https://github.com/black-forest-labs/flux/blob/main/model_licenses/LICENSE-FLUX1-dev). Flux.1 \[Dev\] **is available for use via the [Civitai on-site Generator](https://civitai.com/generate),** as Model Mode: **Standard**. [Model Weights can be dow](https://civitai.com/models/618692?modelVersionId=691639)[nloade](https://civitai.com/models/618692?modelVersionId=691639)[d from Civitai here](https://civitai.com/models/618692?modelVersionId=691639).

<figure><img src="/wp-content/uploads/2024/08/Dev-1024x701.jpeg" alt="" width="1024" height="701" loading="lazy"><figcaption><em><strong>Flux Dev</strong>, generated on-site at Civitai.com</em></figcaption></figure>

-   **Flux.1 \[Schnell\]** – Schnell (German for “fast”), is the equivalent of an SDXL Lightning model; fast low step-count generations at the expense of some image fidelity. Flux.1 \[Schnell\] is released under the [Apache-2.0 License](https://github.com/black-forest-labs/flux/blob/main/model_licenses/LICENSE-FLUX1-schnell). Flux.1 \[Schnell\] **is available for use via the [Civitai on-site Generator](https://civitai.com/generate)**, as Model Mode: **Draft**. [Model Weights can be downloaded from Civitai here](https://civitai.com/models/618692?modelVersionId=699279).

<figure><img src="/wp-content/uploads/2024/08/schnell-1024x701.jpeg" alt="" width="1024" height="701" loading="lazy"><figcaption><em><strong>Flux Schnell</strong>, generated on-site at Civitai.com</em></figcaption></figure>

## How does Flux Perform? What does it look like?

How does Flux perform? In a word; phenomenally. Described by many in the Community as “the model we’ve been waiting for”, after the disappointment of **SD3**, Flux has been warmly received. Image fidelity, prompt adherence, and overall image quality are exceptional, setting a new standard in the text2img landscape.

<figure><img src="/wp-content/uploads/2024/08/big_comp-7-1280x896-1-1024x717.webp" alt="" width="1024" height="717" loading="lazy"><figcaption><em>ELO scored chart showing model performance ranked against similar models, <a href="https://blackforestlabs.ai/announcing-black-forest-labs/">source: Black Forest Labs</a></em></figcaption></figure>

<div data-embed="gallery"><img src="/wp-content/uploads/2024/08/MarkuryFLUX_00073_-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/08/MarkuryFLUX_00073_.png" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/MarkuryFLUX_00142_-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/08/MarkuryFLUX_00142_.png" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/MarkuryFLUX_00115_-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/08/MarkuryFLUX_00115_.png" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/MarkuryFLUX_00183_-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/08/MarkuryFLUX_00183_.png" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/MarkuryFLUX_00152_-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/08/MarkuryFLUX_00152_.png" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/MarkuryFLUX_00096_-1024x701.webp" alt="Flux on Civitai!" data-orig-file="/wp-content/uploads/2024/08/MarkuryFLUX_00096_.png" width="1216" height="832" loading="lazy"></div>

## How do I make images with Flux?

Good news! **You can create Flux images with the Civitai on-site Generator**!

To get started, pop open the [Image](https://civitai.com/generate) [Gen](https://civitai.com/generate)[erator](https://civitai.com/generate) and it will be pre-loaded! That’s right, Flux has become so popular that it’s our default model for generation!

From here you’ll be able to select a Model Mode; **Draft**, **Standard**, **Pro**, **Pro 1.1**, and **Ultra**. _Pro, Pro 1.1, and Ultra are API-only models and will yield the best results, for a price!_

<figure><img src="/wp-content/uploads/2024/08/flux_gen_options.webp" alt="" width="626" height="285" loading="lazy"><figcaption><em>Draft (Flux Schnell), Standard (Flux Dev), Pro (Flux Pro, 1.1, Ultra) pre-set</em> <em>options</em></figcaption></figure>

You’ll notice that the **Advanced Settings** for Flux are more limited than for SD1.5, SDXL or Pony Models.

<figure><img src="/wp-content/uploads/2024/08/Screenshot-2024-08-15-114535-1.webp" alt="" width="719" height="282" loading="lazy"><figcaption><em>Flux Advanced Options</em></figcaption></figure>

There aren’t many settings which need to be tweaked to make great Flux images, but we’ll expand these options for power users in future!

<div data-embed="gallery"><img src="/wp-content/uploads/2024/08/WE4CH530QW0DE86Q7H00GC0DP0-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/08/WE4CH530QW0DE86Q7H00GC0DP0.webp" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/ZG3FA92K5YMJYXZ55CD1X5SBR0-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/08/ZG3FA92K5YMJYXZ55CD1X5SBR0.webp" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/55YW8SBQRP77TJ4SQ1K2HM2AH0-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/08/55YW8SBQRP77TJ4SQ1K2HM2AH0.webp" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/ZTD9NQ606SNH44CA2M4F2JKFX0-1024x701.webp" alt="" data-orig-file="/wp-content/uploads/2024/08/ZTD9NQ606SNH44CA2M4F2JKFX0.webp" width="1216" height="832" loading="lazy"><img src="/wp-content/uploads/2024/08/2XHQGGR97TEZ05DYCBYWPPW400-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/08/2XHQGGR97TEZ05DYCBYWPPW400.webp" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/ZMMK3EQ0DA1BEFQ0JPDYBYZ8H0-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/08/ZMMK3EQ0DA1BEFQ0JPDYBYZ8H0.webp" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/D08QFCCHKVD06HFWJZ5RC56CW0-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/08/D08QFCCHKVD06HFWJZ5RC56CW0.webp" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/8QHHA5SKZ0ZXJKQGFXPTD2V300-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/08/8QHHA5SKZ0ZXJKQGFXPTD2V300.webp" width="832" height="1216" loading="lazy"></div>

_Images Generated on-site with Flux, Dev and Pro_

## How do I generate images locally? {#what-do-i-download-important-read-me}

Currently, there are a couple of options for local generation, depending on your hardware!

As of 9/10/2024 there is not yet official support for Flux on Automatic1111.

For the latest Flux-Automatic1111 WebUI info, keep an eye on [this Issue on the official Automatic1111 Github Repository](https://github.com/AUTOMATIC1111/stable-diffusion-webui/issues/16311).

Since release, a number of small, cleverly optimized, Flux models have appeared, making it easier to run Flux on both ComfyUI and Forge! Details below.

### ComfyUI

Flux.1 launched with day-1 [Co](https://github.com/comfyanonymous/ComfyUI)[m](https://github.com/comfyanonymous/ComfyUI)[fyUI](https://github.com/comfyanonymous/ComfyUI) support, making it one of the quickest and easiest ways to dive into generating with the original Black Forest Labs models.

To get started using Flux with ComfyUI, you’ll need the following components:

#### Original/Official Flux Models {#original-official-flux-models}

The following models are the originals released by Black Forest Labs, and Comfyanonymous, for use in ComfyUI (and other interfaces).

| Flux.1 Models | HF Link | Civitai Link |
| --- | --- | --- |
| ae.safetensors (vae, required) | [Black Forest Labs HF Repository](https://huggingface.co/black-forest-labs/FLUX.1-dev/tree/main) |     |
| flux1-dev.safetensors | [Black Forest Labs HF Repository](https://huggingface.co/black-forest-labs/FLUX.1-dev/tree/main) | [Civitai Download Link](https://civitai.com/models/618692?modelVersionId=691639) |
| flux1-schnell.safetensors | [Black Forest Labs](https://huggingface.co/black-forest-labs/FLUX.1-schnell/tree/main) [HF Repository](https://huggingface.co/black-forest-labs/FLUX.1-schnell/tree/main) | [Civitai Download Link](https://civitai.com/models/618692?modelVersionId=691639) |
| Clip\_l.safetensors | [Comfyanonymous HF Repository](https://huggingface.co/comfyanonymous/flux_text_encoders/tree/main) |     |
| t5xxl\_fp16.safetensors | [Comfyanonymous HF Repository](https://huggingface.co/comfyanonymous/flux_text_encoders/tree/main) |     |
| t5xxl\_fp8\_e4m3fn.safetensors | [Comfyanonymous HF Repository](https://huggingface.co/comfyanonymous/flux_text_encoders/tree/main) |     |
| flux1-kontext-dev.safetensors (fp16) | [Black Forest Labs HF Repository](https://huggingface.co/black-forest-labs/FLUX.1-Kontext-dev) | [Civitai Do](https://civitai.com/models/1672021?modelVersionId=1945998)[wnload Lin](https://civitai.com/models/1672021?modelVersionId=1945998)[k](https://civitai.com/models/1672021?modelVersionId=1945998) |
| flux1-kontext-dev.safetensors (fp8) |     | [Civitai Download Link](https://civitai.com/models/1672021?modelVersionId=1946798) |
| flux1-Krea-dev.safetensors |     | [Civ](https://civitai.com/models/618692?modelVersionId=2068000)[itai Download Link](https://civitai.com/models/618692?modelVersionId=2068000) |

-   Note that the **Flux-dev** and **\-schnell .safetensors** models must be placed into the **ComfyUI/models/unet** folder.

-   Clip Models must be placed into the **ComfyUI/models/clip** folder. You may already have the required Clip models if you’ve previously used SD3.

-   **Some System Requirement considerations**;
    -   flux1-dev requires more than 12GB VRAM
    -   flux1-schnell can run on 12GB VRAM
    -   If you have less than 32GB of System RAM, use the t5xxl\_fp8\_e4m3fn text encoder instead of the t5xxl\_fp16 version.

#### Third-Party Flux Models

If you’re unable to run the ‘full fat’ official models, there are a number of “compressed” models available which require less VRAM to use!

Creator [Kijai](https://huggingface.co/Kijai) has released compressed fp8 versions of both flux1-dev and flux1-schnell. While there might be _some_ reduction in image quality, these versions make it possible for users with less available VRAM to generate with Flux.

| Flux.1 Models | HF Link |
| --- | --- |
| flux1-dev-fp8.safetensors | [Kijai HF Repository](https://huggingface.co/Kijai/flux-fp8/blob/main/flux1-dev-fp8.safetensors) |
| flux1-schnell-fp8.safetensors | [Kijai HF Repository](https://huggingface.co/Kijai/flux-fp8/blob/main/flux1-schnell-fp8.safetensors) |

You’ll also need a basic text-to-image workflow to get started. The download link below provides a straightforward setup with some solid pre-set options.

![](/wp-content/uploads/2024/08/civitai_workflow-1024x423.webp)

[civitai\_flux\_t2i\_workflow](/wp-content/uploads/2024/08/civitai_flux_t2i_workflow.zip)

### Forge

One of [our favorite interfaces, Forge](/generative-ai-art-with-forge-quickstart-guide/), (**Update 7/2025** – Forge is no longer updated!) has received Flux support in a surprise Major Update! If you’re familiar with Automatic1111’s interface, you’ll be right at home with Forge; the Gradio front-ends are practically identical.

Forge can support the original Flux models, and text encoders, as listed above for Comfy.

To use the full models and text encoders, there are new fields in which the models and encoders can be loaded;

![](/wp-content/uploads/2024/08/357418265-d76ad56c-f871-47a3-8dfb-13b331b45af1.webp)

Forge creator, [Illyasviel](https://huggingface.co/lllyasviel), has released a “compressed” NF4 model ~~which is currently the recommended way to use Flux with Forge~~ (See Quantized models, below); “_NF4 is significantly faster than FP8 on 6GB/8GB/12GB devices and slightly faster for >16GB vram devices. For GPUs with 6GB/8GB VRAM, the speed-up is about 1.3x to 2.5x (pytorch 2.4, cuda 12.4) or about 1.3x to 4x (pytorch 2.1, cuda 12.1)_“

| Model | HF Link |
| --- | --- |
| flux1-dev-bnb-nf4-v2.safetensors | [Illyasviel HF Repository](https://huggingface.co/lllyasviel/flux1-dev-bnb-nf4/blob/main/flux1-dev-bnb-nf4-v2.safetensors) |
| flux1-dev-fp8.safetensors | [Illyasviel HF Repository](https://huggingface.co/lllyasviel/flux1_dev/blob/main/flux1-dev-fp8.safetensors) |

**Note! If your GPU supports CUDA newer than 11.7 you can use the NF4 model. Most RTX3XXX and 4XXX GPUs support NF4).**

If your GPU is a GTX10XX/20XX, it may not support NF4. In this case, use the fp8 model.

## GGUF Quantized Models & Example Workflows – READ ME! {#gguf-quantized-models-example-workflows-read-me}

Both Forge and ComfyUI have support for **Quantized models**. Quantization is a technique first used with Large Language Models to reduce the size of the model, making it more memory-efficient, enabling it to run on a wider range of hardware.

There are now a range of “GGUF” ([Georgi Gerganov’s Unified Format](https://github.com/ggerganov/ggml/blob/master/docs/gguf.md)) Quantized Flux Models. **GGUF-Q8 provides image outputs 99% identical to the original FP16 Flux models, while requiring almost half the VRAM**!

? At time of writing, **GGUF-Q8 is the preferred method for local Flux generation, for both ComfyUI and Forge**, offering the best tradeoff between quality and VRAM use. GGUF-Q8 is both faster, and produces images of better quality, than the NF4 models, mentioned above.

| Model Name | Civitai Link | HF Link |
| --- | --- | --- |
| Flux.1 **Dev** GGUF Q8 | [Civitai Download Link](https://civitai.com/models/647237?modelVersionId=724149) | [HuggingFace Download Link](https://huggingface.co/city96/FLUX.1-dev-gguf/blob/main/flux1-dev-Q8_0.gguf) |
| Flux.1 **Schnell** GGUF Q8 | [Civitai Download Link](https://civitai.com/models/648580?modelVersionId=725877) | [HuggingFace Download Link](https://huggingface.co/city96/FLUX.1-schnell-gguf/blob/main/flux1-schnell-Q8_0.gguf) |

Note that the GGUF models can be used with the ComfyUI-GGUF [custom node](https://github.com/city96/ComfyUI-GGUF). A Civitai created sample workflow can be found below. [Use the ComfyUI manager](https://github.com/ltdrdata/ComfyUI-Manager) to detect and install missing nodes in your ComfyUI installation.

<figure><img src="/wp-content/uploads/2024/08/Flux-GGUF-text2img-Workflow-1024x621.webp" alt="ComfyUI GGUF workflow" width="1024" height="621" loading="lazy"><figcaption><em>Simple GGUF Flux Workflow</em></figcaption></figure>

[Flux GGUF text2img Workflow](/wp-content/uploads/2024/08/Flux-GGUF-text2img-Workflow.zip)

<figure><img src="/wp-content/uploads/2024/08/Flux-GGUF-text2img-Workflow-with-Upscale-1024x432.webp" alt="" width="1024" height="432" loading="lazy"><figcaption><em>Simple GGUF Flux Workflow – With optional Upscaling</em></figcaption></figure>

[Flux GGUF text2img Workflow With Upscale](/wp-content/uploads/2024/08/Flux-GGUF-text2img-Workflow-With-Upscale.zip)

## Flux Prompting {#how-do-i-make-images}

Flux image prompting tends to shine with a more verbose, natural language narrative-style prompt, rather than the traditional comma-separated ‘Danbooru’ tag style prompt. However, it’s remarkably forgiving and responds well to experimentation, making it worthwhile to test out prompts from both SD1.5 and SDXL to see what unique results you can achieve!

What truly sets Flux apart from other models is its remarkable ability to render text – not just single words, but entire sentences, with impressive clarity. This feature alone opens up a world of possibilities for creators looking to integrate text into their images!

<div class="columns">

<div class="column">

Prompt: _intricate detail, (standing stone:1.3) carved with (glowing blue text:1.2) “very old magical stone!”, very detailed, Cinematic lighting, with volumetric rays and bloom effect, dramatic lighting, clouds at sunset, photorealistic digital art trending on Artstation 8k HD high definition detailed realistic_

</div>

<div class="column">

![](/wp-content/uploads/2024/08/MarkuryFLUX_00569_-701x1024.webp)

</div>

</div>

<div class="columns">

<div class="column">

Prompt: _Ultra high quality, very detailed, A mysterious fog-shrouded landscape illuminated by a blood moon with smokey clouds, looming darkness and heavy fog, eerie feeling, very dark, deep black, deep dark shadow, dark ruined tower in distance, dim moonlight, reflections in water, spectres, shapeless evil, transylvania, wood and neon signpost in foreground with text “5 Star Hotel!”_

</div>

<div class="column">

![](/wp-content/uploads/2024/08/MarkuryFLUX_00579_-701x1024.webp)

</div>

</div>

## License Considerations

The following licenses apply to the three Flux variants;

| Flux Model | License |
| --- | --- |
| Flux.1 \[Pro\] | Governed by the [Flux](https://docs.bfl.ml/agreement/) [API](https://docs.bfl.ml/agreement/) [License](https://docs.bfl.ml/agreement/). |
| Flux.1 \[Dev\], Flux.1 Kontext \[Dev\], Flux.1 Krea \[Dev\] | [Flux.1 Dev Non-Commercial License](https://github.com/black-forest-labs/flux/blob/main/model_licenses/LICENSE-FLUX1-dev) |
| Flux.1 \[Schnell\] | [Apache 2.0 Licens](https://github.com/black-forest-labs/flux/blob/main/model_licenses/LICENSE-FLUX1-schnell)[e](https://github.com/black-forest-labs/flux/blob/main/model_licenses/LICENSE-FLUX1-schnell) |

## Training with Flux {#training-sd3}

### Train Flux LoRA on Civitai!

Flux LoRA training is available on-site!

<figure><img src="/wp-content/uploads/2024/08/Screenshot-2024-08-15-144705.webp" alt="" width="693" height="264" loading="lazy"><figcaption><em>Flux Dev Base Model for LoRA Training</em></figcaption></figure>

Here are some tips and tricks we’ve found during testing Flux training on-site;

-   Mixing realistic images + cartoon training data set images makes everything look plastic and terrible!

-   ~~Danbooru comma separated captioning does not seem to be effective.~~ We’re finding that natural language captioning – narrative style – is a lot more effective for a good output. Additionally, a mix of natural language and danbooru tag style captioning has shown promising results! [Note: we now have Natural Language auto-captioning available in the on-site LoRA trainer!](/using-civitai-the-on-site-lora-trainer/)

-   We’re finding and hearing that **captionless training** can produce some very good, flexible, results! Try your next training session with **no captions**!

-   Larger datasets seem much less flexible than smaller ones. We had great success with 20-30 images. With an additional 15 images the prompting flexibility was drastically reduced!

-   Training with a resolution of 512 seems to produce **_excellent_** results – much better and faster than 1024x!

-   _Phenomenal_ **likeness capture** can be achieved with 20-40 images, ~1500 steps;

#### Likeness Capture

With a data set of ~30 portrait photos, an excellent, flexible, likeness LoRA can be trained (_subject, one of our [on-site Moderators](https://civitai.com/user/LochKesMonster), reproduced here with permission_).

<figure><img src="/wp-content/uploads/2024/08/image-1024x262.webp" alt="" width="1024" height="262" loading="lazy"><figcaption><em>Example of good input Images; a range of expressions, poses, lighting, backgrounds, etc.</em></figcaption></figure>

Captioned with the [on-site Trainer’s Natural Langua](/using-civitai-the-on-site-lora-trainer/#captioning-managing-image-captions)[ge ca](/using-civitai-the-on-site-lora-trainer/#captioning-managing-image-captions)[ptioning tool](/using-civitai-the-on-site-lora-trainer/#captioning-managing-image-captions), and trained with _**default Flux settings**_, changed only to increase **repeats (10)** and **Epochs (12)**, decrease **Batch Size (2)**, and aim for a **Target Steps of 1560**.

Settings changed from Default shown in **bold**;

<div class="columns">

<div class="column">

```
{
  "engine": "kohya",
  "unetLR": 0.0005,
  "clipSkip": 1,
  "loraType": "lora",
  "keepTokens": 0,
  "networkDim": 2,
  "numRepeats": 10,
  "resolution": 512,
  "lrScheduler": "cosine_with_restarts",
  "minSnrGamma": 5,
  "noiseOffset": 0.1,
  "targetSteps": 1560,
  "enableBucket": true,
  "networkAlpha": 16,
  "optimizerType": "AdamW8Bit",
  "textEncoderLR": 0,
  "maxTrainEpochs": 12,
  "shuffleCaption": false,
  "trainBatchSize": 2,
  "flipAugmentation": false,
  "lrSchedulerNumCycles": 3
}
```

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2024/08/Screenshot-2024-09-11-013500.webp" alt="" width="669" height="744" loading="lazy"><figcaption><em>Output Epochs #9 and #10</em></figcaption></figure>

</div>

</div>

After testing, **Epoch #6** offered an excellent balance of **likeness capture**, **fidelity**, and **flexibility of prompting**. Example images below (25 steps, 3.5 Guidance);

<div data-embed="gallery"><img src="/wp-content/uploads/2024/08/ComfyUI_01472_-701x1024.webp" alt="Flux likeness capture LoRA output" data-orig-file="/wp-content/uploads/2024/08/ComfyUI_01472_.png" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/ComfyUI_01463_-701x1024.webp" alt="Flux likeness capture LoRA output" data-orig-file="/wp-content/uploads/2024/08/ComfyUI_01463_.png" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/ComfyUI_01479_-701x1024.webp" alt="Flux likeness capture LoRA output" data-orig-file="/wp-content/uploads/2024/08/ComfyUI_01479_.png" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/ComfyUI_01452_-701x1024.webp" alt="Flux likeness capture LoRA output" data-orig-file="/wp-content/uploads/2024/08/ComfyUI_01452_.png" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/ComfyUI_01449_-701x1024.webp" alt="Flux likeness capture LoRA output" data-orig-file="/wp-content/uploads/2024/08/ComfyUI_01449_.png" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/ComfyUI_01487_-701x1024.webp" alt="Flux likeness capture LoRA output" data-orig-file="/wp-content/uploads/2024/08/ComfyUI_01487_.png" width="832" height="1216" loading="lazy"></div>

**Remember**! LoRAs trained on images of real people _cannot be hosted on Civitai_. Please see our [Content Policies](https://civitai.com/safety#content-policies) for more information.

Phenomenal examples of Flux LoRA’s trained with the [Civitai on-site LoRA Trainer](/using-civitai-the-on-site-lora-trainer/);

<div class="columns">

<div class="column">

<figure><a href="https://civitai.com/models/553752/mosaic-sd-15-sdxl-pony-flux?modelVersionId=778704"><img src="/wp-content/uploads/2024/08/ComfyUI_00006_-1024x1024.webp" alt="Mosaic (SD 1.5, SDXL, Pony, Flux)" width="1024" height="1024" loading="lazy"></a><figcaption><em>Mosaic (Flux)</em></figcaption></figure>

</div>

<div class="column">

<figure><a href="https://civitai.com/models/683579/pixel-art-illustrations-flux?modelVersionId=765098"><img src="/wp-content/uploads/2024/08/D7CSZVKNZHVY2738VXM2C9YZZ0.webp" alt="Pixel Art Illustrations FLUX" width="1024" height="1024" loading="lazy"></a><figcaption><em>Pixel Art Illustrations FLUX</em></figcaption></figure>

</div>

<div class="column">

<figure><a href="https://civitai.com/models/551903/ars-midjourney-watercolor-sd-15-sdxl-pony-flux?modelVersionId=742802"><img src="/wp-content/uploads/2024/08/1000072661-768x1024.webp" alt="Ars MidJourney Watercolor (SD 1.5, SDXL, Pony, Flux)" width="768" height="1024" loading="lazy"></a><figcaption><em>Ars MidJourney Watercolor (Flux)</em><br></figcaption></figure>

</div>

</div>

<div class="columns">

<div class="column">

<figure><a href="https://civitai.com/models/545264/impressionism-sdxl-pony-flux?modelVersionId=755598"><img src="/wp-content/uploads/2024/08/ComfyUI_00093_-768x1024.webp" alt="Impressionism (SDXL, Pony, Flux)" width="768" height="1024" loading="lazy"></a><figcaption><em>Impressionism (Flux)</em></figcaption></figure>

</div>

<div class="column">

<figure><a href="https://civitai.com/models/684720/mastering-manicure-a-visual-guide-to-nail-art-techniques?modelVersionId=766350"><img src="/wp-content/uploads/2024/08/image011-796x1024.webp" alt="Mastering Manicure: A Visual Guide to Nail Art Techniques" width="796" height="1024" loading="lazy"></a><figcaption><em>Mastering Manicure: A Visual Guide to Nail Art Techniques</em></figcaption></figure>

</div>

<div class="column">

<figure><a href="https://civitai.com/models/719041/tangbohu-wool-kintted-style-flux?modelVersionId=804021"><img src="/wp-content/uploads/2024/08/tangbohu_wool_style_FLUX_e000010_00_20240904143954.webp" alt="Tangbohu wool knitted style [FLUX]" width="512" height="512" loading="lazy"></a><figcaption><em>Tangbohu wool knitted style</em></figcaption></figure>

</div>

</div>

## Rapid Flux Training

We’re offering **Rapid Flux Training** – LoRAs trained in _under 5 minutes_! To enable this, simply check the **Rapid Training** toggle after selecting Flux Dev as the Base model;

![](/wp-content/uploads/2024/08/Screenshot-2024-09-12-172216.webp)

Rapid Training _**does not accept custom Training Parameters**_, and outputs a **single LoRA file (one Epoch)** when training is complete.

Rapid Training has a **base cost of 4,000 Buzz**, with a data set of 100 images, with the price increasing for every 100 images added thereafter.

Using the same data set as the likeness capture example, above, a LoRA was trained and ready for use in **2 minutes and 32 seconds**.

The following images demonstrate the fidelity of the output (compare to those from the “traditionally trained” LoRA, above);

<div data-embed="gallery"><img src="/wp-content/uploads/2024/08/ComfyUI_01803_-701x1024.webp" alt="Rapid Flux Trained LoRA" data-orig-file="/wp-content/uploads/2024/08/ComfyUI_01803_.png" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/ComfyUI_01805_-701x1024.webp" alt="Rapid Flux Trained LoRA" data-orig-file="/wp-content/uploads/2024/08/ComfyUI_01805_.png" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/08/ComfyUI_01809_-701x1024.webp" alt="Rapid Flux Trained LoRA" data-orig-file="/wp-content/uploads/2024/08/ComfyUI_01809_.png" width="832" height="1216" loading="lazy"></div>

## Flux ControlNets?

Yes! The first Flux ControlNet models are appearing and can be used in ComfyUI! At time of writing, there are [Depth, HED, and Canny models available](https://civitai.com/models/649271/controlnetflux-cnflux).

| Model | Civitai Link |
| --- | --- |
| InstantX Canny | [Civitai Link](https://civitai.com/models/649271?modelVersionId=726743) |
| Kadirnar Canny 16k | [Civitai Link](https://civitai.com/models/649271?modelVersionId=760601) |
| XLabs-AI Canny | [Civitai Link](https://civitai.com/models/649271?modelVersionId=733016) |
| XLabs-AI Depth | [Civitai Link](https://civitai.com/models/649271?modelVersionId=733199) |
| XLabs-AI HED | [Civitai Link](https://civitai.com/models/649271?modelVersionId=734419) |
| XLabs-AI IP Adapter | [Civitai Link](https://civitai.com/models/649271?modelVersionId=759932) |

Below are simple Civitai-created ControlNet workflows based upon the XLabs ControlNet models;

![](/wp-content/uploads/2024/08/Flux-Depth-Controlnet-1-1024x411.webp)

[Flux Depth Controlnet Workflow](/wp-content/uploads/2024/08/Flux-Depth-Controlnet-Workflow-1.zip)

![](/wp-content/uploads/2024/08/Flux-IP-Adapter-Workflow-1024x411.webp)

[Flux IP Adapter Workflow](/wp-content/uploads/2024/08/Flux-IP-Adapter-Workflow.zip)

### Train Flux locally with Kohya and X-Flux

More good news for creators: Flux allows for both LoRA training and full finetuning on consumer hardware! With tools like [X-Flux from XLabs](https://github.com/XLabs-AI/x-flux) and [Kohya](https://github.com/bmaltais/kohya_ss), you can embark on LoRA training, though it’s worth noting that this process is still in its early stages, and hardware requirements remain quite steep.

To train a LoRA against the Flux Dev model, you’ll need an **NVIDIA RTX3000** or **4000** Series GPU **_with at least 24 GB of VRAM_**.

Even more impressively, according to reports from the Kohya GitHub repository, full BF16 finetuning (without the need for quantization or fp8) can be achieved with just 24GB of VRAM. This development marks a significant breakthrough, making advanced training more accessible than ever before;

<figure><img src="/wp-content/uploads/2024/08/zz75ars20iid1-1024x403.webp" alt="" width="1024" height="403" loading="lazy"><figcaption>Source: <a href="https://github.com/kohya-ss/sd-scripts/pull/1374#issuecomment-2287134623" target="_blank" rel="noreferrer noopener">Kohya-ss Github Discussion</a></figcaption></figure>

The Flux landscape is rapidly evolving, with tens of GitHub commits daily as new features and improvements are discovered and implemented, so stay tuned for more updates!

## Flux Tools

On 11/21/2024 Black Forest Labs [released a suite of models](https://blackforestlabs.ai/flux-1-tools/) titled **Flux Tools**, designed to enhance the capabilities of the Flux models. Think “ControlNet”, for Flux. The Flux Tools are released under the [Flux.1-dev Non-Co](https://github.com/black-forest-labs/flux/blob/main/model_licenses/LICENSE-FLUX1-dev)[m](https://github.com/black-forest-labs/flux/blob/main/model_licenses/LICENSE-FLUX1-dev)[mercial License](https://github.com/black-forest-labs/flux/blob/main/model_licenses/LICENSE-FLUX1-dev).

[ComfyUI has support](https://blog.comfy.org/day-1-support-for-flux-tools-in-comfyui/), but most models are so large they’ll only fit on the largest consumer graphics cards, requiring 24GB of VRAM. **Quantized versions will appear soon**!

| Model | Description | Civitai Link |
| --- | --- | --- |
| Flux.1 Fill | State-of-the-art **inpainting and outpainting model**, enabling editing and expansion of real and generated images given a text description and a binary mask. | [Civitai](https://civitai.com/models/970162/flux-tools-fill) |
| Flux.1 Depth Dev | Models trained to enable structural guidance based on a **depth map** extracted from an input image and a text prompt. | [Civitai](https://civitai.com/models/970882) |
| Flux.1 Depth Dev LoRA | Lightweight LoRA extracted from Depth Dev. | [Civitai](https://civitai.com/models/970050?modelVersionId=1086175) |
| Flux.1 Canny Dev | Models trained to enable structural guidance based on **canny edges** extracted from an input image and a text prompt. | [Civita](https://civitai.com/models/970548)[i](https://civitai.com/models/970548) |
| Flux.1 Canny Dev LoRA | Lightweight LoRA extracted from Canny Dev. | [Civita](https://civitai.com/models/970090?modelVersionId=1086214)[i](https://civitai.com/models/970090?modelVersionId=1086214) |
| Flux.1 Redux Adapter | An IP adapter that allows mixing and recreating input images and text prompts. | [Civitai](https://civitai.com/models/970124/flux-tools-redux) |

### Flux.1 Fill {#flux-1-fill}

Download the [flux1-fill-dev.safetensors](https://civitai.com/models/970162/flux-tools-fill) model file and put it in your **ComfyUI/models/diffusion\_models/** folder. Load an image into the image upload node, then right click on it and select “Open in MaskEditor” to launch the inpaint interface.

#### A note on Inpainting and Outpainting workflows

_The workflows below have been updated with input from Civitai Creator **diogod**, who, correctly pointed out that they were missing an **ImageCompositeMasked** node, which prevents the entire image from degrading during in/outpainting! Huge thanks to **diogod** for that callout!_

_Additionally, we’ve added a **GrowMaskWithBlur** node which requires a third-party node pack – you can install missing nodes from the ComfyUI manager – which will ensure the painted mask is feathered to blend with the original image._

![](/wp-content/uploads/2024/08/Screenshot-2024-11-27-101431-1024x160.webp)

<figure><img src="/wp-content/uploads/2024/08/Screenshot-2024-11-21-223606-1024x583.webp" alt="" width="1024" height="583" loading="lazy"><figcaption><em>ComfyUI Mask Editor, inpainting a specific detail of a Flux image</em></figcaption></figure>

<div data-embed="image-compare" data-mode="horizontal"><img src="/wp-content/uploads/2024/08/ComfyUI_04378_.png" alt="before" width="832" height="1216" data-role="before" loading="lazy"><img src="/wp-content/uploads/2024/08/ComfyUI_04452_.png" alt="after" width="832" height="1216" data-role="after" loading="lazy"><figcaption>Caption for masked area; cocktail drink umbrella</figcaption></div>

Example ComfyUI Flux Fill Inpainting workflow;

![](/wp-content/uploads/2024/08/inpainting_workflow-1024x580.webp)

[Flux Inpainting v2](/wp-content/uploads/2024/08/Flux-Inpainting-v2.zip)

Example ComfyUI Flux Fill Outpainting workflow;

![](/wp-content/uploads/2024/08/outpainting_workflow-1024x588.webp)

[Flux Outpainting v2](/wp-content/uploads/2024/08/Flux-Outpainting-v2.zip)

## Flux.1 Redux {#flux-1-redux}

Flux Redux acts like an IP Adapter – transferring image details from one image to another. To get started, you’ll need [Comfy-Org’s sigclip\_visi](https://huggingface.co/Comfy-Org/sigclip_vision_384/blob/main/sigclip_vision_patch14_384.safetensors)[on\_3](https://huggingface.co/Comfy-Org/sigclip_vision_384/blob/main/sigclip_vision_patch14_384.safetensors)[84 model](https://huggingface.co/Comfy-Org/sigclip_vision_384/blob/main/sigclip_vision_patch14_384.safetensors), which must be placed in the **ComfyUI/models/clip\_vision** folder, and also the [flux1-redux-dev.safetensors](https://civitai.com/models/970124/flux-tools-redux) file, to be placed in the ComfyUI/models/style\_models folder.

Redux is excellent at creating image variations, and can be chained to combine details of multiple input images.

<div class="columns va-center">

<div class="column">

<figure><img src="/wp-content/uploads/2024/08/ComfyUI_04452_-1-701x1024.webp" alt="" width="701" height="1024" loading="lazy"><figcaption><em>Original image</em></figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2024/08/ComfyUI_04458_-701x1024.webp" alt="" width="701" height="1024" loading="lazy"><figcaption><em>Flux Redux variation</em></figcaption></figure>

</div>

</div>

Example ComfyUI Flux Redux workflow;

![](/wp-content/uploads/2024/08/redux_workflow-1024x896.webp)

[Flux Redux Basic Workflow](/wp-content/uploads/2024/08/Flux-Redux-Basic-Workflow.zip)

## Flux Depth & Canny “ControlNet” Models {#flux-depth-canny-controlnet-models}

Flux Tools includes two “ControlNet” like models, [Canny](https://civitai.com/models/970548?modelVersionId=1086737) and Depth. Place them in the **ComfyUI/models/diffusion\_models/** folder.

**Canny** looks for edges in an input image, allowing the style of the image to be changed while retaining the overall structure.

<div class="columns va-center">

<div class="column">

<figure><img src="/wp-content/uploads/2024/08/ComfyUI_04370_-701x1024.webp" alt="" width="701" height="1024" loading="lazy"><figcaption><em>Original Image</em></figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2024/08/ComfyUI_temp_fgqpb_00003_-701x1024.webp" alt="" width="701" height="1024" loading="lazy"><figcaption><em>Canny Mask</em></figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2024/08/FluxCanny_00005_-701x1024.webp" alt="" width="701" height="1024" loading="lazy"><figcaption><em>Output Image</em></figcaption></figure>

</div>

</div>

![](/wp-content/uploads/2024/08/canny_workflow-1024x443.webp)

[Flux Canny Basic Workflow](/wp-content/uploads/2024/08/Flux-Canny-Basic-Workflow.zip)

<div class="columns va-center">

<div class="column">

<figure><img src="/wp-content/uploads/2024/08/ComfyUI_04370_-1-701x1024.webp" alt="" width="701" height="1024" loading="lazy"><figcaption><em>Original Image</em></figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2024/08/ComfyUI_temp_fgqpb_00002_.png" alt="" width="512" height="748" loading="lazy"><figcaption><em>MiDAS Depth mask</em></figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2024/08/FluxCanny_00004_.png" alt="" width="512" height="744" loading="lazy"><figcaption><em>Output Image</em></figcaption></figure>

</div>

</div>

![](/wp-content/uploads/2024/08/workflow-1-1024x443.webp)

[Flux Depth Basic Workflow](/wp-content/uploads/2024/08/Flux-Depth-Basic-Workflow.zip)

## Flux.1 Kontext {#flux-1-kontext}

In mid 2025 Black Forest Labs released Flux.1 Kontext, a state-of-the-art multimodal model allowing edits to images using both text prompts and image inputs, making it possible to perform precise, context-aware modifications without losing the fidelity of the input image.

There are three Flux Kontext models – two of which can be used on Civitai’s Generator, and one which can be used locally;

-   **FLUX.1 Kontext \[pro\]** – A pioneer for fast, iterative image editing. A single model that delivers local editing, generative in-context modifications and classic text-to-image generation in signature FLUX.1 quality. FLUX.1 Kontext \[pro\] handles both text and reference images as inputs, seamlessly enabling targeted, local edits in specific image regions and complex transformations of entire scenes. Operating up to an order of magnitude faster than previous state-of-the art models, FLUX.1 Kontext \[pro\] is a pioneer for iterative editing, since it’s the first model that allows users to build upon previous edits through multiple turns, while maintaining characters, identities, styles, and distinctive features consistent across different scenes and viewpoints.

-   **FLUX.1 Kontext \[max\]** – Maximum Performance at High Speed. Our new experimental model greatly improves prompt adherence and typography generation, and high consistency for editing. All these without compromise on speed. 

-   **FLUX.1 Kontext \[dev\]** – A 12B parameter open-source version, suitable for local research usage.

<figure><img src="/wp-content/uploads/2024/08/teaser-1024x732.webp" alt="" width="1024" height="732" loading="lazy"><figcaption><em>Flux Kontext usage examples</em></figcaption></figure>

### Using Flux.1 Kontext on Civitai {#any-other-details}

<div class="columns">

<div class="column">

Navigate to the [Flux.1 Kontext](https://civitai.com/models/1672021) [Civitai m](https://civitai.com/models/1672021)[odel](https://civitai.com/models/1672021), or find it in the Model Swap/Picker.

Flux.1 Kontext has two modes, both powered by the Black Forest Labs API – **Pro** and **Max**, corresponding to the Pro and Max models (details above).

Note that you will need to provide a starting image before generating!

Use natural language in the Prompt box, to describe changes you’d like to see made to your input image, such as;

</div>

<div class="column">

![](/wp-content/uploads/2024/08/Screenshot-2025-07-30-191001.webp)

</div>

</div>

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2024/08/ComfyUI_00168_-683x1024.webp" alt="" width="683" height="1024" loading="lazy"><figcaption><em>Original/input image</em></figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2024/08/306276a3-f964-4fed-afca-977034327eb3-0-683x1024.webp" alt="" width="683" height="1024" loading="lazy"><figcaption><em>Variation 1 – “Give the subject a dark green tartan plaid dress”</em></figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2024/08/a05f0ac9-a398-46a3-861c-ef7b7870e950-0-683x1024.webp" alt="" width="683" height="1024" loading="lazy"><figcaption><em>Variation 2 – “Change the woman’s dress into a white swimsuit, change the background to a tropical beach scene</em></figcaption></figure>

</div>

</div>

## Flux.1 Krea \[Dev\] {#flux-1-krea-dev}

Details to follow!

## Any Other Details? {#any-other-details-2}

-   This guide is a living document and will evolve over time. Everything Flux-related is advancing at an incredible pace, with today’s pertinent details potentially being outdated by tomorrow. For the most up-to-date information and guidance from our Community experts, be sure to join the [Civitai Discord server](https://discord.gg/civitai)!
