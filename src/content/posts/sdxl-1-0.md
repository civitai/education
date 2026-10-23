---
title: "SDXL 1.0 Overview"
slug: "sdxl-1-0"
date: "2023-07-27T16:56:02Z"
modified: "2025-01-23T23:09:54Z"
categories:
  - "sdxl"
tags:
  - "guide"
  - "sdxl1-0"
author: "civitai"
wpId: 187
excerpt: "SDXL 1.0 is a groundbreaking new text-to-image model from Stability AI."
image: "/wp-content/uploads/2023/07/Splash_final_crop.webp"
seo:
  title: "SDXL 1.0 Overview: A Remarkable Leap for Generative AI Imagery"
  description: "Learn more about SDXL 1.0, a model transforming text-to-image synthesis with unprecedented resolution, depth, and quality."
  ogImage: "/wp-content/uploads/2023/07/Splash_final_crop-1024x576.webp"
  canonical: "https://education.civitai.com/sdxl-1-0/"
---

| Last Update | Version | Changes |
| --- | --- | --- |
| 7/7/2023 | 1.0 | First version! This document will be kept up to date with SDXL developments! |
| 8/1/2023 | 1.2 | Automatic1111 Refiner Extension |
| 8/3/2023 | 1.2 | Training SDXL |

### What is SDXL 1.0? {#what-is-sdxl-1-0}

SDXL 1.0 is a groundbreaking new text-to-image model, released on July 26th. A precursor model, SDXL 0.9, was available to a limited number of testers for a few months before SDXL 1.0’s release.

Technologically, SDXL 1.0 is a leap forward from SD 1.5 or 2.x, boasting a parameter count (the sum of all the weights and biases in the neural network that the model is trained on) of 3.5 billion for the base model and a 6.6 billion for the second stage refiner. In contrast, SD 1.4 has just ~890 million parameters. Further information about the inner workings of SDXL can be found on Stability AI’s SDXL research paper here;

[SDXL: Improving Latent Diffusion Models for High-Resolution Image Synthesis](https://arxiv.org/abs/2307.01952)

Aside from **~3x more training parameters** than previous SD models, SDXL runs on _**two**_ CLIP models, including the largest OpenCLIP model trained to-date (OpenCLIP ViT-G/14), and has a _**far higher**_ native resolution of **1024×1024**, in contrast to SD 1.4/5’s **512×512**, allowing for greatly improved fidelity and depth.

Unlike previous SD models, SDXL uses a _**two-stage**_ image creation process. The base model generates the initial latent image (txt2img), before passing the output and the same prompt through a refiner model (essentially an img2img workflow), upscaling, and adding fine detail to the generated output.

![](/wp-content/uploads/2023/07/1-1024x360.webp)

### What does all that mean for image generation?

<div class="columns">

<div class="column">

The most immediately apparent difference between SDXL and previous SD models is the range and depth of output in photorealistic images.

In short; **quality**, **depth**, **lighting**, **flexibility**, and **fidelity**.

</div>

</div>

It also performs exceptionally well when creating images with complex lighting.

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/07/ComfyUI_00145_-1024x796.webp)

</div>

<div class="column">

![](/wp-content/uploads/2023/07/ComfyUI_00163_-1024x796.webp)

</div>

</div>

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/07/ComfyUI_00153_-1024x796.webp)

</div>

<div class="column">

![](/wp-content/uploads/2023/07/ComfyUI_00160_-1024x796.webp)

</div>

</div>

It’s _**extremely**_ flexible in style, and prompts are followed with _**much**_ greater accuracy and coherency than previous SD iterations.

True-black shadows are achievable, as the model has in-built [**noise-offset**](https://civitai.com/models/10391/noise-offset-for-true-darkness-in-sd).

### Where do we get it?

The base model, refiner, and vae are all hosted on **[Civitai.com](http://civitai.com/)**

**Best Versions**

-   [SDXL 1.0 Base Model (With Baked 0.9 VAE)](https://civitai.com/models/101055?modelVersionId=128078) ?
-   [SDXL 1.0 Refiner Model (With Baked 0.9 VAE)](https://civitai.com/models/101055?modelVersionId=128080) ?

**Original Versions with Bad 1.0 VAE**

-   [SDXL 1.0 Base Model](https://civitai.com/models/101055) (With Baked V1.0 VAE)
-   [SDXL 1.0 Refiner](https://civitai.com/models/101055?modelVersionId=126613)
-   [SDXL 1.0 VAE (0.9 VAE)](https://civitai.com/api/download/models/126613?type=VAE) – See below

### How do we use it?

The model is available for inference on **[ClipDrop](https://clipdrop.co/stable-diffusion)**, **[DreamStudio](https://dreamstudio.ai/)**, and **[NightCafe](https://nightcafe.studio/)**, but can also be used locally with the following interfaces;

-   [ComfyUI](https://github.com/comfyanonymous/ComfyUI) – See below. Also available on [Colab](https://github.com/camenduru/sdxl-colab).
-   [Automatic1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) – At time of writing (8/17), A1111 _**has**_ SDXL support, but the VRAM and RAM requirements are extremely high. In testing, a 1024×1024 image used **~11.4 GB** of VRAM.

-   ? If running WebUI with **<10 GB VRAM** it’s recommended to use the startup arguments **–medvram** or **–lowvram – image generation will be slow!**

-   [Vladmandic Fork](https://github.com/vladmandic/automatic) – Vlad’s fork of SDXL has full base and refiner model support, and doesn’t seem to suffer from the high VRAM requirements of A1111.
-   [InvokeAI](https://github.com/invoke-ai/InvokeAI) – InvokeAI’s 3.0 release has full SDXL support.
-   [StableSwarmUI](https://github.com/Stability-AI/StableSwarmUI/) – A new UI from Stability AI, with native SDXL support and distributed computing architecture components, allowing multi-gpu inference. Also available on [Colab](https://colab.research.google.com/github/Stability-AI/StableSwarmUI/blob/master/colab/colab-notebook.ipynb).

### Hardware Requirements

The official Stability requirements for local inference (generating images) are **16 GB of system RAM**, and an **RTX 20XX GPU** with a **_minimum_ of 8GB of VRAM**. Linux users may also use a compatible AMD card with 16 GB of VRAM.

Training requirements are a little harder to pin down, but we have [confirmation from Stability](https://www.reddit.com/r/StableDiffusion/comments/14jck90/finetuning_sdxl_on_an_rtx_2070_consumer_tier_gpu/) that LoRA can be trained on an **R****TX 2070 with 8GB of VRAM**. With an **input resolution of 768x, training used 7.1 GB of VRAM and took ~30 minutes****.**

Note: Despite Stability’s findings on training requirements, I have been unable to train on **< 10 GB of VRAM**.

Training at full **1024x resolution used 7.8 GB of VRAM and 2000 steps took approximately 1 hour**.

### Local Interfaces for SDXL

At time of writing, the favored interface for SDXL inference is [ComfyUI](https://github.com/comfyanonymous/ComfyUI). The author of ComfyUI is now a **Stability** employee, and as such, ComfyUI has been _recommended as the UI of choice_. It’s fast, modular, and extremely flexible, but can be daunting for first-time users.

#### Automatic1111 WebUI + Refiner Extension {#automatic1111-webui-refiner-extension}

Automatic1111’s support for **SDXL** and the Refiner model is quite rudimentary at present, and until now required that the models be manually switched to perform the second step of image generation.

[WCDE](https://github.com/wcde) has released a simple extension to automatically run the final steps of image generation on the Refiner model, removing the need to switch models or perform an img2img!

![](/wp-content/uploads/2023/08/image-1-1024x148.webp)

?? [https://github.com/wcde/sd-webui-refiner](https://github.com/wcde/sd-webui-refiner)

Unfortunately, VRAM requirements for this operation are still extremely high, and the recommendation is to use **use Tiled VAE if you have 12GB or less VRAM.**

#### Comfy UI Quick Start – Windows {#comfy-ui-quick-start-windows}

[https://github.com/comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI)

-   Download the [ComfyUI zip](https://github.com/comfyanonymous/ComfyUI) and extract into a folder on your local PC. If you have Git for windows installed (the best method), you can pull the repository down with;

<div class="columns">

<div class="column">

```
git clone https://github.com/comfyanonymous/ComfyUI
```

</div>

<div class="column">

![](/wp-content/uploads/2023/07/2-1024x318.webp)

</div>

</div>

-   Create a venv, activate, and install requirements.txt

<div class="columns">

<div class="column">

```
python -m venv venv

<your path>/ComfyUI/venv/Scripts/Activate.bat (or .ps1, if using powershell)

pip install -r requirements.txt
```

</div>

<div class="column">

![](/wp-content/uploads/2023/07/3-1024x114.webp)

</div>

</div>

-   Run main.py to launch the interface.

Starting ComfyUI is a bit of a pain – but we can create **.bat** files to make 1-click launchers (thanks for Civitai user QuantumScribble for the idea!)

These files will automatically activate the venv, and start ComfyUI. If no venv is detected, it will create one, and install from requirements.txt.

Place these in your root ComfyUI folder.

The xformers bat will launch ComfyUI with **xformers** activated.

[start-xformers](/wp-content/uploads/2023/07/start-xformers.zip)

But since we’re all using Torch 2.0, you can also run ComfyUI with **Pytorch sdp-cross-attention** activated, which may boost your iterations per second (image generation speed)

[start-sdp-cross-attention](/wp-content/uploads/2023/07/start-sdp-cross-attention.zip)

Note – if you get the common Torch not compiled with CUDA enabled error, follow these directions;

> ![](/wp-content/uploads/2023/07/4-1024x118.webp)
>
> -   Ensure (venv) is still activated – if not, enable it by running the Venv Activate script again.
> -   Run pip uninstall torch
> -   Run pip install torch torchvision torchaudio –extra-index-url https://download.pytorch.org/whl/cu118 xformers
> -   Re-launch the interface with python main.py

-   Model files, SDXL or otherwise, should be placed within the ComfyUI/models/checkpoints folder. VAE files within the ComfyUI/models/vae folder.

-   Generating images with ComfyUI for SDXL is a little tricky!

> A number of Official and Semi-Official “Workflows” for ComfyUI were released during the SDXL 0.9 testing phase. These still work for SDXL 1.0, but **Stability AI’s Joe Penna** released a new “Official” ComfyUI workflow which is easy to follow, contains a lot of tips and usage information, and most importantly, produces beautiful results!
>
> [Official\_Stability\_ComfyUI\_Workflow 7-23](/wp-content/uploads/2023/07/Official_Stability_ComfyUI_Workflow-7-23.zip)

<figure><img src="/wp-content/uploads/2023/07/sdxl1.0-1-1024x733.webp" alt="" width="1024" height="733" loading="lazy"><figcaption>SDXL 1.0 Flow</figcaption></figure>

### SDXL 0.9/1.0 VAE {#sdxl-0-9-1-0-vae}

Immediately after 1.0’s July 26th release it was apparent that Stability had changed the model somewhat from the 0.9 version, and images now had quite significant “rainbow” artifacts.

![](/wp-content/uploads/2023/07/badness-1024x546.webp)

It was quickly established that the new **SDXL 1.0 VAE** was the culprit. There has been no official word on _**why**_ the SDXL 1.0 VAE produces these artifacts, but we do know that by removing the baked in SDXL 1.0 VAE and replacing it with the SDXL **0.9** VAE, the images are much clearer/sharper.

<div data-embed="image-compare" data-mode="horizontal"><img src="/wp-content/uploads/2023/07/badvae.webp" alt="before" width="1960" height="840" data-role="before" loading="lazy"><img src="/wp-content/uploads/2023/07/goodvae.webp" alt="after" width="1960" height="840" data-role="after" loading="lazy"></div>

### Prompting for SDXL 1.0 {#prompting-for-sdxl-1-0}

One of the most significant challenges facing users who are used to prompting SD 1.5 is that of prompt composition. Many users using SDXL for the first time are shocked at how “**terrible**” it is. This is because _**it doesn’t respond well to certain tokens**_ we’ve become accustomed to over the past few months. Danbooru tags, and long comma, separated, strings, highly detailed, masterpiece, award winning photo, intricate, (heavily weighted:1.6) style prompts are **out**!

**Short, snappy, Midjourney-style prompts are in**! The SDXL 1.0 base model is _**phenomenally**_ good at interpreting and understanding what we want in our prompts, and gets wonderful results from **extremely simple prompts**.

> Before everyone goes wild and start throwing things, yes, _there are good 1.5 prompts which work well when copied over to SDXL_, but more often than not you’ll have _far greater_ success re-writing, or reformatting, prompts for SDXL.

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/07/00543-1634788662-666x1024.webp)

</div>

<div class="column">

An original prompt running on an SD 1.5 based model

`beautiful woman in a white dress blowing in the wind, walking on a stormy beach, dark clouds, (cowboy shot:1.4), realistic, masterpiece, highest quality, backlighting, (lens flare:1.1), (bloom:1.1), (chromatic aberration:1.1), by Jeremy Lipking, by Antonio J. Manzanedo, digital painting`

</div>

</div>

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/07/ComfyUI_00184_-1-1-796x1024.webp)

</div>

<div class="column">

The same prompt in SDXL. Note that “**cowboy shot**” has been taken quite literally – one example of the differences in interpretation between 1.5 and SDXL.

</div>

</div>

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/07/ComfyUI_00189_-1-796x1024.webp)

</div>

<div class="column">

A refined SDXL prompt;

a `beautiful woman in a white dress, blowing in the wind, walking on a stormy beach, dark clouds, cinematic`

</div>

</div>

#### Some Tips

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/07/9-910x1024.webp" alt="" width="910" height="1024" loading="lazy"><figcaption>Experiment with hashtags – #photography, mood setting hashtags #evil, #sinister, #whimsical</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/07/10-910x1024.webp" alt="" width="910" height="1024" loading="lazy"><figcaption>Experiment with emojis – ??</figcaption></figure>

</div>

</div>

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/07/11-910x1024.webp" alt="" width="910" height="1024" loading="lazy"><figcaption>Less can be more! <code>ultra detailed 8k cg, japanese ramen, chopsticks, egg, steam, food photography, shallow depth of field, realism</code></figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/07/12-910x1024.webp" alt="" width="910" height="1024" loading="lazy"><figcaption>Try extremely simple, no modifier prompts! <code>a set of magical potions with magical properties that can be used to heal someone</code></figcaption></figure>

</div>

</div>

Stability AI’s Joe Penna tip: _Don’t_ use negative prompts for SDXL unless there’s something appearing in your image you don’t wish to see – and even then – give it a low (strength:0.4) to start with, working higher until it is removed.

## Training SDXL

Training LoRA for SDXL 1.0 is generally more forgiving than training 1.5 based LoRA, and good results are quite easy to obtain, however the hardware requirements to do so are a _**lot**_ higher than we were hoping! Read our **Training Overview** for more information on how to get started Training against SDXL!
