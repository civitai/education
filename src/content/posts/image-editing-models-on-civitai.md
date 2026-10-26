---
title: "Image Editing Models on Civitai"
slug: "image-editing-models-on-civitai"
date: "2026-10-26T19:00:00Z"
author: "civitai"
categories:
  - "civitai"
  - "guides"
tags:
  - "image-editing"
  - "gpt-image"
  - "krea"
  - "guide"
excerpt: "The main image editing models in the Civitai generator, including GPT Image 2.5 and Krea 3: what each is best at, what it costs in Buzz, how many reference images it takes, and the same three edits run on every model."
image: "/images/guides/image-editing-models/image-editing-cover.webp"
seo:
  title: "Image Editing Models on Civitai - Civitai Education"
  description: "Compare GPT Image 2.5, Krea 3, Krea 2, Nano Banana, Seedream, Qwen Image Edit, Muse Image and Flux.3 for editing images in the Civitai generator, with Buzz costs and side-by-side results."
  ogImage: "/images/guides/image-editing-models/image-editing-cover.webp"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 10/26/2026 | First version. Replaces the GPT Image 1 guide. |

![A white mug on a wooden table, then the same photo edited with Krea 3 and with GPT Image 2.5 Flare so the mug is matte black with lavender beside it](/images/guides/image-editing-models/image-editing-cover.webp)

## What editing means in the generator

An edit model takes one or more of your own images plus a written instruction, and returns a new image that changes only what you asked for. You describe the change ("make the mug matte black"), not the whole picture.

In the Civitai generator this is the **Image to Image** workflow, described in the app as "Generate or edit using reference images". Open the generator from the **Create** button, choose the **Image to Image** workflow, and pick one of the models below in the base model selector. Add your image or images in the reference image area, write the instruction and generate. The [image generator guide](/using-civitai-the-on-site-image-generator/) covers the rest of the form. The cost on the Generate button updates as you change settings. The same models also create images from text alone, so a model you know from text-to-image may already be able to edit.

Three things differ from model to model, and they decide which one you reach for:

- **How well it leaves the rest of the picture alone.**
- **How many reference images it accepts.**
- **What it costs in Buzz.**

This guide covers the main edit models, then shows the same three edits run on all of them. The generator's model picker lists others too, and the list changes as models are added.

:::note
The generator has no mask or inpainting brush. To change one region, describe it in the prompt ("the sign on the left"). None of these edit models take a mask, and the Image to Image workflow has no mask brush. The generator does have a **Sketch Edit** tool, on the reference image tile, for drawing on your image to point at what you mean. Its own notice says results vary by model and that Nano Banana works best with sketch annotations.
:::

## The models at a glance

Costs are about what one 1:1 image cost at the time of writing, with one reference image. Your cost can differ, so **the cost button next to Generate is the source of truth**. Models and prices change often. For how Buzz colors work, see [Buzz Colors: Blue, Yellow and Green](/buzz-colors-blue-yellow-and-green/).

| Model | Reference images | About Buzz per image | Pick it for |
| --- | --- | --- | --- |
| GPT Image 2.5 (Flare, Sunburst) | up to 7 | 69 at high quality, 18 medium, 8 low | Plain-language instructions and readable text |
| Krea 3 | up to 6 | 45 at 1K | Edits that keep the scene (it did in all three of our tests) |
| Krea 2 | up to 4 | 16 (Turbo) to 60 (Raw) | Low-cost edits, with one to four references |
| Nano Banana | up to 7 | 44 (V2.1 at 1K) | Keeping a person or pet looking like themselves |
| Seedream | up to 7 | 135 (v5.0 Pro), 52 (v5.0 Lite) | High-resolution output and typography |
| Qwen Image Edit | up to 3 | 50 (25 steps) | Open-weight edits and text changes |
| Muse Image | up to 4 | 13 | The lowest fixed price per edit |
| Flux.3 | up to 10 | 63 at 1K | Edits that use many references |

## GPT Image 2.5

GPT Image is OpenAI's image model family, hosted on Civitai. Version 2.5 comes in two builds, **Flare** and **Sunburst**. Civitai's GPT Image page recommends Flare as the default pick and describes it as the faster build for things you iterate on, and Sunburst as the one for tighter control across several rounds of edits. They take the same controls. The generator opens on v2, so choose a 2.5 build yourself in the version picker, which also lists v2 and v1.5.

- **Inputs:** up to 7 reference images. There is no negative prompt and no mask.
- **Cost:** about 69 Buzz at the default high quality. The quality setting is the price lever: about 18 at medium and 8 at low, both builds.
- **Best at:** instructions written as ordinary sentences, and text inside the image. Put the exact words in quotation marks.
- **In our test:** both builds changed the mug and wrote OPEN LATE correctly. Both also added underline strokes we did not ask for. On the two-image test, Flare placed the mug correctly but reframed the whole shot tighter.

## Krea 3

Krea 3 is Krea's image model, listed after Krea 2 in the Krea group of the base model picker.

- **Inputs:** 1 to 6 reference images. The output size follows your references, so there is no aspect ratio choice when editing.
- **Cost:** about 45 Buzz at 1K. 2K costs more, about 105 Buzz, plus about 45 for each extra reference image. You also choose the **Thinking** mode, Instant or Medium. At 1K the two cost the same in our pricing check; at 2K Medium costs more.
- **Best at:** in our test, keeping the scene intact while changing the one thing we named.
- **In our test:** it followed all three edits, kept the scene and framing of the original in all three tests, though several other models did too, and in the two-image test put the mug beside the pot on the table without changing the room.

## Krea 2

Krea 2 is the previous Krea model. In the edit workflow it runs on **Turbo** by default, or on **Raw** together with an identity-edit LoRA, and the Large and Medium tiers are not offered for edits.

- **Inputs:** 1 to 4 reference images.
- **Best at:** low-cost edits.
- **Cost:** the cheapest of the Krea models. Turbo at 8 steps is about 16 Buzz with one reference and 22 with two. Raw at 30 steps is about 60 and 81. Steps and the number of references both change the price.
- **In our test:** it handled the single-image edits well. On the two-image test it did not keep the scene. It made a new shot with a large mug in the foreground. That is one test, but it is a sign to use a different model when placing an object from one image into another.

## Nano Banana

Nano Banana is Google's image model. Civitai's page describes it as built to keep a person's or pet's likeness across edits: change the outfit, hairstyle or setting and the face stays consistent. It can also blend several photos into one scene and edit in several rounds, one change at a time.

- **Inputs:** up to 7 reference images. It is the model the sketch tool recommends.
- **Cost:** V2.1, the latest, is about 44 Buzz at 1K and 66 at 2K. V2 Lite is about 44 and 1K only. V2 is about 104 and Pro about 180.
- **Best at:** edits where the subject must stay recognizable. Write the change as a plain instruction ("put a tutu on the dog") and do not re-describe the subject.
- **In our test:** it handled all three edits and kept the original framing in the two-image test.

## Seedream

Seedream is ByteDance's model, built for high-resolution output and legible text, including Chinese characters. The current top version is **v5.0 Pro**, which renders at 2K. The 4K switch is on v4.5 and v5.0 Lite.

- **Inputs:** up to 7 reference images.
- **Best at:** legible text and high-resolution output. 4K is available only on v4.5 and v5.0 Lite.
- **Cost:** about 135 Buzz for v5.0 Pro at 2K and about 52 for v5.0 Lite.
- **In our test:** the single-image edits worked, though its mug had a slightly textured finish. On the two-image test the mug came out oversized and the pot was gone.

## Qwen Image Edit

Qwen Image Edit is the editing build of Alibaba's open-weight Qwen-Image. Civitai's Qwen page lists adding and removing objects, style transfer, and editing text while keeping the original font, size and style. It is hosted on Civitai.

- **Inputs:** up to 3 reference images.
- **Best at:** open-weight edits, including changing text in an image (per Civitai's Qwen page).
- **Cost:** the 2511 version is about 50 Buzz at 25 steps with one image, 56 with two, and about 100 at 50 steps.
- **In our test:** it followed the single-image edits. In the two-image test the mug took the place of the pot.

## Muse Image

Muse Image is Meta's image model, hosted on Civitai. It has a single version with no LoRAs, steps or seed. When editing, it takes the output size from your references.

- **Inputs:** 1 to 4 reference images.
- **Best at:** the lowest fixed price per edit.
- **Cost:** about 13 Buzz, the lowest fixed price here. GPT Image 2.5 at low quality is about 8.
- **In our test:** it followed all three edits at the lowest fixed price. Its mug in Edit 1 read gray rather than black.

## Flux.3

Flux.3 is Black Forest Labs' image model. It has no LoRA, steps or seed controls, and offers 1K, 2K and 4K output.

- **Inputs:** 1 to 10 reference images, the most of any model here.
- **Best at:** edits that need many references.
- **Cost:** about 63 Buzz at 1K and 130 at 2K.
- **In our test:** it followed the edits, but placed the lavender partly behind the mug, and wrote OPEN LATE smaller and on one line where the other models used two.

## Side-by-side results

We ran three edits on every model from the same source images, with the same prompt each time. Each result below is from one run, and the Buzz under each name is what that image cost. Settings: GPT Image at high quality, Krea 2 on Turbo at 8 steps, Qwen Image Edit 2511 at 25 steps, Nano Banana V2.1, Flux.3 and Krea 3 at 1K, Seedream v5.0 Pro at its 2K default. These are one test's results, not a ranking: run the edit again and you will get a different image.

The source images (a white mug on a table, a café entrance with a blank chalkboard, and a reading room) were made with Flux.1 Schnell for about 2 Buzz each. The edit examples cost about 1,524 Buzz in all, at the prices in the table above.

### Edit 1: change a color and add an object

Source: the white mug. Prompt: *Change the mug to matte black and place a small sprig of lavender beside it. Keep the table, window light and framing the same.*

![The source image: a white ceramic mug on a wooden table by a window](/images/guides/image-editing-models/source-mug.webp)

All nine kept the table, window and the small wooden jar and turned the mug black. They differ in where the lavender went and in how matte the mug looks.

| GPT Image 2.5 Flare, about 69 Buzz | GPT Image 2.5 Sunburst, about 69 Buzz | Krea 3, about 45 Buzz |
| --- | --- | --- |
| ![GPT Image 2.5 Flare: the mug turned matte black with lavender beside it](/images/guides/image-editing-models/ex1-gpt25-flare.webp) | ![GPT Image 2.5 Sunburst: the mug turned matte black with lavender beside it](/images/guides/image-editing-models/ex1-gpt25-sunburst.webp) | ![Krea 3: the mug turned matte black with lavender beside it](/images/guides/image-editing-models/ex1-krea3.webp) |

| Krea 2 (Turbo), about 16 Buzz | Nano Banana V2.1, about 44 Buzz | Seedream v5.0 Pro, about 135 Buzz |
| --- | --- | --- |
| ![Krea 2 (Turbo): the mug turned matte black with lavender beside it](/images/guides/image-editing-models/ex1-krea2-turbo.webp) | ![Nano Banana V2.1: the mug turned matte black with lavender beside it](/images/guides/image-editing-models/ex1-nano-banana-v21.webp) | ![Seedream v5.0 Pro: the mug turned matte black with lavender beside it](/images/guides/image-editing-models/ex1-seedream-v5-pro.webp) |

| Qwen Image Edit 2511, about 50 Buzz | Muse Image, about 13 Buzz | Flux.3, about 63 Buzz |
| --- | --- | --- |
| ![Qwen Image Edit 2511: the mug turned matte black with lavender beside it](/images/guides/image-editing-models/ex1-qwen-edit-2511.webp) | ![Muse Image: the mug turned matte black with lavender beside it](/images/guides/image-editing-models/ex1-muse.webp) | ![Flux.3: the mug turned matte black with lavender beside it](/images/guides/image-editing-models/ex1-flux3.webp) |

### Edit 2: write text

Source: the café entrance. Prompt: *Write the words OPEN LATE on the chalkboard sign in neat white chalk lettering. Keep everything else unchanged.*

![The source image: a café entrance with a blank chalkboard sign](/images/guides/image-editing-models/source-storefront.webp)

Every model spelled the words correctly and left the shopfront alone. The differences are style: the GPT Image builds added extra strokes, and Flux.3 wrote it small on one line.

| GPT Image 2.5 Flare, about 69 Buzz | GPT Image 2.5 Sunburst, about 69 Buzz | Krea 3, about 45 Buzz |
| --- | --- | --- |
| ![GPT Image 2.5 Flare: OPEN LATE on the chalkboard](/images/guides/image-editing-models/ex2-gpt25-flare.webp) | ![GPT Image 2.5 Sunburst: OPEN LATE on the chalkboard](/images/guides/image-editing-models/ex2-gpt25-sunburst.webp) | ![Krea 3: OPEN LATE on the chalkboard](/images/guides/image-editing-models/ex2-krea3.webp) |

| Krea 2 (Turbo), about 16 Buzz | Nano Banana V2.1, about 44 Buzz | Seedream v5.0 Pro, about 135 Buzz |
| --- | --- | --- |
| ![Krea 2 (Turbo): OPEN LATE on the chalkboard](/images/guides/image-editing-models/ex2-krea2-turbo.webp) | ![Nano Banana V2.1: OPEN LATE on the chalkboard](/images/guides/image-editing-models/ex2-nano-banana-v21.webp) | ![Seedream v5.0 Pro: OPEN LATE on the chalkboard](/images/guides/image-editing-models/ex2-seedream-v5-pro.webp) |

| Qwen Image Edit 2511, about 50 Buzz | Muse Image, about 13 Buzz | Flux.3, about 63 Buzz |
| --- | --- | --- |
| ![Qwen Image Edit 2511: OPEN LATE on the chalkboard](/images/guides/image-editing-models/ex2-qwen-edit-2511.webp) | ![Muse Image: OPEN LATE on the chalkboard](/images/guides/image-editing-models/ex2-muse.webp) | ![Flux.3: OPEN LATE on the chalkboard](/images/guides/image-editing-models/ex2-flux3.webp) |

### Edit 3: combine two images

Sources: the white mug and the reading room. Prompt: *Place the mug from the first image on the table in the second image, matching the lighting.* The reading room has a small round table with a lamp and a small dark pot on it.

![The second source image: a reading room with bookshelves, two armchairs, and a small round table holding a lamp and a small dark pot](/images/guides/image-editing-models/source-room.webp)

| GPT Image 2.5 Flare, about 69 Buzz | GPT Image 2.5 Sunburst, about 69 Buzz | Krea 3, about 45 Buzz |
| --- | --- | --- |
| ![GPT Image 2.5 Flare: the mug placed in the reading room](/images/guides/image-editing-models/ex3-gpt25-flare.webp) | ![GPT Image 2.5 Sunburst: the mug placed in the reading room](/images/guides/image-editing-models/ex3-gpt25-sunburst.webp) | ![Krea 3: the mug placed in the reading room](/images/guides/image-editing-models/ex3-krea3.webp) |

| Krea 2 (Turbo), about 22 Buzz | Nano Banana V2.1, about 44 Buzz | Seedream v5.0 Pro, about 135 Buzz |
| --- | --- | --- |
| ![Krea 2 (Turbo): a new shot with a large mug on a foreground table](/images/guides/image-editing-models/ex3-krea2-turbo.webp) | ![Nano Banana V2.1: the mug placed in the reading room](/images/guides/image-editing-models/ex3-nano-banana-v21.webp) | ![Seedream v5.0 Pro: an oversized mug on the table with the pot missing](/images/guides/image-editing-models/ex3-seedream-v5-pro.webp) |

| Qwen Image Edit 2511, about 56 Buzz | Muse Image, about 13 Buzz | Flux.3, about 63 Buzz |
| --- | --- | --- |
| ![Qwen Image Edit 2511: the mug placed in the reading room](/images/guides/image-editing-models/ex3-qwen-edit-2511.webp) | ![Muse Image: the mug placed in the reading room](/images/guides/image-editing-models/ex3-muse.webp) | ![Flux.3: the mug placed in the reading room](/images/guides/image-editing-models/ex3-flux3.webp) |

Krea 3, Nano Banana V2.1, GPT Image 2.5 Sunburst, Muse Image and Flux.3 put the mug on the round table beside the pot and kept the room. GPT Image 2.5 Flare placed the mug correctly but reframed the shot tighter. In the Seedream v5.0 Pro result the mug is oversized and the pot is gone, and in the Qwen Image Edit result the mug is on the table where the pot was. Krea 2 did not keep the scene: it made a new shot with a large mug on a foreground table.

## Remix: edit or animate an image

The **Remix** button on an image gives you three options:

- **Edit image** ("Change this image with a prompt"). It opens the generator with that image already loaded as the reference and an edit model selected. You write the instruction and generate.
- **Animate** ("Turn this image into a video"). It opens the generator ready to turn the image into a clip. Animate uses MiniMax H3, so check the cost button for its price. For generating video in general, see [Civitai's Guide to Video in the Civitai Generator](/civitais-guide-to-video-in-the-civitai-generator/).
- **Reuse prompt & resources.** It copies the image's prompt and settings so you can start a new generation from them.

The Remix button is on an image, on its card and on its page. Remix picks the model for you from the image's rating. Safe images go to **Nano Banana V2 Lite** (about 44 Buzz when we checked). Images with a higher rating go to **Qwen Image Edit 2511** instead. You can change the model in the generator afterward. Images of real people, images that may depict a minor, and blocked images cannot be remixed.

## Tips for better edits

- **Describe the change, not the picture.** "Make the mug matte black" works better than a full description of the scene.
- **Say what to keep.** "Keep the table, window light and framing the same" costs nothing, and we included it in both single-image test prompts.
- **Quote text.** Put exact words in quotation marks and keep them short.
- **Edit in steps.** Several small edits, feeding each result back in, are easier to control than one large one.
- **Use the cheap models to draft.** Try an idea on Muse Image, Krea 2 or GPT Image at low quality, then run the final on a stronger model.
- **For placing one image into another,** say which image is which. In Edit 3 we gave the object first and the scene second and named them that way in the prompt.

## Troubleshooting

- **The result changed things you did not ask for.** Add what to keep to the prompt, or try another model. In our text test the GPT Image builds added strokes, and Flux.3 shrank the text.
- **An object disappeared or grew.** In the two-image test the pot disappeared in the Seedream and Qwen Image Edit results, and the mug grew in Seedream's. Try Krea 3 or Nano Banana, or edit in two steps.
- **The finish is off.** In Edit 1 the Muse mug reads gray rather than clearly black, and the Seedream mug has a slightly textured finish. Name the finish again ("flat, non-reflective matte black"), or try another model.
- **The cost is higher than the table says.** Check the settings: resolution, quality, steps and the number of reference images all change the price.
- **A model is missing from the picker.** The list changes as models are added or retired. The generator's picker is the current list.
