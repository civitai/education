---
title: "Start Making Generative AI Art – Civitai.com’s 100% Beginner’s Guide"
slug: "start-making-ai-art-with-civitai"
date: "2023-09-14T18:48:48Z"
modified: "2025-03-14T04:06:37Z"
categories:
  - "beginner-guides"
tags:
  - "beginner"
  - "generative-ai"
  - "guide"
author: "civitai"
wpId: 2171
excerpt: "What is “Generative AI”, and how does Stable Diffusion fit into it? How do I start making AI assisted Art? Learn how to get started with Civitai.com’s Beginner’s Guide!"
image: "/wp-content/uploads/2023/09/intro_anim.webp"
seo:
  title: "Start Making Generative AI Art - Civitai.com's 100% Beginner's Guide"
  description: "Start Making Generative AI Art art quickly and effectively with our concise beginner's guide, focusing on practical tools and techniques."
  ogImage: "/wp-content/uploads/2023/09/intro_anim.webp"
  canonical: "https://education.civitai.com/start-making-ai-art-with-civitai/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 9/15/2023 | First version published |
| 3/4/2024 | Updates! |
| 7/20/2024 | Huge Update! |
| 1/24/2025 | Content refresh |

## Generative AI, & Stable Diffusion {#generative-ai-stable-diffusion}

What is “Generative AI,” and how does Stable Diffusion fit into it? You might have heard the term Generative AI in the media – it’s huge right now; it’s on the news, it’s on the app-stores, Elon Musk is Tweeting about it – it’s beginning to pervade our lives! In this guide we’ll explore what Generative AI is, and how **_YOU_** can can start making Generative AI Art!

Generative AI refers to the use of machine learning algorithms to generate **new data** that is _similar_ to the data fed into it. This technology has been used in a variety of applications, including art, music, and text generation. The goal of generative AI is to allow machines to create something new and unique, rather than simply replicating existing data.

-   [Stable Diffusion](https://stability.ai/) is one example of generative AI that has gained popularity in the art world, allowing artists to create unique and complex art pieces by entering text “prompts”.

-   [Chat GPT](https://chat.openai.com/) is another example of generative AI – a **language model** that can generate human-like text. It is capable of completing sentences, paragraphs, and even entire articles, given a short prompt. This technology is being used in a variety of applications, including chatbots, content creation, and even computer programming. **I used it to write this paragraph in ~1 second.** It’s a great general-purpose tool. Similar tools include **Google’s Gemini**, and **Microsoft’s Copilot**.

-   [Git](https://github.com/features/copilot)[Hu](https://github.com/features/copilot)[b Copilot](https://github.com/features/copilot) is an example of a generative AI language model built for a specific purpose – to assist with programming and coding.

This guide will specifically cover generating image/art content with **Stable Diffusion**, but will touch on other Generative AI **art services**.

## The Background

In mid-2022, the art world was taken by storm with the launch of several AI-powered art services, including **Midjourney**, **Dall-E**, and **Stable Diffusion**. These services and tools utilize cutting-edge machine learning technology to create unique and innovative art that challenge traditional forms and blur the lines between human and machine creation.

The impact of AI art on the industry has already been _significant_. Many artists and enthusiasts are exploring the possibilities of this new medium, while many fear the repercussions for established artists’ careers.

<div class="columns">

<div class="column">

Many art portfolio websites have developed new policies that prohibit the display of AI-generated work.

Some websites require artists to disclose if their work was created using AI, and others have even implemented software that can detect and block AI-generated art.

Civitai.com entered the scene in November 2022 as a place for AI Creators to share their work and discover new resources.

</div>

<div class="column">

![No-to-AI Generated Images Logo](/wp-content/uploads/2023/09/notoai-971x1024.webp)

</div>

</div>

## The Companies

There are many big-players in the AI art world – here are a few names you’ll often see mentioned;

-   [Civitai.com](https://www.civitai.com) – Civitai – that’s us! Founded in November 2022, Civitai has rapidly become the most popular platform for sharing and discovering AI-generated art models and resources, but we’re more than that! We’re a social hub with a vibrant community of AI Creators!

-   [OpenAI](https://openai.com/) – A research laboratory with both for and non-profit subsidiaries, focusing on the development of AI, in an open and responsible manner. Founded by technology investors (including Peter Thiel and Elon Musk) in 2015, OpenAI has created some highly advanced generative AI models, such as GPT-3, and the recently announced GPT-4, which are highly regarded for their language processing and generation abilities.

-   [Stability AI](https://stability.ai/) **–** The brainchild of ex-CEO Emad Mostaque, Stability AI is focused on the creation of AI tools, models, and resources. Stability AI is behind the 2022 releases of the Stable Diffusion 1.4/1.5, Stable Diffusion 2.0, and Stable Diffusion 3.5 text-to-image models, and a number of other technologies.

-   [RunwayML](https://runwayml.com/) – One of the companies behind the original Stable Diffusion model, RunwayML now provide a platform for artists to use machine learning tools in intuitive ways without any coding experience.

-   [Black Forest Labs](https://blackforestlabs.ai/) (BFL) – Founded by former Stability AI engineers in August 2024, BFL shook up the AI art community with the release of their groundbreaking “Flux” suite of text-to-image models. Positioned as direct competitors to Stable Diffusion, these models quickly gained attention for their exceptional quality and fidelity, setting a new standard in the space. [Check out our Flux Quickstart Guide here!](/quickstart-guide-to-flux-1/)

## Controversies

There are already a number of lawsuits challenging various aspects of the technology. Microsoft, GitHub and OpenAI are currently facing a [class-action lawsuit](https://www.theverge.com/2023/1/28/23575919/microsoft-openai-github-dismiss-copilot-ai-copyright-lawsuit), while Midjourney and Stability AI are [facing a lawsuit](https://stablediffusionlitigation.com/) alleging they infringed upon the rights of artists in the creation of their products.

Whatever the outcome, Generative AI is here to stay.

## How Does Stable Diffusion Work?

That is an **_incredibly_** complex topic, and we’ll just touch on it very briefly here at a very very high level;

(Forward) Diffusion is the process of slowly adding random pixels (noise) to an image until it no longer resembles the original image, and is 100% noise – we’ve diffused, or diluted, the original image.

By _reversing_ that process, we can reproduce something _similar_ to the original image. There is obviously a _lot_ more going on in the process, but that’s the general idea; we input text, the “model” processes that text, generates it from the “diffused” image, and displays an appropriate output image.

Simple!

## How can _I_ make Start Making Generative AI Art? {#how-can-i-make-stable-diffusion-images}

There are a number of tools to generate AI art images, some more involved and complex to set up than others. The _easiest method_ is to use a web-based image generation service, where the code and hardware requirements are taken care of for you, but there’s often a fee involved.

Alternatively, if you have the required hardware (**_ideally_** an **NVIDIA** graphics card), you can create images locally, on your own PC, with no restriction, using Stable Diffusion, and a number of other models.

When we talk about Stable Diffusion, we’re talking about the underlying mathematical/neural network framework which actually generates the images. We need some way to interface with that framework in a user-friendly way – that’s where the following tools come in;

### I don’t have a PC or a Graphics Card (GPU)! How can _I_ make AI Generated Art!? {#i-don-t-have-a-pc-or-a-graphics-card-gpu-how-can-i-make-ai-generated-art}

Don’t panic! [Civitai.com](https://www.civitai.com) has one of the [best on-site Image Generator](https://civitai.com/generate) services around, with access to many advanced features found in the most popular local interfaces.

Check out some of our user-generated images, made on-site at [Civitai.com](https://www.civitai.com)!

![Start Making Generative AI Art with Civitai! This image was made using Civitai's on-site Image Generator](/wp-content/uploads/2023/09/C74273FA020FC790FCCFD27111900F6ACF6EDCB9610EB5EC3B1F8165CB7A0A64-701x1024.webp)

![Start Making Generative AI Art with Civitai! This image was made using Civitai's on-site Image Generator](/wp-content/uploads/2023/09/A3CE92431BCB25784E23FD3F193038A7E6348ABE5B580C5F918A45BFDF222549-701x1024.webp)

![Start Making Generative AI Art with Civitai! This image was made using Civitai's on-site Image Generator](/wp-content/uploads/2023/09/23A0FB2A01E317435B7230A636151C162866EEB32ABD98040799169E1E764A01-701x1024.webp)

![Start Making Generative AI Art with Civitai! This image was made using Civitai's on-site Image Generator](/wp-content/uploads/2023/09/4D5527A9A7CEFA894E75A9ADE3C1647891566F422653ABB00E7FAC4EAE3A5D8F-701x1024.webp)

![Start Making Generative AI Art with Civitai! This image was made using Civitai's on-site Image Generator](/wp-content/uploads/2023/09/EBD5C9DFA9910E5B700D5717FBD05ADC8A4D6CB609E53066BE25AF1CB63EF978-701x1024.webp)

![Start Making Generative AI Art with Civitai! This image was made using Civitai's on-site Image Generator](/wp-content/uploads/2023/09/93E5880A0D2DAD0FB366DA6FBB82D7E77ECABB63E4217828CAAFAF116162CCA7-701x1024.webp)

![Start Making Generative AI Art with Civitai! This image was made using Civitai's on-site Image Generator](/wp-content/uploads/2023/09/54A11F4D391760BCDD16371EDCDA771B0CDA0AE90A9F342DCAF2EBDCCA210F90-701x1024.webp)

![Start Making Generative AI Art with Civitai! This image was made using Civitai's on-site Image Generator](/wp-content/uploads/2023/09/DF46E14D96F277CC3613340A631EF229B81301AFAB65C44F188A9053E42882AB-701x1024.webp)

![Start Making Generative AI Art with Civitai! This image was made using Civitai's on-site Image Generator](/wp-content/uploads/2023/09/36FK65VV7NSW4CVGX0NE47B780-701x1024.webp)

Unlike all the other web-based services out there, we have direct access to the largest repository of Models and additional resources with which to build your images. Getting started with the Civitai Generator is extremely simple, [we have a detailed guide to walk you through the process](/using-civitai-the-on-site-image-generator/), and a [Discord Community](https://discord.gg/civitai) of almost 100,000 AI art enthusiasts, eager to share their image prompting knowledge, tips and tricks!

<figure><img src="/wp-content/uploads/2023/09/Screenshot-2024-07-20-002957-1024x479.webp" alt="An example of the Civitai Image Generator in use! You too can start making Generative AI art just like this with the Civitai Generator!" width="1024" height="479" loading="lazy"><figcaption><em>An example of the <a href="https://civitai.com/generate">Civitai Image Generator</a> in use</em></figcaption></figure>

### To run on your own PC – Local Interfaces {#to-run-on-your-own-pc-local-interfaces}

This guide is _extremely high level_ and won’t get into the deep technical aspects of installing (or using) any of these applications, but if you’d like to run **Stable Diffusion** (or one of the number of competing image generation technologies) _on your own PC_ (a local install) there are many options!

Note that **_to get the most out_** of any local installation of Stable Diffusion **you need an NVIDIA graphics card**.

Images _can_ be generated using your computer’s CPU alone, or on some AMD graphics cards, but the time it will take to generate a single image will be **_considerable_**.

-   [Automatic1111’s WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) **(Complexity factor 4/5)** – WebUI is the most commonly used Interface for Stable Diffusion. It is moderately complex, and has a wide range of plugins and extensions to extend the experience. There’s a great deal of community support available if you have problems.

-   [ComfyUI](https://github.com/comfyanonymous/ComfyUI) **(Complexity factor 12/5)** – ComfyUI provides an exceedingly complex workflow/node based workspace which requires in-depth knowledge of the Stable Diffusion image generation process to make work. Definitely not a beginner interface, but extremely powerful for the experienced user, with workflows for local image and video generation.

-   [Cmdr2’s Easy Diffusion](https://github.com/cmdr2/stable-diffusion-ui) **(Complexity factor 2/5)** – A great option for those starting out with a local install. Easy Diffusion has a 1-click installer for Windows, and a popular Discord server full of extremely knowledgeable people to help you get up and running. The interface itself is limited in what it can do, compared to the other Interfaces, but it remains the easiest way to get started making your own images, locally.

<div data-embed="youtube" data-src="https://www.youtube.com/embed/_rdbzCrqQsw?feature=oembed" data-title="Civitai Beginners Guide To AI Art // #2 Installations // Easy Diffusion 3.0 &amp; Automatic 1111" data-width="800" data-height="450"><figcaption>Installing <strong>Easy Diffusion</strong> and <strong>Automatic1111</strong></figcaption></div>

-   [Fooocus](https://github.com/lllyasviel/Fooocus#download) **(Complexity factor 2/5) –** A very popular interface for creating Stable Diffusion images based on the SDXL model. It’s practically a one-click install on Windows and produces absolutely beautiful images. It does need a moderately powerful GPU (graphics card). Read our [Fooocus Quickstart Guide](/generative-ai-art-with-fooocus-quickstart-guide/) here.

-   [InvokeAI](https://invoke-ai.github.io/InvokeAI/) **(Complexity factor 3/5) –** A popular open-source text-to-image and image-to-image interface with powerful tools, not yet as full featured as Automatic1111’s WebUI, but getting close.

-   [SD.Next](https://github.com/vladmandic/automatic) (**Complexity Facto**r **4/5)** – Also known as “Vlad” (after author, Vladmandic), SD.Next started as a “fork” of Automatic1111 WebUI, but has diverged considerably and has a wide range of advanced features.

### To run on your own Mac – Local Interfaces {#heading-75}

Mac owners can run **Automatic1111’s WebUI**, **InvokeAI**, and also some Mac-specific, popular, lightweight, and super simple interfaces;

-   [DiffusionBee](https://diffusionbee.com/) **(Complexity factor 1/5)** – DiffusionBee is an extremely lightweight MacOS interface for Stable Diffusion. It allows for basic image generation, but has a very small feature-set, to keep it as simple as possible.

-   [Draw Things App](https://apps.apple.com/us/app/draw-things-ai-generation/id6444050820) – **(Complexity factor 1/5)** – Draw Things is a popular and highly rated MacOS App. I don’t know much about it, but from anecdotal evidence it seems to have some good features!

## I now have an interface! What are “models”? {#heading-77}

**Checkpoints**, also known as “**weights**” or “**models**” are the _brains_ which produce our images. Each model can produce a different style of image, or a particular theme or subject. Some are “multi-use” and can produce a mix of **portrait**, **realistic**, and **anime** (for example), and others are more focused, only capable of rendering one particular style of subject.

Models come in two file types. It’s important to know the distinction if running a local Stable Diffusion interface, as there are security implications.

**Pickletensor (.ckpt extension)** models may contain and execute malicious code when downloaded and used. Many websites, including Civitai, have “pickle scanners” which attempt to scan for malicious content. However, it’s safer to download **Safetensor (.safetensor)** models when available. This file type cannot contain any malicious code and is inherently safe to download. As of January 2025, .ckpt (“Pickletensor”) files have ceased to be produced or widely shared, with all models having transitioned to the .safetensor format.

Note that if using a Generation Service you will only be able to use the models **_they provide._** Some services provide access to some of the most popular models while others use their own custom models; it depends on the service.

Along with models there are many other files which can extend and enhance the images generated by the models, including **LoRA**, **Textual Inversion**, and **Hypernetworks**. We’ll look at those in a more in-depth guide

Watch our video, below, for a walkthrough of these core concepts!

<div data-embed="youtube" data-src="https://www.youtube.com/embed/IIy3YwsXtTE?start=1&amp;feature=oembed" data-title="Civitai Beginners Guide To AI Art // #1 Core Concepts" data-width="800" data-height="450"></div>

### Where do I get models? {#heading-78}

Most stable diffusion interfaces come with the default Stable Diffusion models, **SD1.4** and/or **SD1.5**, and **SDXL**. These are the Stable Diffusion models from which most other custom models are derived and can produce good images, with the right prompting.

Custom models, models “trained” with new images to produce stunning styles and specific content, or “merged” models – models created from the combination of others, can be downloaded from [Civitai.com](https://www.civitai.com)!

**You are here!** Civitai is the _leading_ model repository for Stable Diffusion checkpoints, and other related Generative AI tools. There are tens of thousands of models to choose from, across many categories; something for everyone!

![Start Making Generative AI Art - Choose from hundreds of thousands of resources on the Civitai Generator](/wp-content/uploads/2023/09/Screenshot-2024-07-20-105957-1-1024x369.webp)

<figure><img src="/wp-content/uploads/2023/09/Screenshot-2024-07-20-105840-1024x371.webp" alt="Start Making Generative AI Art - Choose from hundreds of thousands of resources on the Civitai Generator" width="1024" height="371" loading="lazy"><figcaption>Start Making<em> Generative AI Art – Choose from hundreds of thousands of resources on the Civitai Generator</em></figcaption></figure>

## Other Generative AI Services? {#heading-79}

Generative AI is a huge field, with many applications. Some of the most popular and interesting tools include;

-   [ChatGPT](https://chat.openai.com/chat) – Mentioned above, OpenAI’s ChatGPT is what’s known as an LLM (Large Language Model), designed to provide conversational responses to input text, understand and answer questions, provide recommendations, generate content, and more. It can solve problems, write code – it’s extremely useful, and free (with limitations). The first local models for ChatGPT-like LLMs are now appearing, which can be used on your own PC without restriction – [see our Quickstart Guide to Large Language Models to get started](/civitais-quickstart-guide-to-large-language-models/)!

-   [Magnific.ai](https://magnific.ai/) – An out of this world “Upscaling” tool (upscaling is the process of taking a low quality/resolution image and enlarging or enhancing it to a larger size) which has wowed the internet recently with the quality of the output images;

Check out our [Guide to Upscaling with Stable Diffusion](//civitais-guide-to-image-upscaling/) to learn how to Upscale your images on Civitai!

-   [OpenAI’s Sora](https://openai.com/sora) – Sora is one of the many recently released generative AI models that can create realistic and imaginative video scenes from text instructions (also known as txt2video).
