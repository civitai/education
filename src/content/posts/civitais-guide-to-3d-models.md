---
title: "Civitai's Guide to 3D Models"
slug: "civitais-guide-to-3d-models"
date: "2026-10-26T21:30:00Z"
categories:
  - "civitai"
  - "guides"
tags:
  - "3d-models"
  - "generator"
  - "guide"
author: "civitai"
excerpt: "How to browse, view, download and share 3D models on Civitai, and how to generate your own with PolyGen (Meshy), Tripo and Hunyuan3D."
image: "/images/guides/3d-models/3d-models-cover.webp"
seo:
  title: "Civitai's Guide to 3D Models - Civitai Education"
  description: "Browse, view and download 3D models on Civitai, generate your own from text or an image, then publish, license and share them."
  ogImage: "/images/guides/3d-models/3d-models-cover.webp"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 10/26/2026 | First version. |

![A low-poly fox on a turntable, half shown as a glowing wireframe and half textured](/images/guides/3d-models/3d-models-cover.webp)

Civitai has a home for 3D models at [civitai.com/3d-models](https://civitai.com/3d-models). You can browse it without an account. If you sign in, you can also generate a 3D model in the on-site generator, save it, publish it, and add your own posts to a model's Gallery.

This guide covers browsing and viewing, downloading, generating, publishing, and sharing. There is one thing to know first: **3D models on Civitai are made in the generator.** There is no page for uploading a mesh you built elsewhere. You can start from your own image (Image to 3D), but not from a mesh. A model gets onto the site by being generated here and then published.

Generating needs a signed-in account and Buzz. Civitai.com is the safe-for-work site. On civitai.com, a result that is rated mature is hidden behind a "Mature Content" card with an **Unlock on civitai.red** button, and can't be posted there. See [Buzz Colors: Blue, Yellow and Green](/buzz-colors-blue-yellow-and-green/).

## Browsing 3D models {#browsing}

Open **3D Models** from the top menu, or go to [civitai.com/3d-models](https://civitai.com/3d-models). The feed works signed out. Each card has an eye button (**Preview in-line**) that opens the model inside the card, so you can spin it without leaving the page.

The feed controls are:

- **Sort**: Newest, Most Downloaded, or Most Liked. Most Liked counts thumbs up.
- **Filters**: open it, choose, then click **Apply**. Inside are a **Time period** (Day, Week, Month, Year, All Time) and **Modifiers**. **Animated** shows only models generated with animation. **Include PG-13** is for signed-in members on civitai.com, where the feed shows PG content by default.

Which models you see also follows your browsing level and your hidden tags and users. Civitai rates each model from its thumbnail, and the public feed leaves out a model until it has been rated. A model you just published may take a little while to show up.

Every creator's profile has a **3D Models** tab with the models they published.

## A 3D model page {#model-page}

Click a card to open the page.

- **The viewer** shows the model, and you can drag to rotate it. It previews GLB files. FBX files (for example Tripo with Quad topology) are never shown in the viewer: download them to open in your own 3D software. If a model has only an FBX file, the viewer area reads "No files yet", but the file list and Download still work. Files of about 100 MB or more show a "Large file" warning above the viewer. Move your pointer over the viewer (or tab to a control) to see its controls: a background picker (Plain, Studio, Light or Transparent), **Reset view**, and **Generate with this image**.
- **Variants.** A model made with animation can have Rigged, Animated, Walking and Running versions next to the Base mesh. Pick one to see it.
- **Files and Download.** A selector lists each file by variant and format. Pick one and click download. Each model counts one download no matter how many formats you take.
- **Details.** The generation settings the creator used: prompt, topology, target polycount, symmetry, PBR materials, mode, seed, animation and texture prompt, when they apply. For a model made from an image, the **Source image** is shown too.
- **Thumbs up, comments and reviews.** See [Reacting, reviewing and sharing](#social).
- **License.** The creator's license and a short set of permission icons.

**Generate with this image** captures the current view of the model and loads it into the generator as an image-to-image reference. It does not fill in the Image to 3D form. You need to be signed in.

## Generating a 3D model {#generating}

Open the [generator](https://civitai.com/generate) and choose **3D Models** in the Image, Video, Audio and 3D Models picker at the top. The workflow is called **Create 3D Model**, with two modes:

- **Text to 3D**: describe what you want. Only PolyGen (Meshy) can do this.
- **Image to 3D**: start from one image of the object. PolyGen (Meshy), Tripo and Hunyuan3D can all do this.

You choose the engine from the engine picker in the form. The prices below come from the generator's cost estimate at the time of writing, with default settings. They change, so check the cost button next to Generate before you run anything.

| Engine | Modes | About how much | What it offers |
| --- | --- | --- | --- |
| **PolyGen (Meshy)** | Text to 3D, Image to 3D | 1,041 Buzz | The most controls: polycount, topology, symmetry, texture prompt, animation. |
| **Tripo** | Image to 3D | 391 Buzz | Textured models from one image, with a face limit and a texture quality choice. |
| **Hunyuan3D** | Image to 3D | 161 Buzz | The cheapest way to try an image. |

The PolyGen figure is for Full mode, which is the default for Text to 3D. The Hunyuan3D figure is for version v2.1.

### Settings by engine {#settings}

| Setting | Engine | Options | Default |
| --- | --- | --- | --- |
| Mode (Text to 3D only) | PolyGen | Preview, Full. Preview is faster and cheaper. Full gives a higher-quality mesh. | Full |
| Prompt | PolyGen (text) | Up to 600 characters | |
| Enhance prompt | PolyGen (text) | Lets Meshy add descriptive detail | Off |
| Starting image | All (Image to 3D) | One image | |
| Generate texture | PolyGen (image), Hunyuan3D | On or off | On |
| Target polycount | PolyGen | 100 to 300,000, with presets 5k, 30k, 100k, 300k | 30,000 |
| Topology | PolyGen | Triangle, Quad | Triangle |
| Symmetry | PolyGen | Off, Auto, On | Auto |
| Texture | Tripo | None, Standard, HD | Standard |
| Quad topology | Tripo | Outputs FBX instead of GLB. FBX can't be previewed in the browser, and Post may fail with "hasn't been rated yet". | Off |
| Generate PBR maps | Tripo | On or off | Off |
| Face limit | Tripo | 1,000 to 500,000, or leave empty for Auto | Auto |
| Auto size | Tripo | On or off | Off |
| Texture alignment | Tripo | Original image, Geometry | Original image |
| Orientation | Tripo | Default, Align to image | Default |
| Model version | Hunyuan3D | v2.1, v2, v2 Mini | v2.1 |
| Prompt (optional hint) | Hunyuan3D | Up to 600 characters | |
| Steps | Hunyuan3D | 10 to 50 | 30 |
| CFG scale | Hunyuan3D | 0 to 20 | 5 |
| Octree resolution | Hunyuan3D | 256, 384, 512. Higher captures finer geometry. | 256 |
| Seed | All | Repeats a result | Random |
| Texture seed | Tripo | Repeats the texture result | Random |

Under **Advanced**, PolyGen also has **Remesh**, **Enable PBR textures**, a **Texture prompt** (up to 600 characters, for example "Weathered oak with bronze fittings"), **Animate** (a rigged mesh with a skeleton and animation) and **Seed**. Hunyuan3D has **Remesh** and **Enable PBR textures** there. The cost estimate did not add a surcharge for Animate when it was checked, but the cost button is the one to trust.

### Tips for a good start {#tips}

- For image to 3D, use one clear picture of one object, from the front or three-quarters, with a plain background.
- Start cheap. Run Hunyuan3D or a Preview-mode PolyGen first, then spend on a Full run once the idea works.
- Name what you want in the prompt: the object, its style, its material. "A low-poly fantasy treasure chest" gives the model more to work with than "a chest".

## From generation to a published model {#publishing}

A finished generation sits in your generator queue. Open the generator's **Queue** tab. The queue card shows a flat thumbnail. Click the cube button (**View in 3D**) to spin the model in the card, or the arrows button to open it full screen. A Tripo result made with Quad topology has neither: the card reads "FBX model ready", and you can only download it. From the card:

1. Click **Download** to take the files straight away. Results in the queue are temporary, and the download links are short-lived. Download or Post soon after the run finishes, because an old result may no longer be saveable.
2. Click **Post** to save the model to your library. This opens the **Edit 3D Model** page with the model saved as a **Draft**. Nobody else can see a draft, except moderators.
3. Give it a **Name**. It starts blank, so you must name it. You can add a **Description**, choose a **License** and add **Tags**, then click **Save**.
4. Before you publish, know that your prompt and generation settings are shown in **Details**, and for Image to 3D so is your source image.
5. Turn on the **Published** switch at the top. It stays off until the model has a saved name and a thumbnail image. Once it is on, the model is public.

You can switch **Published** off again at any time. The model leaves the public feed, and you can republish it later. The model's menu also has **Delete**, which removes it from your gallery. You can't undo a Delete yourself.

### Licenses {#licenses}

The **License** list says how others may use your model. It includes CC-BY 4.0, CC-BY-NC 4.0, Personal Use Only, No Commercial Print Farm, All Rights Reserved and Custom. A new model starts on All Rights Reserved. The page shows permission icons for the one you pick, and people see it on your model page. The Edit page has no box for custom terms, so choosing **Custom** gives your model a license with no text. Put any special terms in the **Description** instead, or pick one of the standard licenses. The older [Guide to Civitai Model Licensing Options](/guide-to-licensing-options-on-civitai/) covers licensing for checkpoints and LoRAs, which is a different system.

### Tags {#tags}

In the **Tags** field, start typing to search existing tags or press Enter to create a new one. Curated category tags are marked with a star.

## Reacting, reviewing and sharing {#social}

- **Thumbs up.** The thumbs-up button on a model page counts as a positive review. Click again to remove it, which also removes any review text you wrote. With no ratings, the Reviews row reads "No reviews yet". With one to four, it reads "Too few reviews".
- **Reviews.** Choose **Write a review** in the **Details** header, pick thumbs up or thumbs down (required), add details if you like, and click **Submit review**, or **Save and add images** to attach images in the post editor. You can only review a published model.
- **Comments.** The Comments section is under the description.
- **Gallery.** To share what you made with a model, click **Add Post** in the **Gallery** section lower on the page. It opens the post editor linked to that 3D model.
- **Tips.** The Buzz button on the page tips the creator.
- **Share.** The Share button on the page shares a link to the model.
- **Menu.** When you are signed in, the model's three-dot menu has **Save**, which adds it to one of your collections, **Hide this 3D model**, and **Report** for a model that breaks the rules.

## A worked example {#worked-example}

You want a treasure chest for a game prototype.

1. Open the generator and pick **3D Models**, then **Text to 3D**. PolyGen (Meshy) is the engine.
2. Type the prompt "A low-poly fantasy treasure chest" and set Mode to **Preview** for a first look at the shape.
3. Check the cost button, then click Generate.
4. When the result is ready, click the cube button on the queue card to spin it. If the shape is right, change Mode to **Full**, open **Advanced**, write the Texture prompt "Weathered oak with bronze fittings", and run again. A Full run costs more.
5. Click **Post**. On the Edit page, name it "Weathered Treasure Chest", add a description, choose a license that allows what you plan to do, add tags such as "chest" and "game asset", and click **Save**.
6. Switch **Published** on. Share the link or save it to a collection.

Someone who wants the chest can open the page, pick the Base file from the selector, and download it. If they make a render with it, they add it to the page with **Add Post**.

## Troubleshooting {#troubleshooting}

| What you see | Why, and what to do |
| --- | --- |
| The **Published** switch is greyed out | The model needs a saved name and a thumbnail image. Save the name first. |
| "Could not save your 3D model" when you click Post | "This 3D model hasn't been rated yet. Try again in a few minutes." usually happens with FBX-only results, such as Tripo with Quad topology. "This 3D model was rated mature. Unlock it with Yellow Buzz before posting." belongs to civitai.red. On civitai.com a mature result can't be posted. |
| "Generation failed", "expired" or "canceled" on a queue card | The card says your Buzz has been refunded. Run it again. |
| Published, but not in the feed yet | The public feed leaves out a model until its thumbnail has been rated. Check again in a while. |
| "Download unavailable" | No download link exists for the file you picked. Choose another format or variant. |
| "No files yet" in the viewer, or "This format isn't previewable" in a feed card preview | Usually the model has only an FBX file. Download it and open it in Blender or other 3D software. Otherwise the files may still be processing. |
| "Large file" | The file is about 100 MB or more. The viewer still loads it, but it may be slow. |
| "Failed to load 3D model" | The file could not load in the viewer. Refresh, or download the file instead. |
| Details shows Animation as "Requested", followed by "Unable to animate model" | Animation was requested, but the engine returned only the base mesh. |
| "Recommendation required" when reviewing | Pick thumbs up or thumbs down before submitting. |
| "Cannot review a 3D model that has not been published." | Reviews are only open on published models. |
| A model you expect is missing from the feed | Your browsing level, hidden tags or hidden users may be filtering it. On civitai.com, signed-in members can turn on **Include PG-13** under Filters. |

## I need more help {#help}

If something here does not match what you see, or a generation or publish fails in a way this page does not cover, contact Civitai through the [support portal](https://civitai.com/support).
