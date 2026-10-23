---
title: "Bad Generations?"
slug: "bad-generations"
date: "2025-03-13T22:40:09Z"
modified: "2025-03-18T00:36:13Z"
categories:
  - "news"
tags: []
author: "civitai"
wpId: 6884
excerpt: "We’ve updated our Worker code and upgraded ComfyUI and CUDA, both of which impact image generation. If your results aren’t as expected, read on!"
image: "/wp-content/uploads/2025/03/ComfyUI_00104_.png"
seo:
  title: "Bad Generations? - Civitai Education"
  description: "We've updated our Worker code and upgraded ComfyUI and CUDA, both of which impact image generation. Find out more!"
  ogImage: "/wp-content/uploads/2025/03/ComfyUI_00104_.png"
  canonical: "https://education.civitai.com/bad-generations/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 3/13/2025 | First version published |
| 3/17/2025 | Rollback! |

**Due to stability issues we have taken the difficult decision to roll this update back. [The Tips for Good Generations](#tips) are still valid, but the prompt parser change has been reverted!** **[Please read the details for more information.](https://civitai.com/articles/12689)**

We’ve implemented [full Checkp](https://civitai.com/articles/12309)[oint C](https://civitai.com/articles/12309)[overage](https://civitai.com/articles/12309) which required a _**significant**_ update to our Worker code, which manages GPU coordination. Additionally, we’ve upgraded both ComfyUI and our CUDA version, both of which impact how images are generated, potentially affecting the style and quality of outputs.

Since the release, we’ve tackled various issues, including generator stability and concerns over image quality. We’ve rolled out several fixes and optimizations to improve performance, but _**we’ve also identified that ineffective prompting, and an outdated parsing system plays a significant role in subpar results**_. To help users get the most out of these updates, we’ve refreshed our prompt guide with clear guidelines on crafting better prompts for higher-quality generations.

## Prompt Parser Change

In our ongoing effort to improve generation quality, we’ve made a significant backend change: **we’ve moved away from Automatic1111-style prompt parsing and adopted ComfyUI’s method.**

So what does this mean, and why does it matter?

### **The Difference Between Automatic1111 and ComfyUI Parsing**

-   **Automatic1111’s prompt parser** applied a form of mean normalization to weights, effectively averaging their values across the entire prompt. This required a **“heavy-handed” approach to weighting**, where users had to compensate with exaggerated values to get desired effects.

-   **ComfyUI’s approach** treats each token weight individually rather than averaging them. This method is more precise, **preserving the original intent of your prompt more faithfully.**

### **Why We Made the Switch**

-   **More Control:** Your weight values will now behave exactly as you specify, allowing for **greater precision in prompt crafting.**

-   **Future-Proofing:** ComfyUI’s parsing is a more modern, actively maintained system (Automatic1111 hasn’t been updated in over 8 months!) that aligns better with evolving generation standards.

This update should resolve many of the inconsistencies users have reported. If you experience any unexpected changes in output, _**we**_ **_encourage you to tweak your prompt weights accordingly – since the system is now handling them more literally, small weight adjustments may yield better results than before._**

## Tips for Good Generations {#tips}

Check out the full [Guide to Prompting](/civitais-prompt-crafting-guide-part-1-basics), here, and find a quick cheat-sheet on common prompt issues, below!

| Potential Issue | Solution |
| --- | --- |
| Misspelled words | Check your prompt for misspelled words and typos which the Prompt Parser might not understand. |
| Unsupported characters, code, URLs (e.g. **\\n**, **+**, **</break>**, **https://www.civitai.com**) | Remove all non-standard characters, code, URLs, etc. |
| **Redundant** descriptive words, or **conflicting** descriptive words | Repeating the same keywords does not necessarily improve results and may lead to distortions. Additionally, using conflicting tokens – such as “realistic” and “anime-style” together – can confuse the model and produce inconsistent results. |
| Very high weights (e.g. **(apple:2.5)**), or many weighted words in the same prompt | Very high weight values, or many weighted values, can cause severe artifacting and incoherent outputs. |
| Inconsistent Emphasis use (e.g. **((apple))))**) or **\[\[\[apple** | Check that all parentheses and square-brackets are properly opened and closed. Do not mix this style of Emphasis with Weighted values. |
| Incorrect prompting style for the Model in use (e.g. Pony Syntax – _score\_9\_up, score\_8_, being used with Flux) | Make sure you’re using the correct prompting syntax for the Model ecosystem. SD1.5, Pony Diffusion, and Flux, all have distinct preferred methods of prompting. |
| Many LoRAs and Embeddings | While not always the case, many LoRAs and Embeddings can conflict in unforeseen ways. Try generating without any Additional Resources, then add them one-by-one. |
| Generator Advanced Mode! | If you’ve toggled Advanced Mode ON in the Generator Resource picker, be aware that you _may be able to combine Resources which don’t work well together_! Start small, add LoRAs one by one and test the outputs! |
| Low CFG Setting (e.g. **< 3.5**) | Not specifically Prompt related, but a very low CFG setting can produce terrible, almost blank, outputs! |
| **<Lora:LoraName:1.5>** Syntax | Don’t put these in your prompts! They should be ignored by the system, but it’s safer not to include them – all LoRA weighting should be controlled from the weight sliders in the interface. |

## Support

If you’ve read the [Prompting Guide](/civitais-prompt-crafting-guide-part-1-basics/) and explored some of the options above, yet your generations still aren’t turning out right, please let us know. You can submit a Support Ticket via our [Ticket Portal](https://civitai.com/support), or email support@civitai.com.

Be sure to include Job IDs for the affected images. These can be copied to the clipboard from the hexagonal “i” icon on the Generator Image Queue;

![](/wp-content/uploads/2025/03/Screenshot-2025-03-13-185443.webp)
