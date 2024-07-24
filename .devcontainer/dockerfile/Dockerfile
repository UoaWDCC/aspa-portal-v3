FROM node:lts-alpine3.20

# Set working directory
WORKDIR /repo

# Set user as root
USER root

# Install git
RUN apk add --no-cache git

# Install Docker Compose
RUN apk add --no-cache docker-compose

# Install gh CLI
RUN apk add --no-cache github-cli

#Install curl
RUN apk add --no-cache curl

#Install openjdk8
RUN apk add --no-cache openjdk8

EXPOSE 3307

VOLUME ["/repo"]