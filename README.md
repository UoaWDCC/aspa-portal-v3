# ASPA 🎱

## Table of Contents

## What is ASPA?

The **Auckland Student Pool Association (ASPA)** is centered at the University of Auckland, dedicated to fostering a vibrant community united by a love for pool. Their mission is to cultivate an inclusive atmosphere that encourages camaraderie and skill development among billiards enthusiasts. Through a variety of casual gatherings, coaching sessions, and spirited tournaments, they aim to connect members eager to engage in both competitive and social play.

## Overview

This project aims to develop a fully fledged website that provides a space for members to learn more about **ASPA’s** mission, events, and initiatives, while also offering useful tools for participation. The core functionality of the site includes a reusable and scalable **ticketing system** designed for use in **ASPA** and future **WDCC** projects. Additionally, the platform will feature an integrated **ELO ranking system** to support interactive and competitive elements, helping to foster engagement within the community.
### Disclaimers ⚠️: 
This project is only to be worked on by those who are a part of the team. We are **NOT** accepting contributions outside of our team.

## Pre-requisites

Please see the **Wiki** page: [Getting Started](https://github.com/UoaWDCC/aspa-portal-v3/wiki/GettingStarted) for the pre-requisites and follow the instructions to install the necessary pre-requisites tools.

## Local Development

After installing the necessary pre-requisites tools, follow the steps below to set up the dev container:

1. Clone the repository
    - Note: If you are using **Windows** you need to clone to WSL2 home/{username} directory for the dev container to be fully functional (Refer to Windows Docker Desktop Section of [Getting Started](https://github.com/UoaWDCC/aspa-portal-v3/wiki/GettingStarted))
2. Open the repository in Visual Studio Code
3. Press `F1` and select `Dev Container: Open Folder in Container`
4. Select the root folder of the repository
5. Select the dev container `ASPA Dev Container (Full)`
6. Wait for the dev container to build (this may take a while)

Now you have a development environment set up with all the necessary tools and dependencies installed :)

## Frontend
### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
