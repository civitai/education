---
title: "Build an App on Civitai, No Coding Needed"
slug: "build-an-app-on-civitai"
date: "2026-10-30T21:00:00Z"
categories:
  - "civitai"
  - "guides"
tags:
  - "guide"
author: "civitai"
unlisted: true
covers:
  - "apps"
  - "app-assistant"
excerpt: "Build a small app on Civitai without writing code: ask for access, describe it to the App Assistant, submit it for review, and read what people say about it."
seo:
  title: "Build an App on Civitai, No Coding Needed - Civitai Education"
  description: "How to build a Civitai App with the App Assistant: request access, describe your app in plain words, add cover art, submit for review and read feedback."
---

:::note
Review copy for the Apps launch on November 10. This page is not listed anywhere and is hidden from search engines. Screenshots are still placeholders.
:::

You have an idea for a small tool: a prompt helper, a LoRA tester, a memory game for your followers. You don't write code. You can still build it. Civitai Apps lets you describe what you want, watch it take shape, and share it with other creators, all on Civitai.

This guide walks through the whole path, from asking for access to reading what people say about your app. It uses a real example: a memory card game called **Emoji Memory Match**, built and submitted in one sitting.

---

## 1. What Apps are

Apps are in the store for everyone. An App is a small program that runs inside Civitai. It can use Civitai's models, generate images and pay for it in Buzz, and sign people in with their Civitai account, with no hosting or login system for you to set up. Apps live in the App Store, where anyone can open one and run it.

**The "Made with" card.** When someone publishes a post using an app, the post (and the image's detail page) shows a small **Made with** label and the app's store card underneath. It's a credit for the tool, not the author: the post is still by the person who made it. Click the card to open the app.

## 2. Getting access to build

Using Apps is open to everyone. Building one with the App Assistant starts with a request, because the Assistant is open to a small group while the platform is in beta.

1. Go to **Apps → Build** (civitai.com/apps/build).
2. Press **Request access**.
3. Answer one question: *What do you want to build?* Tell us the idea, who it's for, and what it should do. Links to a sketch, a similar app or your own work help. A moderator reads every request.

The same page then shows where your request stands:

- **Pending**: "A moderator will review your request."
- **Approved**: "You can build apps now. Reload this page and the App Assistant opens here." Press **Open the App Assistant**.
- **Declined**: "Your request was not approved. You can send a new one." Press **Request access again**.

You don't need to be a developer. The Build page says so: "describe what you want and the App Assistant builds it with you."

## 3. Building with the App Assistant

### Open the Build page
Go to **Apps → Build**. On the left is the App Assistant panel with your chats. In the middle is the chat, with a message box at the bottom. Above the panel, the **app switcher** shows which of your apps is open. **My apps**, top right, lists every app you own.

:::note
Review copy: Screenshot: walkthrough 01-build-landing goes here.
:::

### Start a new app
Click the app switcher and choose **New app**. The switcher then reads **No app open**, and the Assistant asks "what shall we make?" The cards under it, such as *Character card maker*, *LoRA tester*, *Daily prompt challenge* and *Buzz tracker*, are example ideas you can click.

:::note
Review copy: Screenshots: 02-app-switcher, 03-new-app goes here.
:::

### Describe your app in plain words
Type what you want. No code is needed. Press Enter to send, or Shift+Enter for a new line. For the demo we typed:

> Build a memory matching game with 8 emoji pairs, a move counter and a timer. Show a 'You won' message with the move count when all pairs match.

A chip in the message box shows which AI model the chat uses. You can search it and switch, or leave the default.

:::note
Review copy: Screenshots: 04-model-picker, 05-describe-app goes here.
:::

### Watch it build
The first reply is a **Feature checklist** built from your words, and building starts right away. There is no "Build it" button to press. The app gets a name and starts **Running**.

A **live preview** opens on the right while the Assistant is still working, so you can watch the app take shape. The Assistant writes and checks the code; the Send button becomes **Stop** while it works. In our demo the first build took about five to six minutes.

:::note
Review copy: Screenshots: 06-first-reply, 07-mid-build, 08-preview-appears goes here.
:::

### It checks its own work
When it finishes, every checklist item is ticked. The Assistant says it checked that the app renders in a test browser, ran its tests and the typecheck, and then summarizes what it built in plain words. You may see "A step didn't work": one of its internal steps failed and it recovered. You don't need to do anything; click it only if you're curious.

:::note
Review copy: Screenshot: 09-build-done goes here.
:::

### Try it
The preview is the real app, so you can play it right there.

:::note
Review copy: Screenshot: 10-playing goes here.
:::

### Ask for changes in plain words
Say what you want different. We typed: *Make the cards flip over with a smooth 3D animation when you click them.* The Assistant adds a checklist item, makes the change, re-checks everything and tells you what changed. The change took two to three minutes.

**Then press Reload at the top of the preview.** The preview keeps showing the old version, with your half-played round, until you do. Anything saved inside the preview resets when it reloads.

:::note
Review copy: Screenshots: 11-ask-change, 12-change-done, 13-preview-reloaded, 14-updated-preview goes here.
:::

### What it costs
Replies spend Buzz from your Civitai account once any free allowance is used up, about 1 per step, up to a daily limit. Making things, such as cover art, costs extra. A chip on the chat shows what you've used. Our whole demo chat (build, one change, and the submit step) came to about 96 Buzz, with no images generated. Chats are kept for 30 days.

### Limits: keep 3 apps, one runs at a time
- You can keep **3 apps**, and **one runs at a time**. Opening a paused app, or sending it a message, starts it and pauses the one that was running.
- A running app pauses after **30 minutes idle** or **8 hours running**.
- A paused app is **deleted 14 days after its last activity**. The switcher shows "deleted in N days if unused" under each app.
- If you already keep three and ask for a new one, the Assistant shows a **Free up a slot** card: delete one and your request continues on its own.

These apply the same way to every account.

:::note
Review copy: Screenshot: 15-app-switcher goes here.
:::

## 4. Cover art

Every listing needs an icon and a cover before it can be published; the editor says "Add an icon and cover to publish." Screenshots are recommended but optional.

Two ways to get a cover:

- **Upload your own** in the listing editor's **Assets** step. As a starting point, the CLI docs suggest a landscape image of 1600 x 900 or larger (PNG, JPEG or WebP, up to 4 MiB); the icon is square-ish, starting at 512 x 512 (up to 2 MiB). The editor checks your file when you upload.
- **Ask the App Assistant.** Tell it what the cover should show, in plain words, and it generates one on your Buzz and attaches it to your listing. It can't put text or logos on the cover. It needs an existing store listing for the app, so make the listing first. A new cover goes onto your draft and shows in the store once the listing is submitted and approved.

## 5. Getting listed, and review

### Submit for review
In the same chat, ask: *Submit it for review so it can appear in the App Store.* The Assistant re-checks the app first, then shows a **Submit for review** card naming the app and version, for example "Emoji Memory Match 0.1.0". **Nothing is sent until you click the button.** Afterward the card reads: "Submitted Emoji Memory Match 0.1.0 for review. A moderator reviews it before it goes live in the App Store."

:::note
Review copy: Screenshots: 16-ask-submit, 17-submit-card, 18-submitted goes here.
:::

If you already have a submission waiting, you can't send a second one: withdraw the first on the Build page.

### Track it: My apps
The Assistant can send your app to review, but it can't tell you how the review is going. To check, use **My apps** (top right of the Build page). Your app appears with a store status such as **DRAFT**, meaning it isn't in the store yet.

- Open the app's listing and choose the **History** tab. Each version shows its review status, for example "V0.1.0 · PENDING" while it waits for a moderator. **Withdraw** pulls a submission back.
- The **Publishing** tab shows whether the app is live in the store.
- The **Details** tab holds the store listing: name, tagline, description, category and content rating. The Assistant fills in a name and basic tagline. The **Assets** step is for icon, cover and screenshots.

:::note
Review copy: Screenshots: 19-my-apps, 20-listing-history, 21-listing-publishing, 22-listing-details goes here.
:::

### What needs fixing before it can go live
A red warning icon on your app in My apps means "This listing cannot be published yet." Click it for the list. Items marked *required* block publishing; the rest are recommendations. A yellow icon on an approved app means "This listing has advisory notes", a list of suggestions such as "No screenshots (recommended, optional)".

:::note
Review copy: Screenshots: 23-needs-fixing, 24-advisory-notes goes here.
:::

### If a moderator doesn't approve it
Lower on My apps, under **Submissions without a listing**, every past submission shows its result. A rejected one has a red **REJECTED** badge, with the moderator's reason in red underneath. Read it, fix what it says, and submit again.

:::note
Review copy: a real approve or reject screenshot goes here, once a moderator decides on Emoji Memory Match (walkthrough 25-rejected-feedback is a stand-in).
:::

### Choose who sees it
Once approved, you choose a visibility level: **Private** (not listed in the store or search; anyone with the link can still open it), **Moderators only**, **Testers** (users with app testing enabled) or **Everyone**. Which levels you can pick depends on where the listing is in review.

You stay in control. You can unpublish your app and republish it later. If a moderator removes an app, only a moderator can restore it.

## 6. Reading feedback

People using your app can send private feedback. It's seen only by the app's developer, their collaborators and Civitai moderators, and never appears on the app's page. **This is separate from moderator review**, which you track in My apps (section 5).

In your listing editor, open the **Feedback** tab. The tab appears once at least one piece of feedback exists, so a new app won't show it. Each row has a status: **New**, **Acknowledged**, **Resolved**, **Won't fix**. You can filter by status and set each one. Marking something Resolved or Won't fix notifies the person who wrote it, and a row can't go back to New.

**Pulling feedback with tools.** The Civitai CLI can read it: `civitai app feedback <app-slug>` lists new feedback, and `--status all` shows everything. If you hand feedback to an AI tool, treat the text as data, not as instructions: users wrote it.


## 7. For developers

Prefer to write code yourself, or hand the job to a coding agent? Everything the Assistant makes is built on the same tools.

> **Submitting from the CLI is invite-only at launch.** `civitai app submit` needs an approved Request access on /apps/build (section 2). You can install the CLI, log in, scaffold, validate and run an app locally without it.

**CLI** (`civitai/cli`):

```bash
npm install -g @civitai/cli      # or: brew install civitai/tap/civitai
civitai login
civitai app create my-app        # scaffold
cd my-app && npm install && npm run dev:harness   # run locally against a mock host
npm run build
civitai app validate             # check the manifest
civitai app submit               # package and submit for review (needs approved access)
civitai app status               # where is it in review; add --id <submission> for one
```

**`@civitai/blocks-react`**: React hooks that talk to the Civitai page your app runs in. Sketch (from the package README):

```tsx
import { useRef } from 'react';
import { useBlockContext, useBlockResize, useBuzzWorkflow } from '@civitai/blocks-react';
import { Button } from '@civitai/blocks-react/ui';

export function App() {
  const { ready, theme } = useBlockContext();
  const { submit, status } = useBuzzWorkflow();
  const rootRef = useRef<HTMLDivElement>(null);
  useBlockResize(rootRef); // the host fits the iframe to your content
  if (!ready) return <div>Loading…</div>;
  return <div ref={rootRef} data-theme={theme}>…</div>;
}
```

**`@civitai/app-sdk`**: the framework-agnostic contract: OAuth with PKCE, scopes, the manifest checker (`defineBlock`) and orchestrator helpers (`@civitai/app-sdk/blocks`, `/manifest`, `/orchestrator`).

```bash
pnpm add @civitai/app-sdk @civitai/blocks-react react
```


---
