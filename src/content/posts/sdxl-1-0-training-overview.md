---
title: "SDXL 1.0 Training Overview"
slug: "sdxl-1-0-training-overview"
date: "2023-08-17T16:23:54Z"
modified: "2025-01-23T23:11:32Z"
categories:
  - "sdxl"
  - "training"
tags:
  - "guide"
  - "sdxl1-0"
author: "civitai"
wpId: 1225
excerpt: "Last Update Version Changes 8/17/2023 1.0 First version! This document will be kept up to date with SDXL 1.0 Training Developments ?? This guide will provide; What is SDXL 1.0? SDXL 1.0 is a groundbreaking new model from Stability AI, with a base image size of 1024×1024 – providing a huge leap in image quality/fidelity […]"
image: "/wp-content/uploads/2023/07/Splash_final_crop.webp"
seo:
  title: "Essential Guide to Training SDXL 1.0 Models"
  description: "Learn the essentials of training SDXL 1.0 models and discover tips for enhanced image quality and fidelity in generative AI."
  ogImage: "/wp-content/uploads/2023/07/Splash_final_crop-1024x576.webp"
  canonical: "https://education.civitai.com/sdxl-1-0-training-overview/"
deprecated:
  date: "2026-10-26"
---

| Last Update | Version | Changes |
| --- | --- | --- |
| 8/17/2023 | 1.0 | First version! This document will be kept up to date with SDXL 1.0 Training Developments |

?? **This guide will provide**;

-   The basics required to **get started** with SDXL training
-   Sample settings which produce great results
-   Tips gleaned from our own training experiences

-   This guide _**is not**_;

-   A full, comprehensive, LoRA training tutorial
-   A full Google Colab Tutorial (but we’ve covered the essentials!)
-   A Kohya Trainer Tutorial (but we’ve covered the essentials!)
-   Definitive settings _which will always work 100% of the time_ – **experimentation is required**!

## What is SDXL 1.0? {#what-is-sdxl-1-0}

SDXL 1.0 is a groundbreaking new model from Stability AI, with a base image size of **1024×1024** – providing a huge leap in image quality/fidelity over both SD 1.5’s **512×512** and SD 2.1’s **768×768**. The model also contains new Clip encoders, and a whole host of other architecture changes, which have real implications for inference (generating images) and training.

Read our [SDXL Overview Guide](/sdxl-1-0/) here for more information on getting started with SDXL.

## Training SDXL

Before SDXL launched, Stability AI teased us with posts detailing how easy it is to train against SDXL. There’s some truth to that – it _**is**_ very forgiving, and many different settings produce extremely good results, however – _**the hardware requirements are higher than expected!**_

### Local Training Requirements

Training SDXL has significantly higher hardware requirements than training SD 1.5 LoRA. The community is still working out the best settings, and it will take some time for the training applications to be optimized for SDXL, but at time of writing (8/3/2023) we can safely say that;

-   At _least_ **12 GB of VRAM** is ~~necessary~~ recommended
-   **PyTorch 2** tends to use less **VRAM** than PyTorch 1
-   With Gradient Checkpointing enabled, **VRAM** usage peaks at **13 – 14.8 GB**
-   Some users have successfully trained with **8GB VRAM** (see settings below), but it can be extremely slow (**60+ hours** for **2000 steps** was reported!)
-   Fine-tuning can be accomplished with **24GB VRAM** with the **batch size of 1**.

Trying to train with **8GB-10GB of VRAM?** Try these settings! Success isn’t guaranteed though!

-   Enable Gradient Checkpointing
-   Enable Memory efficient attention
-   Set LR Scheduler to Constant
-   Use Optimizer AdamW8bit
-   Set the Network Rank (Dimension) LOW – higher than 24 may not be possible
-   Reduce the input image size! **768×768** images, or even **512×512** significantly reduce the VRAM requirements, _with a quality trade-off._

### Colab Training Requirements

Google Colab is a free\*, cloud-based platform for data analysis and machine learning. It allows users to write and execute Python (and other) code in a virtual [**Jupyter Notebook**](https://jupyter.org/) environment. In terms of AI and Stable Diffusion specifically, it _**allows us to run applications**_ _**which we don’t have the hardware (graphics card, memory, etc.) to run locally**_.

To get started with Google Colab, simply navigate to [**colab.research.google.com**](https://colab.research.google.com/) and sign in with your Google account. Once you’re signed in, you can create a new notebook by clicking on the “New Notebook” button, however – _**many pre-built notebooks exist for specific purposes**_ – this is where Colab shines.

?? However, it appears that **SDXL** training _**~~cannot be accomplished on the free Colab tier~~**_, and does require a paid [**Colab Pro account**](https://colab.research.google.com/signup), due to the high RAM and VRAM requirements for training.

**8/17 – I’m reading that free-tier training is now possible! Update soon!**

There are a few good options for Colab training workbooks;

-   [Camenduru’s Kohya\_ss Colab](https://colab.research.google.com/github/camenduru/kohya_ss-colab/blob/main/kohya_ss_colab.ipynb)
-   [Johnson’s Fork Koyha XL LoRA Trainer](https://colab.research.google.com/github/MushroomFleet/unsorted-projects/blob/main/Johnsons_fork_230727_SDXL_1_0_kohya_LoRA_trainer_XL.ipynb) (Very good LoRA training Colab – used below!)
-   [Linaqruf’s Native Training (Requires A100 GPU)](https://colab.research.google.com/github/Linaqruf/kohya-trainer/blob/main/kohya-trainer-XL.ipynb)
-   [Linaqruf’s SDXL LoRA Training (Fine-tuning Method)](https://colab.research.google.com/github/Linaqruf/kohya-trainer/blob/main/kohya-LoRA-trainer-XL.ipynb)

## How to use a Colab Workbook (Basics)

Think of a Colab Notebook as a **workflow** – we start at the top of the page and perform tasks as we descend. We might not perform _**all** of_ the tasks – some might not be necessary for our needs, but generally by the time we reach the last step, our Colab environment will be prepared and ready to perform whatever purpose the Notebook was created for.

There are a number of general concepts which we should understand when looking at a Colab notebook, because they can _**look**_ fearsomely complicated;

### Steps (cells)

Each “**step**” is officially called a “**cell**”. A **notebook is a list of cells**. Cells contain either **text**, or **executable code**.

an example of a cell;

![](/wp-content/uploads/2023/08/image-2-1024x167.webp)

To execute code in a cell, mouse over the **\[ \]** to the left of the cell and click the circular arrow “run” button.

<div data-embed="videopress" data-src="https://video.wordpress.com/embed/LIt4YPeX?cover=1&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="195"></div>

The code in the cell will execute, and in this case, will print out the result in the page.

After execution, you’ll see a _**green checkmark**_ to show the code within that particular cell has finished running successfully;

![](/wp-content/uploads/2023/08/image-3-1024x318.webp)

Some cells will perform multiple tasks, including downloading additional files, or installing dependencies. Note that these downloads and installs _are not affecting your local PC_ – they’re running “_inside_” the virtual notebook to which you’re connected, via Colab.

<div data-embed="videopress" data-src="https://video.wordpress.com/embed/68zr4e2m?cover=1&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="474"></div>

Sometimes cells are editable, and require inputs – usually file paths (see Google Drive Integration, below). To edit a cell you can double-click to enable a cursor.

### Copying Colab Notebooks

Since Colab Notebooks are just lists of Python instructions, **we can copy them to our own Google Drive**. This is useful if you’d like to edit someone else’s Colab, or it’s one you frequently use and don’t want the original author to change (break) it.

If you save a local copy in Google Drive to make changes, you can also view the Revision history by going to **File > Revision History**

![](/wp-content/uploads/2023/08/image-4-1024x970.webp)

### Sessions

Whether you’re running with a free or paid Colab account, you can view system usage and active Colab sessions. _**This is most important when you’re using paid Compute Units**_, as you should **always disconnect from your active session once you’ve finished** processing to avoid inadvertently using your precious Compute Units.

When you first open a Colab you’ll need to connect it up to Google’s resources. You can do so just by running the first code cell, or by connecting manually;

<div data-embed="videopress" data-src="https://video.wordpress.com/embed/QQ1dcMDG?cover=1&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="286"></div>

Once connected, you can view (and control) your active sessions from the “**Manage Sessions**” menu.

When you’re finished using the notebook, it’s best to either select “**Disconnect and delete runtime**”, or click the trashcan icon from the Active Sessions display.

![](/wp-content/uploads/2023/08/image-5-1024x947.webp)

![](/wp-content/uploads/2023/08/image-6-1024x263.webp)

### Google Drive Integration

Sometimes Colab notebooks require us to **upload files** from our local PCs, or **download output files** generated on the virtual notebook. Colab notebooks are integrated with Google Drive.

Depending on the notebook you’re using, the creator might have implemented code to connect to your Google Drive as part of the Colab workflow;

![](/wp-content/uploads/2023/08/image-7-1024x281.webp)

Or you might have to connect manually using the Folder icon on the left of the Colab page, and the Mount Drive icon. This will open a dialogue asking for confirmation to allow the connection between Colab and Google Drive.

![](/wp-content/uploads/2023/08/image-8-1024x674.webp)

![](/wp-content/uploads/2023/08/image-9-1024x386.webp)

Please be aware that connecting your Google Drive to a Colab without fully understanding what it does is a risky business! Please be careful of what the Colab is doing before agreeing to connect, as _once connected the Colab has full control over all your files_!

## Our Test Data Set

For this guide we’ve put together and captioned 15 images of everyone’s favorite Star Trek character, Jar Jar Binks. We have not cropped the images – they’re various dimensions.

![](/wp-content/uploads/2023/08/image-10-1024x360.webp)

The captioning is basic;

-   `JJBinks, Jar Jar Binks alien Gungan species, smiling`
-   `JJBinks, Jar Jar Binks alien Gungan species, playful`
-   `JJBinks, Jar Jar Binks alien Gungan species, scared`

Training images and captions can be downloaded here;

[67\_JJBinks](/wp-content/uploads/2023/08/67_JJBinks.zip)

## Training with Colab

Training on Colab is a little different than training locally. Many Colab workbooks have default settings set by the creators, including the one we’re using in this training example – [**Johnson’s Fork of the Kohya SDXL training Colab**](https://colab.research.google.com/github/MushroomFleet/unsorted-projects/blob/main/Johnsons_fork_230727_SDXL_1_0_kohya_LoRA_trainer_XL.ipynb). We can absolutely go through each workbook section and modify the settings to our desired settings, but in this case we’re going with Johnson’s defaults, which produce excellent outputs (See [Results](https://www.notion.so/SDXL-1-0-Training-Overview-4fb03d5b4cbf482ebe13ffef7bcb8ead?pvs=21)).

Johnson’s Colab is extremely straightforward – work your way down from the top, reviewing the settings at each section.

Note that you _WILL_ need a [Colab Pro](https://colab.research.google.com/signup) account ($10 USD per month subscription) to run this workbook – it _WILL NOT_ work with pay-as-you-go credits, due to the high RAM requirements.

![](/wp-content/uploads/2023/08/image-11-1024x464.webp)

<div class="columns">

<div class="column">

One section we need to customize is the Number of Repeats, Epochs, and Batch size, calculated for our number of images (**15**), aiming to hit **2000** steps.

Remember!

**Number of Images** \* **Number of Repeats** \* **Number of Epochs** = T**otal Number of Steps**

Total Number of Steps is divided by Train Batch Size!

If you have a batch of 2, it will train _**two steps (images) at once**_! If you have 2000 steps, and a batch of 4, it will show as 500 total steps!

</div>

<div class="column">

<figure class="alignright"><img src="/wp-content/uploads/2023/08/image-12-727x1024.webp" alt="" width="727" height="1024" loading="lazy"></figure>

</div>

</div>

Connected to a Tesla V100 Colab Pro Runtime, with Johnson’s default LoRA settings, our 2000 step LoRA took ~1 hour.

![](/wp-content/uploads/2023/08/image-13-1024x187.webp)

## Local Training with Kohya Trainer

We’re using the popular [kohya\_ss GUI](https://github.com/bmaltais/kohya_ss) (release v21.8.5), ([Windows installation instructions](https://github.com/bmaltais/kohya_ss#windows)). If you’ve used an older version of Kohya Trainer in the past, you’ll have to update, as there are SDXL Model specific settings which we need to be able to train against SDXL. Remember to set your SDXL Model path and check the SDXL Model box!

![](/wp-content/uploads/2023/08/image-14-1024x223.webp)

We’ve listed our recommended settings below which you can manually transpose into the Kohya settings page, or you can pre-populate Kohya with our settings by loading the .json (below) into the Configuration file section at the top of the Trainer interface;

![](/wp-content/uploads/2023/08/image-15-1024x154.webp)

[SDXLSettings](/wp-content/uploads/2023/08/SDXLSettings.zip)

Note that after loading our .json settings you will need to go back to set your folder paths, and SDXL model source directory to your own local paths.

### Recommended Local Training Settings

We’ve used the following settings to train ~15 SDXL LoRA now, including [Dragon Style](https://civitai.com/models/119157/sdxl-dragon-style) and [SDXL Food Icon](https://civitai.com/models/120126?modelVersionId=130611) and find them to produce quick, flexible, results, with moderate VRAM usage (13-14 GB).

Settings used in Jar Jar Binks LoRA training. If not mentioned, settings was left default, or requires configuration based on your own hardware;

Training against [SDXL 1.0 Base with VAE Fix (0.9 VAE)](https://civitai.com/models/101055)

**15** images x **67** repeats @ **1** batch = **1005** steps x **2** Epochs = **2,010** total steps.

**LoRA Type**: Standard
**Mixed Precision**: bf16
**Save Precision**: bf16
**Cache Latents**: True
**Cache Latents to Disk**: True
**Learning Rate**: 1
**LR Scheduler**: cosine
**LR Warmup (% of Steps)**: 0
**Optimizer**: Prodigy
**Optimizer extra arguments**: decouple=True weight\_decay=0.5 betas=0.9,0.99 use\_bias\_correction=False
**Max resolution**: 1024,1024
**Text Encoder learning rate**: 1
**Unet learning rate**: 1
**No half VAE**: True
**Network Rank (Dimension)**: 32
**Network Alpha**: 32
**Scale weight norms**: 1
**Additional parameters**: –max\_grad\_norm=0
**Gradient checkpointing**: True
**Use xformers**: True Noise offset: 0.0357

The Kohya GUI Guides page gives us an example Adafactor optimizer configuration;

```
optimizer_type = "adafactor"
optimizer_args = [ "scale_parameter=False", "relative_step=False", "warmup_init=False" ]
lr_scheduler = "constant_with_warmup"
lr_warmup_steps = 100
learning_rate = 4e-7 # This is the standard learning rate for SDXL
```

In testing, we’ve found these, and similar settings, result in _extremely high_ VRAM usage. More investigation is required!

## Misc. No-Context Tips!

> “_Get your batch size as large as you can with OOMing_” (out-of-memory-ing)
>
> Stability AI’s Joe Penna

## LoRA Result (Local Kohya)

[JJBinksColab](/wp-content/uploads/2023/08/JJBinksColab.zip)

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/08/image-16-797x1024.webp" alt="" width="797" height="1024" loading="lazy"><figcaption>Jar Jar Binks eating spaghetti</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/08/image-17-797x1024.webp" alt="" width="797" height="1024" loading="lazy"><figcaption>Line drawn Jar Jar Binks</figcaption></figure>

</div>

</div>

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/08/image-18-797x1024.webp" alt="" width="797" height="1024" loading="lazy"><figcaption>Court Justice Jar Jar Binks</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/08/image-19-797x1024.webp" alt="" width="797" height="1024" loading="lazy"><figcaption>Toddler Jar Jar Binks</figcaption></figure>

</div>

</div>

<div class="columns">

<div class="column">

<figure><img src="/wp-content/uploads/2023/08/image-20-797x1024.webp" alt="" width="797" height="1024" loading="lazy"><figcaption>Fantasy Panther Jar Jar Binks</figcaption></figure>

</div>

<div class="column">

<figure><img src="/wp-content/uploads/2023/08/image-21-797x1024.webp" alt="" width="797" height="1024" loading="lazy"><figcaption>Jar Jar Binks’ 8th Birthday</figcaption></figure>

</div>

</div>

![](/wp-content/uploads/2023/08/image-22-1024x583.webp)

## LoRA Result (Johnson’s Fork Colab) {#lora-result-johnson-s-fork-colab}

[JJBinksColab](/wp-content/uploads/2023/08/JJBinksColab.zip)

<div class="columns">

<div class="column">

![](/wp-content/uploads/2023/08/image-24-1024x1024.webp)

</div>

<div class="column">

![](/wp-content/uploads/2023/08/image-25-1024x1024.webp)

</div>

</div>

![](/wp-content/uploads/2023/08/image-26-1024x583.webp)

![](/wp-content/uploads/2023/08/image-27-1024x583.webp)
