---
title: "Civitai Guide to Depth!"
slug: "civitai-guide-to-depth"
date: "2023-10-05T18:44:00Z"
modified: "2025-02-04T04:13:45Z"
categories:
  - "video"
tags:
  - "depth"
  - "depthmap"
  - "generative-ai"
  - "guide"
author: "civitai"
wpId: 2336
excerpt: "What are Depth maps, and what can we do with them to enhance our art? Learn the basics in our Getting Started Guide!"
image: "https://education.civitai.com/wp-content/uploads/2023/10/depthmap-0007-concat_depth.png"
seo:
  title: "Civitai Guide to Depth! - Civitai Education"
  description: "Our comprehensive Beginner's guide to Depth Maps will walk you through everything you need to know to get started with Depth Maps for AI Art!"
  ogImage: "https://education.civitai.com/wp-content/uploads/2023/10/depthmap-0007-concat_depth.png"
  canonical: "https://education.civitai.com/civitai-guide-to-depth/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 10/5/2023 | First version published |

## What are depth maps?

This guide will walk you through a number of simple techniques designed to bring your AI generated images to life!

A **depth map** is a single channel image that represents the distance of pixels in a scene from the viewer. It’s often used to create 3D images or models from 2D images, and provide information about scene’s depth from an otherwise “flat” 2D image.

They’re usually shades of grey and white, with white representing “higher” (closer to the camera) areas of an image, and darker shades representing those areas farther away – although those colors can be inverted for certain applications.

Some of the features showcased in this guide aren’t truly 100% depth map related, but they’re bundled into the same tools we’ll be exploring, and they _are_ techniques to manipulate 2D images to create a sense of depth.

<div class="columns">

<div class="column">

<figure><img src="http://education.civitai.com//wp-content/uploads/2023/10/00319-4062251475-1-819x1024.png" alt="An AI Generated Image of Boba Tea on a windowsill." width="819" height="1024" loading="lazy"><figcaption>An image…</figcaption></figure>

</div>

<div class="column">

<figure><img src="http://education.civitai.com//wp-content/uploads/2023/10/depthmap-0000-1-819x1024.png" alt="A depth map, computed from an image of Boba Tea on a windowsill." width="819" height="1024" loading="lazy"><figcaption>and computed depth map.</figcaption></figure>

</div>

</div>

## How can a sense of depth enhance our work?

We can leverage depth maps in a number of ways to produce exciting effects;

-   Create animations which give the impression of a third-dimension to our 2D images.
-   Create basic 3D models, for import into Blender, or other modeling applications.
-   Create stereo side-by-side images for viewing on VR headsets, such as the Oculus Quest.
-   Create Anaglyph images (red/cyan) for viewing with “old fashioned” 3D glasses.

## Prerequisites

There are many ways to create depth maps from images; websites, standalone image and 3D modeling apps, and extensions to the popular Stable Diffusion interfaces. Some methods allow you to paint your own depth maps manually, onto existing images (see below), but for this guide we’ll be generating our depth maps programatically, in the **[stable-diffusion-webui-depthmap-script](https://github.com/thygate/stable-diffusion-webui-depthmap-script)** extension for **Automatic1111**.

We’ll look at generating depth maps in ComfyUI at a later date, but for this guide, you’ll need an up-to-date Automatic1111 WebUI installation, and the aforementioned depthmap-script extension, available from the Automatic1111 **`Extensions`** tab. If you can’t find it in the list of available extensions, it can also be installed from the URL: `**https://github.com/thygate/stable-diffusion-webui-depthmap-script**`

If you don’t use Automatic1111 but would like to experiment, you can clone (download) the repository from [https://github.com/thygate/stable-diffusion-webui-depthmap-script](https://github.com/thygate/stable-diffusion-webui-depthmap-script). Install the `**requirements.txt**`, then run `**main.py**` to launch a Standalone Gradio interface.

## Extension Options Walkthrough

There are two ways to interact with the Depth Extension in Automatic1111. If we would like to compute depth maps from existing images, we can navigate to the **`Depth`** tab.

If we would like to generate depth maps _at the same time_ as generating images, we can invoke the extension from the **`Scripts`** dropdown.

![Depth Extension - Script](http://education.civitai.com//wp-content/uploads/2023/10/scripts.png)

### The Depth Tab

The **`Depth`** tab can appear intimidating at first glance! There are a lot of options, but we will break them down, below.

At the top of the **`Depth`** tab there’s a space to load an image. We can use _any_ image – it doesn’t have to be AI generated, it could be a photograph – anything works!

![The Depth Extension](http://education.civitai.com//wp-content/uploads/2023/10/depth-1024x899.png)

### Options

The following table explains the function of each checkbox option on the **`Depth`** tab.

| Option | Explanation |
| --- | --- |
| **Compute On** – GPU/CPU | If you receive OOM (Out Of Memory) VRAM errors while using the Depth extension you can fall-back on CPU processing! It’s very slow! |
| **Model** | There are currently ten Models which can be leveraged to calculate and produce depth images. Each has advantages and drawbacks. The default model, res101, is based upon [AdelaiDepth/LeReS](https://github.com/aim-uofa/AdelaiDepth/tree/main/LeReS). The others are variations of the [MiDaS](https://github.com/isl-org/MiDaS) and [ZoeDepth](https://github.com/isl-org/ZoeDepth) implementations. The most recently added – `**dpt_beit_large_512 (midas 3.1)**` has exceptional fidelity – and associated VRAM cost. |
| **Net Width/Height** | Ignored when **`Boost`** is activated, the desired size of the depth map output can be set here. Also ignored when `**Match Input Size**` is enabled. |
| **Match net size to input size** | Matches the depth map size to the dimensions of the loaded image. |
| **Boost (multi-resolution merging)** | An implementation based upon [BoostingMonocularDepth (Github Link)](https://github.com/compphoto/BoostingMonocularDepth), which greatly improves results when using the default res101 model. Much longer compute time when enabled! |
| **Invert (black=near, white=far)** | By default, the depth map output shows white as “nearer” to the viewer. Checking this box flips this, which is useful for certain applications which require black to be the “nearer” color (see `**Depthy**`, below). |
| **Clip and renormalize DepthMap** | This allows us to define maximum near (`**Near Clip**`) and far (`**Far Clip**`) threshold values, with everything in-between being renormalized (spread out) between the two. Useful if you need to adjust the depth of the map. |
| **Combine input and depthmap into one image** | When enabled, the depth map output will be stitched/appended onto the original image, based on the Combined Axis selection (see below). When saved as a combination of original image and depth map, the file will be a three channel (RGB), 8 bit per channel, png image. |
| **Combine Axis – Vertical/Horizontal** | See above. |
| **Save Outputs** | This will save the depth map output in the assigned Automatic1111 txt2image directory. |
| **Output DepthMap** | Allows the generated depth map to be shown in the Automatic1111 Gradio interface. |
| **Generate NormalMap** | Generates a `**normal map**` image. Each pixel of a `**normal map**` encodes information about the direction a surface is facing, and can be used to calculate lighting, and enhance the quality of 3D models. |
| **Generate stereoscopic image(s)** | Generate stereoscopic images, when checked, enables options for the creation of side-by-side (or above-below) stereo images, suitable for use on a VR headset, or Anaglyph images, for use with red/cyan glasses. Note that all stereo image generation uses CPU only. |
| **Generate simple 3D mesh** | Generates a 3D model in the .obj format |
| **Generate 3D inpainted mesh** | Generates a 3D model in the .ply format. This is an _extremely_ slow process! The 3D inpainted mesh can be used to create videos from the `**Generate Video**` subtab. |
| **Generate 4 demo videos with 3D inpainted mesh** | Uses the .ply export to create four simple example videos showcasing simple camera movements. |
| **Remove background** | Enables subjects to be identified and backgrounds to be removed from images. |

## Configuration – Output Examples {#configuration-output-examples}

Below are some examples of the results of various configuration options, in practice;

### Combine input and depthmap into one image

<figure><img src="http://education.civitai.com//wp-content/uploads/2023/10/depthmap-0007-concat_depth-1024x788.png" alt="" width="1024" height="788" loading="lazy"><figcaption>The depth mask output appended to the input image</figcaption></figure>

### Generate stereoscopic image(s) – Side by Side {#generate-stereoscopic-image-s-side-by-side}

<figure><img src="http://education.civitai.com//wp-content/uploads/2023/10/depthmap-0010-left-right-1024x788.png" alt="" width="1024" height="788" loading="lazy"><figcaption>Two slightly diverged images, appended side by side, for use with the “cross-eyed” magic eye technique, or a headset/viewer capable of rendering stereo side-by-side images in 3D.</figcaption></figure>

### Generate stereoscopic image(s) – Anaglyph {#generate-stereoscopic-image-s-anaglyph}

<figure><img src="http://education.civitai.com//wp-content/uploads/2023/10/depthmap-0011-red-cyan-anaglyph-666x1024.png" alt="" width="666" height="1024" loading="lazy"><figcaption>A red/cyan anaglyph image, for use with 3D glasses.</figcaption></figure>

### Generate NormalMap

<figure><img src="http://education.civitai.com//wp-content/uploads/2023/10/depthmap-0015-normalmap-666x1024.png" alt="" width="666" height="1024" loading="lazy"><figcaption>A Normal Map, generated from the input image.</figcaption></figure>

### Remove Background

<div class="columns">

<div class="column">

<figure><img src="http://education.civitai.com//wp-content/uploads/2023/10/u2net-666x1024.png" alt="" width="666" height="1024" loading="lazy"><figcaption>Background removal with the <strong><code>u2net</code> </strong>model</figcaption></figure>

</div>

<div class="column">

<figure><img src="http://education.civitai.com//wp-content/uploads/2023/10/sil-666x1024.png" alt="" width="666" height="1024" loading="lazy"><figcaption>Background removal with the <strong><code>Silueta</code> </strong>model</figcaption></figure>

</div>

<div class="column">

<figure><img src="http://education.civitai.com//wp-content/uploads/2023/10/anime-666x1024.png" alt="" width="666" height="1024" loading="lazy"><figcaption>Background removal with the <code><strong>isnet-anime</strong></code> model</figcaption></figure>

</div>

</div>

### Generate 3D inpainted mesh (for Video generation)

<div class="columns">

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/fZQm0Owx?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="978"><figcaption>A video generated from the 3D Inpainted Mesh output</figcaption></div>

</div>

</div>

## Using Depth Maps in Practice

So what can we **_actually_** do with various depth maps, normal maps, side-by-side stereoscopic images, and inpainted 3D meshes generated by the Depth extension? Some workflow examples, below;

### Generate Video

Once we’ve generated a 3D Inpainted `**.ply**` mesh, we can generate video with custom camera parameters and movement;

<figure><img src="http://education.civitai.com//wp-content/uploads/2023/10/inpainted_mesh_video.png" alt="" width="711" height="713" loading="lazy"><figcaption>Generate Video Subtab</figcaption></figure>

| Option | Explanation |
| --- | --- |
| **Input Mesh** | Pre-filled using the last generated 3D Inpainted Mesh output folder. |
| **Number of frames** | The total number of video frames to output. |
| **Framerate** | The desired output framerate. |
| **Format** | Two output formats are available; `**mp4**` and `**webm**` |
| **SSAA** | Supersampling Anti-Aliasing, can be used to remove jagged edges and flickering in output videos. The render size is scaled by this factor, then downsampled. |
| **Trajectory** | Trajectory controls the behavior of the camera’s movement. |
| **Translate: x, y, z** | Translate x,y,z numbers control the magnitude of camera travel, and should be adjusted in very strong increments. The first number pertains to the X axis, the second to the Y, and the third to Z (depth/zoom). |
| **Crop: top, left, bottom, right** | Sometimes, due to the movement of the camera, the outer edges of the images can become distorted. Specify values to crop the image by X pixels, as required. |
| **Dolly** | Implements a “dolly-zoom” effect by adjusting the camera FOV as the camera moves along its’ trajectory. |

<div class="columns">

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/uzOKq0mF?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="664" data-height="1000"></div>

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/zl7ikbUt?cover=1&amp;autoPlay=1&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="664" data-height="1000"></div>

</div>

</div>

### Create 3D Models

The website [Depth Player](https://depthplayer.ugocapeto.com/) (**external link**) is a tool which takes an image, and associated depth map, as input, and produces a `**Wavefront OBJ**` file as output (much like the Generate Simple 3D Mesh option in the Depth extension, but with a little more interactivity).

It’s not a “_true_” 3D model which can be entirely rotated – we’re generating depth from a _**2D**_ image by displacing a a plane mesh. `**.obj**` files are ubiquitous and can be imported into many 3D applications.

<figure><img src="http://education.civitai.com//wp-content/uploads/2023/10/depthplayer-1024x756.png" alt="" width="1024" height="756" loading="lazy"><figcaption>The Depth Player interface, clicking and dragging on the image allows the model to be rotated, somewhat.</figcaption></figure>

### Visualize on a 2D Display

The website [Depthy](https://depthy.stamina.pl/) (**external link**) was around for a long time before Stable Diffusion and Generative AI art, but now it’s really useful! First, drag a color image into the **Depthy** window. We’ll then be prompted to upload a depth map (or manually paint one!).

Images will be instantly viewable in the interactive viewer, displaying subtle movement, which can be customized. Gif, and video, can be exported.

<div class="columns">

<div class="column">

![](http://education.civitai.com//wp-content/uploads/2023/10/depthy_1.gif)

</div>

<div class="column">

![](http://education.civitai.com//wp-content/uploads/2023/10/depthy_2.gif)

</div>

</div>

### View on a 3D/VR Headset Device {#view-on-a-3d-vr-headset-device}

`**Side-by-side Stereo images**` (SBS images) can be viewed on many VR devices, including cell phones running apps like [Google Cardboard](https://arvr.google.com/cardboard/) (**external link**).

For a much more immersive experience, SBS images can be loaded onto devices such as the **Oculus Quest**. The example below was generated from the **`Depth`** Extension, loaded to `**Oculus Quest**`, and visualized with the [Pigasus VR Media Player](https://www.meta.com/experiences/2436667223120459/) (**external link**).

Note that you, as a viewer, will not experience the effect of depth from the example video!

<figure><img src="http://education.civitai.com//wp-content/uploads/2023/10/oculus_demo_img-1024x788.png" alt="" width="1024" height="788" loading="lazy"><figcaption>Side-by-Side Stereo Image, generated with Automatic1111, SD 1.5, and the Depth Extension</figcaption></figure>

<div data-embed="videopress" data-src="https://videopress.com/embed/ivbBV6cW?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=1&amp;persistVolume=0&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="800"></div>

### Import into 3D Modeling Applications

The generated `**.obj**` and `**.ply**` files can be imported into 3D applications, such as [Blender](https://www.blender.org/) (**external link**), for additional manipulation.

<figure><img src="http://education.civitai.com//wp-content/uploads/2023/10/mesh_blender-1024x878.png" alt="" width="1024" height="878" loading="lazy"><figcaption>3D Inpainted Mesh, imported to Blender, simple lighting and texture applied.</figcaption></figure>

### Visualize with 3D Glasses

Anaglyph (red/cyan) outputs can be viewed with [cheap 3D glasses](https://a.co/d/eXH3v7a) (**external Amazon link**), and visualized somewhat on-screen with this rudimentary [anaglyph viewer](https://3dthis.com/stereo.htm) (**external link**).

Anaglyph outputs from the Depth extension were used as training images in the creation of the experimental [LoRA-3D, txt2img Anaglyph Generator for SD 1.5](https://civitai.com/models/6289/lora-3d-anaglyph-image-generator).

<figure><img src="http://education.civitai.com//wp-content/uploads/2023/10/image-1-1024x760.png" alt="" width="1024" height="760" loading="lazy"><figcaption>TheAlly’s Experimental Anaglyph generating LoRA</figcaption></figure>
