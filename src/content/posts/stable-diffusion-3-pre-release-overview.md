---
title: "Stable Diffusion 3 Pre-Release Overview"
slug: "stable-diffusion-3-pre-release-overview"
date: "2024-06-06T03:24:34Z"
modified: "2025-01-22T00:38:18Z"
categories:
  - "sd3"
tags:
  - "guide"
  - "sd3"
  - "stable-diffusion-3"
author: "civitai"
wpId: 4337
excerpt: "Stable Diffusion 3 is a groundbreaking new text-to-image model from Stability AI."
image: "/wp-content/uploads/2024/06/sd3_pre-1.webp"
seo:
  title: "Stable Diffusion 3 Pre-Release Overview - Civitai Education"
  description: "Stable Diffusion 3 is a groundbreaking new text-to-image model from Stability AI, releasing June 12th for local generation."
  ogImage: "/wp-content/uploads/2024/06/sd3_pre-1.webp"
  canonical: "https://education.civitai.com/stable-diffusion-3-pre-release-overview/"
deprecated:
  date: "2026-10-26"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 6/5/2024 | First Version |

?? Spot any juicy SD3 info I’ve missed? Shoot me an email – **ally @ civitai.com**! ??

### What is Stable Diffusion 3?

Stable Diffusion 3 (SD3) is an eagerly anticipated text-to-image model set to be released by Stability AI. This next evolution in their model line follows the groundbreaking SDXL, which was launched around the same time last year.

The excitement for SD3 has been building, and we’ve gathered all the available information from various sources into one comprehensive guide for you. While there are still many details we don’t know, we’re thrilled to share what we do know about this upcoming release.

<div class="columns">

<div class="column">

<div data-embed="tweet" data-src="https://twitter.com/StabilityAI/status/1797691844278780312?ref_src=twsrc%5Etfw"><blockquote data-width="550" data-dnt="true"><p lang="en" dir="ltr">Watch the full announcement on the Stable Diffusion 3 Medium weight release at <a href="https://twitter.com/computex_taipei?ref_src=twsrc%5Etfw">@computex_taipei</a> by our Co-CEO, <a href="https://twitter.com/chrlaf?ref_src=twsrc%5Etfw">@chrlaf</a>: <a href="https://t.co/lcVl0tEr8M">https://t.co/lcVl0tEr8M</a> ? <a href="https://t.co/IoHXwZPYhE">https://t.co/IoHXwZPYhE</a></p>— Stability AI (@StabilityAI) <a href="https://twitter.com/StabilityAI/status/1797691844278780312?ref_src=twsrc%5Etfw">June 3, 2024</a></blockquote></div>

</div>

<div class="column">

The official release date for SD3 is **June 12th**, a date announced by Stability AI Co-CEO, Christian Laforte, at the Computex Taipei conference.

</div>

</div>

So what do we know about SD3? Here’s some information from Stability’s [SD3 Research Paper](https://arxiv.org/pdf/2403.03206);

-   It, allegedly, outperforms both DALL·E 3 and Midjourney v6 in typography and prompt adherence, based on human preference evaluations.

-   It uses a new Multimodal Diffusion Transformer (MMDiT) architecture.

-   In early testing, the 8B Parameter model (_not the one coming June 12th_), could fit on a **24 GB RTX 4090**, and would take **34 seconds** to generate a **1024×1024 image**, at **50 steps.**

-   Much emphasis has been placed upon the text/typographical capabilities of the model, with SD3 slated to use “_three different text embedders – two CLIP models and T5 – to encode text representations_.” \[Per [SD3 Research Paper announcement](https://stability.ai/news/stable-diffusion-3-research-paper)\]

-   SD3 employs a Rectified Flow (RF) formulation, based on a number of research papers (Arxiv Links: [1](https://arxiv.org/abs/2209.03003), [2](https://arxiv.org/abs/2209.15571), [3](https://arxiv.org/abs/2210.02747)), which “_…results in straighter inference paths, which then allow sampling with fewer steps._” \[Per [SD3 Research Paper announcement](https://stability.ai/news/stable-diffusion-3-research-paper)\]

### What does all that mean for image generation?

We know that the model being released on the 12th will be the **Medium weights – a 2 Billion Parameter model**. This has caused some consternation in the community, with various complaints, allegations, and memes, regarding the relatively small parameter size.

In comparison, SDXL was a “larger” model, leading some in the community to fear that SD3 will be inferior. However, a Stability AI staff member, via [Re](https://www.reddit.com/r/StableDiffusion/comments/1d6t0gc/comment/l6ws2on/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)[d](https://www.reddit.com/r/StableDiffusion/comments/1d6t0gc/comment/l6ws2on/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)[dit](https://www.reddit.com/r/StableDiffusion/comments/1d6t0gc/comment/l6ws2on/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button), has this response;

“_**SDXL has 2.6b unet, and it’s not using MMDiT. Not comparable at all. It’s like comparing 2kg of dirt and 1.9kg of gold. Not to mention the 3 text encoders, adding up to ~15b params alone. And the 16ch vae.**_”

Note that SDXL has a **4ch vae**. Stability have been emphasizing the significance of the 16 channel vae for a few months now ([Source](https://www.reddit.com/r/StableDiffusion/comments/1baad9z/comment/ku22oxx/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)).

Other key information;

<div class="columns">

<div class="column">

It has a native output of **1 MP**.

**832 x 1152**, in the demo picture, generated with the Medium 2B weights.

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2024/06/2b-native-res-796x1024.webp" alt="" width="796" height="1024" loading="lazy"><figcaption>Via <a href="https://x.com/Lykon4072/status/1797703714180051130">Lyk</a><a href="https://x.com/Lykon4072/status/1797703714180051130" target="_blank" rel="noreferrer noopener">o</a><a href="https://x.com/Lykon4072/status/1797703714180051130">n</a>, X</figcaption></figure>

</div>

</div>

-   **Rectified Flow Transformers**:
    SD3 introduces rectified flow transformers, which use a new generative model formulation that connects data and noise in a straight line. This model is theoretically simpler and has better performance compared to traditional diffusion models. \[Per [SD3 Research Paper announcement](https://stability.ai/news/stable-diffusion-3-research-paper)\]

-   **Improved Noise Sampling**:
    The paper discusses enhancements in noise sampling techniques, which are biased towards perceptually relevant scales. This results in better image quality and more efficient training. \[Per [SD3 Research Paper announcement](https://stability.ai/news/stable-diffusion-3-research-paper)\]

2B Model sample images, generated at native resolution, single generation (no upscale, or further tweaks). [Source](https://x.com/Lykon4072/status/1796317998036238380).

![](/wp-content/uploads/2024/06/2b_1-796x1024.jpg)

![](/wp-content/uploads/2024/06/2b_6-1024x585.webp)

![](/wp-content/uploads/2024/06/2b_5-1024x585.webp)

![](/wp-content/uploads/2024/06/2b_4-796x1024.webp)

![](/wp-content/uploads/2024/06/2b_3-796x1024.webp)

![](/wp-content/uploads/2024/06/2b_2-796x1024.webp)

### Where do we get it?

You don’t (yet!) – the model weights will be released some time on **June 12th**, and will be available for download from [Civitai.com](https://www.civitai.com) shortly thereafter. Keep an eye out!

### How do we use it NOW!?

A version of SD3 is currently available for inference on the [Stabilit](https://platform.stability.ai/docs/api-reference#tag/Generate/paths/~1v2beta~1stable-image~1generate~1sd3/post)[y A](https://platform.stability.ai/docs/api-reference#tag/Generate/paths/~1v2beta~1stable-image~1generate~1sd3/post)[PI](https://platform.stability.ai/docs/api-reference#tag/Generate/paths/~1v2beta~1stable-image~1generate~1sd3/post), along with a **Stable Diffusion 3 Turbo** version.

?? We do know that **the model running on the API is _not the same model_ which will be released on June 12th!**

### Hardware Requirements

GPU requirements for local inference haven’t been officially communicated, but we know the following, from Stability AI employees, via X;

-   “**6GB (VRAM) can probably run this easily with TEs on CPU. 11GB all in GPU with offloading.**” [Sour](https://x.com/Lykon4072/status/1797914410088042675)[c](https://x.com/Lykon4072/status/1797914410088042675)[e](https://x.com/Lykon4072/status/1797914410088042675)

### License Considerations

**SD3 will be released with a non-commercial use license only.** Inference/Generation services wishing to host SD3 on their platforms must contact Stability to discuss Enterprise licensing options.

### Local Interfaces for SD3

At time of writing, the favored interface for all Stability releases is [ComfyUI](https://github.com/comfyanonymous/ComfyUI). We’ve seen confirmation from Stability staff, via Reddit, that ComfyUI and Stable Swarm, along with anything powered by Diffusers, **will have day 1 support**.

It’s also indicated that Auto1111 development team are discussing the changes required in their private channels. [Source](https://www.reddit.com/r/StableDiffusion/comments/1d83m9r/comment/l743cf1/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button).

## Training SD3

We haven’t seen much talk from Stability regarding training against SD3, however, we do know that to; “**… expect SD3-Medium training requirements to be similar and slightly lower than SDXL.**” [S](https://www.reddit.com/r/StableDiffusion/comments/1d6t0gc/comment/l6vhkkq/)[o](https://www.reddit.com/r/StableDiffusion/comments/1d6t0gc/comment/l6vhkkq/)[urce](https://www.reddit.com/r/StableDiffusion/comments/1d6t0gc/comment/l6vhkkq/).

We also know, from the SD3 announcement email, that the model is “**Capable of absorbing nuanced details from small datasets, making it perfect for customization and creativity.**“

## Any Other Details?

-   A Stability AI employee announced, via [Reddit](https://www.reddit.com/r/StableDiffusion/comments/1d0wlct/comment/l5q56zl/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button), that they _**will be**_ releasing the other SD3 model versions – for free – as they’re finished training, including **Small** (1B parameter), **Large** (4B parameter), and **Huge** (8B Parameter) versions.
