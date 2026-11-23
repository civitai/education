---
title: "Civitai’s Guide to Model Gift Links"
slug: "civitais-guide-to-model-gift-links"
date: "2026-11-09T18:00:00Z"
categories:
  - "guides"
tags:
  - "guide"
  - "creators"
author: "civitai"
covers:
  - "model-gift-links"
  - "gift-claim-limits"
reviewed: "2026-11-23"
image: "/images/guides/civitais-guide-to-model-gift-links/cover.webp"
excerpt: "How a creator can give free access to a paid or early-access model with a gift link, how to claim one, and the monthly and per-link limits."
seo:
  ogImage: "/images/guides/civitais-guide-to-model-gift-links/cover.webp"
  title: "Civitai's Guide to Model Gift Links - Civitai Education"
  description: "How a creator can give free access to a paid or early-access model with a gift link, how to claim one, and the monthly and per-link limits."
---

A creator who puts a model version behind paid access or an early-access window can give that access away for free with a **gift link**. Whoever claims the link gets the same access a buyer gets, and no Buzz changes hands.

This guide is about gift links for models. Gifting someone a membership is different; see [the membership guide](/civitais-guide-to-membership-tiers/#manage).

## If you are the creator {#creator}

Gift links work on a version with permanent paid access or a timed early-access window. Only the creator of the model can make gifts. Gifting free versions or comics is not supported.

To get there, open your models in Creator Studio and click the gift icon on a gated version's row. The Gift links page in Creator Studio (`/models/gifts`) lists all your links. There are two kinds of gift:

- **Multi-use link.** One shareable link. You set **Max claims** (up to 100, starting at 10, never unlimited), and you can add an optional **Expires** date and an optional note.
- **Single-use links.** Make up to 500 at a time with **How many**, each of which one person can claim. Each code is shown once when you make it, so copy it or download the CSV then.

You can see who claimed a link or a batch. You can revoke a link or a whole batch, which stops new claims right away. **People who already claimed keep their access.** You can also take back the access one claim granted. That claim's slot stays used, so a capped link cannot be reused, and that person cannot claim the same link again.

Claimers are told on the claim page that you can see that they claimed and can remove the gifted access.

## If you received a gift link {#claim}

1. Sign in to Civitai.
2. Open the gift link, or paste the code on the `/gift` page.
3. Click to claim. Claiming is always a click you make, never automatic.

You get what a buyer of that version would get: download and generation if the version sells download, or generation alone if the version only sells generation. If you already had access, or the early-access window has already ended, the claim succeeds without using up a claim, and you are not charged.

## If a claim fails {#fails}

A claim is refused if you own the model, if the model or version is unpublished, or if the link is revoked or expired. You also need an account that is set up, in good standing and has a verified email. If a link fails, ask the creator for a fresh one.

## The monthly claim allowance {#monthly}

The allowance belongs to the creator. A creator's gift links can be claimed a limited number of times per calendar month, counted across all of that creator's links (the month runs on UTC time). People who claim a link are not limited. The allowance depends on the creator's membership tier:

| Creator's tier | Claims of your links per month |
| --- | --- |
| Free | 3 |
| Founder or Bronze | 15 |
| Silver | 30 |
| Gold | 60 |

A claim that grants nothing new, such as claiming the same link again or claiming a version the person already has, does not count. A claim you remove no longer counts toward the month, although it still uses its slot on that link.

When your links reach the allowance, new claims are refused until the next month starts, and you get a notification. Someone who tries to claim sees "This creator's gift links have reached this month's limit." The Gift links page in Creator Studio shows how many claims you have used this month and when the count resets. Your **Usage limits** page shows the same count as "Gift claims of your links per month"; see [Usage limits on your account](/usage-limits-on-your-account/).
