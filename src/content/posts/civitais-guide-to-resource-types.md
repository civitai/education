---
title: "Resource Types"
slug: "civitais-guide-to-resource-types"
date: "2024-08-21T00:00:34Z"
modified: "2025-02-22T01:20:45Z"
categories:
  - "civitai"
tags:
  - "civitai"
  - "guide"
  - "resources"
author: "civitai"
wpId: 4939
excerpt: "There are many types of Resource available for use on Civitai. This Guide breaks it all down in a clear and beginner friendly way!"
image: "/wp-content/uploads/2024/08/output_00036_.png"
seo:
  title: "Resource Types - Civitai Education"
  description: "There are many types of Resource available for use on Civitai. This Guide breaks it all down in a clear and beginner friendly way!"
  ogImage: "/wp-content/uploads/2024/08/output_00036_.png"
  canonical: "https://education.civitai.com/civitais-guide-to-resource-types/"
---

Welcome to [Civitai](https://www.civitai.com)! Whether you’re new to the platform or just looking to get the most out of your experience, this guide is here to help. Civitai hosts a wide variety of resources designed to enhance your generative AI projects.

In this guide, we’ll break down each type of resource available, explaining what they are, how they can be used, and why they’re valuable. Let’s dive in and explore everything Civitai has to offer in a simple, beginner-friendly way!

## Text-to-Image Resource Types

### Models (also known as Checkpoints, base model) {#models}

In the world of Stable Diffusion and text-to-image models, a **Diffusion Model** (Model) acts as the ‘brains’ behind the image generation process. At its core, a diffusion model is a sophisticated neural network trained on vast amounts of data, learning to generate images from text prompts through a process of refining random noise into a coherent picture. This model understands the intricate relationships between words and visual elements, allowing it to transform your ideas into detailed and often stunning images.

<figure><img src="/wp-content/uploads/2024/08/Screenshot-2024-08-20-231711-1024x371.webp" alt="Civitai - Resource Types - Models" width="1024" height="371" loading="lazy"><figcaption><em>An example of Models hosted on Civitai.com</em></figcaption></figure>

Models come in various versions, such as Stable Diffusion 1.5, Stable Diffusion XL, [Flux](/quickstart-guide-to-flux-1/), and more. They can be either open-source or closed-source, and some are designed as ‘general purpose,’ capable of generating a wide range of image content. Others are more specialized, focusing on particular artistic styles or specific concepts.

Many [companies](https://stability.ai/) and [private v](https://blackforestlabs.ai/)[ent](https://blackforestlabs.ai/)[ures](https://blackforestlabs.ai/) develop text-to-image models, but the significant computational costs involved in training these models make full-scale training inaccessible for most individuals, even with the most powerful consumer or gaming Graphics Processing Units (GPUs).

Civitai hosts tens of thousands of Models to download and use on the [Civitai On-Site Image Generator](/using-civitai-the-on-site-image-generator/).

### LoRAs (including LyCORIS, LoHA, DoRA, and derivatives) {#Loras}

A LoRA (Low-Rank Adaptation) is like an extension to a base model, enhancing its capabilities by adding a specific graphical style, theme, or concept that the original model might not be able to produce on its own. Think of it as a specialized ‘add-on’ that fine-tunes the model to generate images in a way that aligns with a particular artistic vision or theme. Whether you’re looking to introduce a unique visual flair or focus on a niche concept, a LoRA can provide that extra layer of customization to your image generation process.

In contrast to full-scale models, LoRA can be trained on consumer-grade GPUs, making them more accessible to individuals and small creators. This means you don’t need expensive, high-end hardware to develop your own custom styles or themes. Additionally, various web-based services, [including Civitai](/using-civitai-the-on-site-lora-trainer/), offer platforms where you can train and share your LoRA without the need for extensive technical resources. This accessibility has opened up new possibilities for creators to extend models and experiment with unique artistic concepts.

Civitai hosts hundreds of thousands of LoRAs to download and use on the [Civitai On](/using-civitai-the-on-site-image-generator/)[\-Site](/using-civitai-the-on-site-image-generator/) [Image Generator](/using-civitai-the-on-site-image-generator/).

### Embeddings (also known as Textual Inversions) {#Embeddings}

Embeddings are a more lightweight alternative to LoRAs, but they don’t capture styles and concepts as effectively. While they were once popular, most creators are now shifting toward LoRAs for better results. Embeddings work by nudging a model toward concepts it already understands, rather than introducing new data or ideas. This means they enhance what the model can already do, but without the same depth or flexibility that LoRAs offer. Although they’re a bit dated now, Embeddings can still be useful for simple tweaks.

Civitai hosts hundreds of thousands of Embeddings to download and use on the [Civitai On-Site Image Generator](/using-civitai-the-on-site-image-generator/).

### VAE {#VAE}

A VAE, or Variational Auto-Encoder, is a component that enhances the performance of a model by improving the richness of colors and the clarity of fine details in generated images. It acts as a refinement tool, ensuring that the output from the model is more vibrant and polished. By capturing the underlying distribution of the data more effectively, a VAE helps the model generate images that are not only more visually appealing but also more accurate in terms of detail and color accuracy.

Civitai hosts hundreds of VAEs to download and use on the [Civitai On-Site Image Generator](/using-civitai-the-on-site-image-generator/).

### Workflows

Workflows are a type of file used by the [local generation interface “ComfyUI”](/start-making-ai-art-with-civitai/#to-run-on-your-own-pc-local-interfaces) that provide a visual representations of the processes involved in generative AI tasks, constructed by connecting various nodes within a graph. Each node represents a specific operation – such as loading a model, inputting prompts, or applying samplers – and their interconnected structure defines the sequence and relationship of these operations. This node-based approach allows users to design, customize, and share intricate image and video generation processes without the need for traditional coding. At Civitai, we host tens of thousands of these ComfyUI workflows, readily available for integration into your projects to streamline and enhance your creative endeavors.

### Wildcards

Wildcards are powerful tools that automate and diversify the prompting process in generative AI workflows. Essentially, a Wildcard is a text file containing a list of words or phrases – such as poses, locations, artistic styles, or character traits – that can be randomly inserted into prompts to generate varied results without manual input. This allows creators to explore a wide range of image outputs efficiently, making them especially useful for bulk generation, inspiration, or refining creative workflows.

While Civitai hosts thousands of Wildcard files for download, they currently can’t be used within the [Civitai On-Site Image Generator](/using-civitai-the-on-site-image-generator/) – though that may change in the future as we continue to expand platform capabilities!

## More to follow!

We’re frequently expanding this guide to include even the less frequently used resource types, so be sure to check back in the future for the latest updates!
