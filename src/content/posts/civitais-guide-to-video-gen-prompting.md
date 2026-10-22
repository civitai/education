---
title: "Civitai’s Guide to Video Gen Prompting"
slug: "civitais-guide-to-video-gen-prompting"
date: "2025-04-19T01:25:02Z"
modified: "2025-07-29T19:08:44Z"
categories:
  - "civitai"
  - "news"
  - "quickstart-guides"
  - "video"
tags:
  - "guide"
  - "hunyuan"
  - "prompting"
  - "text2video"
  - "video"
  - "wan"
author: "civitai"
wpId: 6981
excerpt: "Civitai’s Guide to Video Gen Prompting! This guide will help you create more compelling, dynamic AI-generated videos."
image: "https://education.civitai.com/wp-content/uploads/2025/03/ComfyUI_00041_.webp"
seo:
  title: "Civitai's Guide to Video Gen Prompting - Civitai Education"
  description: "Civitai's Guide to Video Gen Prompting! This guide will help you create more compelling, dynamic AI-generated videos."
  ogImage: "https://education.civitai.com/wp-content/uploads/2025/03/ComfyUI_00041_.webp"
  canonical: "https://education.civitai.com/civitais-guide-to-video-gen-prompting/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 4/17/2025 | First Version |

## Prompting for Video Generation

Prompting for video generation is a whole different beast compared to [image p](/civitais-prompt-crafting-guide-part-1-basics/)[ro](/civitais-prompt-crafting-guide-part-1-basics/)[mpting](/civitais-prompt-crafting-guide-part-1-basics/) – and getting great results means learning how to speak the language of motion. In this guide, we’ll explore how to craft effective video prompts using cinematic techniques like camera movement, lighting, atmosphere, and visual style – tools drawn straight from the world of professional filmmaking.

We’ll also break down the structure of a strong video prompt and share tips for refining your approach. Plus, we’ll take a closer look at some of the most popular video generation models available on Civitai, and explain the prompt styles that work best for each.

Whether you’re just starting out or looking to sharpen your skills, this guide will help you create more compelling, dynamic AI-generated videos.

**Note: All the examples featured in this guide are generated on-site at [Civitai.](https://www.civitai.com)[c](https://www.civitai.com)[om](https://www.civitai.com).** You can read more about [Civitai’s video generation](/civitais-guide-to-video-in-the-civitai-generator/) [capa](/civitais-guide-to-video-in-the-civitai-generator/)[bilities here](/civitais-guide-to-video-in-the-civitai-generator/)!

## General Concepts

A strong video prompt isn’t just about what you want to see – it’s about **how you see it**. Think of it like giving a director a set of instructions for a scene. The best prompts strike a balance between creativity and clarity. Here’s what to aim for:

-   **Rich in detail** – Around **60–100 words** gives the AI enough context to work with. Think of painting a scene with words.
-   **Laser-focused** – Be clear about what’s happening in the frame, how the camera behaves, the lighting style, and the overall mood.
-   **Grounded in context** – Include time of day, weather, location, or setting when it matters – it helps define the world you’re building.

There are a number of Core Elements which most video models understand, to varying degrees;

#### Camera Movement

This is where your video gains momentum and life. Direct the camera as if you’re on set:

-   **Pan** – A sideways sweep to reveal a scene or follow motion
-   **Tilt** – A vertical shift for scale or emphasis
-   **Pull-Back** – A closeup focused shot which rapidly pulls back to reveal a wider scene
-   **Dolly In/Out** – Smooth camera movement that pulls in closer or backs away
-   **Tracking** – Follows a subject across space
-   **Crash Zoom** – A fast, punchy zoom for urgency or surprise
-   **Roll** – Rotates the frame for disorientation or drama

#### Lighting

Lighting is extremely important;

-   **Soft light** – Diffused, natural, cozy or romantic
-   **Hard light** – Bold shadows, high contrast, dramatic
-   **Backlighting** – Creates silhouettes, halos, or mood
-   **Volumetric light** – Visible beams cutting through mist, fog, or smoke – dreamy or eerie depending on context

#### **Composition & Perspective** {#composition-perspective}

How a subject is framed in a scene makes a _huge_ difference in the emotional impact of your video. It’s not just about where the camera is – it’s about what your audience _feels_ because of that position. Use perspective to guide the viewer’s focus and shape the tone.

Here are some key angles and compositions to work with:

-   **Close-Up** – Tight framing on a subject’s face or an object. Great for showing emotion, tension, or fine detail.
    _The flicker of doubt in someone’s eyes, or a hand gripping a sword._
-   **Wide Shot (or Establishing Shot)** – Shows the full environment. Useful for setting the scene, establishing scale, or showing isolation or grandeur.
    _A lone figure walking through a vast moor._
-   **Low Angle** – Camera looks _up_ at the subject. Makes them feel powerful, intimidating, heroic, or otherworldly.
    _A warrior framed against stormy skies._
-   **High Angle** – Camera looks _down_ on the subject. Can make them seem small, overwhelmed, or vulnerable.
    _A person alone in a large, empty room._
-   **Over-the-Shoulder** – A common way to show dialogue or a character’s point of view. Adds intimacy and narrative flow.
    _Peering over someone’s shoulder as they read an ancient map._
-   **Dutch Angle (Tilted Frame)** – A slanted horizon line. Feels uneasy or off-balance, often used in tense or surreal moments.
    _Something isn’t quite right._

Remember, not all video models respect every camera angle, movement, or style. Below we’ll take a look at some specifics.

## Wan2.1 Prompting {#wan2-1-prompting}

### Camera Setup – Panning {#panning}

Wan can successfully generate images with directional panning motions, but may require multiple attempts. Fast panning movements don’t seem to be supported.

<div class="columns">

<div class="column">

_A wide-angle shot of a misty Scottish glen at dawn, soft light filtering through the haze. The camera slowly pans right, revealing rolling hills covered in heather, an ancient stone circle in the distance, and a lone stag standing still, framed against the rising sun_

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/nztlBJ2g?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="533"></div>

</div>

</div>

### Camera Setup – Pull-Back

Pull-back shots work extremely well with Wan, when the prompt is structured correctly. Try including details which set the scene, then describe the camera movement, then the details revealed after the camera moves;

<div class="columns">

<div class="column">

_Close-up of an arctic explorer’s face. Camera pulls back to reveal a lone explorer standing in a whiteout blizzard, snow whipping past. Pull back further to reveal nothing but endless ice in every direction._

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/0LC4Jz2G?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="533"></div>

</div>

</div>

### Camera Setup – Tracking Shots

A **tracking shot** (or “follow shot”) is when the camera moves _with_ the subject – walking beside them, behind them, or circling as they move. It’s ideal for:

-   Immersive storytelling
-   Building connection with a character
-   Conveying pace and flow through an environment

**Wan 2.1** handles this well when you:

-   **Clearly define the subject** and what they’re doing
-   **Use the phrase “camera follows…”** (or variations like “tracking behind” or “moves alongside”)
-   Describe **lighting, pace**, and **setting details** to ground the motion

<div class="columns">

<div class="column">

_A dense, ancient forest bathed in early morning mist. The camera tracks behind an elf in green robes sprinting silently through the underbrush, bow in hand. Shafts of sunlight pierce through the canopy above. Ferns brush past as the elf darts between mossy trees._

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/T5EweT1X?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="533"></div>

</div>

</div>

### Lighting – Hard Light

Hard light with strong shadows. Dramatic, high-contrast setup.

<div class="columns">

<div class="column">

_A dark, concrete room with a single exposed bulb hanging overhead. A man sits at a metal table, face partially shadowed. Harsh, directional light casts deep shadows across his features and the wall behind him. The mood is intense, dramatic, and unflinching._

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/vcL0mTAs?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="533"></div>

</div>

</div>

### Lighting – Backlighting

Backlighting used to create silhouette and emotional weight.

<div class="columns">

<div class="column">

_A windswept cliff at twilight. A lone warrior stands at the edge, framed by the setting sun behind them. The backlighting turns them into a dark silhouette, hair and cloak whipping in the wind. A golden halo forms where the light hits the edge of their figure. The moment feels heroic and somber._

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/oADoRUOC?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="533"></div>

</div>

</div>

### Lens Type – Fisheye

Wan understands a number of lens types! Experiment with **fisheye** or **wide-angle**;

<div class="columns">

<div class="column">

_A wild rock concert from a low-angle fisheye lens looking up at the lead singer screaming into the mic. The singer’s face is close to the lens, exaggerated and intense. The crowd swirls behind him in a warped semicircle, and stage lights flare in curved beams. The image feels chaotic and explosive._

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/LAQpfKp2?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="533"></div>

</div>

</div>

### Temporal Effects – Slow Motion

Altering the speed of time in a prompt adds drama, wonder, or surreal energy. Wan understands **Slow Motion**;

<div class="columns">

<div class="column">

_A woman standing in a sunlit field as flower petals swirl around her in slow motion. Each petal floats gently through the golden light, casting tiny shadows. Her hair moves like water, and time seems to stand still._

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/PV2cu4OO?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="533"></div>

</div>

</div>

### Temporal Effects – Timelapse

Wan can respond _really well_ to time-lapse, _but_ it helps to be **explicit** about how time is moving differently, what’s changing around the subject, and how the effect impacts the mood or visuals;

<div class="columns">

<div class="column">

_A tight time-lapse shot of a sunflower sprouting and blooming in fast motion. The green shoot breaks through soil, growing taller by the second. The bud unfurls in jerky, beautiful pulses as light shifts around it. Dew evaporates, bees come and go in streaks of motion blur._

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/EnH6QbYA?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="533"></div>

</div>

</div>

## Hunyuan Prompting

Tencent, Hunyuan’s creator, has given us some protips to help us structure our Hunyuan prompts;

### **Method 1** {#method-1-subject-scene-action}

Subject + Scene + Action

<div class="columns">

<div class="column">

_A young woman in pajamas + a cozy kitchen + makes breakfast while sunlight pours through the window._

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/OPxgx2cl?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="533"></div>

</div>

</div>

### **Method 2** {#method-2-subject-description-scene-description-action-description-camera-language-atmosphere-style}

Subject (description) + Scene (description) + Action (description) + (Camera Language) + (Atmosphere) + (Style)

<div class="columns">

<div class="column">

_A hooded figure with glowing blue eyes and a long coat + a neon-lit street crowded with people and holograms + weaves through the crowd, glancing over their shoulder + tracking shot from behind + tense and moody atmosphere + stylized sci-fi noir look_

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/j6DwDqVo?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="533"></div>

</div>

</div>

### **Method 3** {#method-3-subject-scene-action-style-atmosphere-camera-movement-lighting-shot-size}

Subject + Scene + Action + (Style) + (Atmosphere) + (Camera Movement) + (Lighting) + (Shot Size)

<div class="columns">

<div class="column">

_A pale vampire in a tattered cloak + an ancient crumbling cathedral + steps silently through the shadows + dark gothic style + eerie and suspenseful + slow push-in + dim candlelight casting long shadows + close-up on the vampire’s face_

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/3ZFlm41C?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="533"></div>

</div>

</div>

### **Multi-Shot Generation** {#multi-shot-generation-scene-1-camera-switch-to-scene-2}

\[Scene 1\] + Camera Switch to \[Scene 2\]

<div class="columns">

<div class="column">

_A scientist in a lab watches a blinking monitor with concern + Camera Switch to + a massive alien craft descending silently over Earth, seen from orbit._

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/rwCG9BNb?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="533"></div>

</div>

</div>

### **Two Actions** {#two-actions-subject-description-action-description-transition-word-like-then-or-after-a-while-second-action-description}

\[Subject Description\] + \[Action Description\] + \[Transition Word like “then” or “after a while”\] + \[Second Action Description\]

<div class="columns va-center">

<div class="column">

_A young mage + talking to an off-screen character + then + creates an orb of energy pulsing steadily in their hand._

</div>

<div class="column">

<div data-embed="videopress" data-src="https://videopress.com/embed/PZHZz0gP?cover=1&amp;autoPlay=1&amp;controls=1&amp;loop=1&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0" data-title="VideoPress Video Player" data-width="800" data-height="533"></div>

</div>

</div>

## I need more help!

If you’re experiencing issues generating Video with the Civitai Image Generator and a solution isn’t mentioned on this page, please reach out to our Support Team at [support@civitai.com](mailto:support@civitai.com).
