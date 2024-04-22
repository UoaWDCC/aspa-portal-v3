# ASPA

## Introduction
This repository houses the ASPA website, a platform designed to streamline ticketing and event management for ASPA. 

### Background
The Auckland Student Pool Association (ASPA) is centered at the University of Auckland, dedicated to fostering a vibrant community united by a love for pool. Their mission is to cultivate an inclusive atmosphere that encourages camaraderie and skill development among billiards enthusiasts. Through a variety of casual gatherings, coaching sessions, and spirited tournaments, they aim to connect members eager to engage in both competitive and social play.

## Pre-requisites

Please see the wiki page [Getting Started](https://github.com/UoaWDCC/aspa-portal-v3/wiki/GettingStarted) for the pre-requisites and follow the instructions to install the necessary pre-requisites tools.



## Installation

After installing the necessary pre-requisites tools, follow the steps below to install the project dependencies. The project is split into two main directories: frontend and backend. The frontend directory contains the Next application, while the backend directory contains the Node.js server and database. The frontend and backend directories have their own package.json files, so you will need to install the dependencies for both directories separately

1. Clone the repository
```bash
git clone https://github.com/UoaWDCC/aspa-portal-v3
```

2. Install the necessary frontend packages
```bash
cd frontend
```

```bash
yarn install
```

3. Install the necessary backend packages
```bash
cd backend
```

```bash
yarn install
```
## Usage

1. Start the frontend
```bash
yarn start:frontend
```
