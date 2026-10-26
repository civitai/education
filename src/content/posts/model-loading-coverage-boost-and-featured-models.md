---
title: "Model Loading: Coverage, Boost and Featured Models"
slug: "model-loading-coverage-boost-and-featured-models"
date: "2026-10-26T20:00:00Z"
categories:
  - "civitai"
  - "guides"
tags:
  - "generator"
  - "models"
  - "buzz"
  - "guide"
excerpt: "Which checkpoints you can generate with, what happens when a model is not loaded yet, what the Boost button buys, and what winning an auction does today."
image: "/wp-content/uploads/2025/03/coverage_anim.webp"
seo:
  title: "Model Loading: Coverage, Boost and Featured Models - Civitai Education"
  description: "How the on-site generator loads models: which checkpoints are covered, why a job can wait on a download, what the Boost button costs and does, and how Featured auctions work."
  ogImage: "/wp-content/uploads/2025/03/coverage_anim.webp"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 10/26/2026 | First version. Replaces the March 2025 coverage announcement. |

## What this guide covers

Civitai hosts hundreds of thousands of models, but the generator can only run a model that is **loaded** on its machines. A model that is not loaded has to be downloaded there first. This guide explains how that works now:

- which models you can pick ([coverage](#coverage))
- what happens when you pick one that is not loaded ([loading](#loading))
- what the **Boost** button buys and what it costs ([Boost](#boost))
- what winning a Featured auction does ([auctions](#auctions))

:::note
This replaces the March 2025 "full checkpoint coverage" system. That version tied access to a weekly top-200 auction and a popularity gauge. Neither decides what you can generate with anymore.
:::

## Coverage: which models you can generate with {#coverage}

A model is **covered** when the generator is able to run it. Coverage is about whether the model can run at all, not about whether it is loaded right now.

| Resource | Covered when |
| --- | --- |
| Checkpoints made by Civitai or listed as a default for an ecosystem | Always |
| Checkpoints served by an outside provider (most video and many image models) | Always. Nothing is downloaded. |
| Community checkpoints | The model is published, its ecosystem is supported by the generator, and it has a scanned SafeTensor weight file |
| LoRAs, embeddings, VAEs and similar | They match a supported ecosystem and file format |

Models that have been taken down or archived are never covered. Some ecosystems are locked to their own listed checkpoints, so community checkpoints for those cannot be generated with at all.

If a resource is not covered, the generator refuses the job with this message: **"Some of your resources are not available for generation"**, followed by the resource name.

## Loading: what happens with a model that is not loaded {#loading}

When you generate with a covered model that is not loaded, the job is accepted and **waits** while the model downloads into the generator. When the download finishes, the job runs. You do not have to do anything, and the download itself is free.

The generator tells you the state of each model in several places:

- **Resource picker.** A green dot marks models that are loaded. Models that are not loaded have no mark. Turn on **Loaded only** in the picker filters to hide the rest.
- **Model page.** A green dot on the version strip marks loaded versions.
- **Create button.** The corner badge says whether pressing it starts now.
- **Added resources in the generator.** Each row shows one of these labels: **Loaded**, **No download needed** (outside provider), **Not loaded**, **Queued to download**, or **Downloading** with a percentage.

:::note
These marks can trail reality by a short time. The labels in the generator itself are read live, but the dots in the picker and on model pages are stored values.
:::

While your job waits, the pending image shows a panel with the **lane**, your position in the line, the speed and an estimated time for the slowest download. The job sits in your normal generation queue the whole time. Cancelling it also removes its downloads from the line.

### Members and free accounts {#members}

Not everyone can start a download. This is the rule today:

| Checkpoint | Free account | Paid member |
| --- | --- | --- |
| Already loaded | Yes | Yes |
| Not loaded, and listed by Civitai or an auction winner | Yes | Yes |
| Not loaded, and an ordinary community checkpoint | **No**, until someone has loaded it | Yes |
| LoRAs, embeddings and other non-checkpoint resources | Yes | Yes |

A free account that tries to generate with a community checkpoint that is not loaded gets the "not available for generation" message above. The same checkpoint works as soon as it is loaded, whoever loaded it. Paying for a membership lifts the restriction. See [Civitai's Guide to Membership Tiers](/civitais-guide-to-membership-tiers/) for what each tier includes.

:::caution
The model page can still show a **Create** button on a community checkpoint that is not loaded. A free account only learns it is refused after pressing Generate. Check the green dot, or use **Loaded only**, to avoid this.
:::

## The three download lanes {#lanes}

Downloads wait in one of three lanes. Each lane has reserved bandwidth, so the slowest lane keeps moving. Select the info icon next to the lane in the queue panel to see the explainer.

| Lane | Who gets it | Cost |
| --- | --- | --- |
| **Standard** | Free accounts | Free |
| **Priority** | Paid members | Free, included with membership |
| **Express** | Anyone, per generation, by pressing Boost | Buzz |

A position inside a lane never moves backwards, but a faster lane can still go ahead of you. Time estimates are best case and move with demand.

## Boost: the Express lane {#boost}

**Boost** moves a waiting generation's downloads into the Express lane, which has no speed cap. Use it when the estimate is long and you want the job to start sooner.

- **One price per generation.** Boost covers every download the job is waiting on, the checkpoint and any LoRAs together. The price depends on how much needs downloading and is shown on the button. This guide does not quote a number because it changes with the size of the model.
- **Before you generate.** When the generator sees that a download is needed, an alert at the bottom of the form shows how many resources need to be loaded, how long it will take, and a **Boost download** switch with its price. On phones the offer appears as a confirmation when you press Generate, with **Boost** and **Continue without boosting**.
- **After you generate.** The waiting panel offers **Boost this download** with a comparison of the usual wait and the boosted wait.
- **Only when it helps.** The offer appears only when the boosted time is visibly shorter than the normal time. Times under about 2 minutes are shown as 2 minutes.
- **No refund.** The boost fee is not refunded if you cancel the generation.
- **Price changes.** If the price changes between when you see it and when you press the button, nothing is charged and you are asked to press Boost again at the new price.
- **Payment.** Boost is paid from your Buzz balance. See [Buzz Colors: Blue, Yellow and Green](/buzz-colors-blue-yellow-and-green/) for how the colors work.

## Featured models and auctions {#auctions}

Auctions decide which resources are **featured**. They no longer decide what you can generate with.

Winning gives a resource:

- **Visibility.** It appears in the **Featured** tab of the resource picker in the generator. Safe-for-work winners also have a chance to appear on the front page.
- **Download priority.** A winning checkpoint is marked for priority when the generator has to download it.

There is a separate auction for **Featured Checkpoints** and one for each ecosystem's additional resources such as LoRAs. Each auction page shows its slots, the minimum bid and the time left.

### How to bid {#how-to-bid}

1. Open the **Auctions** link in the profile menu at the top right. You need to be signed in.
2. Choose an auction.
3. Pick the model with the model picker.
4. Enter a Buzz amount in **Place Bid**, or use the quick buttons: **1st** (enough to take the top spot), **Last** (enough to take the final spot) and **+10,000**.
5. To bid again every period, turn on **Make this recurring until** and pick an end date.
6. Press **Bid**.

Adding a bid to a model you already bid on increases your total. Track and cancel bids under **My Bids**. A bid you delete before the auction ends is refunded. Bids on models that do not win are refunded when the auction closes. A winning bid is spent.

## Worked example {#worked-example}

You want to generate with a community checkpoint you found on the Models page.

1. Open the model and check for the green dot on its version strip. There is none, so it is not loaded.
2. Open the generator and add the checkpoint. The row says **Not loaded**. On a free account, pressing Generate now fails with "not available for generation". You need a membership, or you wait until someone else has loaded the model. The rest of this example is for a member.
3. Before you press Generate, the alert at the bottom of the form says the download would take about 10 minutes, with a **Boost download** switch showing a price. You leave it off and press Generate.
4. The pending image shows **Waiting on downloads** in the Standard lane (or Priority, for a member), with your position in line.
5. After a few minutes you decide to speed things up. You press **Boost this download**. The panel shows the Express lane.
6. When the download finishes, the generation runs. The next time anyone uses that checkpoint, it shows **Loaded** and starts right away.

## Troubleshooting {#troubleshooting}

**"Some of your resources are not available for generation."** The resource is not covered, or you are on a free account and the checkpoint is a community checkpoint that is not loaded. Try another version, pick a loaded model, or check [membership](/civitais-guide-to-membership-tiers/).

**There is no Boost button.** Boost is only offered when it would visibly shorten the wait. If the model is already in the Express lane, or the estimate is short, nothing is offered.

**The estimate says nothing or shows a dash.** A download that has just started has no reliable estimate yet. It appears after a short time.

**The estimate was wrong.** Estimates are best case and move with demand. A model ahead of you in a faster lane can go first.

**I lost a bid and my Buzz is gone.** Bids on models that do not win are refunded when the auction closes. Check **My Bids** and your Buzz transactions.

**The green dot is missing for a model I know is loaded.** The dots are stored values and can trail by a short time. The label on the added resource in the generator is live.

## I need more help {#more-help}

- [Using Civitai: The On-Site Image Generator](/using-civitai-the-on-site-image-generator/)
- [Buzz Colors: Blue, Yellow and Green](/buzz-colors-blue-yellow-and-green/)
- [Civitai's Guide to Membership Tiers](/civitais-guide-to-membership-tiers/)
