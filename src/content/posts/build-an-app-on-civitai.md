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
Review copy for the Apps launch on November 10. This page is not listed anywhere and is hidden from search engines. The rejection screenshot in section 5 is a stand-in.
:::

You have an idea for a small tool: a sticker maker, a LoRA tester, a daily prompt challenge. You don't write code. You can still build it. Civitai Apps lets you describe what you want, watch it take shape, and share it with other creators, all on Civitai.

This guide walks through the whole path, from asking for access to reading what people say about your app. It uses a real example: **Sticker Maker**, an app that turns a subject and a style into a sticker image, built and submitted in one sitting.

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

![Screenshot: build landing](/images/guides/build-an-app-on-civitai/01-build-landing.webp)

### Start a new app
Click the app switcher and choose **New app**. The switcher then reads **No app open**, and the Assistant asks "what shall we make?" The cards under it are example ideas you can click, and several of them are image apps: a character card maker, a LoRA tester, a daily prompt challenge.

![Screenshot: app switcher](/images/guides/build-an-app-on-civitai/02-app-switcher.webp)

![Screenshot: new app](/images/guides/build-an-app-on-civitai/03-new-app.webp)

### Describe your app in plain words
Type what you want. No code is needed, and you don't need to know how image generation works. Press Enter to send, or Shift+Enter for a new line. For the demo we typed:

> A sticker maker: type a subject, pick a style (cartoon, pixel art, watercolor), and generate a sticker image of it. Show the Buzz price and ask me to confirm before generating. Keep a gallery of the last 6 stickers.

Notice the middle sentence. We asked for the price and a confirm step, and the Assistant built both in.

![Screenshot: describe app](/images/guides/build-an-app-on-civitai/04-describe-app.webp)

### Watch it build
The first reply is a **Feature checklist** built from your words, one line per thing you asked for. Building starts right away. There is no "Build it" button to press. The app gets a name and starts **Running**.

While it works, the Assistant runs **Subagents**: helper steps that read the app's files and tests before it writes code. Click one to see what it did. The Send button becomes **Stop** while it works.

A **live preview** opens on the right before the build finishes, so you can watch the app take shape. In our demo, the first build took about eight minutes.

![Screenshot: first reply](/images/guides/build-an-app-on-civitai/05-first-reply.webp)

![Screenshot: mid build](/images/guides/build-an-app-on-civitai/06-mid-build.webp)

![Screenshot: preview appears](/images/guides/build-an-app-on-civitai/07-preview-appears.webp)

### It checks its own work
When it finishes, every checklist item is ticked. The Assistant says it checked that the app renders in a test browser, ran its tests and the typecheck, and then summarizes what it built in plain words. It also tells you what you still need to do. For Sticker Maker: "generating stickers needs you to choose a model first."

![Screenshot: build done](/images/guides/build-an-app-on-civitai/08-build-done.webp)

### Use your app: choose a model, see the price, confirm
The preview is the real app, so you can use it right there. Type a subject and click **Choose model**. This opens Civitai's own model picker, the same one used elsewhere on the site, with search and tabs. Pick one; we chose Z Image Turbo.

![Screenshot: choose model](/images/guides/build-an-app-on-civitai/09-choose-model.webp)

![Screenshot: model picked](/images/guides/build-an-app-on-civitai/10-model-picked.webp)

Then click **Make my sticker**. **Nothing is spent yet.** The app asks Civitai for a price estimate and shows it: in our demo, **14 Buzz**, with **Not now** and **Confirm & create** buttons. The image is made only after you confirm.

![Screenshot: price confirm](/images/guides/build-an-app-on-civitai/11-price-confirm.webp)

After you confirm, the button reads "Creating your sticker…". Each image took between about 15 and 40 seconds. It lands in the gallery, labeled with its subject and style, newest first.

![Screenshot: generating](/images/guides/build-an-app-on-civitai/12-generating.webp)

![Screenshot: first sticker](/images/guides/build-an-app-on-civitai/13-first-sticker.webp)

![Screenshot: second price](/images/guides/build-an-app-on-civitai/14-second-price.webp)

![Screenshot: gallery two](/images/guides/build-an-app-on-civitai/15-gallery-two.webp)

With Z Image Turbo the price was 14 Buzz per image, the same for cartoon, pixel art and watercolor. In the preview, each image was paid from the signed-in account (yours, while you test), and the account's balance dropped by exactly 14 each time. Prices depend on the model you pick, so don't treat 14 as a fixed rate.

### Ask for changes in plain words
Say what you want different. We typed: *Add a Download button under each sticker in the gallery.* The Assistant adds a checklist item, makes the change, re-checks everything and tells you what changed. In this round it also updated the app's Civitai SDK and swapped some icons that showed up as empty boxes in its own check. The change took about four to five minutes.

![Screenshot: ask change](/images/guides/build-an-app-on-civitai/16-ask-change.webp)

![Screenshot: change done](/images/guides/build-an-app-on-civitai/17-change-done.webp)

**Then press Reload at the top of the preview.** The preview keeps the old version until you do. Reloading also clears anything saved inside the preview: our gallery went back to empty and the model choice was cleared, so you pick the model again. The note beside the Reload button says so.

The new **Download** button saves the image to your computer, and then reads **Downloaded**.

![Screenshot: preview reloaded](/images/guides/build-an-app-on-civitai/18-preview-reloaded.webp)

![Screenshot: download button](/images/guides/build-an-app-on-civitai/19-download-button.webp)

![Screenshot: downloaded](/images/guides/build-an-app-on-civitai/20-downloaded.webp)

### What it costs
Replies spend Buzz from your Civitai account once any free allowance is used up, about 1 per step, up to a daily limit. Making things costs extra. A chip on the chat shows what you've used. In our demo the chat (build, one change and the submit step) used about 224 Buzz, and the three test images added 42, so about 266 Buzz in all. Your numbers will vary with how much you ask for. Chats are kept for 30 days.

### Limits: keep 3 apps, one runs at a time
- You can keep **3 apps**, and **one runs at a time**. Opening a paused app, or sending it a message, starts it and pauses the one that was running.
- A running app pauses after **30 minutes idle** or **8 hours running**.
- A paused app is **deleted 14 days after its last activity**. The switcher shows "deleted in N days if unused" under each app.
- If you already keep three and ask for a new one, the Assistant shows a **Free up a slot** card: delete one and your request continues on its own.

These apply the same way to every account.

![Screenshot: app switcher](/images/guides/build-an-app-on-civitai/24-app-switcher.webp)

## 4. Cover art

Every listing needs an icon and a cover before it can be published; the editor says "Add an icon and cover to publish." Screenshots are recommended but optional. If your app makes images, like Sticker Maker, its own output is good material for the cover and screenshots.

Two ways to get a cover:

- **Upload your own** in the listing editor's **Assets** step. As a starting point, the CLI docs suggest a landscape image of 1600 x 900 or larger (PNG, JPEG or WebP, up to 4 MiB); the icon is square-ish, starting at 512 x 512 (up to 1 MiB). The editor checks your file when you upload.
- **Ask the App Assistant.** Tell it what the cover should show, in plain words, and it generates one on your Buzz and attaches it to your listing. It can't put text or logos on the cover. It needs an existing store listing for the app, so make the listing first. A new cover goes onto your draft and shows in the store once the listing is submitted and approved.

## 5. Getting listed, and review

### Submit for review
In the same chat, ask: *Submit it for review so it can appear in the App Store.* The Assistant re-checks the app first, then shows a **Submit for review** card naming the app and version, for example "Sticker Maker 0.1.0". **Nothing is sent until you click the button**, and clicking it costs no extra Buzz. Afterward the card reads: "Submitted Sticker Maker 0.1.0 for review. A moderator reviews it before it goes live in the App Store."

![Screenshot: ask submit](/images/guides/build-an-app-on-civitai/21-ask-submit.webp)

![Screenshot: submit card](/images/guides/build-an-app-on-civitai/22-submit-card.webp)

![Screenshot: submitted](/images/guides/build-an-app-on-civitai/23-submitted.webp)

If you already have a submission waiting, you can't send a second one: withdraw the first on the Build page.

### Track it: My apps
The Assistant can send your app to review, but it can't tell you how the review is going. To check, use **My apps** (top right of the Build page). Your app appears with a store status such as **DRAFT**, meaning it isn't in the store yet.

- Open the app's listing and choose the **History** tab. Each version shows its review status, for example "V0.1.0 · PENDING" while it waits for a moderator. **Withdraw** pulls a submission back.
- The **Publishing** tab shows whether the app is live in the store.
- The **Details** tab holds the store listing: name, tagline, description, category and content rating. The Assistant fills in a name and basic tagline. The **Assets** step is for icon, cover and screenshots.

![Screenshot: my apps](/images/guides/build-an-app-on-civitai/25-my-apps.webp)

![Screenshot: listing history](/images/guides/build-an-app-on-civitai/27-listing-history.webp)

![Screenshot: listing publishing](/images/guides/build-an-app-on-civitai/28-listing-publishing.webp)

### What needs fixing before it can go live
A red warning icon on your app in My apps means "This listing cannot be published yet." Click it for the list. Items marked *required* block publishing; the rest are recommendations. A yellow icon on an approved app means "This listing has advisory notes", a list of suggestions such as "No screenshots (recommended, optional)".

![Screenshot: needs fixing](/images/guides/build-an-app-on-civitai/26-needs-fixing.webp)

![Screenshot: advisory notes](/images/guides/build-an-app-on-civitai/30-advisory-notes.webp)

### If a moderator doesn't approve it
Lower on My apps, under **Submissions without a listing**, every past submission shows its result. A rejected one has a red **REJECTED** badge, with the moderator's reason in red underneath. Read it, fix what it says, and submit again.

![Screenshot: rejected feedback](/images/guides/build-an-app-on-civitai/31-rejected-feedback.webp)

:::note
Review copy: this rejection reason is a stand-in. The real approve or reject screenshot replaces it once a moderator decides on Sticker Maker.
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
