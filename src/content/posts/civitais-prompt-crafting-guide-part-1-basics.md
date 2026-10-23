---
title: "Civitai’s Prompt-Crafting Guide: Part 1 – Basics"
slug: "civitais-prompt-crafting-guide-part-1-basics"
date: "2023-10-13T23:03:11Z"
modified: "2025-03-14T18:50:18Z"
categories:
  - "beginner-guides"
  - "prompting"
tags:
  - "generative-ai"
  - "guide"
  - "prompt"
  - "prompt-engineering"
  - "prompting"
author: "civitai"
wpId: 2456
excerpt: "Level up your prompting for SD with our Beginner to Advanced Guide! Part 1 covers the theory and basic knowledge required to craft good prompts!"
image: "/wp-content/uploads/2023/10/LTXV_00087.webp"
seo:
  title: "Civitai's Prompt-Crafting Guide: Part 1 - Basics - Civitai Education"
  description: "Learn how to leverage Generative AI to create fascinating image, text, audio, and & video with Civitai's comprehensive prompt-crafting guide!"
  ogImage: "/wp-content/uploads/2023/10/LTXV_00087.webp"
  canonical: "https://education.civitai.com/civitais-prompt-crafting-guide-part-1-basics/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 10/8/2023 | First version published |
| 3/13/2025 | Best Practices Update! |

## Update: The Importance of Good Prompting Principles

Since this guide was first published, Civitans have generated and shared millions of images on Civitai.com. With the ability to **Remix** others’ images using their prompts, the site has also seen a rise in **“bad prompts”** – prompts with incorrect syntax or those designed for specific ecosystems (such as _Pony Diffusion’s_ `score_9`, `score_8_up` tags) being misused in models that don’t require them.

**_If you’re getting poor (or downright terrible!) results from Remixing or your own handwritten prompts, this guide will help! Follow these [Good Prompting Principles](#help-my-generation-outputs-are-terrible) to improve your outputs and get the best possible results._**

<div class="columns">

<div class="column">

An example of an image result from a malformatted prompt, which includes inconsistent [weighting,](/civitais-prompt-crafting-guide-part-2-intermediate/) [em](/civitais-prompt-crafting-guide-part-2-intermediate/)[phasis](/civitais-prompt-crafting-guide-part-2-intermediate/) without matching opening or closing parenthesis, redundant words, spelling mistakes, and tokens which can’t be interpreted by the Prompt Parser. Problematic concepts are highlighted;

score\_9, score\_8\_up, score\_7\_up, score\_6\_up, cinematic film still of **\\u003Clora:Cinematic art Conan the Barbarian illustrious v1:1\\u003E** Cinematic art style Drawing female In Ancient Hyborian Age a comic book page with a woman, perfect image, **\[**perfect body, perfect **anatimy**, 1boy, seasoned female warrior, tall, long-limbed, golden-brown skin, (battle scars), athletic, narrow hips, lean muscles, very long hair, black hair, tangled hair, **((**detailed eyes, green eyes**))))**, breasts, long gaunt face, high prominent cheekbones, high quality image, dirty, **scratchs**, (whipped**:1.9**), (grimdark**:2.5**), dirt, grimdark atmosphere.**\\n\\n**(dynamic pose, sexy pose, expressive body language:1.2), (seductive pose, posing for the shot, seductive, action style, cowboy shot:1.2)**\\n\\n**(simple background**,**

</div>

<div class="column">

![](/wp-content/uploads/2023/10/KSXDQXB2NV3XWQHX0XE2AHV550-706x1024.webp)

</div>

</div>

## What is a Prompt?

With the rise of Generative AI, a fascinating and transformative development has emerged: the ability to generate images, music, text, and even video from simple instructions known as “**prompts**“. These prompts act as a guide for AI systems, providing a framework of what is expected to be produced as an output. This beginner-to-advanced Prompt-Crafting guide will walk you through the steps required to take your from never-having-prompted, to Prompt Master!

Imagine whispering a concept into an artist’s ear and waiting for their imagination to run wild, except the artist, in this case, is an AI model, and the whisper is our written prompt.

Prompting is a two-way interaction between the user and the AI system. We offer the system an idea, a phrase, or a sentence, and in return, the AI paints us a digital picture, crafts a piece of text, or composes a melody. This level of engagement brings about an intriguing blend of precision and unpredictability.

We’re already seeing new career paths for particularly skilled “prompters” – the role of the Prompt Engineer. A Prompt Engineer is akin to a translator, or guide, helping bridge the gap between **human intention** and **AI interpretation**. By understanding how AI processes language and imagery, Prompt Engineers are able to craft prompts that effectively steer the AI’s generative abilities towards the desired outcome.

While the concept of **prompting** in Generative AI might seem straightforward at first glance, there’s a common misconception that prompt engineering is easy. On a basic level, _anyone_ can input a sentence and generate an output. However, this is merely the tip of the iceberg. There’s prompting, and then there’s the art and science of effective prompting; it’s a little like playing an instrument – one might be able to play the first three chords of Stairway to Heaven, but to play with the same flair, nuance, and precision as guitarist Jimmy Page is another thing entirely. Likewise, simply creating a prompt doesn’t make one an expert at harnessing the full potential of Generative AI.

While the basics of prompting can be grasped easily, the mastery of prompt engineering takes substantial knowledge, practice, and an intimate understanding of the AI’s inner workings.

## What makes a _good_ prompt?

Firstly, it’s important to understand that prompts must be tailored to the platform. AI models have different specializations, and this significantly influences how they interpret and respond to instruction. A text-to-image (**txt2img**) system like **Stable Diffusion** and a text-based model like **ChatGPT**, each have unique underlying architectures, biases, trained knowledge bases, and their own “dialects” to which they respond; our prompts must be entered in the “language” the AI system understands best.

A crucial thing to remember about the art of prompting is that there’s a significant element of personal preference involved. It’s a bit like cooking: every chef has their own unique style, their preferred techniques, and their special ingredients. When discussing prompting with other prompters, you’ll find that some people swear by one method, structuring their prompts in a certain way, while others will favor an entirely different approach. And that’s perfectly okay!

This guide isn’t intended to impose hard-and-fast rules or declare a definitive “best way” to prompt AI systems. Instead, think of it as a starter kit – a collection of useful tools, insights, and tips to help you start your journey in prompt engineering.

The aim is to equip you with a basic understanding and a set of strategies that you can tweak, modify, and refine according to your preferences. Remember, prompting is as much an art (AI detractors will refute this!) as it is a science, and the beauty of art lies in its diversity and personal expression.

## Stable Diffusion

This guide will initially focus on prompting for Stable Diffusion (**txt2img**), as that’s what we’re known for here at Civitai, but will evolve over time to include strategies for other Generative AI technologies.

## Keep in Mind!

One of the most important things to keep in mind while prompting for Stable Diffusion is that while the general **structure** and **syntax** often remain much the same across models, specific _**tokens**_ will produce a wide variety of results – what works well for one model won’t necessarily work well for another!

Additionally, prompting for SD 1.5 is very different to prompting for models using the SDXL architecture, or the Flux architecture. There is overlap, and often an SD 1.5 prompt will work well with an SDXL model, or a Flux model, but perhaps not _quite as well_ as a prompt specifically tailored to the framework.

## Basic Prompting – The Essentials {#basic-prompting-the-essentials}

As mentioned above, there are _many_ ways to prompt, and none of them are “_wrong_“\*, so long as we’re happy with the output, but by giving structure to our prompts we can maintain consistency, and foster good “prompting habits” to help keep our prompts easily readable.

The following sections outline the fundamental knowledge required to start prompting effectively!

\* **_Some model ecosystems have their own prompt syntax (Pony, Flux) which must be used to obtain good outputs._**

### The Positive Prompt – Basic Prompt Elements {#the-positive-prompt-basic-prompt-elements}

The Positive Prompt, most often just referred to as “**the prompt**“, contains all the details of what we want to see in our images (the **subject**), it also defines the **medium**, **style, composition** and **color & lighting** of the image.

Note that there’s absolutely _no requirement_ to include _all_ of these elements in _every_ prompt. Some prompts might only have a **subject** and **medium**, some might not even have a **subject**! It is entirely up to you!

#### The Subject

The **subject** is the focal-point of our image – the main object we want to depict.

<div class="columns">

<div class="column">

![Civitai Prompt Example Image](/wp-content/uploads/2023/10/00612-3009849316-819x1024.webp)

</div>

<div class="column">

Subject description: **1girl, woman, petite**

</div>

</div>

#### Medium

The **medium** refers to the materials or tools an artist uses to create their work. It can include things like **oil paint**, **watercolors**, **charcoal**, **pencil**, etc. We can direct Stable Diffusion to reproduce a particular medium by specifying it in our prompt. Many models are created to reproduce a specific **medium**, and may not need additional prompting to achieve the desired effect.

<div class="columns">

<div class="column">

![Civitai Prompt Example Image](/wp-content/uploads/2023/10/00614-1812854249-819x1024.webp)

</div>

<div class="column">

Medium: **watercolor painting**

</div>

</div>

#### Style

**Style** defines the artistic style of our image. Examples of style include **impressionism**, **realism**, **pop-art**, **surrealism**, etc. Similarly to the Medium, many models produce a specific **style** and may not require additional tokens to produce the desired **style** effect.

<div class="columns">

<div class="column">

![Civitai Prompt Example Image](/wp-content/uploads/2023/10/00619-3747245534-819x1024.webp)

</div>

<div class="column">

Style: **impressionist background**

</div>

</div>

#### Composition

**Composition** describes how the various elements of the image are arranged within the artwork to create a pleasing result. This may include tokens to control the **balance** and **symmetry** of items within the scene, the **framing** of the image, **scale** and **proportion**, and other artistic concepts to make our images exactly as we imagine they should look.

<div class="columns">

<div class="column">

![Civitai Prompt Example Image](/wp-content/uploads/2023/10/00030-462140481-819x1024.webp)

</div>

<div class="column">

Composition: **from above**

</div>

</div>

#### Color & Lighting {#color-lighting}

We have full control over both color and lighting in our images. This can include the **color** of particular items in our scene, or the **overall hue**.

Similarly, **lighting** plays a huge part in any artwork, and we can control many aspects of it, including shadows and overall brightness and vibrancy.

<div class="columns">

<div class="column">

![Civitai Prompt Example Image](/wp-content/uploads/2023/10/00621-4215824835-819x1024.webp)

</div>

<div class="column">

Color: **rainbow hue**

</div>

</div>

<div class="columns">

<div class="column">

![Civitai Prompt Example Image](/wp-content/uploads/2023/10/00623-1155870332-819x1024.webp)

</div>

<div class="column">

Lighting: **bright**

</div>

</div>

## The Positive Prompt – Basic Syntax & Structure {#the-positive-prompt-basic-syntax-structure}

As mentioned previously, it’s good practice to apply a somewhat standardized syntax and structure when prompting, and as we start writing our own prompts we discover what works well for us, and how we prefer to lay-out our prompts.

The following is one example of how a prompt can be organized. Other than looking tidy and enhancing readability, **there are some practical reasons for prompting in this way**. The most important is due to the fact that keeping similar tokens grouped together increases the chances of them being included in the final output. For example, Stable Diffusion wouldn’t like to see “red hair” at the very start of a prompt, and “long nose” at the very end – it’s likely one of those would be skipped, but paired together in a “block” of tokens describing a subject will increase the chances both will be taken into account.

We’re going to break our prompt into sections;

### The First Section – Subject & Setting {#the-first-section-includes-embeddings-and-sets-up-the-setting-of-the-scene-xxxxxxxxxx}

The first few tokens describes the subject and their appearance; `1girl, woman, petite, pale skin, detailed face, bobcut hair, blue eyes, wearing yellow tank top, happy, laugh, statement sunglasses in a park, sky, trees, moonlight, stars`

### The Second Section – Color, Style and Lighting {#the-second-section-color-style-and-lighting}

In the second block of the prompt I’m defining the styles and modifiers related to color and lighting; `vivid colors, bokeh background, dramatic color, cartoon`

### The Third Section – Composition & Additional Modifiers {#the-third-section-composition-additional-modifiers}

The last section of this prompt of this prompt defines the composition, and adds a few extra words to help capture the desired atmosphere of the image; `from below, cinematic, whimsical`

The final prompt, and result;

<div class="columns">

<div class="column">

![Civitai Prompt Example Image](/wp-content/uploads/2023/10/00625-164544498-819x1024.webp)

</div>

<div class="column">

`1girl, woman, petite, pale skin, detailed face, bobcut hair, blue eyes, wearing yellow tank top, happy, laugh, statement sunglasses in a park, sky, trees, moonlight, stars`, `vivid colors, bokeh background, dramatic color, cartoon`, `from below, cinematic, whimsical`

</div>

</div>

## Negative Prompts

The **Negative prompt** allow us to control what we _don’t_ want to see in our images. Often, stating what we don’t want to see in the **Positive prompt** has the opposite effect! The solution is to utilize the dedicated **Negative Prompt** section, to remove undesired features from our images.

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/10/00615-2529674575-819x1024.webp" alt="Civitai Prompt Example Image" width="819" height="1024" loading="lazy"><figcaption>No negative prompt</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/10/00624-509685098-819x1024.webp" alt="Civitai Prompt Example Image" width="819" height="1024" loading="lazy"><figcaption>Negative prompt: <strong>smile, teeth, open mouth</strong></figcaption></figure>

</div>

</div>

Many prompts you’ll come across will have a “**common**” or “**universal**” negative – a set of objects, attributes, and concepts which are generally deemed to be undesirable in our images. One such negative might look like;

`low res, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, ugly`

## Words vs Tokens

Stable Diffusion doesn’t understand words in the sense that humans do. It relies on a “**tokenizer**” (for SD 1.5 [CLIP](https://huggingface.co/docs/transformers/model_doc/clip)) to convert our prompt words into “tokens” – numerical representations of words it has in its’ “dictionary” of vocabulary.

Many common words equate to a single token. Some longer and more complex words are broken down by the tokenizer into separate tokens, each with their own meaning. Many particularly obscure or unusual words might not be recognized at all, and will have odd effects when used in the prompt.

Let’s examine the following prompt;

|     | Outcome |
| --- | --- |
| Text prompt | a beautiful cat with long whiskers |
| Tokenized Split | \[a\] \[beautiful\] \[cat\] \[with\] \[long\] \[whis\] \[kers\] |
| Numeric Tokens | 7 tokens, 320, 1215, 2368, 593, 1538, 6024, 2880 |

The interesting point here is that the word **whiskers** had to be split into two **tokens** (6024, 2880) to be understood by Stable Diffusion. Having a word be split into multiple tokens isn’t necessarily a bad thing – Stable Diffusion still recognizes many multi-token words!

## Help! My Generation Outputs are Terrible!

If you’ve followed the best practices in this guide (and [Par](/civitais-prompt-crafting-guide-part-2-intermediate/)[t 2](/civitais-prompt-crafting-guide-part-2-intermediate/)), and are still getting terrible outputs, check your prompt for some of the following common mistakes;

| Potential Issue | Solution |
| --- | --- |
| Misspelled words | Check your prompt for misspelled words and typos which the Prompt Parser might not understand. |
| Unsupported characters, code, URLs (e.g. **\\n**, **+**, **</break>**, **https://www.civitai.com**) | Remove all non-standard characters, code, URLs, etc. |
| **Redundant** descriptive words, or **conflicting** descriptive words | Repeating the same keywords does not necessarily improve results and may lead to distortions. Additionally, using conflicting tokens – such as “realistic” and “anime-style” together – can confuse the model and produce inconsistent results. |
| Very high weights (e.g. **(apple:2.5)**), or many weighted words in the same prompt | Very high weight values, or many weighted values, can cause severe artifacting and incoherent outputs.**\*** |
| Inconsistent Emphasis use (e.g. **((apple))))**) or **\[\[\[apple** | Check that all parentheses and square-brackets are properly opened and closed. Do not mix this style of Emphasis with Weighted values. |
| Incorrect prompting style for the Model in use (e.g. Pony Syntax – _score\_9\_up, score\_8_, being used with Flux) | Make sure you’re using the correct prompting syntax for the Model ecosystem. SD1.5, Pony Diffusion, and Flux, all have distinct preferred methods of prompting. |
| Many LoRAs and Embeddings | While not always the case, many LoRAs and Embeddings can conflict in unforeseen ways. Try generating without any Additional Resources, then add them one-by-one. |
| Generator Advanced Mode! | If you’ve toggled Advanced Mode ON in the Generator Resource picker, be aware that you _may be able to combine Resources which don’t work well together_! Start small, add LoRAs one by one and test the outputs! |
| Low CFG Setting (e.g. < 3.5) | Not specifically Prompt related, but a very low CFG setting can produce terrible, almost blank, outputs! |

## Conclusion

In this guide we’ve explored the absolute basics of prompt creation, but there’s so much more to cover! In [Part 2](//civitais-prompt-crafting-guide-part-2-intermediate/), [we’ll look at prompt Weight & Emphasis](//civitais-prompt-crafting-guide-part-2-intermediate/), and in the final part we’ll examine a number of advanced topics!
