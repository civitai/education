---
title: "LoRA Training Glossary"
slug: "lora-training-glossary"
date: "2023-08-24T19:29:38Z"
modified: "2024-08-21T06:01:45Z"
categories:
  - "glossary"
  - "training"
tags:
  - "generative-ai"
  - "glossary"
  - "lora"
  - "lora-training"
author: "civitai"
wpId: 1372
excerpt: "LoRA Training with Kohya (or other scripts) is full of confusing terminology – find some answers to what everything is here!"
image: "/wp-content/uploads/2023/08/output_00061_.png"
seo:
  title: "LoRA Training Glossary"
  description: "Explore our comprehensive LoRA Training Glossary for a clear understanding of Stable Diffusion and generative AI terms."
  ogImage: "/wp-content/uploads/2023/08/output_00061_.png"
  canonical: "https://education.civitai.com/lora-training-glossary/"
---

The ability to [train a LoRA](/using-civitai-the-on-site-lora-trainer/) is an amazing thing, whether you’re using [Civitai’s LoRA trainer](/using-civitai-the-on-site-lora-trainer/), or one of the popular [local training scripts](https://github.com/bmaltais/kohya_ss), but the technical descriptions for what each of the options _actually do_ are… **complicated!** This Glossary was created to bring together as many of these terms as possible in a _**single, searchable, list**_, offering short explanations of the most common LoRA training options!

Some of the terms below might be missing a description – this document is in a constant state of development to keep up to speed with additions and changes – it’s being worked on!

| Term | Tags | Description |
| --- | --- | --- |
| Kohya SS | User, Software | A set of training scripts by Kohya-ss for Stable Diffusion, allowing us to train DreamBooth, LoRA, Textual Inversion. No GUI! [Github link](https://github.com/kohya-ss/sd-scripts) |
| Tensorboard | Software | A visualization toolkit to track and visualize training metrics like loss and accuracy. Helps determine whether training is going well. |
| Configuration file | Software | After configuring Kohya scripts via the GUI, we can save our training settings in a Configuration file for easy subsequent training setup, or for sharing. |
| LoRA | Concept | [Low-rank Adaptation for Fast Text-to-Image Diffusion Fine-tuning research](https://github.com/cloneofsimo/lora) |
| Bmaltais | User | Owner of the Kohya GUI repository on Github. Provides a (primarily) Windows Gradio GUI for Kohya-ss's Stable Diffusion training scripts. The GUI allows easy creation of the necessary parameters for Kohya SS scripts to run. [Github link](https://github.com/bmaltais/kohya_ss) |
| Caption Extension | Configuration Setting | Captions can be in .txt or .caption file format. Beware - the default is .caption! |
| Captioning | Concept | The process of describing your input training images to help Stable Diffusion understand what it's looking at. Captioning can be done by hand, or via a number of Caption creation tools. |
| BLIP (Captioning) | Concept, Software | Bootstrapping Language-Image Pre-training for Unified Vision-Language Understanding and Generation (BLIP), created by Salesforce, is a solid, simple image-to-text processor. |
| GIT (Captioning) | Concept, Software | GenerativeImage2Text (GIT), first discussed in [this paper](https://arxiv.org/abs/2205.14100), was trained on 20 million image-text pairs, and further fine-tuned on TextCaps. Another robust image-to-text processor. |
| WD14 (Captioning) | Concept, Software | WD1.4 by SmilingWolf is a processor with a whole host of variations (including vit-tagger, convnext-tagger, vit-tagger-v2, convnext-tagger-v2, swinv2-tagger-v2). Trained on Danbooru images to various Epochs, with different filtering. An excellent image-to-text tagger |
| LoRA-LierLa | Concept, Model | LoRA for Linear layers and Conv2d layers with a 1x1 kernel |
| LoRA-C3Lier | Concept, Model | LoRA for Conv2d layers with a 3x3 kernel |
| Resizing (LoRA) | Concept, Software | LoRA can be Resized by altering the Network Dim, after training. |
| Image Folder | Configuration Setting | Training image directory |
| Output Folder | Configuration Setting | LoRA output directory |
| Regularization Images | Configuration Setting | Regularization images are images of the same class to the training data - but not the training data. They provide a Dampening effect, and prevent class-drift. Example; if training on images of a female celebrity, regularization images would be images of other women (same class), but NOT your celebrity. |
| Regularization Folder | Configuration Setting | Folder for Regularization images |
| Logging Folder | Configuration Setting | LoRA training metadata directory |
| Print Training Command | Configuration Setting | Shows the command which will be submitted to the Kohya-ss script when training begins. |
| Batch (Train batch size) | Configuration Setting, Concept | A "batch" is the number of training images to read at once. A batch of 2 will read, and train, two images simultaneously. When multiple pictures are learned at the same time, the accuracy for each picture will drop. The higher the batch, the shorter the learning time, but the training accuracy decreases. Many people increase the learning rate to compensate for higher batching. Additionally, the higher the batch size, the more VRAM is consumed. The default is 1. |
| Save Every N Epochs | Configuration Setting | We can save the progress as our LoRA trains by outputting each Epoch as it completes. If we specify that we want the LoRA to run for 10 Epochs, we can use this setting to output a LoRA file after every N Epoch completions. An extremely useful tool in testing our LoRA outputs! |
| Epoch | Configuration Setting, Concept | An Epoch is one learning iteration. If we have 20 data set images, and have specified we want to repeat those images 10 times, 1 epoch will be 20x10, resulting in 200 steps of training. |
| Mixed Precision | Configuration Setting | Weight data is originally 32bit units, but we can gain considerable VRAM savings by training with 16bit precision. LoRA can be successfully trained with FP16 (16bit precision). Bf16 is a format devised to provide the VRAM savings of FP16 with the accuracy of FP32 (32bit). Bf16 may only work on the latest generation GPUs. |
| Save Precision | Configuration Setting | Specifies the type of weight data to save the LoRA file as. Float is 32bit. The default is FP16. |
| Seed | Configuration Setting, Concept | A Seed can be specified to help replicate future training sessions, but note that not every Kohya process uses the Seed. There will be an element of unpredictability in each training session, even with a Seed specified. |
| Learning Rate | Configuration Setting | The larger the Learning Rate value, the faster the LoRA training, but the more details are missed during training. Low Learning Rates are typically desirable, to retain flexibility in the LoRA. |
| LR Scheduler | Configuration Setting | Learning Rate is a parameter of the Optimizer. A Learning Rate Scheduler adjusts the learning rate according to a predefined schedule during the training process. |
| Optimizer | Configuration Setting | The Optimizer controls how the neural network weights are updated during training. There are various options, and different LoRA guides will suggest different Optimizers and various associated settings. The most commonly used 1.5 Optimizer is AdamW8bit (the default), which uses the least VRAM and has sufficiently good accuracy. Alternatives include DAdapt, which automatically adjusts the learning rate as training progresses, and Adafactor, which incorporates both methods. |
| Buckets | Configuration Setting | With Koyha's LoRA training scripts, there's no need to pre-crop your training images to 512x512 (or 2.0's 768x768, or SDXL's 1024x1024). Bucketing will sort the images into various "containers" based on resolution and aspect ratio, as images of different sizes cannot be trained at the same time. Similarly sizes images will be grouped for training. |
| Text Encoder Learning Rate | Configuration Setting | While training, associates tokens (parts of your prompt) to blocks in the neural network. The default for this is 5e-5 (0.00005). Lowering this value can reduce unwanted objects showing up in your LoRA created images. If you can’t get things to appear which should have been trained into the LoRA, you’ve set this too low. |
| Unet Learning Rate | Configuration Setting | The Unet is like the visual memory of the neural network, and the thing that causes most problems with LoRA. It’s extremely sensitive, very easy to over and under-bake. The default is 0.0001 (1e-4) |
| Optimizer Extra Arguments | Configuration Setting | Some Optimizers accept (or require) extra command line arguments for specific features. Many LoRA guides will specify the values required for each Optimizer. |
| Network Rank (Dimension) | Configuration Setting | Also expressed as Net Dim or Rank. This setting affects the “power” of the model in displaying the concepts trained within. Higher values result in a larger LoRA and more training time, but may capture the element to be trained with better fidelity. |
| Network Alpha | Configuration Setting | Closely related to the Network Rank (Dim), the smaller the Network Alpha value, the larger the LoRA neural net weights. Can be used to Dampen, or "slow down" learning. Alpha of 16 and Network Rank (Dim) of 32 halves the Learning Rate. If Alpha and Network Rank are set to the same value, there will be no effect on Learning Rate. |
| Clip Skip | Configuration Setting | The Text Encoder uses a mechanism called "CLIP", make up of 12 layers (corresponding to the 12 layers of the neural network). Clip Skip specified the layer number Xth from the end. Clip Skip of 2 will send the penultimate layer's output vector to the Attention block. Unless the base model you're training against was trained (or Mixed) with Clip Skip 2, you can use 1. SDXL does not benefit from Clip Skip 2. |
| Noise Offset | Configuration Setting | First described by researchers at Crosslabs. A method of introducing true "darkness" (and highlights) into models at the training stage. See [Noise Offset for SD 1.5](https://civitai.com/models/10391/noise-offset-for-true-darkness-in-sd). Note that Noise Offset will increase dampening. A Setting of 0.1 will make a LoRA's colors more vivid. Default is 0. |
| Gradient Checkpointing | Configuration Setting | Enables intermediate saving of gradients, reduces overall training speed but uses less VRAM. Has no effect on the training results. |
| Persistent Data Loader | Configuration Setting | The data required for training (the latent images, etc.) is discarded (unloaded from memory) and reloaded after each epoch completes. Turning on Persistent Data Loader speeds up training, but uses significantly more VRAM to store the data continuously. |
| Memory Efficient Attention | Configuration Setting | When enabled, results in greatly lowered VRAM consumption while training, but is slower than Xformers. Default is OFF. |
| User Xformers | Configuration Setting | Xformers is a Python library which greatly trades speed for less VRAM usage. Turn this on if you have OOM errors. Defaults to ON. |
| Flip Augmentation | Configuration Setting | Artificially double the number of training images by performing a horizontal flip. If your data is not left-right symmetrical (which will be the case when training humans, subjects), this option should be avoided. |
| Color Augmentation | Configuration Setting | Artificially increases the number of training image variations by changing the image hue during learning; supposedly improving model fidelity. When enabled, Cache latents cannot be used due to the training images changing dynamically during training. |
| Shuffle caption | Configuration Setting | When enabled, Captions (comma separated) are shuffled to produce more captioning variation in the training data. We can "fix" a set number of leading tokens in place, not to be shuffled, using the Keep n tokens slider. |
| Keep n tokens | Configuration Setting | A slider allowing us to specify how many of our leading comma separated captions are excluded from caption shuffling. |
| Cache latents | Configuration Setting | To speed up the training process, pre-generate the latent representation of the training images in advance, and save into system memory. |
| Cache latents to disk | Configuration Setting | Cache the pre-generated latent images to disk, as temporary numpy .npz format files, saved alongside the training images. |
| v\_paramaterization | Configuration Setting | Must be checked when training against Stable Diffusion 2.0/768 base models. |
| Learn Dampening | Concept | The goal of training is (generally) to fit the most number of Steps in, without Overcooking. Certain settings, by design, or coincidentally, "dampen" learning, allowing us to train more steps before the LoRA appears Overcooked. Some settings which affect Dampening include Network Alpha and Noise Offset. |
| Unet | Concept | The Unet is the part of the model architecture which is the "visual memory" of the neural network. |
| Overcooking | Concept | See Overfitting |
| Overfitting | Concept | A model which tries to reproduce the training data too aggressively - resulting in a LoRA which is hard to work with, doesn’t follow prompts well. |
| Undercooking | Concept | See Underbaking |
| Underbaking | Concept | Underbaking is apparent when testing a LoRA and the effect is weak or needs to be pushed past 1.0 strength to show. In this case, training could benefit from more steps. |
| Training Set (or Data Set) | Concept | The images you will be passing into the interface to be trained into the LoRA. The data set can also include captions - files containing descriptions of your image contents. |
| TEnc | Concept, Software | The Text Encoder (TEnc) controls how the AI interprets text (prompts) while generating, and while training associates tokens (caption words) to blocks in the neural network. |
| Baking |     | The process of training a model, TI, LoRA, etc. |
| Steps | Concept, Configuration Setting | Total computed number of steps for training - # of images \* # of repeats \* # of epochs / batch size |
| OOM Error | Concept | Out of Memory (OOM) errors occur when the required VRAM for training exceeds the available VRAM on the GPU. Some LoRA training settings are designed to lower the amount of VRAM used, with a tradeoff in training speed. |
| v2  | Configuration Setting | Must be checked when training against Stable Diffusion 2.0 base models. |
| Everydream2 | Software | Training software, specializing in processing/training large data sets. [Github link](https://github.com/victorchall/EveryDream2trainer) |
