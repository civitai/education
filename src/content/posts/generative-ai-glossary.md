---
title: "Generative AI Glossary"
slug: "generative-ai-glossary"
date: "2023-07-25T05:20:18Z"
modified: "2024-08-21T06:27:03Z"
categories:
  - "glossary"
tags:
  - "generative-ai"
  - "glossary"
author: "civitai"
wpId: 6
excerpt: "Generative AI is a rapidly developing technology with a dizzying number of obscure technical terms, company names, product names, slang words, etc. This Glossary was created to bring together as many of these terms as possible in a single, searchable, list."
image: "https://education.civitai.com/wp-content/uploads/2023/07/output_00067_.png"
seo:
  title: "Generative AI Glossary - Civitai Education"
  description: "The Generative AI Glossary was created to bring together as many terms as possible in a single, searchable, list."
  ogImage: "https://education.civitai.com/wp-content/uploads/2023/07/output_00067_.png"
  canonical: "https://education.civitai.com/generative-ai-glossary/"
---

Generative AI is a rapidly developing technology with a dizzying number of obscure technical terms, company names, product names, slang words, etc. This Glossary was created to bring together as many of these terms as possible in a _**single, searchable, list**_. Note that while many of the terms listed below are specific to Stable Diffusion and Generative Art applications, we’ve also included terms and concepts relating to all categories of Generative AI.

Some of the terms below might be missing a description – this document is in a constant state of development to keep up to speed with additions and changes – it’s being worked on!



|     | Tags | Description |
| --- | --- | --- |
| Kohya | Software | Can refer to Kohya-ss scripts for LoRA/finetuning ([https://github.com/kohya-ss/sd-scripts](https://github.com/kohya-ss/sd-scripts)) or the Windows GUI implementation of those scripts ([https://github.com/bmaltais/kohya\_ss](https://github.com/bmaltais/kohya_ss)) |
| .ckpt | Model | “Checkpoint”, a file format created by PyTorch Lightning, a PyTorch research framework. It contains a PyTorch Lightning machine learning model used (by Stable Diffusion) to generate images. |
| .pt | Software | A machine learning model file created using PyTorch, containing algorithms used to automatically perform a task. |
| .Safetensors | Model | A file format for Checkpoint models, less susceptible to embedded malicious code. See “Pickle” |
| AGI | Concept | Artificial General Intelligence (AGI), the point at which AI matches or exceeds the intelligence of humans. |
| API | Software | Application Programmer Interface – a set of functions and tools which allow interaction with, or between, pieces of software. |
| Auto-GPT | Software, LLM |     |
| Automatic1111 | Developer, SD User Interface | Creator of the popular Automatic1111 WebUI graphical user interface for SD. |
| Bard | Software, LLM | Google’s Chatbot, based on their LaMDA model. |
| Batch |     | A subset of the training data used in one iteration of model training. In inference, a group of images. |
| Bing | Software, LLM | Microsoft’s ChatGTP powered Chatbot. |
| CFG | Setting | Classifier Free Guidance, sometimes “Guidance Scale”. Controls how closely the image generation process follows the text prompt. |
| Checkpoint | Model | The product of training on millions of captioned images scraped from multiple sources on the Web. This file drives Stable Diffusion’s txt2img, img2img, txt2video |
| Civitai (Civitai.com) | Community Resource | Popular hosting site for all types of Generative AI resources. |
| CLIP | Software | An open source model created by OpenAI. Trained on millions of images and captions, it determines how well a particular caption describes an image. |
| Cmdr2 | Developer, SD User Interface | Creator of the popular EasyDiffusion, simple one-click install graphical user interface for SD. |
| CodeFormer | Face/Image Restoration, Model | A facial image restoration model, for fixing blurry, grainy, or disfigured faces. |
| Colab | Tool | Colaboratory, a product from Google Research, allowing execution of Python code through the browser. Particularly geared towards machine learning applications. [https://colab.research.google.com/](https://colab.research.google.com/) |
| ComfyUI | SD User Interface, Software | A popular powerful modular UI for Stable Diffusion with a “workflow” type workspace. Somewhat more complex than Auto1111 WebUI [https://github.com/comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI) |
| CompVis | Organization | Computer Vision & Learning research group at Ludwig Maximilian University of Munich. They host Stable Diffusion models on Hugging Face. |
| Conda | Application, Software | An open source package manager for many programming languages, including Python. |
| ControlNet | UI Extension | An Extension to Auto1111 WebUI allowing images to be manipulated in a number of ways. [https://github.com/Mikubill/sd-webui-controlnet](https://github.com/Mikubill/sd-webui-controlnet) |
| Convergence | Concept | The point in image generation where the image no longer changes as the steps increase. |
| CUDA | Hardware, Software | Compute Unified Device Architecture, Nvdia’s parallel processing architecture. |
| DALL-E / DALL-E 2 | Organization | Deep learning image models created by OpenAI, available as a commercial image generation service. |
| Danbooru | Community Resource | English-based image board website specializing in erotic manga fan art, NSFW. |
| Danbooru Tag | Community Resource | System of keywords applied to Danbooru images describing the content within. When using Checkpoint models trained on Danbooru images, keywords can be referenced in Prompts. |
| DDIM (Sampler) | Sampler | Denoising Diffusion Implicit Models. See Samplers. |
| Deep Learning | Concept | A type of Machine Learning, where neural networks attempt to mimic the behavior of the human brain to perform tasks. |
| Deforum | UI Extension, Community Resource | A community of AI image synthesis developers, enthusiasts, and artists, producing Generative AI tools. Most commonly known for a Stable Diffusion WebUI video extension of the same name. |
| Denoising/Diffusion | Concept | The process by which random noise (see Seed) is iteratively reduced into the final image. |
| depth2img | Concept | Infers the depth of an input image (using an existing model), and then generates new images using both the text and depth information. |
| Diffusion Model (DM) | Model | A generative model, used to generate data similar to the data on which they are trained. |
| DPM adaptive (Sampler) | Sampler | Diffusion Probabilistic Model (Adaptive). See Samplers. Ignores Step Count. |
| DPM Fast (Sampler) | Sampler | Diffusion Probabilistic Model (Fast). See Samplers. |
| DPM++ 2M (Sampler) | Sampler | Diffusion Probabilistic Model – Multi-step. Produces good quality results within 15-20 Steps. |
| DPM++ 2M Karras (Sampler) | Sampler | Diffusion Probabilistic Model – Multi-step. Produces good quality results within 15-20 Steps. |
| DPM++ 2S a Karras (Sampler) | Sampler | Diffusion Probabilistic Model – Single-step. Produces good quality results within 15-20 Steps. |
| DPM++ 2Sa (Sampler) | Sampler | Diffusion Probabilistic Model – Single-step. Produces good quality results within 15-20 Steps. |
| DPM++ SDE (Sampler) | Sampler |     |
| DPM++ SDE Karras (Sampler) | Sampler |     |
| DPM2 (Sampler) | Sampler |     |
| DPM2 a (Sampler) | Sampler |     |
| DPM2 a Karras (Sampler) | Sampler |     |
| DPM2 Karras (Sampler) | Sampler |     |
| DreamArtist | UI Extension, Software | An extension to WebUI allowing users to create trained SD1.5 embeddings to direct an image towards a particular style, or figure. A PyTorch implementation of the research paper DreamArtist: Towards Controllable One-Shot Text-to-Image Generation via Contrastive Prompt-Tuning, Ziyi Dong, Pengxu Wei, Liang Lin. |
| DreamBooth | Software, Community Resource | Developed by Google Researchers, DreamBooth is a deep learning image generation model designed to fine-tune existing models (checkpoints). Can be used to create custom models based on a set of images. |
| DreamStudio | Organization, SD User Interface | A commercial web-based image generation service created by Stability AI using Stable Diffusion models. |
| Dropout (training) | Concept | A technique to prevent overfitting by randomly ignoring some images/tokens, etc. during training. |
| DyLoRA C3Lier |     | A LoRA derivative. |
| DyLoRA LierLa |     | A LoRA derivative. |
| DyLoRA Lycoris |     | A LoRA derivative. |
| EMA | Model | Exponential Moving Average. A full EMA Checkpoint model contains extra training data which is not required for inference (generating images). Full EMA models can be used to further train a Checkpoint. |
| Emad | Organization, Developer | Emad Mostaque, CEO and co-founder of Stability AI, one of the companies behind Stable Diffusion. |
| Embedding | Model, UI Extension | Additional file inputs to help guide the diffusion model to produce images that match the prompt. Can be a graphical style, representation of a person, or object. See Textual Inversion and Aesthetic Gradient. |
| Entropy | Concept | A measure of randomness, or disorder. |
| Epoch | Concept | The number of times a model training process looked through a full data set of images. E.g. The 5th Epoc of a Checkpoint model looked five times through the same data set of images. |
| ESRGAN | Upscaler, Model | Enhanced Super-Resolution Generative Adversarial Networks. A technique to reconstruct a higher-resolution image from a lower-resolution image. E.g. upscaling of a 720p image into 1080p. Implemented as a tool within many Stable Diffusion interfaces. |
| Euler (Sampler) | Sampler | Named after Leonhard Euler, a numerical procedure for solving ordinary differential equations, See Samplers. |
| Euler a (Sampler) | Sampler | Ancestral version of the Euler sampler. Named after Leonhard Euler, a numerical procedure for solving ordinary differential equations, See Samplers. |
| Finetune | Concept | The process of extending a model, enhancing it’s capabilities by adding additional information (images). |
| float16 | Setting, Model, Concept | Half-Precision floating point number. |
| float32 | Setting, Model, Concept | Full-Precision floating point number. |
| Generative Adversarial Networks (GANs) | Model | A pair of AI models: one generates new data, and the other evaluates its quality. |
| Generative AI | Concept | Generative AI refers to artificial intelligence systems that can create new content, such as images, text, or music, by learning patterns from existing data. |
| GFPGAN | Face/Image Restoration, Model | Generative Facial Prior, a facial restoration model for fixing blurry, grainy, or disfigured faces. |
| Git (GitHub) | Application, Software | Hosting service for software development, version control, bug tracking, documentation. |
| GPT-3 | Model, LLM | Generative Pre-trained Transformer 3, a language model, using machine learning to produce human-like text, based on an initial prompt. |
| GPT-4 | Model, LLM | Generative Pre-trained Transformer 4, a language model, using machine learning to produce human-like text, based on an initial prompt. A huge leap in performance and reasoning capability over GPT 3/3.5. |
| GPU | Hardware | A Graphics Processing Unit, a type of processor designed to perform quick mathematical calculations, allowing it to render images and video for display. |
| Gradio | Software | A web-browser based interface framework, specifically for Machine Learning applications. Auto1111 WebUI runs in a Gradio interface. |
| Hallucinations (LLM) | LLM, Concept | Sometimes LLM models like ChatGPT produce information that sounds plausible but is nonsensical or entirely false. This is called a Hallucination. |
| Hash (Checkpoint model) | Model, Concept | An algorithm for verifying the integrity of a file, by generating an alphanumeric string unique to the file in question. Checkpoint models are hashed, and the resulting string can be used to identify that model. |
| Heun (Sampler) | Sampler | Named after Karl Heun, a numerical procedure for solving ordinary differential equations. See Samplers. |
| Hugging Face | Organization | A community/data science platform providing tools to build, train, and deploy machine learning models. |
| Hypernetwork (Hypernet) | Model | A method to guide a Checkpoint model towards a specific theme, object, or character based on its’ own content (no external data required). |
| img2img | Concept | Process to generate new images based on an input image, and txt2img prompt. |
| Inpainting | Concept | The practice of removing or replacing objects in an image based on a painted mask. |
| LAION | Organization | A non-profit organization, providing data sets, tools, and models, for machine learning research. |
| LAION-5B | Model | A large-scale dataset for research purposes consisting of 5.85 billion CLIP-filtered image-text pairs. |
| Lanczos | Upscaler, Model | An interpolation method used to compute new values for sampled data. In this case, used to upscale images. Named after creator, Cornelius Lanczos. |
| Large Language Model (LLM) | LLM, Model | A type of Neural Network that learns to write and converse with users. Trained on billions of pieces of text, LLMs excel at producing coherent sentences and replying to prompts in the correct context. They can perform tasks such as re-writing and summarizing text, chatting about various topics, and performing research. |
| Latent Diffusion | Model | A type of diffusion model that contains compressed image representations instead of the actual images. This type of model allows the storage of a large amount of data that can be used by encoders to reconstruct images from textual or image inputs. |
| Latent Mirroring | Concept, UI Extension | Applies mirroring to the latent images mid-generation to produce anything from subtly balanced compositions to perfect reflections. |
| Latent Space | Concept | The information-dense space where the diffusion model’s image representation, attention, and transformation are merged and form the initial noise for the diffusion process. |
| LDSR | Upscaler | Latent Diffusion Super Resolution upscaling. A method to increase the dimensions/quality of images. |
| Lexica | Community Resource | Lexica.art, a search engine for stable diffusion art and prompts. |
| LlamaIndex (GPT Index) | Software, LLM | [https://github.com/jerryjliu/llama\_index](https://github.com/jerryjliu/llama_index) – Allows the connection of text data to an LLM via a generated “index”. |
| LLM | LLM, Model | A type of Neural Network that learns to write and converse with users. Trained on billions of pieces of text, LLMs excel at producing coherent sentences and replying to prompts in the correct context. They can perform tasks such as re-writing and summarizing text, chatting about various topics, and performing research. |
| LMS (Sampler) | Sampler |     |
| LMS Karras (Sampler) | Sampler |     |
| LoCON | Model, Concept | A LoRA derivative. |
| LoHa | Model, Concept | A LoRA derivative. |
| LoKR | Model, Concept | A LoRA derivative. |
| LoRA | Model, Concept | Low-Rank Adaptation, a method of training for SD, much like Textual Inversion. Can capture styles and subjects, producing better results in a shorter time, with smaller output files, than traditional finetuning. |
| LoRA C3Lier | Model, Concept | A LoRA derivative. |
| LoRA LierLa | Model, Concept | A LoRA derivative. |
| Loss (function) | Concept | A measure of how well an AI model’s outputs match the desired outputs. |
| Merge (Checkpoint) | Model | A process by which Checkpoint models are combined (merged) to form new models. Depending on the merge method (see Weighted Sum, Sigmoid) and multiplier, the merged model will retain varying characteristics of its’ constituent models. |
| Metadata | Concept, Software | Metadata is data that describes data. In the context of Stable Diffusion, metadata is often used to describe the Prompt, Sampler settings, CFG, steps, etc. which are used to define an image, and stored in a .png header. |
| MidJourney | Organization, SD User Interface | A commercial web-based image generation service, similar to DALL-E, or the free, open source, Stable Diffusion. |
| Model | Model | Alternative term for Checkpoint |
| Negative Prompt | Setting, Concept | Keywords which tell a Stable Diffusion prompt what we don’t want to see, in the generated image. |
| Neural Network | Concept, Software | Mathematical systems that act like a human brain, with layers of artificial “neurons” helping find connections between data. |
| Notebook | Community Resource, Software | See Colab. A Jupyter notebook service providing access, free of charge, to computing resources including GPUs. |
| NovelAI (NAI) | Organization | A paid, subscription based AI-assisted story (text) writing service. Also has a txt2img model, which was leaked and is now incorporated into many Stable Diffusion models. |
| Olivio (Sarikas) | Community Resource | Olivio produces wonderful SD content on YouTube (https://www.youtube.com/@OlivioSarikas) – one of the best SD news YouTubers out there! |
| OpenAI | Organization | AI research laboratory consisting of the for-profit corporation OpenAI LP and the non-profit OpenAI Inc. |
| OpenPose | Model, Software | A method for extracting a “skeleton” from an image of a person, allowing poses to be transferred from one image to another. Used by ControlNet. |
| Outpainting | Concept | The practice of extending the outer border of an image, into blank canvas space, while maintaining the style and content of the image. |
| Overfitting | Concept | When an AI model learns the training data too well and performs poorly on unseen data. |
| Parameters (LLMs) | Concept, Software, LLM | Numerical points across a Large Language Model’s training data. Parameters dictate how proficient the model is at its tasks. E.g. a 6B (Billion) Parameter model will likely perform less well than a 13B Parameter model. |
| Pickle | Concept, Software | Community slang term for potentially malicious code hidden within models and embeddings. To be “pickled” is to have unwanted code execute on your machine (be hacked). |
| PLMS (Sampler) | Sampler | Pre-Trained Language Models. See Samplers. |
| Prompt | Concept | Text input to Stable Diffusion describing the particulars of the image you would like output. |
| Pruned/Pruning | Model | A method of optimizing a Checkpoint model to increase the speed of inference (prompt generation), file size, and VRAM cost. |
| Python | Application, Software | A popular, high-level, general purpose coding language. |
| PyTorch | Application, Software | An open source machine learning library, created by META. |
| Real-ESRGAN | Upscaler | An image restoration method. |
| SadTalker | UI Extension | [https://github.com/OpenTalker/SadTalker](https://github.com/OpenTalker/SadTalker) A framework for facial animation/lip synching based upon an audio input. |
| Samplers | Sampler | Mathematical functions providing different ways of solving differential equations. Each will produce a slightly (or significantly) different image result from the random latent noise generation. |
| Sampling Steps | Sampler, Concept | The number of how many steps to spend generating (diffusing) your image. |
| SD 1.4 | Model | A latent txt2img model, the default model for SD at release. Fine-tuned on 225k steps at resolution 512×512 on laion-aesthetics v2 data set. |
| SD 1.5 | Model | A latent txt2img model, updated version of 1.4, fine-tuned on 595k steps at resolution 512×512 on laion-aesthetics v2 data set. |
| SD UI | Application, Software | Colloquial term for Cmdr2’s popular graphical interface for Stable Diffusion prompting. |
| SDXL 0.9 | Model | Stability AI’s latest (March 2023) Stable Diffusion Model. Will become SDXL 1.0 and be released ~July 2023. |
| Refiner | Model | Part of SDXL’s two-stage pipeline – the Refiner further enhances detail from the base model. |
| Seed | Concept | A pseudo-random number used to initialize the generation of random noise, from which the final image is built. Seeds can be saved and used along with other settings to recreate a particular image. |
| Shoggoth Tongue | Concept, LLM | A humorous allusion to the language of the fictional monsters in the Cthulhu Mythos, “Shoggoth Tongue” is the name given to advanced ChatGPT commands which are particularly arcane and difficult to understand, but allow ChatGPT to perform advanced actions outside of the intended operation of the system. |
| Sigmoid (Interpolation Method) | Model, Concept | A method for merging Checkpoint Models based on a Sigmoid function – a mathematical function producing an “S” shaped curve. |
| Stability AI | Organization | AI technology company co-founded by Emad Mostaque. One of the companies behind Stable Diffusion. |
| Stable Diffusion (SD) | Application, Software | A deep learning, text-to-image model released in 2022. It is primarily used to generate detailed images based on provided text descriptions. |
| SwinIR | Face/Image Restoration, Model | An image restoration transform, aiming to restore high quality images from low quality images. |
| Tensor | Software | A container, in which multi-dimensional data can be stored. |
| Tensor Core | Hardware | Processing unit technology developed by Nvidia, designed to carry out matrix multiplication, an arithmetic operation. |
| Textual Inversion | Model, Concept, UI Extension | A technique for capturing concepts from a small number of sample images in a way that can influence txt2img results towards a particular face, or object. |
| Token | Concept | A token is roughly a word, a punctuation, or a Unicode character in a prompt. |
| Tokenizer | Concept, Model | The process/model through which text prompts are turned into tokens, for processing. |
| Torch 2.0 | Software | The latest (March 2023) PyTorch release. |
| Training | Concept | The process of teaching an AI model by feeding it data and adjusting its parameters. |
| Training Data | Model | A set of many images used to “train” a Stable Diffusion model, or embedding. |
| txt2img | Concept, Model | Model/method of image generation via entry of text input. |
| txt2video | Concept, Model | Model/method of video generation via entry of text input. |
| Underfitting |     | When an AI model cannot capture the underlying pattern of the data due to incomplete training. |
| UniPC (Sampler) | Sampler | A recently released (3/2023) sampler based upon [https://huggingface.co/docs/diffusers/api/schedulers/unipc](https://huggingface.co/docs/diffusers/api/schedulers/unipc) |
| Upscale | Upscaler, Concept | The process of converting low resolution media (images or video) into higher resolution media. |
| VAE | Model | Variational Autoencoder. A .vae.pt file which accompanies a Checkpoint model and provides additional detail improvements. Not all Checkpoints have an associated vae file, and some vae files are generic and can be used to improve any Checkpoint model. |
| Vector (Prompt Word) | Concept | An attempt to mathematically represent the meaning of a word, for processing in Stable Diffusion. |
| Venv | Software | A Python “Virtual Environment” which allows multiple instances of python packages to run, independently, on the same PC. |
| Vicuna | LLM, Software, Model | [https://vicuna.lmsys.org/](<https://vicuna.lmsys.org/ >) An Open-Source Chatbot model founded by students and faculty from UC Berkeley in collaboration with UCSD and CMU. |
| Vladmandic | Software, SD User Interface | A popular “Fork” of Auto1111 WebUI, with its own feature-set. [https://github.com/vladmandic/automatic](https://github.com/vladmandic/automatic) |
| VRAM | Hardware | Video random access memory. Dedicated Graphics Card (GPU) memory used to store pixels, and other graphical processing data, for display. |
| Waifu Diffusion | Model | A popular text-to-image model, trained on high quality anime images, which produces anime style image outputs. Originally produced for SD 1.4, now has an SDXL version. |
| WebUI | Application, Software, SD User Interface | Colloquial term for Automatic1111’s WebUI – a popular graphical interface for Stable Diffusion prompting. |
| Weighted Sum (Interpolation Method) | Concept | A method of Checkpoint merging using the formula Result = ( A \* (1 – M) ) + ( B \* M ) . |
| Weights | Model | Alternative term for Checkpoint |
| Wildcards | Concept | Text files containing terms (clothing types, cities, weather conditions, etc.) which can be automatically input into image prompts, for a huge variety of dynamic images. |
| xformers | UI Extension, Software | Optional library to speed up image generation. Superseded somewhat by new options implemented by Torch 2.0 |
| Algorithm | Concept, Software | A series of instructions that allow a computer to learn and analyze data, learning from it, and use that learning to interpret and accomplish future tasks on its own. |
| Turing Test | Concept | Named after mathematician Alan Turing, a test of a machine’s ability to behave like a human. The machine passes if a human can’t distinguish the machine’s response from another human. |
| Bias | Concept, LLM | In Large Language Models, errors resulting from training data; stereotypes, attributing certain characteristics to races or groups of people, etc. Bias can cause models to generate offensive and harmful content. |
| Training Data | Concept, LLM, Model | The data sets uses to help AI models learn; can be text, images, code, or other data, depending on the type of model to be trained. |
| Multimodal AI | Concept | AI that can process multiple types of inputs, including text, images, video or speech. |
| Emergent Behavior | Concept, LLM | Unintended abilities exhibited by an AI model. |
| SD.Next | Software | See Vlad, Vladmandic Fork of Auto1111 WebUI. |
| Civitai Generator | Software, Tool | Free Stable Diffusion Image Generation Interface, available on Civitai.com. |
| Civitai Trainer | Software, Tool | LoRA Training interface, available on Civitai.com, for SDXL, SD 1.5, Pony, and Flux based LoRA. |
| Motion Module | Software | Used by AnimateDiff to inject motion into txt2img (or img2img) generations. |
| AnimateDiff | Software, Extension | Technique which involves injecting motion into txt2img (or img2img) generations. https://animatediff.github.io/ |
| ADetailer | Software, Extension | A popular Automatic1111 Extension, mostly used to enhance fine face and eye detail, but can be used to re-draw hands and full characters. |
| Forge | Software, Interface | A popular fork of Auto1111 WebUI, by the Creator of Fooocus and ControlNet [https://github.com/lllyasviel/stable-diffusion-webui-forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) |
| Flux | Model | A suite of Models released August 2024 by Black Forest Labs. [Check out our Quickstart Guide](https://civitai-education-hub-1063ae6.ingress-alpha.ewp.livequickstart-guide-to-flux-1/)! |
| Pony | Model | Popular name for Pony Diffusion, a very popular SDXL-based model released by Creator Astraliteheart and his company, PurpleSmart AI. |
| DoRA | Model, concept | A LoRA-like training process. Support has been added to all the major interfaces. |
| GPT-4o | Model, LLM | Generative Pre-trained Transformer 4 refined model, currently the most advanced multi-modal model from OpenAI. |
| Black Forest Labs | Organization | [https://blackforestlabs.ai](https://blackforestlabs.ai/), founded August 2024 from ex-Stability AI and other ML engineers. Released the hugely popular suite of text-2-img models, Flux |
| Fooocus | Software, Interface | A lightweight interface for SDXL image creation, from the creator of Forge and ControlNet. [Check out our Quickstart Guide](https://civitai-education-hub-1063ae6.ingress-alpha.ewp.livegenerative-ai-art-with-fooocus-quickstart-guide/)! |
| Draw Things | Software, Interface | Draw Things, is a popular Apple AppStore Stable Diffusion Interface app for inference. |
| Civitai AiR | Programme | Civitai AiR (Artist in Residency) is an Art Residency programme which connects traditional artists with Generative AI art. Read more on [https://air.civitai.com](https://air.civitai.com/) |
| SD3 (Stable Diffusion 3) | Model | Controversial text2img Model released by Stability AI, June 2024. |
| yaml | Software, UI Extension, Model | A human-readable data-serialization programming language commonly used for configuration files. Yaml files accompany Checkpoint models, and provide Stable Diffusion with additional information about the Checkpoint. |
