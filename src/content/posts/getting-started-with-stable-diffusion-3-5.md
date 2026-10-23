---
title: "Getting Started with Stable Diffusion 3.5"
slug: "getting-started-with-stable-diffusion-3-5"
date: "2024-10-22T19:25:50Z"
modified: "2025-07-30T20:28:29Z"
categories:
  - "quickstart-guides"
  - "sd3"
tags:
  - "civitai"
  - "sd3-5"
author: "civitai"
wpId: 5529
excerpt: "Civitai’s Guide to getting started with Stability AI’s new SD 3.5 suite of models."
image: "/wp-content/uploads/2024/10/sd35_square.webp"
seo:
  title: "Getting Started with Stable Diffusion 3.5 - Civitai Education"
  description: "Civitai's Guide to getting started with Stability AI's new SD 3.5 suite of models; Stable Diffusion Large, Large Turbo, and Medium."
  ogImage: "/wp-content/uploads/2024/10/sd35_square.webp"
  canonical: "https://education.civitai.com/getting-started-with-stable-diffusion-3-5/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 10/22/2024 | First Version |
| 10/28/2024 | Generator and File Update |
| 7/30/2025 | Stability AI AUP Update |

## Stability AI AUP Update {#what-is-stable-diffusion-3}

Effective July 31, 2025, Stable Diffusion creator Stability AI has updated its [Acceptable Use Policy](https://stability.ai/use-policy), introducing new restrictions on how their [Core Models](https://stability.ai/core-models) can be used – including a prohibition on the generation of sexually explicit content.

Due to this change, we’ve had to remove **SD 3.5** and derivative models from the Civitai Generator and put in place content restrictions for **R+** rated content made with these models. For more information, see [our statement](https://civitai.com/articles/17499).

## SD 3.5?

Stable Diffusion 3 is back! After the lacklustre, [m](https://civitai.com/models/512461/sd3-experience-girl-lying-on-grass)[uch](https://civitai.com/models/512461/sd3-experience-girl-lying-on-grass) [derided](https://civitai.com/models/512461/sd3-experience-girl-lying-on-grass), launch of Stable Diffusion 3, Stability have made sweeping architecture and training changes to their latest line of models, the 3.5 suite, now released under an updated, more permissive [Community License](https://stability.ai/community-license-agreement), with enhancements to image fidelity, prompt adherence & controllability, and text rendering.

<figure><img src="/wp-content/uploads/2024/10/diverse_sd3.5-1024x334.webp" alt="" width="1024" height="334" loading="lazy"><figcaption><em>SD 3.5 Large output examples, from Stability AI</em></figcaption></figure>

Civitai generated test images (prompts borrowed from community uploads), using SD 3.5 Large;

<div data-embed="gallery"><img src="/wp-content/uploads/2024/10/ComfyUI_temp_jkzon_00004_.png" alt="" data-orig-file="/wp-content/uploads/2024/10/ComfyUI_temp_jkzon_00004_.png" width="1024" height="1024" loading="lazy"><img src="/wp-content/uploads/2024/10/ComfyUI_temp_jkzon_00014_-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/10/ComfyUI_temp_jkzon_00014_.png" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/10/ComfyUI_temp_jkzon_00012_-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/10/ComfyUI_temp_jkzon_00012_.png" width="832" height="1216" loading="lazy"><img src="/wp-content/uploads/2024/10/ComfyUI_temp_jkzon_00001_.png" alt="" data-orig-file="/wp-content/uploads/2024/10/ComfyUI_temp_jkzon_00001_.png" width="1024" height="1024" loading="lazy"><img src="/wp-content/uploads/2024/10/ComfyUI_temp_jkzon_00007_-701x1024.webp" alt="" data-orig-file="/wp-content/uploads/2024/10/ComfyUI_temp_jkzon_00007_.png" width="832" height="1216" loading="lazy"></div>

## What’s New? {#what-s-new}

Stability AI describe the SD3.5 models as excelling in the following areas;

-   **Customizability:** Easily fine-tune the model to meet your specific creative needs, or build applications based on customized workflows.

-   **Efficient Performance:** Optimized to run on standard consumer hardware without heavy demands, especially the **Stable Diffusion 3.5 Medium** and **Stable Diffusion 3.5 Large Turbo** models.

-   **Diverse Outputs:** Creates images representative of the world, not just one type of person, with different skin tones and features, without the need for extensive prompting.

-   **Versatile Styles:** Capable of generating a wide range of styles and aesthetics like 3D, photography, painting, line art, and virtually any visual style imaginable.

And with the revised license terms, comes;

-   **Ownership of outputs:** Retain ownership of the media generated without restrictive licensing implications.

According to Stability AI’s own ELO scoring, the models lead the market in prompt adherence and rival much larger models in image quality – edging out Flux.1 Dev;

![](/wp-content/uploads/2024/10/chart1-1024x527.webp)

## Using on Civitai’s Image Generator {#using-on-civitai-s-image-generator}

SD 3.5 Large and Turbo are available for use on the [Image Generator](/using-civitai-the-on-site-image-generator/). Find them from the model search, or the **Create** buttons on the models;

-   [SD 3.5 Larg](https://civitai.com/models/878387/stable-diffusion-35-large)[e](https://civitai.com/models/878387/stable-diffusion-35-large)
-   [SD 3.5 Turbo](https://civitai.com/models/878645/stable-diffusion-35-large-turbo)

![](/wp-content/uploads/2024/10/Screenshot-2024-10-28-215013-1024x539.webp)

<div class="columns">

<div class="column" style="flex-basis:33.33%">

We’re still adjusting settings for the best quality images, and the pricing model – everything is so new that it’s all subject to change right now!

</div>

<div class="column" style="flex-basis:66.66%">

![](/wp-content/uploads/2024/10/Screenshot-2024-10-28-215120.webp)

</div>

</div>

## Weights / Downloads {#weights}

SD 3.5 comes in three flavors; **Large**, **Large Turbo**, and **Medium** weight, the latter of which will run on consumer hardware; GPUs with at least 12 GB of VRAM.

**At time of writing, there is support for ComfyUI only**.

**Stable Diffusion 3.5 Large**: 8 billion parameters, this base model is the most powerful in the Stable Diffusion family. This model is ideal for professional use cases at 1 megapixel resolution.

**Stable Diffusion 3.5 Large Turbo**: A distilled version of Stable Diffusion 3.5 Large generates high-quality images in just 4 steps, making it considerably faster than Stable Diffusion 3.5 Large.

**Stable Diffusion 3.5 Medium**: At 2.5 billion parameters, with improved MMDiT-X architecture and training methods, this model is designed to run “out of the box” on consumer hardware, striking a balance between quality and ease of customization. It is capable of generating images ranging between 0.25 and 2 megapixel resolution.

| Model | Download Link |
| --- | --- |
| Stable Diffusion 3.5 Large | [Civitai](https://civitai.com/models/878387) |
| Stable Diffusion 3.5 Large Turbo | [Civitai](https://civitai.com/models/878645/stable-diffusion-35-large-turbo) |
| Stable Diffusion 3.5 Medium | [Civitai](https://civitai.com/models/896953) |
| Comfy-Org Stable Diffusion Large 3.5 pf8 (with text encoders built in) | [Civitai](https://civitai.com/models/879259/comfyorg-stable-diffusion-35-large-fp8) / [HuggingFace](https://huggingface.co/Comfy-Org/stable-diffusion-3.5-fp8/blob/main/sd3.5_large_fp8_scaled.safetensors) |

To run SD3.5, the following Clip Text Encoders are also required;

| Model | Download Link |
| --- | --- |
| [OpenCLIP-ViT/G](https://github.com/mlfoundations/open_clip) | [Civitai](https://civitai.com/models/497255?modelVersionId=568378) / [HuggingFace](https://huggingface.co/stabilityai/stable-diffusion-3.5-large/blob/main/text_encoders/clip_g.safetensors) |
| [CLIP-ViT/L](https://github.com/openai/CLIP/tree/main) | [Civitai](https://civitai.com/models/497255?modelVersionId=568347) / [HuggingFace](https://huggingface.co/stabilityai/stable-diffusion-3.5-large/blob/main/text_encoders/clip_l.safetensors) |
| [T5-xxl](https://huggingface.co/google/t5-v1_1-xxl)\_fp16 | [Civitai](https://civitai.com/models/497255?modelVersionId=568485) / [HuggingFace](https://huggingface.co/stabilityai/stable-diffusion-3.5-large/blob/main/text_encoders/t5xxl_fp16.safetensors) |
| [T5-xxl](https://huggingface.co/google/t5-v1_1-xxl)\_fp8\_e4m3fn | [Civitai](https://civitai.com/models/497255?modelVersionId=568405) / [Hu](https://huggingface.co/stabilityai/stable-diffusion-3.5-large/blob/main/text_encoders/t5xxl_fp8_e4m3fn.safetensors)[ggingFace](https://huggingface.co/stabilityai/stable-diffusion-3.5-large/blob/main/text_encoders/t5xxl_fp8_e4m3fn.safetensors) |

To be placed within the **\\ComfyUI\\models\\clip** directory.

## Model Comparison

We’ve put together a quick and extremely unscientific comparison of **Large**, **Large Turbo**, **Medium**, and the closest competitor, **Flux Dev**. These images share the same prompts and settings (steps, cfg, and sampler adjusted for Large Turbo) and are _slightly_ cherry-picked – taking the best of 5 generations for each model;

<figure><img src="/wp-content/uploads/2024/10/3-1024x374.webp" alt="" width="1024" height="374" loading="lazy"><figcaption>Example 1</figcaption></figure>

<figure><img src="/wp-content/uploads/2024/10/2-1024x374.webp" alt="" width="1024" height="374" loading="lazy"><figcaption>Example 2</figcaption></figure>

<figure><img src="/wp-content/uploads/2024/10/1-1024x374.webp" alt="" width="1024" height="374" loading="lazy"><figcaption>Example 3</figcaption></figure>

## Workflows

We’ve provided a couple of simple ComfyUI text2img workflows, based upon the official Stability AI SD 3.5 workflows, edited for clarity and ease of use;

<figure><img src="/wp-content/uploads/2024/10/workflow_example-1024x439.webp" alt="" width="1024" height="439" loading="lazy"><figcaption>SD 3.5 Medium, Basic Workflow</figcaption></figure>

[SD3.5\_Medium Civitai\_Workflow](/wp-content/uploads/2024/10/SD35_medium_workflow.zip)

<figure><img src="/wp-content/uploads/2024/10/workflow_image_civitai-1024x439.webp" alt="" width="1024" height="439" loading="lazy"><figcaption><em>SD 3.5 Large, Basic Workflow</em></figcaption></figure>

[SD3.5\_Civitai\_Workflow](/wp-content/uploads/2024/10/SD3.5_Civitai_Workflow.zip)

<figure><img src="/wp-content/uploads/2024/10/turbo_workflow_image_civitai-1024x439.webp" alt="" width="1024" height="439" loading="lazy"><figcaption><em>SD 3.5 Large Turbo, Basic Workflow</em></figcaption></figure>

[SD3.5L\_Turbo\_example\_workflow](/wp-content/uploads/2024/10/SD3.5L_Turbo_example_workflow.zip)

## License Considerations

Stable Diffusion 3.5 is released under the [Stability AI Community License](https://stability.ai/community-license-agreement); Free for research, non-commercial, _and_ commercial use for organizations or individuals with less than $1M in total annual revenue. More details can be found in the [Stability AI Community License Agreement](https://stability.ai/community-license-agreement).


Individuals and organizations with an annual revenue above $1M must contact Stability to obtain an Enterprise License.

## Other Details

-   We’ve read that the context length (prompt length) has a maximum of 256 tokens, half of the context length of Flux. How this will affect prompting remains to be seen.

-   There’s a [Stability finetuning guide](https://stabilityai.notion.site/Stable-Diffusion-3-5-Large-Fine-tuning-Tutorial-11a61cdcd1968027a15bdbd7c40be8c6), and Kohya support for SD 3.5 Large. No Medium support yet!

-   There’s a [cut-down fp8 Text](https://huggingface.co/Comfy-Org/stable-diffusion-3.5-fp8/blob/main/text_encoders/t5xxl_fp8_e4m3fn_scaled.safetensors) [Enc](https://huggingface.co/Comfy-Org/stable-diffusion-3.5-fp8/blob/main/text_encoders/t5xxl_fp8_e4m3fn_scaled.safetensors)[oder from Comfy-Org](https://huggingface.co/Comfy-Org/stable-diffusion-3.5-fp8/blob/main/text_encoders/t5xxl_fp8_e4m3fn_scaled.safetensors), designed for lower VRAM platforms.

-   The models have some NSFW capability – much more so than SD3, or Flux!

-   LoRAs created with SD 3.5 Large _**do not currently work with SD 3.5 Medium weights**_. This might be a limitation of ComfyUI – we’re not sure!

## I need more help!

If you have a question about SD3.5 don’t hesitate to reach out to one of our Community Managers or contact **support@civitai.com**
