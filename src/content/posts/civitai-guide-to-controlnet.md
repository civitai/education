---
title: "Civitai Guide to ControlNet – Part I – Basics"
slug: "civitai-guide-to-controlnet"
date: "2023-09-11T20:26:28Z"
modified: "2025-01-24T00:35:35Z"
categories:
  - "beginner-guides"
tags:
  - "controlnet"
  - "guide"
author: "civitai"
wpId: 1743
excerpt: "What is ControlNet? How do I install it, and where do I find the Models? Follow our ControlNet Basics guide to get started!"
image: "/images/guides/civitai-guide-to-controlnet/cover.webp"
seo:
  title: "The Ultimate Guide to ControlNet (Part 1)"
  description: "Delve into the essentials of ControlNet and explore core capabilities like subject pose replication, style transfer, and image manipulation."
  ogImage: "/images/guides/civitai-guide-to-controlnet/cover.webp"
  canonical: "https://education.civitai.com/civitai-guide-to-controlnet/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 9/13/2023 | First version published |

## What is ControlNet?

ControlNet is an implementation of the research [Adding Conditional Control to Text-to-Image Diffusion Models](https://arxiv.org/abs/2302.05543).

It’s a neural network which exerts control over Stable Diffusion (SD) image generation in the following way;

![](/wp-content/uploads/2023/09/image-37-1024x904.webp)

But what does it mean for us, as users? ControlNet is a collection of models which do a bunch of things, most notably **subject pose replication**, **style and color transfer**, and **depth-map image manipulation**. They’re tools allowing us to transfer one aspect of an image to another.

There’s a [standalone Github repository for ControlNet](https://github.com/lllyasviel/ControlNet), maintained by user **Illyasviel**, and an [Extension for popular S](https://github.com/Mikubill/sd-webui-controlnet)[D](https://github.com/Mikubill/sd-webui-controlnet) [interface Automatic1111](https://github.com/Mikubill/sd-webui-controlnet), maintained by user **Mikubill**.

### Show me examples!

ControlNet is best described with example images. In the first example, we’re replicating the composition of an image, but changing the style and theme, using a ControlNet model called **Canny**. The top left image is the original output from SD.

![](/wp-content/uploads/2023/09/controlnet-example_smaller-1024x1024.webp)

The second example uses a model called **OpenPose** to extract a character’s pose from an input image (in this case a real photograph), duplicating the position of the body, arms, head, appendages, etc. in the generated image. The input image can be a photograph, or a generated image – anything in which a human body can be detected.

<figure><img src="/wp-content/uploads/2023/09/openpose_example-1024x788.webp" alt="" width="1024" height="788" loading="lazy"><figcaption>Real photograph on the left, SD image using <strong>ControlNet </strong>and <strong>OpenPose</strong> on the right.</figcaption></figure>

## The ControlNet Models

There are ControlNet models for **SD 1.5**, **SD 2.X**, and **SDXL**. There have been a few versions of SD 1.5 ControlNet models – we’re only listing the latest 1.1 versions for SD 1.5 for download, below, along with the most recent SDXL models.

Note that many developers have released ControlNet models – the models below may not be an exhaustive list of every model available!

Also note that many ControlNet models require additional **.yaml configuration files** to be placed in the same directory as the model. On Civitai, check the “Files” section while downloading to see if a config file is available.

![](/wp-content/uploads/2023/09/image-38-1024x573.webp)

**Illyasviel ControlNet 1.1 Models** **for SD 1.5** – [Civitai Model Page](https://civitai.com/models/38784/controlnet-11-models)

| **Model** | **Download Link** **(Civitai)** |
| --- | --- |
| Canny | [ControlNet 1.1 Models – Canny](https://civitai.com/models/38784?modelVersionId=44716) |
| Depth | [ControlNet 1.1 Models – Depth](https://civitai.com/models/38784?modelVersionId=44736) |
| HED/SoftEdge | [ControlNet 1.1 Models – Softedge](https://civitai.com/models/38784?modelVersionId=44756) |
| Normal | [ControlNet 1.1 Models – Normal](https://civitai.com/models/38784?modelVersionId=44774) |
| Scribble | [ControlNet 1.1 Models – Scribble](https://civitai.com/models/38784?modelVersionId=44787) |
| MLSD | [ControlNet 1.1 Models – MLSD](https://civitai.com/models/38784?modelVersionId=44795) |
| OpenPose | [ControlNet 1.1 Models – OpenPose](https://civitai.com/models/38784?modelVersionId=44811) |
| Seg | [ControlNet 1.1 Models – Seg](https://civitai.com/models/38784?modelVersionId=44815) |
| Inpaint | [ControlNet 1.1 Models – Inpaint](https://civitai.com/models/38784?modelVersionId=44876) |
| ip2p | [ControlNet 1.1 Models – Pix2Pix](https://civitai.com/models/38784?modelVersionId=44873) |
| Lineart | [ControlNet 1.1 Models – Lineart](https://civitai.com/models/38784?modelVersionId=44877) |
| lineart anime | [ControlNet 1.1 Models – AnimeLine](https://civitai.com/models/38784?modelVersionId=44879) |
| Shuffle | [ControlNet 1.1 Models – Shuffle](https://civitai.com/models/38784?modelVersionId=44874) |
| Tile | [ControlNet 1.1 Models – Tile (e)](https://civitai.com/models/38784?modelVersionId=67566) |

**TencentARC T2I Adapter Models for SD 1.5** – [Civitai Model Page](https://civitai.com/models/17220/controlnet-t2i-adapter-models)

| **Model** | **Download Link (Civitai)** |
| --- | --- |
| Color | [ControlNet T2I – Color](https://civitai.com/models/17220?modelVersionId=20330) |
| Style | [ControlNet T2I – Style](https://civitai.com/models/17220?modelVersionId=20331) |
| Sketch | [ControlNet T2I – Sketch](https://civitai.com/models/17220?modelVersionId=20332) |
| OpenPose | [ControlNet T2I – OpenPose](https://civitai.com/models/17220?modelVersionId=20333) |
| KeyPose | [ControlNet T2I – KeyPose](https://civitai.com/models/17220?modelVersionId=20334) |
| Depth | [ControlNet T2I – Depth](https://civitai.com/models/17220?modelVersionId=20335) |
| Canny | [ControlNet T2I – Canny](https://civitai.com/models/17220?modelVersionId=20336) |
| BodyPose | [ControlNet T2I – BodyPose](https://civitai.com/models/17220?modelVersionId=20337) |
| Seg | [ControlNet T2I – Seg](https://civitai.com/models/17220?modelVersionId=20338) |

SDXL Models – Various Developers – [Civitai Model Page](https://civitai.com/models/136070)

| **Name** | **Developer** | **Download Link (Civitai)** |
| --- | --- | --- |
| Real Blur | Kohya-ss | [ControlNet – Kohya – Blur](https://civitai.com/models/136070?modelVersionId=158411) |
| Canny | Kohya-ss | [ControlNet – Kohya – Canny](https://civitai.com/models/136070?modelVersionId=158416) |
| Depth (new) | Kohya-ss | [ControlNet – Kohya – Depth](https://civitai.com/models/136070?modelVersionId=158419) |
| Anime Blur | Kohya-ss | [ControlNet – Kohya – Anime Blur](https://civitai.com/models/136070?modelVersionId=155388) |
| Blur Beta | Kohya-ss | [ControlNet – Kohya – Blur (Beta)](https://civitai.com/models/136070?modelVersionId=155261) |
| Canny | Kohya-ss | [ControlNet – Kohya – Canny](https://civitai.com/models/136070?modelVersionId=155263) |
| Depth | Kohya-ss | [ControlNet – Kohya – Depth](https://civitai.com/models/136070?modelVersionId=155265) |
| OpenPose | Kohya-ss | [ControlNet – Kohya – OpenPose](https://civitai.com/models/136070?modelVersionId=155268) |
| OpenPose V2 | Kohya-ss | [ControlNet – Kohya – OpenPose v2](https://civitai.com/models/136070?modelVersionId=155270) |
| Scribble | Kohya-ss | [ControlNet – Kohya – Scribble](https://civitai.com/models/136070?modelVersionId=155273) |
| Canny | Stability.ai | [ControlNet – Stability – Canny](https://civitai.com/models/136070?modelVersionId=152216) |
| Depth | Stability.ai | [ControlNet – Stability – Depth](https://civitai.com/models/136070?modelVersionId=152324) |
| Recolor | Stability.ai | [ControlNet – Stability – Recolor](https://civitai.com/models/136070?modelVersionId=152390) |
| Revision | Stability.ai | [ControlNet – Stability – Revision](https://civitai.com/models/136070?modelVersionId=152438) |
| Sketch | Stability.ai | [ControlNet – Stability – Sketch](https://civitai.com/models/136070?modelVersionId=152612) |
| Depth-16b-zoe | SargeZT | [ControlNet – SargeZT – Depth-16b-zoe](https://civitai.com/models/136070?modelVersionId=154106) |
| Depth-faid-vidit | SargeZT | [ControlNet – SargeZT – faid-vidit](https://civitai.com/models/136070?modelVersionId=154645) |
| Depth-zeed | SargeZT | [ControlNet – SargeZT – Depth-zeed](https://civitai.com/models/136070?modelVersionId=154464) |
| Depth-zoe | SargeZT | [ControlNet -SargeZT – Depth-zoe](https://civitai.com/models/136070?modelVersionId=154106) |
| Softedge | SargeZT | [ControlNet -SargeZT – Softedge](https://civitai.com/models/136070?modelVersionId=153971) |
| Binary | SargeZT t2i Adapter | [ControlNet – SargeZT – T2I – Binary](https://civitai.com/models/136070?modelVersionId=154905) |
| Canny | SargeZT t2i Adapter | [ControlNet – SargeZT – T2I – Canny](https://civitai.com/models/136070?modelVersionId=154916) |
| Color | SargeZT t2i Adapter | [ControlNet – SargeZT – T2I – Color](https://civitai.com/models/136070?modelVersionId=154923) |
| Depth | SargeZT t2i Adapter | [ControlNet – SargeZT – T2I – Depth](https://civitai.com/models/136070?modelVersionId=154942) |
| Seg | SargeZT t2i Adapter | [ControlNet – SargeZT – T2I – Seg](https://civitai.com/models/136070?modelVersionId=154866) |
| Softedge | SargeZT t2i Adapter | [ControlNet – SargeZT – T2I – Softedge](https://civitai.com/models/136070?modelVersionId=154945) |
| Canny | TencentARC t2i Adapter | [ControlNet – TencentARC – T2I – Canny](https://civitai.com/models/136070?modelVersionId=155277) |
| Depth-midas | TencentARC t2i Adapter | [ControlNet – TencentARC – T2I – Depth-midas](https://civitai.com/models/136070?modelVersionId=155390) |
| Depth-zoe | TencentARC t2i Adapter | [ControlNet – TencentARC – T2I – Depth-zoe](https://civitai.com/models/136070?modelVersionId=155396) |
| Lineart | TencentARC t2i Adapter | [ControlNet – TencentARC – T2I – Lineart](https://civitai.com/models/136070?modelVersionId=155414) |
| OpenPose | TencentARC t2i Adapter | [ControlNet – TencentARC – T2I – OpenPose](https://civitai.com/models/136070?modelVersionId=155332) |
| Recolor | TencentARC t2i Adapter | [ControlNet – TencentARC – T2I – Recolor](https://civitai.com/models/136070?modelVersionId=155438) |
| Sketch | TencentARC t2i Adapter | [ControlNet – TencentARC – T2I – Sketch](https://civitai.com/models/136070?modelVersionId=155445) |
| OpenPose | Thibaud | [ControlNet – Thibaud – OpenPose](https://civitai.com/models/136070?modelVersionId=151451) |
| OpenPose-LoRA | Thibaud | [ControlNet – Thibaud – OpenPose-LoRA](https://civitai.com/models/136070?modelVersionId=155107) |
| H94 ip-adapter | Thibaud | [ControlNet – Thibaud – H94 IP-Adapter](https://civitai.com/models/136070?modelVersionId=155532) |

## What do the Models do?

Many of the models above are “duplicates”, in that there are multiple models which perform much the same task, but produce slightly different outputs, being trained to perform the task with slightly different training parameters. The list below gives one example from each of the popular model types.

You really have to try them out for yourself to see if you prefer Stability.ai’s Depth vs Kohya’s Depth, for example. There’s a lot of personal preference involved.

The **Preprocessor** (also called the **Annotator**) is what converts your uploaded image into a **detectmap** (examples below), which is fed into ControlNet to produce the output effect. The Preprocessor does not need to be set if uploading a pre-made **detectmap**, if you created an OpenPose skeleton manually, for example.

A number of the most popular models are demonstrated below.

### Canny – Edge Detection {#canny-edge-detection}

Canny creates simple sharp lines around areas of high/low contrast;

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-39-645x1024.webp" alt="" width="645" height="1024" loading="lazy"><figcaption>License Free Unsplash Stock</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-40.png" alt="" width="512" height="813" loading="lazy"><figcaption>Preprocessor Generated Detectmap</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/02175-3262785798-666x1024.webp" alt="" width="666" height="1024" loading="lazy"><figcaption>ControlNet + SD Prompt Output</figcaption></figure>

</div>

</div>

### MLSD – Mobile Line Segment Detection {#mlsd-mobile-line-segment-detection}

Straight Line Detection model for architecture and man-made objects;

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/kevin-matos-Nl_FMFpXo2g-unsplash-683x1024.webp" alt="" width="683" height="1024" loading="lazy"><figcaption>License Free Unsplash Stock</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/download-lines.png" alt="" width="512" height="768" loading="lazy"><figcaption>Preprocessor Generated Detectmap</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/02176-4129805153-666x1024.webp" alt="" width="666" height="1024" loading="lazy"><figcaption>ControlNet + SD Prompt Output</figcaption></figure>

</div>

</div>

### HED – Holistically-Nested Edge Detection (Also SoftEdge) {#hed-holistically-nested-edge-detection-also-softedge}

Creates smooth lines around objects, especially useful for recoloring and stylizing, using soft-edge detection.

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/dave-goudreau-MJ2zd_OfxSw-unsplash-645x1024.webp" alt="" width="645" height="1024" loading="lazy"><figcaption>License Free Unsplash Stock</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-41.webp" alt="" width="512" height="813" loading="lazy"><figcaption>Preprocessor Generated Detectmap</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/02177-4033816940-666x1024.webp" alt="" width="666" height="1024" loading="lazy"><figcaption>ControlNet + SD Prompt Output</figcaption></figure>

</div>

</div>

### Scribble/Sketch {#scribble-sketch}

Converts sketches and other line-drawn art to images.

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/tree-1024x1024.webp" alt="" width="1024" height="1024" loading="lazy"><figcaption>Original Sketch</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-42-1024x1024.webp" alt="" width="1024" height="1024" loading="lazy"><figcaption>Preprocessor Generated Detectmap</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/120221221114456-365723880-a-beautiful-tree-683x1024.webp" alt="" width="683" height="1024" loading="lazy"><figcaption>ControlNet + SD Prompt Output</figcaption></figure>

</div>

</div>

### OpenPose (and Derivatives, OpenPose v2, BodyPose, etc.) {#openpose-and-derivates-openpose-v2-bodypose-etc}

OpenPose will detect a human pose and apply it to a subject in your image. It creates a “skeleton” with a head, trunk, and limbs, and can even include hands (with fingers) and facial orientation. Multiple OpenPose Skeletons can be combined to create dynamic crowd scenes;

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/brian-wangenheim-NsYo3O3HVx4-unsplash-683x1024.webp" alt="" width="683" height="1024" loading="lazy"><figcaption>License Free Unsplash Stock</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-43.png" alt="" width="512" height="768" loading="lazy"><figcaption>Preprocessor Generated Detectmap</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/02178-4186473552-666x1024.webp" alt="" width="666" height="1024" loading="lazy"><figcaption>ControlNet + SD Generated Output</figcaption></figure>

</div>

</div>

### SEG – Semantic Segmentation {#seg-semantic-segmentation}

SEG detects, and segments, parts of images based on color and shape;

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/john-mark-arnold-XNIjmb6Ax04-unsplash-1-1024x551.webp" alt="" width="1024" height="551" loading="lazy"><figcaption>License Free Unsplash Stock</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-45.webp" alt="" width="952" height="512" loading="lazy"><figcaption>Preprocessor Generated Detectmap</figcaption></figure>

</div>

</div>

<figure><img src="/wp-content/uploads/2023/09/02182-1615037766-1024x666.webp" alt="" width="1024" height="666" loading="lazy"><figcaption>ControlNet + SD Prompt Output</figcaption></figure>

### Depth

Replace or re-draw the subject (or parts of an image), based on greyscale depth maps;

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/00762-3269258453-819x1024.webp" alt="" width="819" height="1024" loading="lazy"><figcaption>SDXL Image</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-46.webp" alt="" width="512" height="640" loading="lazy"><figcaption>Preprocessor Generated Detectmap</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/00217-391769539-819x1024.webp" alt="" width="819" height="1024" loading="lazy"><figcaption>ControlNet + SD Generated Output</figcaption></figure>

</div>

</div>

### Normal Map

Normal Maps are somewhat similar to Depth Maps, but retain minor surface details and geometry;

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/01256-1305198759-666x1024.webp" alt="" width="666" height="1024" loading="lazy"><figcaption>SDXL Image</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-47.webp" alt="" width="512" height="788" loading="lazy"><figcaption>Preprocessor Generated Detectmap</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/02189-2561032557-666x1024.webp" alt="" width="666" height="1024" loading="lazy"><figcaption>ControlNet + SD Generated Output</figcaption></figure>

</div>

</div>

### Color

Produces a color swatch/palette based on the input image, which is then applied to the prompted image;

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/01855-1752390348-666x1024.webp" alt="" width="666" height="1024" loading="lazy"><figcaption>SDXL Image</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-48-665x1024.webp" alt="" width="665" height="1024" loading="lazy"><figcaption>Preprocessor Generated Detectmap</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/02209-2792730879-666x1024.webp" alt="" width="666" height="1024" loading="lazy"><figcaption>ControlNet + SD Generated Output</figcaption></figure>

</div>

</div>

### Style

Transfer the **theme**, **style**, or certain **elements** of an image into your generated image, without mentioning them in the prompt. Note that this Model uses the **clip\_vision** preprocessor (more on Preprocessor types below) and does not produce a **Detectmap**. Also note that to function, this Model requires prompts to be **under 75 tokens long**.

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/20221221113581-2613062462-Style-Petal-666x1024.webp" alt="" width="666" height="1024" loading="lazy"><figcaption>SD 1.5 Image</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/02218-1464007061-666x1024.webp" alt="" width="666" height="1024" loading="lazy"><figcaption>ControlNet + SD Generated Output</figcaption></figure>

</div>

</div>

## Installing ControlNet & The Models {#installing-controlnet-the-models}

### Automatic1111

Installing ControlNet for **Automatic1111** is extremely straightforward; no different than installing any other extension. Make sure your Automatic1111 installation is up to date, then head to the **Extensions** tab.

![](/wp-content/uploads/2023/09/image-49-1024x265.webp)

Search for **sd-webui-controlnet**, and look for the Extension highlighted above – it’s easy to find as it has over _12,000_ stars on Github. If you’re having trouble finding it, you can **Order** the list by **Stars**, and it will jump to the top of the list.

Once you’ve installed the Extension and **restarted** the WebUI Console, you’ll need to download the models (links above) into the ControlNet models directory. By default, you’ll find that directory at;

`**stable-diffusion-webui\extensions\sd-webui-controlnet\model**`**s**

We can also configure custom save directories for both the ControlNet models, and Preprocessor models (more details below!), by looking in the **WebUI** **Settings** \> **ControlNet** Options.

![](/wp-content/uploads/2023/09/image-50.webp)

### ComfyUI

ComfyUI has native out-the-box support for ControlNet; no third-party extensions are required. ControlNet models should be downloaded and placed in the following directory;

`**ComfyUI\models\controlnet**`

## Using ControlNet (Automatic1111 WebUI)

Once installed to Automatic1111 WebUI ControlNet will appear in the accordion menu below the Prompt and Image Configuration Settings as a collapsed drawer. **It will show the version number of the currently installed version.** ControlNet is one of the most frequently updated extensions, with new features being added (and broken!) on an almost weekly basis, so it’s extremely useful to know, at-a-glance, which version is installed.

<figure><img src="/wp-content/uploads/2023/09/image-51.webp" alt="" width="799" height="510" loading="lazy"><figcaption>Location of the ControlNet settings drawer, on the left of the WebUI</figcaption></figure>

The ControlNet interface appears for use in both **text2img** and **img2img** modes.

### ControlNet Options

The ControlNet interface can appear intimidating at first glance, but we’ll step through all the options and explain what each does, and the choices will be demystified in no time! From top to bottom;

![](/wp-content/uploads/2023/09/image-52.webp)

| Interface Option | Function |
| --- | --- |
| The Image Box | This is where we drop (or upload) our **Source Image** – the image which we want to extract some trait from, to pass to the new image to be generated. |
| Enable | Turns the ControlNet instance on/off |
| Low VRAM | Checking this option allows ControlNet to function with less than 6GB of VRAM, at the expense of processing speed. |
| Pixel Perfect | When checked, automatically calculates the correct Preprocessor resolution for the input image (more details below!) |
| Allow Preview | When checked, will display the Preprocessor created Detectmap alongside the ControlNet input image – extremely useful to see exactly what the Preprocessor is doing. |

![](/wp-content/uploads/2023/09/image-53.webp)

| Interface Option | Function |
| --- | --- |
| Control Type | Selecting a Control Type radio button will attempt to automatically set the Preprocessor and Model appropriately, but if we want control over which Preprocessor to use with a given model, setting manually is best. |
| Preprocessor | A list of available Preprocessors (more details below!) |
| “Bang” button (Preview Annotator Result) | Clicking this button, once you’ve selected a Preprocessor, will run the Preprocessor against the input image, displaying a preview of the output. |
| Model | The ControlNet model we wish to use. Note that the Preprocessor and the Model should be set appropriately. The Depth Preprocessors work with the Depth Models, and so forth, although there is some overlap (more details below!) |
| Model Refresh Button | If ControlNet models have been downloaded while WebUI is running, there’s no need to restart – simply click this button to refresh the Model list. |

![](/wp-content/uploads/2023/09/image-54.webp)

| Interface Option | Function |
| --- | --- |
| Control Weight | How much emphasis to apply to the ControlNet image when generating the final output. |
| Starting Control Step | Rather than applying ControlNet to every Step of image generation, this allows us to **_start_** the application of ControlNet at a predefined Step of the image generation process. |
| Ending Control Step | This allows us to define at which Step ControlNet should _**stop**_ applying, during image generation. |

Below these we have the options for **Control Mode**. Control Mode was previously called “Guess Mode” in older ControlNet versions.

| Interface Option | Function |
| --- | --- |
| Control Mode – Balanced | Balanced strikes balance between the input prompt and ControlNet. Puts ControlNet on both sides of the GFG scale. The same as having Guess Mode disabled in the old ControlNet. |
| My prompt is more important | Uses progressively reduced U-Net injections of ControlNet to ensure that your prompt is given more influence over the image generation. |
| ControlNet is more important | Puts ControlNet only on the Conditional Side. This means that ControlNet will be made N times stronger, based on your CFG setting! If your CFG Scale is set to 7, ControlNet will be injected at 7 times the strength. **Note that this setting is distinct from Control Weight**. Using this setting gives ControlNet more leeway to guess what is missing from the prompt, in generating the final image. |

The next options are the **Resize Modes**. Resize modes tell ControlNet how to handle input images of different dimensions than those of the txt2img settings.

| Interface Option | Function |
| --- | --- |
| Just Resize | The ControlNet input image will be stretched (or compressed) to match the height and width of the text2img (or img2img) settings. This will alter the aspect ratio of the Detectmap. |
| Crop and Resize | The ControlNet Detectmap will be cropped and re-scaled to fit inside the height and width of the txt2img settings. The Default setting, and the most useful. |
| Resize and Fill | Fits the Detectmap into the text2img canvas settings, and extends the Detectmap with “emptiness” to fill any spaces. |

The last settings allow us to perform a **Loopback**, and set ControlNet **Presets**;

| Interface Option | Function |
| --- | --- |
| Loopback | Passes the generated image back into ControlNet for a second pass! |
| Presets | Gives the ability to save and reload ControlNet settings as Presets. |

Additionally, there are some buttons below the Input Image which perform some specialized functions;

| Interface Button | Function |
| --- | --- |
| ?   | Creates a new Canvas (see below) |
| ?   | Enable your webcam! Take selfies and apply them as the ControlNet input image. |
| ?   | Flip webcam horizontal orientation |
| ??  | Send Dimension button – duplicates the dimensions from the ControlNet input image to the txt2img (or img2img) Width and Height. |

### Other ControlNet Options – Multiple ControlNet Instances {#other-controlnet-options-multiple-controlnet-instances}

We have the ability to enable up to **10** (!!) ControlNet instances (called “**Units**“), which we can chain together to produce phenomenal results. Each instance will be displayed as a tab, nested under the ControlNet drawer.

<figure><img src="/wp-content/uploads/2023/09/image-55.webp" alt="" width="805" height="81" loading="lazy"><figcaption>ControlNet with three Instances/Units enabled</figcaption></figure>

To enable multiple Instances/Units, open the **WebUI Settings** for ControlNet, and use the Multi ControlNet slider to specify how many Instances/Units to enable in the interface.

![](/wp-content/uploads/2023/09/image-56.webp)

## Preprocessors (Annotators)

**Preprocessors** (also called **Annotators** in the original ControlNet research paper), (often, but not always) correspond to a ControlNet model, and there are sometimes multiple Preprocessor choices for each model! The examples below show some of these Preprocessor outputs for each model type, using the same ControlNet input images, for consistency.

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/00929-36543644-1.png" alt="" width="1024" height="1024" loading="lazy"><figcaption>Input image to test Preprocessors</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/02295-4036701230.png" alt="" width="1024" height="1024" loading="lazy"><figcaption>Input image to test OpenPose Preprocessors</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/goblet2.webp" alt="" width="1024" height="1024" loading="lazy"><figcaption>Input image to test scribble/sketch Preprocessors</figcaption></figure>

</div>

</div>

Note that the _**first time**_ a Preprocessor is selected from the Preprocessor list and an image generated, it may seem like nothing is happening for an extended period. Upon the initial run of each Preprocessor, additional required files and models will be downloaded.

### Depth

Depth provides **_four_** Preprocessors which produce varying gradients between high/low areas.

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-57.webp" alt="" width="512" height="512" loading="lazy"><figcaption>depth_midas</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-58.webp" alt="" width="512" height="512" loading="lazy"><figcaption>depth_zoe</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-59.webp" alt="" width="512" height="512" loading="lazy"><figcaption>depth_leres++</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-60.webp" alt="" width="512" height="512" loading="lazy"><figcaption>depth_leres</figcaption></figure>

</div>

</div>

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/09/01001-774634300.png)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/01002-774634300.png)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/01003-774634300.png)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/01004-774634300.png)

</div>

</div>

### NormalMap

There are two NormalMap Preprocessors, picking up different layers of detail.

Output examples to follow.

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-61.webp" alt="" width="512" height="512" loading="lazy"><figcaption>normal_bae</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-63.webp" alt="" width="512" height="512" loading="lazy"><figcaption>normal_midas</figcaption></figure>

</div>

</div>

### OpenPose

There are four OpenPose Preprocessors, becoming progressively more detailed until featuring hand and finger posing, and facial orientation. Note that the base **openpose** Preprocessor only captures the “body” of a subject, and **openpose\_full** is a combination of **openpose** \+ **openpose hand** (not shown) + **openpose\_face**.

Output examples to follow.

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-64.png" alt="" width="1024" height="1024" loading="lazy"><figcaption>openpose</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-65.png" alt="" width="512" height="512" loading="lazy"><figcaption>openpose_face</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-66.png" alt="" width="512" height="512" loading="lazy"><figcaption>openpose_faceonly</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-67.png" alt="" width="512" height="512" loading="lazy"><figcaption>openpose_full</figcaption></figure>

</div>

</div>

### Lineart

Trained on line drawings, can generate rough or detailed lineart from input images, and can be used to translate lineart images into full color images.

Output examples to follow.

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-68.webp" alt="" width="512" height="512" loading="lazy"><figcaption>lineart_anime</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-69.webp" alt="" width="512" height="512" loading="lazy"><figcaption>lineart_anime_denoise</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-70.webp" alt="" width="512" height="512" loading="lazy"><figcaption>lineart_coarse</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-71.webp" alt="" width="512" height="512" loading="lazy"><figcaption>lineart_realistic</figcaption></figure>

</div>

</div>

### Softedge

Extremely versatile Preprocessor, great for capturing the outline and detail of many types of image.

When looking for best result quality, **softedge\_hed** is the clear winner, followed by **softedge\_pidinet**.

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-72.webp" alt="" width="512" height="512" loading="lazy"><figcaption>softedge_hed</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-73.png" alt="" width="512" height="512" loading="lazy"><figcaption>softedge_hedsafe</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-74.webp" alt="" width="512" height="512" loading="lazy"><figcaption>softedge_pidinet</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-75.png" alt="" width="512" height="512" loading="lazy"><figcaption>softedge_pidisafe</figcaption></figure>

</div>

</div>

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/09/00983-774634300.png)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/00984-774634300.png)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/00986-774634300.png)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/00987-774634300.png)

</div>

</div>

### Scribble

Four Preprocessors, each capable of turning hand-drawn scribble drawings into images.

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-76.png" alt="" width="512" height="512" loading="lazy"><figcaption>scribble_hed</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-77.png" alt="" width="512" height="512" loading="lazy"><figcaption>scribble_pidinet</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-78.png" alt="" width="512" height="512" loading="lazy"><figcaption>scribble_xdog</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-79.png" alt="" width="512" height="512" loading="lazy"><figcaption>t2ia_sketch_pidi</figcaption></figure>

</div>

</div>

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/09/00978-214549230.png)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/00979-4052163749.png)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/00980-1307128468.png)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/00980-1307128468-1.png)

</div>

</div>

### Segmentation

Three Preprocessors excelling in semantic segmentation.

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-80.webp" alt="" width="1024" height="1024" loading="lazy"><figcaption>seg_ofade20k</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-81.webp" alt="" width="1024" height="1024" loading="lazy"><figcaption>seg_ofcoco</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/09/image-82.png" alt="" width="1024" height="1024" loading="lazy"><figcaption>seg_ufade20k</figcaption></figure>

</div>

</div>

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/09/01010-774634300.png)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/01009-774634300.png)

</div>

<div class="column">

![](/wp-content/uploads/2023/09/01009-774634300-1.png)

</div>

</div>

### Reference

<div class="columns">

<div class="column">

The Preprocessor **reference\_only** is an unusual type of Preprocessor **which does not require any Control model**, but guides diffusion _directly_ using the source image as a reference.

This can be used to make images of a similar style, especially anime and cartoons!

</div>

<div class="column">

![](/wp-content/uploads/2023/09/01012-774634300.png)

</div>

</div>

### Revision

<div class="columns">

<div class="column">

Similar to the **reference\_only** Preprocessor, **revision\_clipvision** and **revision\_ignore\_prompt** use the ControlNet image as a source for the generation of **_image variations_** – **no prompt needed**!

Note that the **revision\_clipvision** Preprocessor is 3.4GB in size.

</div>

<div class="column">

![](/wp-content/uploads/2023/09/01015-774634300.png)

</div>

</div>

## Part II – Coming Soon! {#part-ii-coming-soon}

Part I has just scratched the surface of ControlNet! We’ve looked at **what it does**, **how to install it** and **where to get the models from**. We’ve covered the **settings and options** in the interface, and we’ve explored some of the **Preprocessor options**.

Part II will look at;

-   Real-world use-cases – how we can use ControlNet to level-up our generations.
-   Using ControlNet with ComfyUI – the nodes, sample workflows.
-   Companion Extensions, such as **OpenPose 3D**, which can be used to give us unparalleled control over subjects in our generations.
-   ControlNet resources on [Civitai.com](https://www.civitai.com)
