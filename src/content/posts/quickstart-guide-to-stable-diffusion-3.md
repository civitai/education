---
title: "Quickstart Guide to Stable Diffusion 3"
slug: "quickstart-guide-to-stable-diffusion-3"
date: "2024-06-12T16:12:19Z"
modified: "2025-07-30T20:29:27Z"
categories:
  - "quickstart-guides"
  - "sd3"
tags:
  - "guide"
  - "sd3"
  - "stable-diffusion-3"
author: "civitai"
wpId: 4422
excerpt: "Stable Diffusion 3 is a groundbreaking new text-to-image model from Stability AI."
image: "https://education.civitai.com/wp-content/uploads/2024/06/sd3_quick.png"
seo:
  title: "Quickstart Guide to Stable Diffusion 3 - Civitai Education"
  description: "Stable Diffusion 3 is a text-to-image model released by Stability AI in June of 2024 offering unparallelled image fidelity!"
  ogImage: "https://education.civitai.com/wp-content/uploads/2024/06/sd3_quick.png"
  canonical: "https://education.civitai.com/quickstart-guide-to-stable-diffusion-3/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 6/12/2024 | First Version |
| 6/17/2024 | Licensing Update |
| 7/30/2025 | Stability AI AUP Update |

## Stability AI AUP Update {#what-is-stable-diffusion-3}

Effective July 31, 2025, Stable Diffusion creator Stability AI has updated its [Acceptable Use Policy](https://stability.ai/use-policy), introducing new restrictions on how their [Core Models](https://stability.ai/core-models) can be used – including a prohibition on the generation of sexually explicit content.

Due to this change, we’ve had to remove **SD 3** and derivative models from the Civitai Generator and put in place content restrictions for **R+** rated content made with these models. For more information, see [our statement](https://civitai.com/articles/17499).

## Civitai Stable Diffusion 3 Ban – Updated! 7/22/2024 {#civitai-stable-diffusion-3-ban-updated-7-22-2024}

We’ve rescinded the Civitai SD3 Ban. For more details, [please read our announcement, here](https://civitai.com/articles/6221).

~~Please be aware, we’ve enacted a **temporary Stable Diffusion 3 (SD3) resource ban on Civitai.com** while we seek clarification from Stability AI and our legal team on the terms of the SD3 License. New SD3 based resources **will not be accepted at this time**, and existing resources have been temporarily Archived.~~

## What is Stable Diffusion 3? {#what-is-stable-diffusion-3-2}

Stable Diffusion 3 (SD3) is a text-to-image model, released by Stability AI on **June 12th, 2024**. This next evolution in their model line follows the groundbreaking SDXL, which was launched around the same time last year.

You can read our [Pre-Release Overview here](/stable-diffusion-3-pre-release-overview/).

<figure><img src="http://education.civitai.com//wp-content/uploads/2024/06/mmdit-1024x701.png" alt="" width="1024" height="701" loading="lazy"><figcaption><em>SD3 Architecture</em></figcaption></figure>

For more technical details, please refer to the [Research paper](https://stability.ai/news/stable-diffusion-3-research-paper).

## Where do I get it?

You can [downl](https://civitai.com/models/497255)[oa](https://civitai.com/models/497255)[d](https://civitai.com/models/497255) all the SD3 safetensors, Text Encoders, and example ComfyUI workflows from Civitai, [here](https://civitai.com/models/497255).

-   [SD3 Medium](https://civitai.com/models/497255?modelVersionId=552771) (4.2 GB)
-   [SD3 Medium Incl Clips](https://civitai.com/models/497255?modelVersionId=568278) (5.8 GB)
-   [SD3 Medium Incl Clips T5XXLFP8](https://civitai.com/models/497255?modelVersionId=568392) (10.6 GB)

-   [Text Encoder Clip L](https://civitai.com/models/497255?modelVersionId=568347) (234 MB)
-   [Text Encoder Clip G](https://civitai.com/models/497255?modelVersionId=568378) (1.3 GB)
-   [Text Encoder t5xxl\_fp8\_e4m3fn](https://civitai.com/models/497255?modelVersionId=568405) (4.7 GB)
-   [Text Encoder t5xxl\_fp16](https://civitai.com/models/497255?modelVersionId=568485) (9.5 GB)

## What do I download? IMPORTANT! READ ME!

[ComfyUI](https://github.com/comfyanonymous/ComfyUI) has full SD3 support! Make sure to update to the most recent version!

~~At time of writing (10:00am EST 6/12/2024), [Automatic1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui/) _did not_ have support for SD3. We expect support to follow within the next week.~~

Update 7/22/2024 – _Limited_ support available for SD3 on Automatic1111 WebUI [dev b](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases)[ranc](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases)[h](https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases).

There are two SD3 checkpoints which contain text encoders: **SD3 Medium Incl Clips** and **SD3 Medium Incl Clips\_t5xxlfp8**

These models can be used like any regular checkpoint in ComfyUI.

-   `**sd3_medium.safetensors**` includes the MMDiT and VAE weights but _**does not include**_ any text encoders. You’ll have to download those separately – see below.

-   `**sd3_medium_incl_clips_t5xxlfp8.safetensors**` contains all necessary weights, including fp8 version of the T5XXL text encoder, offering a balance between quality and resource requirements.

-   `**sd3_medium_incl_clips.safetensors**` includes all necessary weights **_except for_** the T5XXL text encoder. It requires minimal resources, but the model’s performance will differ without the T5XXL text encoder.

Make sure to put either **sd3\_medium\_incl\_clips.safetensors** or **sd3\_medium\_incl\_clips\_t5xxlfp8.safetensors** in your **ComfyUI/models/checkpoints** directory.

The [SD3 Medium](https://huggingface.co/stabilityai/stable-diffusion-3-medium/tree/main) base file **does not contain text encoder/CLIP weights so you must load them separately to use that file**.

Download the **text encoder** weights from Civitai and put them in your **ComfyUI/models/clip/** directory. sd3\_medium.safetensors should be put in your **ComfyUI/models/checkpoints/** directory.

## How do I make images?

You can download pre-made ComfyUI workflows [here](https://civitai.com/models/497255?modelVersionId=568256);

<div class="columns">

<div class="column">

<figure><a href="https://civitai.com/models/497255?modelVersionId=568256"><img src="http://education.civitai.com//wp-content/uploads/2024/06/workflow_simple-1024x313.png" alt="" width="1024" height="313" loading="lazy"></a><figcaption><em>Simple txt2img Workflow</em></figcaption></figure>

</div>

<div class="column">

<figure><a href="https://civitai.com/models/497255?modelVersionId=568256"><img src="http://education.civitai.com//wp-content/uploads/2024/06/workflow_multi-1024x352.png" alt="" width="1024" height="352" loading="lazy"></a><figcaption><em>Multi-Prompt Workflow</em></figcaption></figure>

</div>

</div>

## License Considerations

**SD3** has license considerations! It Stable Diffusion 3 Medium is released under the [Stability AI Non-Commercial Research Community License](https://huggingface.co/stabilityai/stable-diffusion-3-medium/blob/main/LICENSE.md).

The model is free to use for non-commercial purposes such as academic research.

This model **is not available for commercial use without a separate commercial license from Stability**. Please visit [https://stability.ai/license](https://stability.ai/license) to learn more.

## Training SD3

We haven’t seen much talk from Stability regarding training against SD3, however, we do know that to; “**… expect SD3-Medium training requirements to be similar and slightly lower than SDXL.**” [S](https://www.reddit.com/r/StableDiffusion/comments/1d6t0gc/comment/l6vhkkq/)[o](https://www.reddit.com/r/StableDiffusion/comments/1d6t0gc/comment/l6vhkkq/)[urce](https://www.reddit.com/r/StableDiffusion/comments/1d6t0gc/comment/l6vhkkq/).

We also know, from the SD3 announcement email, that the model is “**Capable of absorbing nuanced details from small datasets, making it perfect for customization and creativity.**“

## Any Other Details?

-   A Stability AI employee announced, via [Reddit](https://www.reddit.com/r/StableDiffusion/comments/1d0wlct/comment/l5q56zl/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button), that they _**will be**_ releasing the other SD3 model versions – for free – as they’re finished training, including **Small** (1B parameter), **Large** (4B parameter), and **Huge** (8B Parameter) versions.
