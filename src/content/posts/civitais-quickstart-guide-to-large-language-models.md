---
title: "Civitai’s Quickstart Guide to Large Language Models!"
slug: "civitais-quickstart-guide-to-large-language-models"
date: "2025-01-02T20:36:27Z"
modified: "2025-03-14T03:07:14Z"
categories:
  - "llm"
  - "quickstart-guides"
tags:
  - "guide"
  - "large-language-models"
  - "llm"
author: "civitai"
wpId: 6084
excerpt: "Civitai’s Guide to getting started with Large Language Models (LLMs)!"
image: "/images/guides/civitais-quickstart-guide-to-large-language-models/cover.webp"
seo:
  title: "Civitai's Quickstart Guide to Large Language Models! - Civitai Education"
  description: "Civitai's Guide to getting started with Large Language Models!"
  ogImage: "/images/guides/civitais-quickstart-guide-to-large-language-models/cover.webp"
  canonical: "https://education.civitai.com/civitais-quickstart-guide-to-large-language-models/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 12/31/2024 | First Version |
| 1/28/2025 | [DeepSeek R1](/civitais-quickstart-guide-to-large-language-models/#deepseek) |

## Large Language Models (LLMs)? {#update-mochi-available-on-civitai-com}

### What Are LLMs?

Large Language Models (LLMs) are a class of artificial intelligence systems designed to understand and generate human-like text. They are powered by advanced neural networks trained on massive datasets, often consisting of books, articles, and online content, allowing them to grasp patterns, context, and nuances in language. At their core, LLMs are built using a type of machine learning architecture called **Transformers**, which enables them to process and generate text in a highly contextual and coherent manner.

LLMs excel at a wide range of tasks, including answering questions, summarizing information, generating creative content, translating languages, and even coding. They work by predicting the most likely sequence of words based on a given input, which allows them to produce fluent and contextually relevant responses.

LLMs are not just tools for experts – they’re accessible to anyone interested in enhancing their day-to-day productivity, or exploring their creative potential. Whether you’re a developer looking to integrate AI into your coding projects or simply curious about their capabilities, this guide will provide a very quick and practical introduction to get you started, without getting too technical!

**_Check out our [LLM Glossary](/llm-glossary/) for more information on some of the terminology you’ll come across in this Guide!_**

### Key Applications and Benefits

(LLMs) are versatile tools that have found applications across many facets of everyday life, making them indispensable for both personal and professional use. Here are just a few of their applications and the benefits they bring:

#### Content Creation

-   Assisting in creative writing, proofreading, drafting emails, and cover letters.

#### Education

-   Explaining complex topics in simple terms.

-   Generating study guides, or summaries of lengthy information.

-   Searching the web.

#### Programming Assistance

-   Writing, debugging, and optimizing code in a number of common (and not so common!) languages.

-   Explaining coding concepts, or describing the function of code snippets.

-   Automating repetitive programming tasks.

#### Customer Support

<div class="columns">

<div class="column">

-   Powering Chatbots, and virtual assistants! Try out our own GPT-4 powered EduBot!…

-   Providing 24/7 helpdesk support (see CivBot on Civitai.com!)

-   Personalizing customer interactions with natural, conversational responses.

</div>

<div class="column">

<div data-embed="iframe" data-src="https://app.gpt-trainer.com/widget/ead7774f60c043ed8a86c371a3312a6d" data-width="90%" data-height="500px"></div>

</div>

</div>

#### Entertainment

-   Creating narratives, character backstories, or lore.

## Popular LLM Models

LLMs come in two main types: **closed-source** and **open-source**. Closed-source LLMs are proprietary systems developed by organizations that keep their code and data confidential. These models often require _substantial_ computational resources, making them impractical to run on standard consumer hardware; instead, users access them via cloud services or APIs (see OpenAI’s ChatGPT, or X/Twitter’s Grok). In contrast, open-source LLMs have publicly available code and, in some cases, model weights, allowing developers and casual users to run and modify them locally. Many open-source models are optimized for efficiency, enabling users to run them on consumer-grade computer hardware.

Here’s an overview of some prominent Closed and Open-Source LLMs:

### DeepSeek

In late January 2025, the AI world was shaken up by the release of a new Chinese-developed fully-open-source, MIT licensed, model, **[DeepSeek R1](https://api-docs.deepseek.com/news/news250120)**. According to its creators, they managed to train the R1 model for just $6 million (£4.8 million), a fraction of the “over $100 million” cost OpenAI’s CEO Sam Altman mentioned for GPT-4, with performance on-par OpenAI’s flagship o1 model.

The release made waves in both the AI research community and the broader tech industry, with U.S. President Donald Trump weighed in, calling it a “wake-up call” for American companies to step up their AI game.

The impact was immediate and massive – especially in the stock market. Nvidia, a key player in AI hardware, saw nearly $600 billion (£482 billion) wiped off its market value in a single day, marking the largest one-day loss in U.S. history. This underscored just how disruptive cost-effective AI models like DeepSeek could be for the global tech and finance industries.

DeepSeek’s appeal doesn’t stop there. It has official [Android](https://play.google.com/store/apps/details?id=com.deepseek.chat&hl=en_US&pli=1) and [iOS apps](https://apps.apple.com/us/app/deepseek-ai-assistant/id6737597349) and can run locally, delivering GPT-4-like performance from a [surprisingly small, lightweight model](https://huggingface.co/deepseek-ai/DeepSeek-R1-Zero).

A great way to dive into DeepSeek R1 locally is through **[LM Studio](https://lmstudio.ai/)** ([details below](#lm-studio)!). It’s an excellent tool that supports a range of quantized models, making it possible to run DeepSeek R1 even on smaller GPUs with ease.

![](/wp-content/uploads/2025/01/Screenshot-2025-01-28-115406.webp)

-   **[ChatGPT](https://chatgpt.com/) (Generative Pre-trained Transformer)**: Developed by OpenAI, GPT models are renowned for their advanced language processing capabilities, excelling in tasks like text generation, translation, and summarization. The latest iteration, GPT-4o, offers enhanced reasoning, understanding, and advanced voice features.

<div data-embed="videopress" data-src="https://video.wordpress.com/embed/FKAezXIy?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="450"></div>

-   **[Grok](https://x.ai/)**: Introduced by xAI for the X (Twitter) platform, Grok is designed to provide real-time information access and advanced reasoning, aiming to compete with leading AI models.

-   **[GitHub Copilot](https://github.com/features/copilot)**: A collaboration between GitHub and OpenAI, Copilot serves as an AI-powered coding assistant. It integrates seamlessly into popular code editors, offering real-time code suggestions and helping developers by autocompleting code and providing context-aware recommendations.

<div data-embed="videopress" data-src="https://videopress.com/embed/xWnZP2Ia?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="450"></div>

-   **[Gemini](https://gemini.google.com/)**: Developed by Google DeepMind, Gemini is a multimodal AI model capable of processing and generating content across various formats, including text, images, audio, and video.

-   **[Microsoft Copilot](https://copilot.microsoft.com)**: Integrated into Microsoft’s suite of products, including Office applications like Word and Excel, Copilot assists users by generating content, automating tasks, and providing intelligent suggestions to enhance productivity

-   **[Llama (Large Language Model Meta AI)](https://www.llama.com/)**: An open-source LLM developed by Meta (Facebook), Llama is designed to be efficient and accessible, enabling researchers and developers to build upon its architecture for various applications. The latest version, Llama 3.3, challenges the dominance of closed-source alternatives.

-   **[Mistral 7B](https://mistral.ai/)**: A compact yet powerful open-source LLM with 7 billion parameters, Mistral 7B is optimized for efficiency, making it suitable for a range of applications without requiring extensive computational resources.

## LLMs, Ranked

With so many LLMs out there, figuring out which one suits your needs can be a bit of a challenge. That’s where the [Chatbot Arena](https://lmarena.ai/?leaderboard) comes in. Developed by researchers at **UC Berkeley’s SkyLab**, it’s an open-source platform that lets users pit two anonymous LLM models against each other by inputting a prompt and comparing their responses. Users then vote for the one they prefer, and these votes contribute to a live leaderboard ranking various models.

![](/wp-content/uploads/2025/01/Screenshot-2025-01-01-155706-1024x330.webp)

## Running LLMs Locally {#mochi-in-civitai-s-generator}

Running an LLM locally has a lot of perks, especially if you care about _**privacy**_, customization, or having full control. It keeps your data on your own device, so you’re not sending sensitive info off to a cloud server. Plus, you can tweak the model to do exactly what you need – like training it on your own data for specific tasks.

### Hardware Requirements

While the big “triple A” models might require top-of-the-line GPUs, there are smaller, optimized models like LLaMA, Alpaca, or Mistral that can deliver great performance on lower-end systems.

Some of these can even run on a standard laptop or a modest desktop PC with as little as 4 to 8GB of VRAM. These smaller models are designed to be efficient while still maintaining impressive capabilities for tasks like text generation, summarization, or coding help. This makes local LLMs accessible to hobbyists, developers, and researchers who want to dive into the world of LLMs.

### Some Easy Options to Run Local LLMs

-   [NVIDIA’s ChatRTX](https://www.nvidia.com/en-us/ai-on-rtx/chatrtx/): NVIDIA’s ChatRTX is a free application that lets users run a personalized AI chatbot directly on local hardware. By connecting to documents, notes, images, and other data, it provides contextually relevant answers without relying on cloud services, ensuring data stays private. To use ChatRTX, you’ll need a Windows 11 system and an NVIDIA GeForce **RTX 30** or **40** Series GPU.

<div data-embed="videopress" data-src="https://videopress.com/embed/fGf4gma5?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="450"></div>

-   [“Oobabooga” Text Generation WebUI](https://github.com/oobabooga/text-generation-webui): Oobabooga’s Text Generation WebUI is an open-source Gradio-based interface (much like Auto111 WebUI) that allows users to run LLMs directly from their browser. It supports a huge variety of models, which can be imported directly from HuggingFace, offers features like chat and notebook modes, model switching, and extensions for text-to-speech and translation.

<div data-embed="videopress" data-src="https://videopress.com/embed/kMDKuvtV?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="450"></div>

-   [LM Studio](https://lmstudio.ai/): LM Studio is a free, open-source Windows, MacOS, and Linux desktop application, designed for offline LLM use. It offers support for a wide range of models (GGUF Llama, Mistral, Phi, Gemma, StarCoder), has direct HuggingFace import, and the ability to “train” on personal documents.

<div data-embed="videopress" data-src="https://videopress.com/embed/mJ4PzHyb?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="450"></div>

-   [Anything LLM](https://github.com/Mintplex-Labs/anything-llm): Anything LLM is an open-source framework by Mintplex Labs that provides an extensible and user-friendly environment for deploying and managing LLMs locally within a web-based interface. Designed to empower enthusiasts with the tools to tailor AI models without relying on cloud-based services.

-   [Jan](https://jan.ai/): Jan is a super-simple open-source app for LLM use, designed to run offline on a wide range of architectures and configurations (NVIDIA GPUs, Apple M-series, Apple Intel, Linux Debian, Windows x64).

-   [GPT4ALL](https://www.nomic.ai/gpt4all): GPT4ALL from Nomic offers a super-simple lightweight interface for Windows, MacOS, and Ubuntu, with all the popular LLM features; offline chat, open-source model library, ability to query your own data, packaged within a nice, clean, interface.

-   [Backyard.ai](https://backyard.ai/): Backyard AI is a web based (and locally running desktop application) dedicated to creating, sharing, and chatting with LLM powered Characters. It has a library of thousands of community defined Characters, and some advanced features like text2speech “voice calling” with your creations.

<div data-embed="videopress" data-src="https://videopress.com/embed/gBzOJzWF?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="450"></div>

## Using LLMs Effectively

### Writing Good Prompts

Section to follow!

### Avoiding Common Pitfalls

Section to follow!

## I need more help!

If you’re having trouble setting up an LLM for local use, or have any Generative AI questions, please join the [Civitai Discord](https://www.discord.gg/civitai) and seek assistance in the **#ai-help** channel!
