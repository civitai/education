---
title: "Civitai’s Guide to Checkpoint Coverage, Featured Models, and the Auction System"
slug: "civitais-guide-to-checkpoint-coverage-featured-models-and-the-auction-system"
date: "2025-03-11T13:30:08Z"
modified: "2025-03-29T01:06:24Z"
categories:
  - "civitai"
tags:
  - "civitai"
  - "guide"
author: "civitai"
wpId: 6762
excerpt: "Civitai’s Guide to Checkpoint Coverage, Featured Models, and the Auction System!"
image: "/wp-content/uploads/2025/03/coverage_anim.webp"
seo:
  title: "Civitai's Guide to Checkpoint Coverage, Featured Models, and the Auction System - Civitai Education"
  description: "Civitai guide to Checkpoint Coverage and Featured Models! Find out what we're doing to enable all Checkpoints for use in the Generator!"
  ogImage: "/wp-content/uploads/2025/03/coverage_anim.webp"
  canonical: "https://education.civitai.com/civitais-guide-to-checkpoint-coverage-featured-models-and-the-auction-system/"
deprecated:
  date: "2026-10-26"
  replacedBy: "model-loading-coverage-boost-and-featured-models"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 3/10/2025 | First Version |
| 3/11/2025 | Post-Launch [F](/civitais-guide-to-checkpoint-coverage-featured-models-and-the-auction-system/)[A](#frequently-asked-questions)[Q](/civitais-guide-to-checkpoint-coverage-featured-models-and-the-auction-system/) Update |
| 3/17/2025 | Changes Reverted! |
| 3/28/2025 | Auctions 2.0 Launched! |

## **Checkpoint Coverage on Civitai – A History** {#checkpoint-coverage-on-civitai-a-history}

SiSince Civitai’s inception, one of our most persistent challenges has been hardware limitations – specifically, the number of GPUs available to power services like LoRA training, image generation, and image tagging. While we’ve always aspired to support _all_ Checkpoints for image generation, our infrastructure simply wasn’t ready.

Over the past year, we maintained support for approximately 200 of the most popular Checkpoints, prioritizing widely used models to deliver the best possible experience to the majority of users. But our long-term goal remained unchanged: full Checkpoint coverage.

Earlier this month (March 2025), we attempted to realize that goal. We launched a major update that expanded support dramatically, underpinned by improvements to our internal infrastructure:

-   A rapid increase in available GPU resources

-   Significant optimizations to our Orchestrator and Worker systems

-   New backend services built specifically to scale generation across thousands of models

Unfortunately, the rollout exposed unforeseen challenges. The surge in demand led to service instability that impacted the broader platform. After careful consideration, we made the difficult decision to roll back the changes to preserve the reliability of core services.

Since then, we’ve revisited and refined our approach. We’ve streamlined the rollout, further strengthened our infrastructure, and built in greater safeguards to ensure system stability.

Today, we’re pleased to reintroduce this initiative – this time with a more measured and sustainable plan. While the rollout may look smaller on the surface, it’s been carefully designed to scale responsibly. The path to full Checkpoint coverage remains the same, but we’re now taking each step with the benefit of experience and a stronger foundation beneath us.

The sections that follow will outline how the system works today and what to expect moving forward.

## **Model Usage & Dynamic Pricing** {#model-usage-dynamic-pricing}

When we first launched full Checkpoint coverage, we introduced a popularity-based system to help manage GPU resources efficiently across tens of thousands of models. This system featured a dynamic _**temperature gauge**_ indicator that visually represented a model’s usage level and influenced both GPU allocation and the cost of image generation;

**Dormant > Quiet Buzz > Underground Hit > Getting Hype > Taking Off > Crushing It > Buzzing!**

The goal was to prioritize resources for high-demand models – offering faster generation times and discounted pricing – while still making lower-use models available at a higher cost, reflecting the increased overhead required to load them on demand.

However, in practice, the system introduced unnecessary complexity. Dynamic pricing based on popularity led to confusion and created friction for users who simply wanted to generate images without worrying about fluctuating costs.

As part of our re-launch, we’ve retired the dynamic pricing model entirely.

What remains is the _model usage indicator_, which we’ve preserved in a simplified form. Now located more discreetly within the model details, the indicator continues to reflect relative generation activity- but it is **purely informational**. It does not affect pricing or GPU prioritization.

The usage levels – ranging from _Dormant_ to _Buzzing!_ – still provide a general sense of how actively a model is being used by the community. This can be helpful when exploring new content or gauging trends, but it no longer impacts your experience behind the scenes.

## Auctions & Checkpoint Availability {#auctions-checkpoint-availability}

To give the community greater influence over what’s available in the Generator – we’ve replaced the previous feature request system with the streamlined, repurposed **Auction System**.

Originally, model auctions were used solely to determine which models would be prominently featured on the site. Now, we’ve expanded that: **the Auction System directly determines which models are loaded into the Generator each week.**

Each week, users can bid on the Checkpoints they want to see featured. At the end of the bidding period, the **top 200 models** by bid ranking are selected and made available in the Generator for the following week. This approach allows the community to play an active role in shaping what’s accessible, while keeping the Generator responsive to real-time interest and demand – and not burning down our Datacenter.

![](/wp-content/uploads/2025/03/Screenshot-2025-03-11-093516.webp)

Here’s how it works:

-   **_Each week_, 200 model slots are available for Checkpoints.**

-   **Users can bid Buzz to push their favorite Checkpoints into a slot.**

-   **Bidding runs for 1 week and the top bids at the end of the period determine the next week’s Featured Models, and the models available on the Generator for the week.**

-   **The top 3 models earn Gold, Silver, and Bronze status, receiving extra high-visibility placement across the site.**

-   **Bids on models which don’t make it into the top 200 are refunded in full.**

To participate, users simply navigate to the new “**Auctions**” link in the main Profile-Picture Menu, on the top right of the page.

-   **Select the model they want to bid on from the Model Picker.**

-   **Enter a Buzz amount** to bid, or use the quick-bid tools:
    -   **“1st”** – Auto-calculates the amount needed to push the model into **first place**.
    -   **“Last”** – Auto-calculates the **minimum bid needed** to secure a Featured slot (200th place).

-   **If the model has existing bids, users can add their Buzz to boost it higher.**

### **Set and Forget: Recurring Bids**

Want to keep a favorite model featured without rebidding every week (or day, depending on the type of auction)? Users can enable **Recurring Bids**, which automatically re-bid a set amount each week until a chosen date.

-   Recurring Bids can be **paused or canceled anytime** from the **“My Bids” menu.**

-   This makes it easy for users to consistently **support their favorite models** without manually bidding every day.

### Featured Models

While the primary function of the Auction System is to determine which Checkpoints are made available in the Generator each week, it also powers our **Featured Models** system – bringing visibility and prominence to high-quality resources across the platform.

Each model ecosystem (SDXL, SD1.5, Illustrious, etc.) has **40 Featured slots** reserved for Additional Resources such as LoRAs, Textual Inversions, and Embeddings. These slots are populated through **_daily auctions_**, allowing creators to bid for feature placement.

Unlike Checkpoint auctions, which run on a weekly cycle, **Additional Resource auctions are refreshed every 24 hours**. Winning a slot means your resource has a chance to be\* prominently displayed on the Civitai homepage and surfaced within the Generator’s Additional Resources picker for that ecosystem.

Note that LoRAs and similar resources are always available for generation, regardless of auction status. However, participating in these auctions provides a valuable opportunity to boost visibility, drive discovery, and connect your creations with a wider audience.

**\* The top 5 resources from each Auction are added to the Homepage Featured Models homeblock, only if they’re Safe-For-Work, and do not depict a real person! All winning resources are added to the Featured tab of the resource picker;**

<figure><img src="/wp-content/uploads/2025/03/Screenshot-2025-03-28-181635-1024x1010.webp" alt="" width="1024" height="1010" loading="lazy"><figcaption><em>The Featured Models tab of the Generator</em></figcaption></figure>

## **Why Auctions?**

-   **More Community Control** – Featured Models are now chosen by users, not Civitai.

-   **Greater Accessibility** – No longer limited to those who can afford a flat 10,000 Buzz fee (the previous fee to get models Featured); many slots will cost a lot less.

-   **More Dynamic & Fair** – Models that users actively support get visibility, and all resources have a chance to be Featured.

This system keeps Featured slots fair, flexible, and open to everyone in a way that _reflects community demand_.

## **Frequently Asked Questions**

**Q**: Does a Checkpoint have to be in the top 200 winning bids to be able to use it in the Generator?
**A**: Yes. Each week 200 “slots” are open for Auction. The top 200 models bid upon during the week are pushed into the Generator for the following week.

**Q**: Can PG-13+ content be Featured?
**A**: Yes, content of any rating can be Featured, but only PG content will appear on the Homepage. PG-13+ content will appear in the Featured tab of the Generation Resource Picker, subject to the level filtering applied by the viewing user.

**Q**: Will there be Auctions for images? Articles?
**A**: Yes! We’re planning to expand the Auction system to give users full control over all featured content.

**Q**: Are all Flux finetunes available for Generation?
**A**: Not quite yet! The new Worker middleware we’ve rolled out does have support for these models, but it hasn’t yet been tested fully. We’re hoping to include full generation support for Flux finetunes in the coming days.

**Q**: What kind of Buzz can I use in the Auction system?
**A**: You can use Yellow Buzz to Bid on resources.

**Q**: How long are Checkpoints Featured?
**A**: Bids are placed for the following **week**. At midnight UTC on Friday, the top 200 models from the current week’s bidding are pushed into “Featured” status for the following week, and the Auction system resets. And Bids which didn’t meet the minimum will be refunded.

**Q**: How long are LoRAs and other Additional Resources Featured?
**A**: Bids are placed for the following **day**. At midnight UTC, the top 40 models from each ecosystem from the current day’s bidding are pushed into “Featured” status for the following day, and the Auction system resets. And Bids which didn’t meet the minimum will be refunded.
