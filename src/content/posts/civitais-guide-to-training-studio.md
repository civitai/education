---
title: "Civitai’s Guide to Training Studio"
slug: "civitais-guide-to-training-studio"
date: "2026-10-26T20:00:00Z"
categories:
  - "guides"
  - "training"
tags:
  - "guide"
  - "lora-training"
author: "civitai"
image: "/images/guides/civitais-guide-to-training-studio/cover.webp"
excerpt: "Train a LoRA on Civitai with Training Studio: pick a base model, label your data, set steps, pay with Buzz, then watch each epoch arrive and publish the best one."
seo:
  title: "Civitai's Guide to Training Studio - Civitai Education"
  description: "A step-by-step guide to training a LoRA with Training Studio on Civitai: models, datasets and labels, settings, Buzz costs, results, and troubleshooting."
  ogImage: "/images/guides/civitais-guide-to-training-studio/cover.webp"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 10/26/2026 | First Version |

## What Training Studio is {#what-training-studio-is}

Training Studio is Civitai’s newer on-site trainer for LoRAs. You tell it what you are making (a character, a style, a concept or an effect), add your data, check the settings and price, and press start. While the run works, the page fills in: the step count climbs and each epoch appears with its sample images the moment it finishes.

It differs from the [classic on-site trainer](/using-civitai-the-on-site-lora-trainer/) in a few ways:

- **It follows a run while it trains.** You can open a finished epoch and generate with it while later epochs are still training, then compare epochs side by side.
- **It can label for you.** When auto-label is available, it adds labels in the format your chosen base model wants (tags or captions), and you are never asked to pick the format. See [Auto-label](#auto-label).
- **Steps are explained in plain terms.** Instead of a bare number, the Review step tells you how many times each image is seen, for example “each image seen ~100×”.
- **Nothing exists until you press start.** No half-built model page sits in your profile, and nothing goes public unless you publish it.

Training Studio is now the default trainer. The classic trainer is being phased out, so this is the one to learn. [Civitai’s announcement article](https://civitai.com/articles/35616) shows the same flow in a four and a half minute video, and this guide goes deeper on each step. It was written before the Studio became the default, so ignore its “off by default” line. Training Studio needs a login, so this guide describes each screen in words, using the labels you will see on it.

:::note
Training Studio still carries a **Beta** badge. It is on by default. If you would rather use the classic trainer for now, open [your account preferences](https://civitai.com/user/account/preferences), find the **Features** section and turn off **Training Studio**. You can turn it back on there at any time.
:::

## Before you start {#before-you-start}

- **A Civitai account.** Training Studio requires you to be signed in. Visiting [civitai.com/training-studio](https://civitai.com/training-studio) while signed out sends you to the login page.
- **Buzz.** Training costs Buzz, shown as a price before you commit. See [Paying with Buzz](#paying-with-buzz). If you are new to Buzz, read [Civitai’s Guide to Buzz](/civitais-guide-to-on-site-currency-buzz-%e2%9a%a1/) first.
- **A dataset.** For a character LoRA, 15 to 30 clear images of the same subject from different angles is a good start (the Studio warns below 10, see [Dataset sizes](#dataset-sizes)).
- **Content you may use.** Only train on images you made or have the right to use.

## The steps at a glance {#the-steps-at-a-glance}

| Step | What you do | What you see |
| --- | --- | --- |
| 1. Select | Pick media, type and a base model | Model cards with a “from” price |
| 2. Data & labels | Add files, review labels, set a trigger word | A grid of your files with tags or captions |
| 3. Review & start | Check steps, settings, sample prompts and price | A live price quote and the Start button |
| Results | Follow the run, compare epochs, publish | Epoch cards with sample images |

The Studio shows three steps in its header, and the results are a page of their own. Your list of runs, **My trainings**, is where you land when you open the Studio. **New training** starts the flow. The buttons that move you along are **Continue to data** and **Continue to review**.

## Step 1: Choose a type and a base model {#step-1-choose-a-type-and-a-base-model}

1. Choose the kind of media you are training. The picker offers **Image**, **Video** and **Audio**; this guide covers image and video. Audio models may not be offered to every account.
2. Choose a **type**: **Character**, **Style**, **Concept** or **Effect**. Effect is for video.
3. The Studio suggests a base model for that type (for image LoRAs, ZImage Turbo). Take the suggestion or pick another card.

The type matters in three ways. It picks the suggested model, it sets the dataset size the Data step recommends, and it sets the exposure target that the Review step uses to judge your step count (see [Step 3](#step-3-review-and-start)). It does not change any training setting. For video, the suggested model may differ from the image one. Take it or pick another card.

### Base models {#base-models}

Each card is a model family, and some have several versions. The newest version is selected by default. A card shows a short description and a “from” price. Only the featured cards show at first, so click **Show N more models** to see the rest, including SD 1.5, SDXL, Pony and Flux.1. Above the cards, the Studio tells you whether the model you picked trains on **tags** or on **captions**, because one dataset uses one or the other.

These are among the models you can train at the time of writing. The picker may show models not listed here, and some cards are limited to testers while they are rolled out:

| Model | Media | Labels | Good for |
| --- | --- | --- | --- |
| SD 1.5 (Standard and its variants) | Image | Tags | Small, fast LoRAs and older workflows |
| SDXL, Pony, Illustrious | Image | Tags | Wide checkpoint support, anime and stylized work |
| ZImage Turbo | Image | Captions | The Studio’s suggested model for image LoRAs, fast to train |
| Flux.1 Dev | Image | Captions | High quality and accurate text |
| Boogu, Krea 2, Mage-Flow | Image | Captions | Newer image models |
| Wan (text to video) | Video | Captions | Video LoRAs with a large LoRA ecosystem |
| LTX 2.5 | Video | Captions | Fast video with synced audio |

New models are added over time. The cards in your picker are the ones you can train, so trust those over any list, including this one.

:::note
Krea 2 cannot train its text encoder, and the Review step tells you so by locking that field. This is expected, not a bug.
:::

To train more than one model on the same dataset, open **Train an additional model**, then click **+ Add another model to train**. You can queue up to five runs on one dataset, and they are priced and started together.

SD 1.5 and the SDXL family (SDXL, Pony, Illustrious) also offer a **Custom** version, where you browse for a Civitai model or paste its AIR to use as the base. Other families always train on their official base.

## Step 2: Add your data and labels {#step-2-add-your-data-and-labels}

### Bring your files in {#bring-your-files-in}

There are four ways to add data:

- **Upload files.** Drop files on the page or click to browse. You can also drop a `.zip` of files with matching `.txt` label files.
- **From my generations.** Pick images you already made on Civitai.
- **Import .zip.** Bring in a zip of media with optional `.txt` labels, one per file.
- **Reuse a dataset** from an earlier training.

Files upload one by one and are scanned as they upload. Files the scan blocks are not trainable and show under the **Failed** filter. Accepted image types are PNG, JPG, JPEG, WEBP, GIF and BMP. Video models accept MP4, WEBM, MOV and MKV, plus images.

You can also use **Download .zip** to export your files with their labels as same-named `.txt` files.

### How many files {#dataset-sizes}

The Studio shows a green note when you reach the number it recommends for your type, and an amber one before that. These are recommendations, not hard stops.

| Type | Recommended minimum |
| --- | --- |
| Character | 10 |
| Style | 15 |
| Concept | 15 |
| Effect | 20 |

More varied, well-lit, correctly labeled files beat a larger pile of near-duplicates. Duplicate files are skipped when you add them.

### Labels: tags or captions {#labels-tags-or-captions}

Every file needs a label before you can continue. Which kind depends on the model:

- **Tags** are comma-separated booru-style words, like `1girl, red hair, outdoors`. SD 1.5, SDXL, Pony and Illustrious use them.
- **Captions** are natural sentences. ZImage Turbo, Flux.1, Boogu, Krea 2, Mage-Flow, Wan and LTX use them.

The Data step states which one it is using (“Auto-labeled as captions · free”). If a model can train on either, a **Tags** and **Captions** switch appears. None of the models listed above need it. If you switch after files are labeled, a dialog asks you to **Convert** the existing text (reformat, nothing re-labeled) or **Re-label** everything from scratch. Labels that arrived with your own files are kept either way.

### Auto-label {#auto-label}

Auto-labeling is free. Tags come from a tagging model and captions come from an image captioner. It has two modes:

- **Automatic** labels new uploads as they arrive.
- **Manual** labels only when you ask. A button labeled **Auto-label N** (N is how many files are unlabeled) appears above the file grid, and clicking it labels them. Manual helps when you want to write labels yourself.

:::note
Auto-label can be unavailable at times. When it is, you can still train: put matching `.txt` label files in your zip, or write each label in the label editor.
:::

If a file fails to label, it shows up under the **Unlabeled** filter. Click the pencil icon on its tile to open the label editor, then use **Re-run** to try again or type the label by hand. You cannot continue until every file has a label.

For tag datasets, **Never apply** takes tags you never want added, such as a watermark tag. Type a tag and press Enter.

### Edit labels {#edit-labels}

Click the pencil icon on a file’s tile to open the label editor, which steps through your files in order. Check a few labels against the images. The most common problem is a caption that describes something the image does not show.

### Bulk tag tools {#bulk-tag-tools}

For tag datasets, **Manage tags** lets you add, rename or remove a tag across the whole dataset in one move. Changes apply immediately and the last one can be undone. Use it to:

- add a style or character tag to every file,
- rename a tag that was spelled inconsistently,
- remove a tag that appears on every image but should not.

You can also jump from a tag to the images that carry it.

### Trigger word {#trigger-word}

The side panel has an optional **Trigger word**. It is added to the front of each label that lacks it, and highlighted where it already appears. The model learns to link that word to your subject, so you type it in prompts to call the LoRA. It helps most for characters. Some large and video models cannot train a trigger word, in which case it does nothing. The Studio checks the word when you start, and it will refuse a word that breaks the rules.

### Filters and mature files {#filters-and-mature-files}

Use the **All / Labeled / Unlabeled** filters to find gaps. If any files were rated mature by the upload scan, a **Mature** filter appears too, because that affects how you pay. See [Paying with Buzz](#paying-with-buzz). To learn what the ratings mean, read [Civitai’s Guide to Content Levels](/civitais-guide-to-content-levels/).

When every file is labeled, press **Continue to review**.

## Step 3: Review and start {#step-3-review-and-start}

This is the only step that spends Buzz.

### Steps and “each image seen” {#steps-and-each-image-seen}

Each run has a **Steps** field. Beside it, the Studio shows what that means for your dataset: **each image seen ~N×**, which is steps divided by your file count.

The starting value is a fixed budget for the model you chose (2,000 for most image models, 3,000 for LTX 2.5 and Boogu). It does not grow with your dataset, so a bigger dataset means each file is seen fewer times.

The type sets the target the Studio compares against:

| Type | Image target | Video target |
| --- | --- | --- |
| Character | ~35× | ~100× |
| Style | ~50× | ~150× |
| Concept | ~50× | ~150× |
| Effect | n/a | ~150× |

If your “seen” value is below about 60% of the target, the line turns amber and reads “low — we recommend ~N×; results may be weak, no refund”, where N is the target. Above that it reads “good for a character” (or your type). You can change the **Type** preset on this step to move the target, which changes only the guidance, not the settings.

Steps accept 1 to 10,000.

### Checkpoints (epochs) {#checkpoints-epochs}

**Checkpoints** are in the **Advanced training settings** panel (see below), and changing them does not forfeit your refund. They are called epochs in the results. They are save points spread evenly over the run. Each one becomes a downloadable, testable version. More checkpoints do not make training take longer, and they make it easier to find the best point. You can pick 1 to 20.

### Advanced settings {#advanced-settings}

Open **Advanced settings** on a run to see the values behind it. They are filled with the model’s recommended values, and hovering the (i) next to each field explains it. A few examples of the defaults, as of this writing:

| Model | Checkpoints | Learning rate | Rank / alpha | Resolution | Batch | Optimizer |
| --- | --- | --- | --- | --- | --- | --- |
| SDXL / Pony / Illustrious | 10 | 0.0005 | 32 / 32 | 1024 | 4 | Adafactor |
| SD 1.5 Standard | 10 | 0.0005 | 32 / 32 | 512 | 4 | Adafactor |
| ZImage Turbo | 10 | 0.0001 | 32 / 32 | 1024 | 2 | AdamW8Bit |
| Flux.1 Dev | 5 | 0.0005 | 32 / 16 | 512 | 1 | AdamW8Bit |
| Wan (text to video) | 10 | 0.0002 | 32 / 1 | 960 | 1 | AdamW8Bit |
| LTX 2.5 | 10 | 0.0001 | 32 / 32 | 960 | 1 | AdamW8Bit |
| Boogu | 5 | 0.0001 | 32 / 32 | 1024 | 1 | AdamW8Bit |
| Krea 2, Mage-Flow | 10 | 0.0001 | 32 / 32 | 1024 | 1 | AdamW8Bit |

Your Review step always shows the current values, so treat this table as a guide to what is normal, not a promise.

:::warning
Editing advanced parameters forfeits your refund. The defaults are tuned per model, and if you change them and the result is poor, the training is non-refundable. Steps and Checkpoints are not affected. Editing advanced fields requires ticking a box to confirm you understand.
:::

### Sample prompts {#sample-prompts}

Sample prompts are the test images the Studio generates at each checkpoint. They are what you compare later, so write them to test your LoRA:

- The Studio starts you with three, taken from random labels in your dataset.
- Add up to six in total. The seeded ones already carry your trigger word.
- Each should include your trigger word. A prompt without it shows a warning and an **Insert trigger** link.
- If you leave them all empty, no test images are generated and you will have nothing to compare.

Good set: one prompt close to a training image, one in a new setting, and one with a different outfit or style. If the LoRA only works on the first, it is overfit.

### Name, price and start {#price-and-start}

The optional **Name your LoRA** field sets the run’s title in My trainings (it defaults to your trigger word), and you can rename it later.

The panel on the right shows **What you’re starting**: type, dataset size, trigger word and sample prompts. Below it is the live **price quote**, with a time estimate. The quote is for your exact settings. If a run cannot be priced, Start is disabled until it can.

A failed run is refunded automatically.

## Paying with Buzz {#paying-with-buzz}

Training Studio charges your Buzz accounts in a fixed order:

1. **Blue Buzz is spent first.** Blue always comes first.
2. **Then Yellow or Green**, whichever you chose with the Buzz switch in the top bar. Yellow is Buzz you bought. Green is membership Buzz.

If your Blue Buzz does not cover the whole price, the Start button shows a confirmation with the amount that will come out of Yellow or Green.

Two cases work differently:

- **Mature datasets without a membership pay in Yellow.** If any file was rated mature (R or above), Blue Buzz cannot pay for the run without a paid membership. The Studio then charges the full price in Yellow, whatever Buzz you selected, and shows a note and a confirmation first. The **see which** link takes you back to the mature files.
- **Green requires safe-for-work content.** To spend Green Buzz you tick a box confirming the training will not produce NSFW content.

To see how membership works, read [Civitai’s Guide to Membership Tiers](/civitais-guide-to-membership-tiers/).

## Watch the run and use the results {#step-4-results}

After you start, you land on the run’s page.

### Progress {#progress}

The header shows the run’s state and a progress bar. Epoch cards stream in as each checkpoint finishes, each with its sample images. A run takes a while (the estimate on the Review step is a guide), so you can close the tab and come back from **My trainings**.

You can also see details on the page: number of checkpoints, when it was created, how long it trained, and an **Expires** date, because runs are kept for 30 days.

### Pick an epoch {#pick-an-epoch}

- The **Recommended** star marks the epoch with the most training applied. It is usually the best, but on small datasets a lower epoch can be better because high training can overbake the model.
- Click an epoch to see its sample images large.
- Switch to **Compare epochs** to see every sample prompt against every checkpoint in one grid. Read across a row to watch one image change from first epoch to last. Click a cell to open that epoch.

### Generate, publish, download {#generate-publish-download}

- **Generate** opens the generator with that epoch’s LoRA loaded, for image and video LoRAs. Audio LoRAs can’t be used in Create Music yet, so download or publish them instead. You can do this while the run is still training, as soon as an epoch has weights. Generating with an unpublished training result requires a Civitai membership, and the button tells you so if you do not have one.
- **Publish a model page** creates a draft model page on Civitai from the checkpoint you pick, which you then finish there. It is available once a checkpoint has downloadable weights. If you already have a draft model page for the run, publishing picks up where you left off. Nothing is public until you publish.
- **Download weights** saves one epoch’s file. You can also download every checkpoint’s weights or sample images as a zip, or the run’s settings as a `.json` file.

### Train further {#train-further}

If a finished run is not strong enough yet, use **Train further**. It continues from the recommended checkpoint with more training. It uses the same dataset and settings and starts a new run. Choose how many extra checkpoints (1 to 20), then confirm the quoted price. The results page lets you load earlier runs so you can compare across the whole chain.

### Your dataset {#your-dataset}

The **Training data** section on the results page has **Train again** (a new training with the same dataset) and **Download** (images with captions as a zip).

## My trainings {#my-trainings}

**My trainings** lists your runs as cards or a list, and you can filter by base model and status. Runs stay for 30 days. Publishing a model keeps the model on Civitai for good, though the run itself still leaves this list. Download or publish anything you want to keep before then.

From a card you can:

- **Remix** a finished run, which starts a new training with its dataset.
- **Retry** a failed run, which does the same. Failed runs are refunded automatically.
- **Delete** (the trash icon) a finished or failed run that has no model page, which removes it with its checkpoints and samples. This cannot be undone.

## Worked example: a small character LoRA {#worked-example}

Here is a full run for an original character called Mira, using 20 images and the ZImage Turbo model. Your numbers will differ with the model and dataset.

1. **Collect 20 images.** All show Mira, but vary the pose, angle, background and lighting. Remove blurry or cropped ones. Include a few close-ups and a few full-body shots.
2. **Select.** Choose **Image**, then **Character**. The Studio suggests ZImage Turbo, which uses captions. Keep it.
3. **Data.** Upload the 20 files. If auto-label is running, leave it on **Automatic**; otherwise use `.txt` label files or the label editor. The green note confirms you reached the character recommendation of 10.
4. **Check labels.** Open three or four images in the editor. Fix any caption that describes the wrong hair color, or that names a background the image does not have.
5. **Trigger word.** Enter `mira_oc`. It is prepended to every caption.
6. **Review.** The defaults for ZImage Turbo are 2,000 steps and 10 checkpoints. With 20 images that reads about “each image seen ~100×”, so the target of ~35× for a character is met. Each checkpoint is about 200 steps, so the ten epochs run from roughly 10× to 100× per image. That spread is what gives you something to choose between.
7. **Sample prompts.** Replace one of the three seeded prompts with `mira_oc, standing in a rainy street at night` to test a new setting. Keep one near a training image.
8. **Price.** Read the quote and the Blue-first note. If your dataset has no mature files, only the part Blue does not cover will come from Yellow or Green.
9. **Start training.**
10. **Watch.** Open the first epoch as it lands. If Mira already looks recognizable at epoch 3 and the rainy street prompt works, generate with it.
11. **Pick.** Open **Compare epochs**. Choose the earliest epoch where the face is consistent and new prompts still follow your words. If the last epoch makes every prompt look like a training image, it is overbaked, so pick an earlier one.
12. **Publish a model page**, add a cover image and description, and publish when you are happy with it.

## Tips and FAQ {#tips-and-faq}

### What is the best epoch? {#best-epoch}

The one where your subject is consistent and new prompts still work. The **Recommended** epoch is a good first guess. For small datasets, check an earlier one too.

### How many images do I need? {#how-many-images}

Start at the recommended numbers in [Dataset sizes](#dataset-sizes). Variety matters more than count.

### Do I need a trigger word? {#do-i-need-a-trigger-word}

Optional. It helps most for characters. It does nothing on models that cannot train one, and the Studio says so.

### Tags or captions? {#tags-or-captions}

The model decides. The Data step shows which one it uses, and only models that support both let you switch.

### When should I use the classic trainer instead? {#when-to-use-the-classic-trainer}

The classic trainer is being phased out, so use Training Studio where you can. You can switch Training Studio off under **Features** in your preferences to return to the classic trainer, described in [Civitai’s on-site LoRA trainer guide](/using-civitai-the-on-site-lora-trainer/), but it is being phased out. For terms like epoch, rank and learning rate, see the [LoRA training glossary](/lora-training-glossary/).

### How long do I keep my training? {#how-long-do-i-keep-it}

Runs are listed for 30 days. Download or publish what you want to keep.

## Troubleshooting {#troubleshooting}

| Problem | What to do |
| --- | --- |
| **Continue to review is disabled** | Every file needs a label. Use the **Unlabeled** filter, then re-run auto-label or type a label by hand. |
| **A file failed to upload** | Check the type is accepted, then use the **Retry** button on the failed tile. A **Failed** filter lists these files. Files blocked by the upload scan cannot be retried, so remove them. |
| **Auto-label returned nothing for a file** | Open it in the label editor and re-run, or write the label yourself. |
| **Start is disabled and the price shows a dash** | A run could not be priced. Check that Steps is filled in and between 1 and 10,000, or wait a moment and try again if the quote failed. |
| **I was charged Yellow, not Blue or Green** | Your dataset has mature files and you have no paid membership. See [Paying with Buzz](#paying-with-buzz). |
| **Start is disabled in Green mode** | Tick the box confirming the training will not produce NSFW content. |
| **Training is disabled** | A banner explains why. Training can be switched off temporarily. Try again later. |
| **Results look weak** | Check the “each image seen” line. The amber line also says “no refund”, so decide before you start. Below target means more steps or fewer images. Try a later epoch, or use **Train further**. |
| **Results look burned or copy the dataset** | Pick an earlier epoch, or train again with fewer steps or a lower learning rate. Editing advanced settings forfeits the refund. |
| **The trigger word does nothing** | Some models cannot train one. Describe the subject in your prompt instead. |
| **Generate asks for a membership** | Generating with an unpublished training result requires a membership. See [membership tiers](/civitais-guide-to-membership-tiers/) for what a membership includes. |
| **The run failed** | Buzz is refunded automatically. Use **Retry** from My trainings to start again with the same dataset. |

## Where to go next {#where-to-go-next}

- Watch the [Training Studio announcement and video](https://civitai.com/articles/35616).
- Learn the vocabulary in the [LoRA training glossary](/lora-training-glossary/).
- Once you publish, see [Uploading content to Civitai](/using-civitai-uploading-content/) for model page tips.
