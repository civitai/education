---
title: "Guide to Civitai Model Licensing Options"
slug: "guide-to-licensing-options-on-civitai"
date: "2024-03-07T14:26:23Z"
modified: "2026-10-26T21:00:00Z"
categories:
  - "civitai"
tags:
  - "guide"
  - "licensing"
author: "civitai"
wpId: 3811
excerpt: "Civitai Guide to Model Licensing"
image: "/wp-content/uploads/2024/03/ComfyUI_temp_zcusp_00048_.png"
seo:
  title: "Guide to Civitai Model Licensing Options - Civitai Education"
  description: "The Civitai Guide to Model Licensing is an overview of what Licensing means, and how it applies, to resources on Civitai."
  ogImage: "/wp-content/uploads/2024/03/ComfyUI_temp_zcusp_00048_.png"
  canonical: "https://education.civitai.com/guide-to-licensing-options-on-civitai/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 3/6/2024 | First version published |
| 10/26/2026 | Updated permission names, the Commercial Use options, base model rules and the Addendum link. Added a section on licensing fees. Removed outdated screenshots. |

## Civitai Model Licensing; What is it, when does it apply, and what does it affect?

When you upload a model you set permissions that say what other people may do with it. This guide covers those permissions, what they change on your model page, and how they differ from licensing **fees**, which are a separate feature.

Models built on **Stable Diffusion 1.5 (SD 1.5)** or **Stable Diffusion XL (SDXL 1.0)** were released under the [CreativeML Open RAIL-M](https://github.com/CompVis/stable-diffusion/blob/main/LICENSE) and [Open RAIL++](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/blob/main/LICENSE.md) licenses. Those licenses allow addendums, so Civitai generates one from the permissions you pick, as long as it does not contradict the core terms of the Open RAIL license.

Many other base models are used on Civitai today. Those have their own licenses, and Civitai does not generate an addendum for them. See [Models on other base models](#other-base-models).

## Licensing fees are a different thing {#licensing-fees}

"Licensing" on Civitai can mean two things:

- **Permissions** (this guide): what other people are allowed to do with your model, set when you upload it.
- **Licensing fees**: a small amount of Buzz you earn each time someone generates with your model on Civitai.

Fees, early access and paid access are covered in [Creator Studio, Paid Access and Licensing Fees](/creator-studio-paid-access-and-licensing-fees/).

## User Permissions Settings

On the upload form, under **When using this model, I give permission for users to:**, you will see these checkboxes. Uncheck any option you are not comfortable with.

- **Use without crediting me:** Allow users to produce and share outputs without crediting the creator of the model.
- **Share merges of this model:** Allow users to merge, finetune or train using this resource, or outputs from this resource.
- **Use different permissions on merges:** Shown when merging is allowed. It lets people who merge your model set their own permissions instead of keeping yours.

## Commercial Use Settings

Next to those, **Commercial Use** has more checkboxes. By default all of them are selected, which allows everything. Uncheck any option you want to restrict.

- **Sell generated images:** Allow users to sell the outputs of this model.
- **Use on Civitai generation service:** Allow users to generate with this resource on Civitai's on-site Generator.
- **Use on other generation services:** Allow other sites that offer generation to provide this model to their users.
- **Sell this model:** Allow users to sell this model.
- **Sell merges using this model:** Allow users to sell merges made with this model.

Some options depend on others. Selecting **Sell this model** also selects, and locks, both generation service options. Selecting **Use on other generation services** also selects, and locks, **Use on Civitai generation service**.

## License display on the model page

When you restrict something, icons on the model page show your choices. Hover over an icon to see what it means. The badges cover commercial use, generation services, and whether credit is required.

If your model uses SD 1.5 or SDXL 1.0 as its base and you restricted any permission, the model page shows an **Addendum** link beside the base model license. Click it to read the license and addendum generated for your model.

## Models on other base models {#other-base-models}

Models on other base models do not get a generated addendum. For those, your permissions work as a clear statement of what you want, and the base model's own license still applies.

Two rules come from the base model:

- **Non-commercial base models.** If a base model is licensed for non-commercial use only, a version built on it cannot carry licensing fees or paid early access, and commercial use is disabled. The version form shows a warning when this applies.
- **Mature content.** A model marked as NSFW cannot use a base model whose license does not allow it. The form shows a License Restriction Violation message that names the restricted base models.

## Frequently Asked Questions

### **I have evidence that someone has broken the terms of the addendum license on my resource! What do I do?**

-   If the breach has occurred on Civitai.com, _**report it**!_ We take licensing seriously and will act to protect your work.

-   If the breach is on another platform (not Civitai.com), contact a lawyer and discuss what your options are.

## I need more help!

If you have questions about the Licensing system which aren't answered on this page, please reach out to a Community Manager at [support@civitai.com](mailto:support@civitai.com), or via the [Civitai Support portal](https://civitai.com/support).
