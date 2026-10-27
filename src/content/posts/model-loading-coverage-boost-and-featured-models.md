---
title: "Model Loading: Coverage, Boost and Featured Models"
slug: "model-loading-coverage-boost-and-featured-models"
date: "2026-10-26T20:00:00Z"
categories:
  - "civitai"
  - "guides"
tags:
  - "generative-ai"
  - "buzz"
  - "guide"
excerpt: "Which checkpoints you can generate with, what happens when a model is not loaded yet, what the Boost button buys, and what winning an auction does today."
image: "/images/guides/model-loading-coverage-boost-and-featured-models/cover.webp"
seo:
  title: "Model Loading: Coverage, Boost and Featured Models - Civitai Education"
  description: "How the on-site generator loads models: which checkpoints are covered, why a job can wait on a download, what the Boost button costs and does, and how Featured auctions work."
  ogImage: "/images/guides/model-loading-coverage-boost-and-featured-models/cover.webp"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 10/26/2026 | First version. Replaces the March 2025 coverage announcement. |

## What this guide covers

Civitai hosts a very large catalog of models, but the generator can only run a model that is **loaded** on its machines. A model that is not loaded has to be downloaded there first. This guide explains how that works now:

- which models you can pick ([coverage](#coverage))
- what happens when you pick one that is not loaded ([loading](#loading))
- what the **Boost** button buys and what it costs ([Boost](#boost))
- what winning a Featured auction does ([auctions](#auctions))

:::note
This replaces the March 2025 "full checkpoint coverage" system. That version tied access to a weekly top-200 auction and a popularity gauge. Now any covered checkpoint can be loaded on demand. Auctions still matter for free accounts in one way, explained in [Members and free accounts](#members).
:::

## Coverage: which models you can generate with {#coverage}

A model is **covered** when the generator is able to run it. Coverage is about whether the model can run at all, not about whether it is loaded right now.

| Resource | Covered when |
| --- | --- |
| The default checkpoint for each model family in the generator | Always, unless the model has been taken down |
| Checkpoints served by an outside provider (for example many video models) | The model is published. Nothing is downloaded. |
| Community checkpoints | The model is published, it is built on a model family the generator supports, it is a standard checkpoint type (not an inpainting or other special type), it has a scanned SafeTensor model file, its license allows on-site generation, and it has not been blocked from generation |
| LoRAs, embeddings, VAEs and similar | They match a supported model family and file format, and the same license and creator settings allow generation |

Models that have been taken down or archived, and models flagged as depicting a real person, are never covered. Some model families (Flux.2 and HiDream, for example) use only the checkpoint Civitai lists for them. Community checkpoints built on those families cannot be generated with. A bid on one can still win a featured spot, but winning does not make it generatable.

If a resource is not covered, the generator refuses the job with this message: **"Some of your resources are not available for generation"**, followed by the resource name.

## Loading: what happens with a model that is not loaded {#loading}

When you generate with a covered model that is not loaded, the job is accepted and **waits** while the model downloads into the generator. When the download finishes, the job runs. You do not have to do anything, and the download itself is free.

The generator tells you the state of each model in several places:

- **Resource picker.** A green dot marks models that are loaded. Models that are not loaded have no dot, though a card's details show a **Generation** row with the current state. Turn on **Loaded only**, under Generator in the picker filters, to show only models marked loaded. Free accounts do not see community checkpoints that are not loaded in the picker at all.
- **Model page.** A green dot on the version strip marks loaded versions.
- **Create button.** The corner badge on a model page says **Recently loaded** or **Not recently loaded** (outside-provider models say **No download needed**), which tells you whether pressing it is likely to start now. The button and badge appear on a free account only for models it can generate with.
- **Added resources in the generator.** Each row shows one of these labels: **Loaded**, **No download needed** (outside provider), **Not loaded**, **Queued to download**, or **Downloading** with a percentage.

:::note
These marks can trail reality by a short time. The labels in the generator itself are read live, but the dots in the picker and on model pages are stored values.
:::

While your job waits, the pending image shows a panel with the **lane**, your position in the line, the speed and an estimated time for the slowest download. The job sits in your normal generation queue the whole time. Canceling it also removes its downloads from the line.

### Members and free accounts {#members}

Not everyone can start a download. This is the rule today:

| Checkpoint | Free account | Paid member |
| --- | --- | --- |
| Already loaded | Yes | Yes |
| Not loaded, and a model family default, an outside-provider model, a Featured Checkpoints auction winner (while the win lasts), or one of the 20 checkpoints that earned the most for their creators since the most recent Featured Checkpoints auction | Yes | Yes |
| Not loaded, and an ordinary community checkpoint | **No**, until someone has loaded it | Yes |
| LoRAs, embeddings and other non-checkpoint resources | Yes | Yes |

A free account that tries to generate with a community checkpoint that is not loaded gets the "not available for generation" message above. The same checkpoint works as soon as it is loaded, whoever loaded it. Paying for a membership lifts the restriction. See [Civitai's Guide to Membership Tiers](/civitais-guide-to-membership-tiers/) for what each tier includes.

:::caution
For a free account, the generator's picker leaves out community checkpoints that are not loaded, and a model's page shows no **Create** button for one. Model cards in the Models feed can still show a **Create** button on one, and pressing Generate then fails with the message above. To avoid this, start from a loaded model.
:::

## The three download lanes {#lanes}

Downloads wait in one of three lanes. Each lane has reserved bandwidth, so the slowest lane keeps moving. Select the info icon in the queue panel (it sits next to the Boost button while Boost is offered) to see the explainer.

| Lane | Who gets it | Cost |
| --- | --- | --- |
| **Standard** | Free accounts | Free |
| **Priority** | Paid members | Free, included with membership |
| **Express** | Anyone, per generation, by pressing Boost | Buzz |

A position inside a lane never moves backwards, but a faster lane can still go ahead of you. Time estimates are best case and move with demand.

## Boost: the Express lane {#boost}

**Boost** moves a waiting generation's downloads into the Express lane, which has no speed cap. Use it when the estimate is long and you want the job to start sooner.

- **One price per generation.** Boost covers every download the job is waiting on, the checkpoint and any LoRAs together. The price is shown on the button before you pay. This guide does not quote a number because it can change.
- **Before you generate.** When the generator sees that a download is needed, an alert at the bottom of the form shows how many resources need to be loaded, how long it will take, and a **Boost download** switch with its price. On phones the offer appears as a confirmation when you press Generate, with **Boost** and **Continue without boosting**.
- **After you generate.** The waiting panel offers **Boost this download** with a comparison of the usual wait and the boosted wait.
- **Only when it helps.** The offer appears only when the boosted time is visibly shorter than the normal time. Times under about 2 minutes are shown as 2 minutes. A job that is waiting only on a small LoRA gets no offer, because the offer needs a checkpoint download.
- **No refund.** The boost fee is not refunded if you cancel the generation.
- **Price changes.** If the price changes between when you see it and when you press the button, nothing is charged and you are asked to press Boost again at the new price.
- **Payment.** Boost is paid in Buzz. For how Buzz colors work, see [Buzz Colors: Blue, Yellow and Green](/buzz-colors-blue-yellow-and-green/).

## Featured models and auctions {#auctions}

Auctions decide which resources are **featured**. A member no longer needs an auction win to generate with a checkpoint. For a free account, winning the Featured Checkpoints auction still lets the checkpoint be loaded (see [Members and free accounts](#members)).

Winning gives a resource **visibility**. It appears in the **Featured** tab of the resource picker in the generator. Safe-for-work winners also have a chance to appear on the front page.

There is a separate auction for **Featured Checkpoints** and one for each ecosystem's additional resources such as LoRAs. Each auction page shows its **Spots**, the minimum Buzz (**Min**) and the time left (**Ends In**).

### How to bid {#how-to-bid}

1. Open the **Auctions** link in the profile menu at the top right. You need to be signed in.
2. Choose an auction.
3. Pick the model with the model picker.
4. Enter a Buzz amount in **Place Bid**, or use the quick buttons: **1st** (enough to take the top spot), **Last** (enough to take the final spot) and **+10k** (adds 10,000 Buzz).
5. To bid again every period, turn on **Make this recurring until**. Leave the date empty to repeat with no end, or pick an end date.
6. Press **Bid**.

Adding a bid to a model you already bid on increases your total. Track and cancel bids under **My Bids**. A bid you delete before the auction ends is refunded. Bids on models that do not win are refunded when the auction closes. So are bids on a model version that is not published by then. A winning bid is spent.

## Worked example {#worked-example}

You are a paid member and you want to generate with a community checkpoint you found on the Models page.

1. Open the model and check for the green dot on its version strip. There is none, so it is not loaded.
2. Open the generator and add the checkpoint. The row says **Not loaded**. (A free account would not see this checkpoint in the picker. If it started from a Create button in the Models feed, pressing Generate would fail with "not available for generation" until someone has loaded the model.)
3. Before you press Generate, the alert at the bottom of the form says the download would take about 10 minutes, with a **Boost download** switch showing a price. You leave it off and press Generate.
4. The pending image shows **Waiting on downloads** in the Priority lane, with your position in line.
5. After a few minutes you decide to speed things up. You press **Boost this download**. The panel shows the Express lane.
6. When the download finishes, the generation runs. While it stays loaded, the next person who uses that checkpoint sees **Loaded** and starts right away.

## Troubleshooting {#troubleshooting}

**"Some of your resources are not available for generation."** The resource is not covered, or you are on a free account and the checkpoint is a community checkpoint that is not loaded. Try another version, pick a loaded model, or check [membership](/civitais-guide-to-membership-tiers/).

**There is no Boost button.** Boost is only offered when it would visibly shorten the wait. If the download is already in the Express lane, the estimate is short, or the job waits only on a small LoRA, nothing is offered.

**The estimate says nothing or shows a dash.** A download that has just started has no reliable estimate yet. It appears after a short time.

**The estimate was wrong.** Estimates are best case and move with demand. A model ahead of you in a faster lane can go first.

**I lost a bid and my Buzz is gone.** Bids on models that do not win are refunded when the auction closes. Check **My Bids** and your Buzz transactions.

**The green dot is missing for a model I know is loaded.** The dots are stored values and can trail by a short time. The label on the added resource in the generator is live.

## I need more help {#more-help}

- [Using Civitai: The On-Site Image Generator](/using-civitai-the-on-site-image-generator/)
- [Buzz Colors: Blue, Yellow and Green](/buzz-colors-blue-yellow-and-green/)
- [Civitai's Guide to Membership Tiers](/civitais-guide-to-membership-tiers/)
