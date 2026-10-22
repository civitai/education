---
title: "Using Civitai – Uploading & Sharing Content"
slug: "using-civitai-uploading-content"
date: "2023-09-05T23:28:43Z"
modified: "2025-01-24T01:10:05Z"
categories:
  - "beginner-guides"
  - "civitai"
tags:
  - "civitai"
  - "guide"
author: "civitai"
wpId: 1533
excerpt: "How to Get Started with Civitai! This guide focuses on Uploading Content, Posting Images and Writing Articles!"
image: "https://education.civitai.com/wp-content/uploads/2023/09/output_00187_.png"
seo:
  title: "How to Upload and Share Generative AI Images on Civitai"
  description: "Dive into our guide to find out how you can seamlessly upload and share your generative art through Civitai.com."
  ogImage: "https://education.civitai.com/wp-content/uploads/2023/09/output_00187_.png"
  canonical: "https://education.civitai.com/using-civitai-uploading-content/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 8/30/2023 | First version published |
| 1/25/2024 | UI Change – Create Button |
| 9/20/2024 | Real Person Acknowledgement |

1.  [The Basics](//using-civitai-uploading-content/#the-basics)
    1.  [Upload a model](//using-civitai-uploading-content/#upload-a-model)
        1.  [Step 1 – Create your model](//using-civitai-uploading-content/#step-1-create-your-model)
        2.  [Step 2 – Add version](//using-civitai-uploading-content/#step-2-add-version)
        3.  [Step 3 – Upload files](//using-civitai-uploading-content/#step-3-upload-files)
        4.  [Step 4 – Create a post](//using-civitai-uploading-content/#step-4-create-a-post)
        5.  [Step 5- Publishing](//using-civitai-uploading-content/#step-5-publishing)
    2.  [Post images](//using-civitai-uploading-content/#post-images)
    3.  [Write Articles](http://education.civitai.co/musing-civitai-uploading-content/#write-articles)

## The Basics

Perhaps you’ve used Civitai for some time and would now like to upload some of your awesome creations for the community – or you’re a new user and you want to jump right in and start sharing your images. Either way – this guide will walk you through getting your content uploaded to [Civitai.com](https://www.civitai.com)!

We’ve tried to make the interfaces for adding your content as simple as possible, but there are nuances and some slightly complex parts which could use a little explanation!

Uploading any content starts with the **Blue Create** button at the top right of the menu, details below!

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-25-100908-1024x291.png)

### Upload a model

After selecting “Upload a model” from the **Blue Create Button**, we’re presented with a four-step Wizard, which will walk us through creating our Model Card, uploading our model files, creating an image post, and publishing our model.

#### Step 1 – Create your model {#step-1-create-your-model}

<div class="columns">

<div class="column">

The first step is to create a Model Card and populate it with the model’s essential information.

Enter a **Name** for your model. This is what will be displayed as the “title” of the model page, and on the model card image in the model feed, search, etc.

Set the **Type** of resource you’re uploading – this can be anything from a trained LoRA model to a zip file of ControlNet poses.

Choose a **Checkpoint Type**, if applicable. This field will change based on the **Type**.

Choose a **Category** which describes the style/type of content you’re uploading.

Click the **+** under **Tags** and assign some appropriate tags to your model! Inaccurate tags may result in your model being reported.

Next, give your model a description – you don’t need to write much, but we do need a little text here. Explain what your model does, or how it was made, your motivations and goals for the content – users especially appreciate knowing a little about how to use your content, and what sort of results to expect.

We then need to set the Model Permissions. These options are split into two sections – Permissions for merging and sharing, and Commercial use permissions. Please note that these are **_guidelines_**, using the **honor system**, and Civitai _**will not**_ pursue legal claims on your behalf if you feel someone has disregarded your wishes as set forth here.

</div>

<div class="column">

![](http://education.civitai.com//wp-content/uploads/2023/08/image-71-658x1024.png)

</div>

</div>

-   **Use without crediting me** – Allows use without attribution to the original creator.
-   **Share merges of this model** – Allows the model to be merged into other models and re-shared.
-   **Use different permissions on merges** – Allows a merger to set their own permissions on their merged model, different from the original model.

-   **Commercial Use – None** – No commercial use whatsoever.
-   **Sell generated images** – Users may sell images generated with this model.
-   **Use on Civitai generation service** – Civitai may use the model on the on-site Civitai Image Generator.
-   **Use on other generation services** – Other generation services (off-site) may use the model for their own image generation services.
-   **Sell this model or merges** – Users may sell the model as-is, or merge the model with others and sell the result.

#### Real Person Acknowledgement

Lastly, and extremely importantly, if your model depicts a **real person**, or a character played by a real person, you must review the last section carefully.

![](http://education.civitai.com//wp-content/uploads/2023/09/Screenshot-2024-09-20-232357.png)

If your model was trained on real imagery of a living, or deceased, person, or depicts a character portrayed by a real-life actor or actress (e.g. Tom Cruise, or Tom Cruise as Maverick), you _MUST_ check the “**Yes**” box.

A model intended to produce adult content of a real-world person **is a violation of our [Terms of Service](https://civitai.com/content/tos).**

When “**Yes**” is checked, **_your resource cannot be used on Civitai’s on-site Generator, and NSFW content cannot be posted to the resource gallery._**

When “No” is checked, you may select either (or neither) of the following boxes.

By acknowledging this choice with the last checkbox and moving to the next step, you’re attesting that your choice is correct and appropriate, and affirming that you understand that **_you may forfeit your Civitai account should it later be found you answered untruthfully_**.

#### Step 2 – Add version {#step-2-add-version}

A model can have multiple versions included on the same card – some people release gradual updates to their work as a new Version, or “inpaint” versions of their models, etc. When we create a model card we explain what our model does, how it was made, and specify our monetization preferences.

First we add a name for our version. This defaults to **v1.0**.

We then specify our **Early Access** preferences. Early access puts the model version into a release queue only visible to [Civitai Supporter Tier Members](https://civitai.com/pricing) for the specified number of days. This allows for feedback to be collected prior to a full release to all Civitai members.

![](http://education.civitai.com//wp-content/uploads/2023/09/image.png)

We then select a **Base Model** and **Base Model Type**. These help categorize the model.

**Version changes or notes** can be a short description describing this particular version of the model, but it can be left blank.

**Trigger Words** may be required on some types of model to make it function. Specify them here. If your model does not need Trigger Words, toggle the “**This version doesn’t require any trigger words**” switch, and this entry will no longer be required.

![](http://education.civitai.com//wp-content/uploads/2023/09/image-1.png)

The next block details the **Training Parameters.** While this is _not required_ data, many users appreciate knowing how the resource was trained, and the recommended settings to produce good results.

![](http://education.civitai.com//wp-content/uploads/2023/09/image-2.png)

#### Step 3 – Upload files {#step-3-upload-files}

We can now upload our Resource files! In this step, simply drag and drop (or click the box to open the Windows file-select dialogue) your files onto the page. Accepted filetypes are **.ckpt**, **.pt**, **.safetensors**, **.bin**, **.zip**, **.yaml**, **.yml**, **.onnx**

![](http://education.civitai.com//wp-content/uploads/2023/09/image-3.png)

Different File Type choices will be shown _depending on the type of content uploaded_. In this example we’ve uploaded **Training Data images** in **.zip** format. Select the appropriate **File Type** from the list and click “**Start Upload**” to begin transferring your files to the Civitai servers.

![](http://education.civitai.com//wp-content/uploads/2023/09/image-4.png)

<figure class="alignright"><img src="http://education.civitai.com//wp-content/uploads/2023/09/image-5.png" alt="" width="345" height="289" loading="lazy"></figure>

Note that when uploading large files **_you can continue to the next steps of the Upload Wizard without interrupting the upload process_**.

If you complete the subsequent steps _before_ the resource is fully uploaded the model will be saved as a **Draft** until all files are finished uploading. You’ll receive a notification when the upload is completed.

#### Step 4 – Create a post {#step-4-create-a-post}

<div class="columns">

<div class="column">

All resources require an associated **image post**, with at least one image.

Drag and drop (or select) your example images to the page to begin uploading.

Acceptable file types for static images are **.png** and **.jpeg**

Animated images/video can be uploaded as **.mp4** and **.webm**

Before you can post your image Post (and publish your resource) you must select some Post Tags – these identify the types of images you’re uploading – they can be as simple as “**portrait**” or “**sci-fi**” – **all posts need at least one tag**.

</div>

<div class="column">

![](http://education.civitai.com//wp-content/uploads/2023/09/image-8.png)

</div>

</div>

#### Step 5- Publishing {#step-5-publishing}

When your uploaded resource has all the required constituent parts (**a valid model card**, **version**, **uploaded files**, and **Post**) you can move the movel out of **Drafts** into the **Public** realm, where it will be visible to the community and available for download. You can publish the model immediately, or schedule for a future timed release.

![](http://education.civitai.com//wp-content/uploads/2023/09/image-9.png)

![](http://education.civitai.com//wp-content/uploads/2023/09/image-10.png)

### Post images

Maybe you’ve created some exceptional images you’d like to share with the community? You can do so by making **[Image Posts](https://civitai.com/images)** of one, or many images. Images enter the main **Image Feed**, can be commented on and receive emoji reactions from the community. If the images contain an identifiable resource, Civitai will also showcase that image in the gallery of the resource.

Accepted image file types are **.png**, **.jpeg**, **.mp4**, and **.webm**

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-25-101319.png)

<div class="columns">

<div class="column">

All image posts should include the following;

A **Title**! Give your image a quick title and optional description.

**Tags** – images must have at least one descriptive Tag applied.

You’ll notice that if Civitai has detected site resources in your image metadata it will give you the option to **add quick review comments and stars** to these resources. We encourage you to do so!

Lastly, it’s extremely important to mark your content **Mature** (from the Mature checkbox) **_if it contains any sort of nudity, adult themes, nsfw, gore, etc_**. This helps us keep the site safe!

Lastly, **Publish** will make your image live/visible in the Image Feed! Head over to the **Feed**, filter by **Newest Images** to see your masterpiece!

</div>

<div class="column">

![](http://education.civitai.com//wp-content/uploads/2023/09/image-12-855x1024.png)

</div>

</div>

### Write Articles

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-25-101407.png)

The third way to interact with the Community is via [Articles](https://civitai.com/articles) – long (or short) format text (and images), perfect for tutorials, guides, news updates and showcases – we’ve provided a number of **Categories** for all manner of content types.

To post an article you need a **Title**, **Content** (the text of your Article!) , an exciting **Cover Image** to draw readers in, and a **Category** under which your Article will appear.

You can optionally **Tag** your article, and upload **Attachments** (any filetype, not exceeding 30 MB in size).

You can save your new **Article** as a **Draft** at any time, and come back to editing it later, until you’re ready to post. To find **Draft** articles, navigate to your Profile, select **Articles** from the top menu, then “**Draft**” on the left **Published/Draft toggle menu**.

![](http://education.civitai.com//wp-content/uploads/2023/09/image-14.png)
