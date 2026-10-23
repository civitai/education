---
title: "Civitai’s Prompt-Crafting Guide: Part 2 – Intermediate"
slug: "civitais-prompt-crafting-guide-part-2-intermediate"
date: "2023-10-27T06:41:54Z"
modified: "2024-08-22T01:22:09Z"
categories:
  - "prompting"
tags:
  - "generative-ai"
  - "guide"
  - "prompt"
  - "prompt-engineering"
  - "prompting"
author: "civitai"
wpId: 2631
excerpt: "Level up your prompting for SD with our Beginner to Advanced Guide! Part 2 covers Intermediate techniques, token weighting and emphasis."
image: "/wp-content/uploads/2023/10/output_00259_.png"
seo:
  title: "Civitai's Prompt-Crafting Guide: Part 2 - Intermediate - Civitai Education"
  description: "In this Prompt-Crafting Guide we're discussing an advanced technique that's essential for any Prompter: adding emphasis."
  ogImage: "/wp-content/uploads/2023/10/output_00259_.png"
  canonical: "https://education.civitai.com/civitais-prompt-crafting-guide-part-2-intermediate/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 10/26/2023 | First version published |

## Intermediate Techniques {#intermediate-techniques-1}

In **Part 1** of our Prompt-Crafting Guide ([http://education.civitai.com/civitais-prompt-crafting-guide-part-1-basics](/civitais-prompt-crafting-guide-part-1-basics)) we discussed the very _**essential elements**_ of a Prompt; the constituent parts, how to structure an effective prompt, and some fundamental knowledge to getting started crafting the perfect scene.

In this guide we’re discussing a slightly more advanced technique that’s essential for any Prompter: adding **emphasis**, also known as **Attention**, to specific tokens in your prompt. By doing this, we can effectively **_highlight_** or **_downplay_** certain elements, giving us control over the final image that gets generated.

Understanding how to use emphasis effectively can drastically improve the precision and impact of our artworks.

## Token Weighting & Emphasis {#token-weighting-emphasis}

Depending on the platform or interface you’re using to create art, the way we implement emphasis can differ. However, if you’re working with **Automatic1111**‘s **Web UI** or using [Civitai.com](http://Civitai.com)‘s On-Site Generator – as well as many other similar interfaces – the syntax is standard.

### Emphasis {#emphasis-1}

To increase a model’s attention to specific tokens, you can use parenthesis **`( )`**. Alternatively, if you want to reduce a model’s attention to a certain token, you can use square brackets **`[ ]`**. This syntax was the original method of emphasis, and is still used (and effective!) in most of the Stable Diffusion interfaces.

The more parenthesis we add to our token, the more attention is given. We can include parenthesis, and square brackets, up to four times **`(((( ))))`**, **`[[[[ ]]]]`**

The following table explains exactly how much each set of parentheses or square brackets increases (or reduces) attention;

| Emphasis Syntax | Effect |
| --- | --- |
| a (token) | Increases attention to the wrapped token by a factor of 1.1 |
| a ((token)) | Increases attention to the wrapped token by a factor of 1.21 (1.1 \* 1.1…) |
| a \[token\] | Decreases attention of the wrapped token by a factor of 1.1 |
| a \[\[token\]\] | Decreases attention of the wrapped token by a factor of 1.21 (-1.1 \* -1.1…) |
| a \\(token\\) | Escapes the parenthesis characters to allow **`( )`** in our prompts, **_without applying emphasis._** |

#### Examples of Emphasis in Prompts

The following (extreme!) example shows how much we can vary an image by adding emphasis. The token `**stars**` is shown de-emphasizing the prevalence of stars in the first image, and significantly boosting the quantity and prevalence of stars, both in the background and foreground.

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/10/stars_before-819x1024.webp" alt="" width="819" height="1024" loading="lazy"><figcaption>…statement sunglasses, in a park, sky, trees, moonlight, <strong><code>[stars]</code></strong>, vivid colors…</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/10/01167-920741122-819x1024.webp" alt="" width="819" height="1024" loading="lazy"><figcaption>…statement sunglasses, in a park, sky, trees, moonlight, <strong><code>((((stars))))</code></strong>, vivid colors…</figcaption></figure>

</div>

</div>

#### Token Weighting

**Token Weighting** works on exactly the same principle as the parenthesis emphasis syntax, but is a later addition to Stable Diffusion interfaces, and is far more common to see in prompts, having become the de-facto standard.

A token is **weighted** with the syntax **`(token:n.n)`**, _n_ being the desired factor of attention. Generally, when weighting tokens, we stay within the **`(token:0.5)`** to **`(token:1.6)`** range, as higher and lower values may produce unexpected results in our images!

Finding the “_correct_” Weight for a particular image requires trial and error, but it largely boils down to personal preference for particular features in the image.

The following table shows the syntax and the effect upon the token;

| Emphasis Syntax | Effect |
| --- | --- |
| token | If a weight is not specified, a token is assumed to be 1.0 strength |
| (token:1.5) | Increases attention to the wrapped token by a factor of 1.5 |
| (token:0.25) | Decreases attention to the wrapped token by a factor of 4 (1/ 0.25) |

#### Examples of Token Weighting in Prompts

The following examples show the progression from a very low weight **`(moonlight:0.3)`** to an extremely high weight **`(moonlight:1.7)`**, with the effect it has on our image output being immediately apparent;

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/10/01169-3537987699-819x1024.webp" alt="" width="819" height="1024" loading="lazy"><figcaption>…statement sunglasses, in a park, sky, trees, <strong><code>(moonlight:0.3)</code></strong>, stars, vivid colors…</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/10/01170-3537987699-819x1024.webp" alt="" width="819" height="1024" loading="lazy"><figcaption>…statement sunglasses, in a park, sky, trees, <strong><code>(moonlight:1.7)</code></strong>, stars, vivid colors…</figcaption></figure>

</div>

</div>

### Token Weighting for LoRA

You’ll often see Weights wrapping LoRA names in prompt, as Weighting is a fantastic way of adjusting the **strength** of a LoRA in our images. Often, LoRA are very “strong” and can overpower our prompt, or produce visual artifacts and undesirable details. To combat this, it’s common practice to reduce the strength of a LoRA to between **`0.6`** and **`0.8`**.

This will vary from LoRA to LoRA, so testing and experimentation is required!

The example below shows the effect of a high powered LoRA, vs a slightly down-weighted LoRA , which produces a much more coherent and natural result.

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/10/01174-3115332920-819x1024.webp" alt="" width="819" height="1024" loading="lazy"><figcaption>…&lt;lora:FaeTastic2:<strong><code>1.2</code></strong>&gt;…</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/10/01173-2043391231-819x1024.webp" alt="" width="819" height="1024" loading="lazy"><figcaption>…&lt;lora:FaeTastic2:<strong><code>0.8</code></strong>&gt;…</figcaption></figure>

</div>

</div>

## Tips & Tricks {#tips-tricks}

-   It’s best not to combine the two methods of weighting! It’s confusing to read, and they may conflict!

-   In many interfaces, selecting a word and using the **`CTRL + UP ARROW`**, or **`DOWN ARROW`**, will automatically increase the Weight of the selected word by `**0.1**`.

-   Specifying Weight _only works_ with **`( )`**. You _cannot_ use the syntax **`[token:n.n]`**

## Conclusion

In this guide we’ve looked at an essential aspect of prompting, but there are many, many, advanced prompting techniques, syntax, tips and tricks, which we’ll cover in the final prompt-crafting guide!
