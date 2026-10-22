---
title: "Civitai’s Guide to Downloading via API"
slug: "civitais-guide-to-downloading-via-api"
date: "2024-01-26T17:44:53Z"
modified: "2024-08-20T13:15:38Z"
categories:
  - "civitai"
tags:
  - "api"
  - "civitai"
  - "google-colab"
  - "guide"
author: "civitai"
wpId: 3297
excerpt: "Civitai Guide to downloading resources with the Civitai API"
image: "https://education.civitai.com/wp-content/uploads/2024/01/ComfyUI_temp_zcusp_00061_.png"
seo:
  title: "Civitai's Guide to Downloading via API - Civitai Education"
  description: "Documentation describing the use of the Civitai API to download resources, and common frequently asked API questions for wget, curl"
  ogImage: "https://education.civitai.com/wp-content/uploads/2024/01/ComfyUI_temp_zcusp_00061_.png"
  canonical: "https://education.civitai.com/civitais-guide-to-downloading-via-api/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 1/26/2023 | First version published |
| 4/4/2023 | New API Documentation Released |

## Caveats – Read me First! {#how-do-i-download-via-the-api}

-   Creators can **require** that people be logged in to download their resources. That is an option we provide but not something we require – it’s entirely up to the resource owner.

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-26-124233.png)

-   Logging in to the API can be done with an API token, created in your **User Account Settings**.

## How do I get an API token/key?

When using the API to download models, please issue an API token from your user account page and include that in the download request URL or headers.

Older notebooks and plugins may have been written _without_ API tokens in mind and some plugins have used **shared** API tokens in the past, which is **generally discouraged.**

### Step by step

-   Create an API token from your user account page – [https://civitai.com/user/account](https://civitai.com/user/account)

![](http://education.civitai.com//wp-content/uploads/2024/01/Screenshot-2024-01-26-121827-1.png)

-   Copy the token and save it in your password manager. If you don’t use a password manager, post-its are almost as secure!

-   Add your API token to the download URL using the `**?token**` query parameter, OR
    1.  If the URL already has other parameters, like [https://civitai.com/api/download/models/128713?type=Model&format=SafeTensor&size=pruned&fp=fp16](https://civitai.com/api/download/models/128713?type=Model&format=SafeTensor&size=pruned&fp=fp16), **_append_** the token with **`&token=YOUR-TOKEN-HERE`** instead
    2.  If you are using the command line and the URL contains the `&` symbol, **make sure you wrap the URL in quotes**

        Examples;

        – **/api/download/models/12345?token=YOUR\_TOKEN\_HERE**

        – **/api/download/models/12345?type=Model&format=SafeTensor&size=pruned&fp=fp16&token=YOUR\_TOKEN\_HERE**


-   OR, ctd: Add your API token to the request headers using the `Authorization` header
    1.  Pass your API token as a bearer token: `Authorization: Bearer YOUR-TOKEN-HERE`
    2.  For example, `**curl -L -H "Content-Type: application/json" -H "Authorization: Bearer YOUR-TOKEN-HERE"**`

The API will redirect to a pre signed S3-style URL, which can be used to download the resource. The resource’s original filename will be in the `**Content-Disposition**` header.

## FAQs {#are-there-restrictions}

### **I’m getting an error in the web-browser!** {#i-m-getting-an-error-in-the-web-browser}

-   Which endpoint are you using?
-   Are there any errors in the dev tools network tab?
-   Are you receiving a 429 error? Let us know!

### I**‘m getting an error in my Plugin/Colab Notebook/etc!** {#i-m-getting-an-error-in-my-plugin-colab-notebook-etc}

-   Is the plugin/notebook/tool using an API token? Did you provide one when you set it up?
-   If not, does the notebook use the `**?token**` parameter when downloading models?
-   If not again, create an API token and configure the plugin/notebook to use it!

### **I’m getting an error in my curl, wget, other download tool!** {#i-m-getting-an-error-in-my-curl-wget-other-download-tool}

-   Does the URL contain the `**?token**` parameter?
-   If not, create an API token and add it to the URL.
-   Make sure the tool is following redirects, because the API redirects to a pre-signed download link

### **I’m getting an error streaming models!** {#i-m-getting-an-error-streaming-models}

-   Make sure to cache the models locally, especially smaller ones like LoRAs and Textual Inversions!
-   Make sure to provide an API token!

## API Docs

The API Documentation can be found on the **Civitai.com** Dev Site – [https://developer.civitai.com](https://developer.civitai.com)

API Reference – [https://developer.civitai.com/docs/api/public-rest](https://developer.civitai.com/docs/api/public-rest)

## API Issues

If you’re having trouble connecting to the API, please reach out to a Community Manager at [support@civitai.com](mailto:support@civitai.com), or via the [Civitai Support portal](https://civitai.com/support).
