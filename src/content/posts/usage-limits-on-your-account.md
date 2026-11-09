---
title: "Usage limits on your account"
slug: "usage-limits-on-your-account"
date: "2026-11-09T18:00:00Z"
draft: true
categories:
  - "guides"
tags:
  - "guide"
  - "account"
author: "civitai"
covers:
  - "usage-limits"
  - "account-settings"
reviewed: "2026-11-09"
excerpt: "Where to see how much of each daily or hourly limit you have used on Civitai, what the limit banner means, and what to do when you hit one."
seo:
  title: "Usage limits on your account - Civitai Education"
  description: "Where to see how much of each daily or hourly limit you have used on Civitai, what the limit banner means, and what to do when you hit one."
---

Some things on Civitai have a limit per hour or per day, such as posting or commenting. The **Usage limits** page in your account settings shows each limit that applies to you, how much of it you have used, and when it frees up.

## Where to find it {#where}

Open your account settings and choose **Usage limits** in the **Billing & access** group. The address is `/user/account/usage`.

## What the page shows {#shows}

- **Your plan.** A banner at the top shows your membership tier and your Creator Score, with a **Compare plans** button. Posting and comment limits rise with Creator Score, and posting limits also rise with membership.
- **One card per area**, such as posts or comments. Each card has a bar and a line like "x of y used". Times are shown in your own time zone.
- **When a card is full**, it usually shows when your next slot opens ("+1 at ...") and a muted "all free by ..." time, when everything is available again. Limits that reset on a calendar boundary, such as a monthly one, show a reset time instead, for example the start of the month in UTC. Each card also says whether its window is rolling or a UTC day or month.
- **If you have used part of a limit**, the card shows the same muted "all free by ..." time.

If no limit applies to you right now, the page says so.

## The limit banner {#banner}

If a limit is refusing you right now, an orange banner appears at the top of the page: "You've hit a temporary limit" for that area, with the time you can try again. It names the area and the retry time only.

## What to do when you hit a limit {#hit}

1. Open **Usage limits** and read the retry time on the banner or the card.
2. Wait until then. Most limits free up on their own. A card that says "Not available right now" is blocked outright, and waiting will not change that.
3. If you need more room, the plan banner explains the levers: a higher Creator Score raises posting and comment limits, and a membership raises posting limits. See [the membership guide](/civitais-guide-to-membership-tiers/) for the tiers.

## For scripts and tools {#api}

The same information is available as JSON from `GET /api/v1/me/limits`. A request refused by a limit gets HTTP status 429. When the limit frees up on its own, the response also carries a `Retry-After` header. Responses from some calls also carry `X-RateLimit-Limit`, `X-RateLimit-Remaining` and `X-RateLimit-Reset` headers (Reset is the number of seconds until a slot frees).
