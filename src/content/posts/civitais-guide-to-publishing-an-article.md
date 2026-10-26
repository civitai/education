---
title: "Civitai's Guide to Publishing an Article"
slug: "civitais-guide-to-publishing-an-article"
date: "2026-10-26T22:30:00Z"
categories:
  - "civitai"
  - "guides"
tags:
  - "articles"
  - "guide"
author: "civitai"
covers:
  - "articles"
  - "article-editor"
  - "article-scheduling"
  - "image-scanning"
reviewed: "2026-10-26"
excerpt: "Write, save, schedule, publish and edit an article on Civitai: the editor, the cover image, categories and tags, image scanning, and daily limits."
image: "/images/guides/civitais-guide-to-publishing-an-article/cover.webp"
seo:
  title: "Civitai's Guide to Publishing an Article - Civitai Education"
  description: "How to write and publish an article on Civitai: the editor fields, cover image, maturity level, scheduling, image scanning, editing, unpublishing and limits."
---

| **Last Updated** | **Changes** |
| --- | --- |
| 10/26/2026 | First version |

Articles are Civitai's long-form posts: guides, release notes, tutorials and write-ups that sit beside models and images. You write them in a built-in editor, and they are open to comments and reactions once they are published.

This guide covers how to start an article, what each field in the editor does, how saving, scheduling and publishing differ, what happens while your images are scanned, and how to edit, unpublish or delete an article afterward.

## Before you start {#before-you-start}

You need to be signed in. A few things can stop you from writing an article:

- **New accounts.** An account created today cannot create articles yet. Try again tomorrow.
- **Daily limit.** You can create up to 3 new articles a day. A new draft counts when you first save it. Publishing or editing an article you already saved does not count. The limit rises with your Creator Score: 5 a day at 1,000, 10 a day at 5,000 and 20 a day at 10,000.
- **Muted accounts.** If your account is muted, the Write an Article option is not shown.

## Start an article {#start-an-article}

There are two ways to begin:

1. Hover over the **Create** button in the top navigation, and choose **Write an Article**. Do not click the button, because a click opens the image generator.
2. On your own profile, open the Articles tab. If you have no published articles yet, a **Write an Article** button is shown there.

Either one takes you to the editor at `civitai.com/articles/create`. On narrow screens, such as phones, the Create dropdown is turned off and tapping Create opens the generator, so use the profile route there. After you save or publish, the editor takes you to the article's page.

## The editor, field by field {#the-editor}

The editor has the writing area on the left and the article settings on the right. On a phone, the settings follow the writing area.

### Title and content {#title-and-content}

- **Title.** Required, up to 100 characters. The placeholder suggests a style: "How to create your own LoRA".
- **Content.** Required. The editor has a toolbar that stays on screen as you scroll, with options for headings, text formatting, lists, links, images, videos, polls, colors, timestamps and blurbs.

An article with no content cannot be saved.

### Cover Image {#cover-image}

The editor asks for a cover image and will not save without one. The suggested resolution is 850 x 400 pixels. The cover appears on the article's card in feeds and at the top of the article.

### Category and tags {#category-and-tags}

- **Category.** Required. Pick the category that is the closest match to your subject, so people can find the article.
- **Tags.** Optional. Tags are how people filter content on the site, so tag the article with what it is about.

### Maturity Level {#maturity-level}

**Maturity Level** is your preferred rating for the article. The final rating is not only your choice. It is the highest of:

- the rating you choose,
- the ratings of your cover and content images,
- text moderation, and
- any NSFW reports that were acted on.

It updates on its own when those change. A question mark button next to the label opens the browsing level guide, and the content policy link is beside it.

### Attachments {#attachments}

Attachments are extra files for readers, such as training data or files too large or awkward to post as a model. You can add up to 10 files, each up to 30 MB. The accepted types are PDF, ZIP, JSON, YAML, text, Markdown and Python script files. Readers can download them from the article page.

## Save, schedule or publish {#save-schedule-publish}

The buttons at the top of the settings column (at the bottom on a phone) change with the state of your article.

| Button | What it does |
| --- | --- |
| **Save Draft** | Saves your work without making it public. Use it as often as you like. |
| **Publish** | Makes the article public, or starts publishing if images still need scanning. |
| **Schedule** | Publishes the article for you at a time you pick. |
| **Reschedule** and the **Cancel schedule** link | Change the time of a scheduled article, or return it to a plain draft. |
| **Publish now** | Shown on a scheduled article. Publishes immediately and cancels the schedule. |
| **Save** | Shown on a published article. Saves your edits to it. A published or unpublished article has no Save Draft or Schedule button. |

Until you publish, your article is a draft. Only you can see it. You can find your drafts on your own profile. Open the Articles tab (`civitai.com/user/<your username>/articles`) and use the toggle to switch from **Published** to **Draft**. Articles you have unpublished are listed under Draft too.

### Scheduling {#scheduling}

Scheduling is for articles that have never been published.

- Pick a time at least 10 minutes from now and no more than 3 months ahead. The time you pick is in your own time zone.
- Until the time arrives, the article stays a draft. It is hidden from everyone else.
- If you publish now or cancel the schedule, the scheduled time is dropped. A plain save of the draft does not change it.
- If something stops the article from going live, such as images that did not pass scanning, the schedule is dropped and the article stays a draft. You are notified.

An article that has already been published once cannot be scheduled.

## Image scanning {#image-scanning}

Images you embed in the article are scanned for content safety before the article goes public.

- If your article has new images, pressing **Publish** shows a window that says how many images need scanning. Press **Continue**. Scheduling skips this window.
- The article's status changes to **Processing**. Scanning can take some time. When it finishes, the article publishes automatically, and you get a notification.
- If an image is blocked for a policy violation, or fails to scan, the **Publish** button is disabled. Hover over it to see the reason, for example "Cannot publish: 1 image(s) blocked (policy violation). Please remove or replace these images." A scan failure reads "1 image(s) failed to scan". Remove or replace those images, and try again.
- Images that were already scanned in an earlier save are not scanned again.

## After you publish {#after-you-publish}

Open your article, and use the three dots menu at the top.

- **Edit** opens the editor at `civitai.com/articles/<id>/edit`. Change what you need and press **Save**. If you add new images, they are scanned first.
- **Unpublish** is on the article's own page. It takes the article out of public view right away, with no confirmation, and moves it to your drafts. Open it with **Edit** and press **Publish** to bring it back. It keeps its original publish date.
- **Delete** removes the article. You are asked to confirm, because deleting cannot be reverted.
- **Report article** is for other people's articles.

An article that a moderator unpublished for breaking the Terms of Service cannot be republished. If you think that was a mistake, contact support.

## A worked example {#worked-example}

Say you want to publish a short guide on captioning images for a LoRA.

1. Hover over **Create** and choose **Write an Article**.
2. Title: "How to caption a small LoRA dataset". It is well under the 100-character limit.
3. Write the content. Use headings for each stage, and embed two example images.
4. Cover Image: upload an image at about 850 x 400 pixels.
5. Category: pick the one closest to a how-to guide. Tags: add a few that describe the topic, such as the model type you train.
6. Maturity Level: leave it at the default if the article is safe for work. The final rating can still go up if your images or text call for it.
7. Press **Save Draft**. You land on the article page. Open the three dots menu and choose **Edit** to go back to the editor.
8. When you are happy, press **Schedule** and choose a time tomorrow morning, or press **Publish** to go live now.
9. If you pressed **Publish** and the article has new images, a window explains they need scanning. Press **Continue**. The article moves to Processing, and publishes when the scan finishes. You get a notification. A scheduled article skips this window, but its images still have to pass scanning before it can go live.

## Tips for a good article {#tips}

- Give the title and the cover image the same care as the body. They are what people see in feeds.
- Choose the category first. It decides where people look for the article.
- Use headings so readers can scan.
- Save a draft early, then publish when you are happy with it.
- For a launch, schedule the article, and check it a few minutes before it goes live.

## Troubleshooting {#troubleshooting}

| What you see | Why, and what to do |
| --- | --- |
| "You need to wait 24 hours after creating your account to create articles." | Your account was created today. Try again tomorrow. |
| "Failed to save article" with "You're doing that too much..." on the first save of a new article | You reached your daily limit for new articles. It rises with your Creator Score. |
| The Publish button is disabled | Hover over it. An embedded image may have been blocked or could not be scanned. Remove or replace it. |
| The article is stuck on Processing | Scanning is still running. It publishes on its own when it ends. |
| You cannot find the Schedule button | Scheduling is only for articles that have never been published. A published article shows only Save. |
| You cannot republish an unpublished article | An article unpublished for a Terms of Service violation cannot be changed. Contact support. |

## I need more help {#help}

If something here does not match what you see, contact Civitai through the [support portal](https://civitai.com/support).
