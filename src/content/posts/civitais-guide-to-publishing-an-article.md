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
excerpt: "Write, save, schedule, publish and edit an article on Civitai: the editor, the cover image, categories and tags, image scanning, and daily limits."
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

- **Account age.** An account must be at least 24 hours old before it can publish an article.
- **Daily limit.** You can publish up to 3 articles a day. The limit rises with your Creator Score: 5 a day at 1,000, 10 a day at 5,000 and 20 a day at 10,000.
- **Muted accounts.** If your account is muted, the Write an Article option is not shown.

## Start an article {#start-an-article}

There are two ways to begin:

1. Open the **Create** menu in the top navigation and choose **Write an Article**.
2. On the Articles page, press **Write an Article**. This button shows when the page has nothing to list, such as on an empty feed.

Either one takes you to the editor at `civitai.com/articles/create`.

## The editor, field by field {#the-editor}

The editor has the writing area on the left and the article settings on the right. On a phone, the settings follow the writing area.

### Title and content {#title-and-content}

- **Title.** Required, up to 100 characters. The placeholder suggests a style: "How to create your own LoRA".
- **Content.** Required. The editor has a toolbar that stays on screen as you scroll, with options for headings, text formatting, lists, links, images, videos, polls, colors, timestamps and blurbs.

An article with no content cannot be saved.

### Cover Image {#cover-image}

The cover image is required. The editor suggests a size of 850 by 400 pixels. The cover appears on the article's card in feeds and at the top of the article.

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

The buttons at the top of the settings column change with the state of your article.

| Button | What it does |
| --- | --- |
| **Save Draft** | Saves your work without making it public. Use it as often as you like. |
| **Publish** | Makes the article public, or starts publishing if images still need scanning. |
| **Schedule** | Publishes the article for you at a time you pick. |
| **Reschedule** and **Cancel schedule** | Change the time of a scheduled article, or return it to a plain draft. |
| **Publish now** | Shown on a scheduled article. Publishes immediately and cancels the schedule. |
| **Save** | Shown on a published article. Saves your edits to it. |

Until you publish, your article is a draft. Only you can see it. You can find your drafts on your own profile: open your articles page, and use the toggle to switch from published articles to drafts.

### Scheduling {#scheduling}

Scheduling is for articles that have never been published.

- Pick a time at least 10 minutes from now and no more than 3 months ahead. The time you pick is in your own time zone.
- Until the time arrives, the article stays a draft. It is hidden from everyone else.
- If you publish now or cancel the schedule, the scheduled time is dropped. A plain save of the draft does not change it.
- If something stops the article from going live, such as images that did not pass scanning, the schedule is dropped and the article stays a draft. You are notified.

An article that has already been published once cannot be scheduled.

## Image scanning {#image-scanning}

Images you embed in the article are scanned for content safety before the article goes public.

- If your article has new images, pressing **Publish** shows a window that says how many images need scanning. Press **Continue**.
- The article's status changes to **Processing**. Scanning can take some time. When it finishes, the article publishes automatically, and you get a notification.
- If an image is blocked for a policy violation, or fails to scan, the **Publish** button says so: "Cannot publish: 1 image(s) blocked (policy violation)." Remove or replace those images, and try again.
- Images that were already scanned in an earlier save are not scanned again.

## After you publish {#after-you-publish}

Open your article, and use the three dots menu at the top.

- **Edit** opens the editor at `civitai.com/articles/<id>/edit`. Change what you need and press **Save**. If you add new images, they are scanned first.
- **Unpublish** takes the article out of public view. You choose a reason from a list. You can publish it again later, and it keeps its original publish date.
- **Delete** removes the article. You are asked to confirm, because deleting cannot be reverted.
- **Report article** is for other people's articles.

An article that a moderator unpublished for breaking the Terms of Service cannot be republished. If you think that was a mistake, contact support.

## Tips for a good article {#tips}

- Give the title and the cover image the same care as the body. They are what people see in feeds.
- Choose the category first. It decides where people look for the article.
- Use headings so readers can scan.
- Save a draft early, then publish when you are happy with it.
- For a launch, schedule the article, and check it a few minutes before it goes live.

## Troubleshooting {#troubleshooting}

| What you see | Why, and what to do |
| --- | --- |
| "You need to wait 24 hours after creating your account to create articles." | Your account is under a day old. Try again tomorrow. |
| The publish or save is refused as "doing that too much" | You reached your daily article limit. It rises with your Creator Score. |
| The Publish button is disabled, with a message about blocked images | An embedded image was blocked or could not be scanned. Remove or replace it. |
| The article is stuck on Processing | Scanning is still running. It publishes on its own when it ends. |
| You cannot find the Schedule button | Scheduling is only for articles that have never been published. |
| You cannot republish an unpublished article | An article unpublished for a Terms of Service violation cannot be changed. Contact support. |

## I need more help {#help}

If something here does not match what you see, contact Civitai through the [support portal](https://civitai.com/support).
