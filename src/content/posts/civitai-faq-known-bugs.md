---
title: "Civitai FAQ & Known Bugs"
slug: "civitai-faq-known-bugs"
date: "2024-07-26T15:31:53Z"
modified: "2026-04-01T23:04:48Z"
categories:
  - "civitai"
tags:
  - "civitai"
  - "faq"
  - "guide"
author: "civitai"
wpId: 4089
excerpt: "Here we’ll answer some common questions which often appear via Featurebase Bug reporting, Discord, and the CivBot."
image: "/wp-content/uploads/2024/07/MarkuryFLUX_01318_.png"
seo:
  title: "Civitai FAQ & Known Bugs - Civitai Education"
  description: "A comprehensive list of Civitai FAQ & Known Bugs to help users get the most from Civitai.com! Frequently updated!"
  ogImage: "/wp-content/uploads/2024/07/MarkuryFLUX_01318_.png"
  canonical: "https://education.civitai.com/civitai-faq-known-bugs/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 11/10/2023 | New Answers! |
| 3/21/2024 | Known Bugs section added |
| 4/3/2024 | Image Generator Changes |
| 7/26/2024 | Updates to Known Bugs + CivBot Sections |
| 5/13/2025 | New Updates Feed |
| 4/1/2026 | Updated birthday section |

## This FAQ

In the Civitai FAQ & Known Bugs article we’ll answer some common questions which often appear via Our **[Ticket Portal](https://civitai.com/bugs)**, **[Discord](http://discord.gg/civitai)**, and the **[CivBot](/civitais-guide-to-civbot/)**.

### Known Bugs! {#civitai-s-birthday}

The best place to find out what’s happening is the [Updates feed](https://civitai.com/changelog). This page is the go-to source for all feature releases, bug fixes, known issues

![](/wp-content/uploads/2024/07/Screenshot-2025-05-13-103941-1024x514.webp)

<div class="columns">

<div class="column">

Click the **Updates** button to find out the latest information on the biggest issues the Dev team are working on!

</div>

<div class="column">

![](/wp-content/uploads/2024/07/Screenshot-2025-05-13-104130.webp)

</div>

</div>

### Civitai’s Birthday!

Civitai launched on **November 10, 2022** – and we’re now **3 years old**! Thank you to our incredible community for being part of this journey.

Read about our milestones along the way:

-   [Year 1](https://civitai.com/articles/2935/civitais-first-birthday-a-year-of-art-code-and-community) – Our first birthday and the launch of SDXL Image Generation
-   [Year 2](https://civitai.com/articles/8785) – Turning 2!

### Why did my LoRA fail to train on Civitai?

We’re sorry your LoRA didn’t complete training on the Civitai LoRA Trainer! We actually have checks in place to detect failures and re-submit failed processes, but sometimes there are training processes which don’t complete!

If you experience a failure while training with the Civitai LoRA trainer, don’t delete the failed run – contact the Community Managers via [Discord](https://dev.civitai.com/discord), or **support @ civitai.com** and we’ll look into it for you. Often, failed training runs can be re-queued.

Note that if you see a status of “Paused”, that means our safety scanners have flagged your training data for review by a human moderator. That process should take no longer than 48 hours at most, and your training will resume shortly after being reviewed.

![](/wp-content/uploads/2023/09/image-92.webp)

### Where do I go to train models?

Training models with the Civitai on-site LoRA generator is as simple as selecting **Train a LoRA** from the **Blue Create button**, on the top right of the [Civitai.com](https://www.civitai.com) page.

### What is the best way to tag/caption images when training a LoRA? {#what-is-the-best-way-to-tag-caption-images-when-training-a-lora}

The Civitai on-site LoRA Trainer has an excellent built-in image captioning tool! After uploading your images, you’ll be able to run the auto-captioner to produce danbooru style tags, or natural language captions (labels) for your images!

<div class="columns">

<div class="column">

![](/wp-content/uploads/2024/07/Screenshot-2024-11-26-180703.webp)

</div>

<div class="column">

![](/wp-content/uploads/2024/07/Screenshot-2025-02-03-234713.webp)

</div>

</div>

Check out the [on-site LoRA Trainer Guide](/using-civitai-the-on-site-lora-trainer/) for more information!

### Can you help me make a prompt?

If you’re new to prompting, we have a [Prompt-Crafting Guide for Beginners](/civitais-prompt-crafting-guide-part-1-basics/) here! ([http://education.civitai.com/civitais-prompt-crafting-guide-part-1-basics](/civitais-prompt-crafting-guide-part-1-basics/)) – and a Part II which follows on into Intermediate prompting territory.

You can check out any image on **Civitai.com** to read the prompt/metadata – most have it included!

You can also search inside prompts using the search bar at the top of the page, and the “image” filter!

![](/wp-content/uploads/2023/09/image-93-1024x480.webp)

### Why does the Image Generator now cost Buzz!?

A few reasons, but foremost because it costs a lot of money to run the Generator! We’re very grateful the site has become so popular and continues to see more users everyday, but servicing that many people is becoming increasingly expensive and value needs to be added to offset that cost.

We had considered just continuing to lower the generation limits but that would be a temporary fix, requiring more and more cut backs over time. This way we can **remove all generation limits**, in exchange for community content or revenue to keep the site running.

Having Buzz linked to generations has some other benefits. We can add much requested features like ADetailer, Hires fix, upscaling options, regional prompting, and img2img that were just too expensive to add previously. With generations having more value and buzz incentives for engagement, higher _quality_ images are encouraged to be posted over sheer _quantity._

### **How can I use the Image Generator without buying Buzz?**

It’s very important to us that our free users can continue to use the Generator. To that end all users receive a certain amount of **free Blue Buzz every 24 hours**, just for logging in and opening the Generator. Additionally we have many ways (and more are coming) for users to [earn Buzz](/civitais-guide-to-on-site-currency-buzz-%e2%9a%a1/) by reacting to images, posting content, having people like and collect your posts, and engaging with other site content.

### **How much Buzz does it cost to use the on-site Image Generator?**

Buzz costs vary based on how complex the chosen image Generation parameters are, the base model type (SD 1.5, SDXL, Pony), the additional resources selected, and the resolution.

We’ve also added a new **Draft Mode** to the Generator; utilizing SDXL Lightning and LCM technologies you can test your prompts at **1/4 the cost**; the trade-off being that outputs are slightly lower quality.

### How can I create a model?

The easiest way to create a LoRA is to use the **Civitai on-site LoRA Trainer**! More information can be found here – on the Civitai Education Hub; [http://education.civitai.com/using-civitai-the-on-site-lora-trainer/](/using-civitai-the-on-site-lora-trainer/)

### How do I get buzz? Can I buy buzz?

Buzz is the Civitai.com on-site Currency! You can read about what Buzz is, and how to get Buzz, [here.](/civitais-guide-to-on-site-currency-buzz-%e2%9a%a1/)

### Does Buzz Expire? If I become a Supporter does it roll over?

No, Buzz does not expire, and yes, if you pay to become a Civitai Supporter it will roll-over from one month to the next, without losing anything.

### There’s a problem with my buzz! {#there-s-a-problem-with-my-buzz}

If there’s a problem with your Buzz; it’s not calculating correctly, you didn’t receive it, it’s disappeared, etc., let our Community Managers know at **support @ civitai.com** or ask for help in the Civitai Discord!

### My models or images are not showing up!

If your images (or models) don’t show up, it’s often because our image tagging system, powered by **Amazon Rekognition** and **WD Tagger**, hasn’t “ingested” (processed) your image yet! A huge volume of images get uploaded to Civitai each hour, and the queue of images to be processed can get pretty long!

If you’ve waited and it still isn’t appearing, please reach out for assistance on the Civitai Discord or to one of the Community Managers.

### Are the Models I train on the Civitai LoRA Trainer private?

Yes and no! Yes, they’re private in the sense that they **won’t be exposed to other users** **unless you specify to upload the finished LoRA**.

Your files **_may_** be seen by our developers in the execution of their duties.

You can also read the full Civitai **Data Storage Policy** here – [https://civitai.com/content/training/data-policy](https://civitai.com/content/training/data-policy)

### Can I interrupt or stop LoRA training?

No, once you’ve started training with the Civitai on-site LoRA trainer you _cannot_ interrupt processing.

The little trash can icon can be used to remove trained models from your account _**after**_ training completes.

### Can I use a Celebrity LoRA on the Civitai Image Generator?

Currently **no**, you _cannot_ generate likenesses of real-world people on the Civitai Image Generator. Any model intended to produce the likeness of a real-person, and marked as such, will not show in the Image Generator, currently. Similarly, prompting for Celebrity names should be avoided.

This restriction **_does not apply_** to the Civitai on-site LoRA trainer. You can still train likenesses of real-world people and Celebrities – after attesting that you have permission to do so.

### Does Civitai have a DM (Direct Message) system?

You can send Direct Messages to another user with the Civitai DM system, accessible from the Chat Icon in the top right of the page. For more information on the DM system, please see [http://education.civitai.com/civitais-guide-to-direct-messages-dms](/civitais-guide-to-direct-messages-dms)

### I really need Moderator or Administrator Assistance!

When your question isn’t adequately addressed by CivBot and you need more help, please reach out to us on our Discord server, at [https://discord.gg/civitai](https://discord.gg/civitai). You can also submit feedback or receive support at [https://civitai.com/support](https://civitai.com/support) or email **support @ civitai.com**

### How do I Post an Image or Video?

There are **Post Images**, and **Post Videos** options in the blue “**Create**” menu, in the top right of the site menu bar;

![](/wp-content/uploads/2024/03/Screenshot-2024-03-27-112749.webp)

### Is there a Civitai App?

There is **not currently a dedicated mobile Android or iOS app for Civitai** – we’re only available online at Civitai.com!

### How can I send a Direct Message?

You can send Direct Messages to another user with the Civitai DM system, accessible from the Chat Icon in the top right of the page. For more information on the DM system, please see [http://education.civitai.com/civitais-guide-to-direct-messages-dms](/civitais-guide-to-direct-messages-dms)

### Does Civitai Have a Merchandize (Merch) Store?

Yes! You can buy Civitai branded merch at [https://shop.civitai.com](https://shop.civitai.com)! Grab a **Civitai Bikini** before they’re gone!

### Can CivBot be used as a Search Bar?

Sort of! CivBot can now make model (resource) recommendations! Simply ask him for model recommendations on a particular theme or topic;

![](/wp-content/uploads/2024/07/Screenshot-2024-07-26-112542.webp)
