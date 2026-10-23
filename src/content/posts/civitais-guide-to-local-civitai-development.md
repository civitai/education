---
title: "Civitai’s Guide to Local Civitai Development"
slug: "civitais-guide-to-local-civitai-development"
date: "2025-02-14T01:50:35Z"
modified: "2026-04-01T22:56:57Z"
categories:
  - "civitai"
  - "quickstart-guides"
tags:
  - "civitai"
  - "guide"
author: "civitai"
wpId: 6644
excerpt: "Civitai guide to contributing to the Civitai.com Project!"
image: "/wp-content/uploads/2025/02/localdev_anim.webp"
seo:
  title: "Civitai's Guide to Local Civitai Development - Civitai Education"
  description: "Civitai guide to contributing to the Civitai.com Project! Are you a developer who wants to volunteer some time? Help us out!"
  ogImage: "/wp-content/uploads/2025/02/localdev_anim.webp"
  canonical: "https://education.civitai.com/civitais-guide-to-local-civitai-development/"
---

| **Last Updated** | **Changes** |
| --- | --- |
| 2/13/2025 | First Version |
| 3/11/2025 | New [Watch Out](#watch-out) info! |
| 4/1/2026 | Added outdated content notice |

**⚠️ This Guide May Be Outdated**

The Civitai development environment has changed significantly since this guide was written. The setup steps, Docker configuration, and project structure described below may no longer be accurate.

For the latest setup instructions, please refer to the official repository on GitHub: [**github.com/civitai/civitai**](https://github.com/civitai/civitai). The repo’s README and contributing documentation will always reflect the most current development workflow.

## **Local Development? Open Source?**

Civitai is an open-source project, and we actively encourage community contributions! While many people know us as the largest repository of AI-generated models, fewer realize that our codebase is fully accessible on [GitHub](https://github.com/civitai/civitai). If you’re interested in helping improve the platform, this guide will walk you through setting up the Civitai Development Environment locally.

All contributions to the Civitai platform are entirely voluntary. While we greatly appreciate the time and effort our community puts into improving the platform, there is absolutely no obligation to participate. Open-source development is built on collaboration and passion for building something better together. If contributing isn’t for you, that’s totally fine! No one is required to volunteer their time, and we understand that not everyone has the bandwidth to contribute. If you do think you have the skills and desire to help, we truly appreciate it!

## **Github?**

Our codebase is hosted on [GitHub](https://github.com/civitai/civitai). Here, you can explore the project, report issues, and contribute code by submitting pull requests (PRs). Our repository includes documentation, a contribution guide, and everything needed to get started with local development.

## **Who Is This Guide For?**

This guide is extremely high-level, and intended for developers who have some experience working with:

-   **WSL (Windows Subsystem for Linux)**
-   **Docker**
-   **Visual Studio Code** (or a preferred development environment)
-   **Node.js, PostgreSQL, and Redis**
-   **Basic Git workflows**

If you’re unfamiliar with these technologies, we recommend brushing up on them before attempting to set up the environment.

## Getting Started

Before you begin, make sure you have the necessary tools installed:

### **Prerequisites**

-   **WSL (for Windows users)** – Ensure WSL is installed and configured.

    **Important Warning for Windows Users**: Either clone the repo onto a WSL volume, or use the “clone repository in named container volume” command. Otherwise, you will see performance issues.

-   **Docker** – Required for containerized services.
-   **Visual Studio Code** – Optional, but it does provide a streamlined development experience.
-   **Git** – To clone the repository and manage contributions.
-   **Redis Insight** – Optional, allows interrogation of the Redis subsystem.

### **First Steps**

#### Github

<div class="columns">

<div class="column" style="flex-basis:66.66%">

![](/wp-content/uploads/2025/02/Screenshot-2025-02-13-191435-1024x626.webp)

</div>

<div class="column" style="flex-basis:33.33%">

Using Github (Desktop, or Command Line, whichever your preference), clone the [Civitai Repo from Github](https://github.com/civitai/civitai).

`**git clone [https://github.com/civitai/civitai.git](https://github.com/civitai/civitai.git)**`

</div>

</div>

<div class="columns">

<div class="column">

![](/wp-content/uploads/2025/02/Screenshot-2025-02-13-191412.webp)

</div>

<div class="column">

If working in a Windows Environment, you’ll have to clone the files to WSL.

</div>

</div>

#### Launching the Container

<div class="columns">

<div class="column" style="flex-basis:33.33%">

Open the directory in your IDE of choice.

If using VS Code, you’ll be prompted to `**Open in container**`

For other IDEs, you may need to open the `**.devcontainer/devcontainer.json**` file, and click “**Create devcontainer and mount sources**“

</div>

<div class="column" style="flex-basis:66.66%">

![](/wp-content/uploads/2025/02/Screenshot-2025-02-13-193812.webp)

</div>

</div>

#### The Automated Config Process

After **reopening in Container**, several things will happen;

-   A starter `env` file will be created
-   Npm packages will be installed
-   Docker containers will be configured and spun up;

![](/wp-content/uploads/2025/02/Screenshot-2025-02-13-194057-1024x754.webp)

-   Additional database migrations will occur
-   Dummy seed data will be inserted;

![](/wp-content/uploads/2025/02/Screenshot-2025-02-13-194113-1024x344.webp)

-   Metrics and meilisearch will be populated;

![](/wp-content/uploads/2025/02/Screenshot-2025-02-13-194122-1024x351.webp)

-   Prisma will initialize

Open a new terminal and run `**make run**` or `**npm run dev**` to start the server;

![](/wp-content/uploads/2025/02/Screenshot-2025-02-13-195503-1024x159.webp)

#### Final Configuration

Edit the `**.env.development**` file

_Most_ default values are configured to work out of the box, except the S3 upload key and secret. To generate those, navigate to the minio web interface at [http://localhost:9000](http://localhost:9000/) with the default username and password `**minioadmin**`, then navigate to the “Access Keys” tab. Click “Create Access Key” and copy the generated key and secret into the `**.env**` file.

![](/wp-content/uploads/2025/02/Screenshot-2025-02-13-200811-1024x492.webp)

Set `**WEBHOOK_TOKEN**` to a random string of your choice. This will be used to authenticate requests to the webhook endpoint.

Add a random string of your choice to the email properties to allow user registration

`**EMAIL_USER**`

`**EMAIL_PASS**`

**`EMAIL_FROM`** (Valid email format needed)

![](/wp-content/uploads/2025/02/Screenshot-2025-02-13-201054-1024x270.webp)

#### It’s Alive! {#it-s-alive}

Congratulations, your very own local Civitai.com, running at **localhost:3000**

![](/wp-content/uploads/2025/02/Screenshot-2025-02-13-195818-1024x751.webp)

#### Signing In

Account creation will run emails through maildev, which can be accessed at [http://localhost:1080](http://localhost:1080/)

![](/wp-content/uploads/2025/02/Screenshot-2025-02-13-201426-1024x297.webp)

#### Altering Your User

You may wish to set your new user account up as a moderator. To do so use a database editor (like [DataGrip](https://www.jetbrains.com/datagrip/)) or connect directly to the DB (`**PGPASSWORD=postgres psql -h localhost -p 15432 -U postgres civitai**`), locate your usr record (via email or username) and change **`isModerator`** to `true`.

### **Data Migrations**

Over the course of development, you may need to change the structure of the database. To do this:

If you are adding/changing a column or table, please try to keep the `**gen_seed.ts**` file up to date with these changes.

Make your changes to the **`schema.prisma`** file

Create a folder in the `**prisma/migrations folder**` named with the convention `**YYYYMMDDHHmmss_brief_description_here**`

In this folder, create a file called `**migration.sql**`

In that file, put your sql changes.

These are usually simple sql commands like `**ALTER TABLE ...**`

**Run `make run-migrations`**

## **Contributing**

We welcome contributions! Once your environment is set up, here’s how you can get involved:

1.  **Fork the Repository** – Create your own copy of the repo on GitHub.
2.  **Create a Branch** – Work on your changes in a dedicated branch.
3.  **Make Your Changes** – Follow best practices and keep changes focused.
4.  **Submit a Pull Request** – Once your changes are ready, open a PR for review!

## **Community Development Team**

Some months ago, we proposed a **[Community Development Team](https://civitai.com/articles/7782)**, and we still plan to move forward with it. However, challenges with our codebase and local development setup delayed things. This guide is a step toward making contributions more accessible, and we hope to see more community involvement soon!

## Known Limitations

Certain systems will not function in a local environment, including;

-   Orchestration (Generation, Training)
-   Signals (Chat, Notifications, other real-time updates)
-   Buzz

## Watch Out!

-   After certain updates on the main branch, you may be required to run **`npm install`** to update packages and dependencies. Give that a go if you’re seeing build errors, such as the following, when trying to launch the site;

![](/wp-content/uploads/2025/02/Screenshot-2025-02-20-121334.webp)

-   You will have to add `**NEXT_PUBLIC_SIGNALS_ENDPOINT=localhost:3000**` to the `env.development` file.
