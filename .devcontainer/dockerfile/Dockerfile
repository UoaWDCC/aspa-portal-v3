FROM node:lts-alpine3.20

# Set working directory
WORKDIR /repo

# Set user as root
USER root

# Install git
RUN apk add --no-cache git

# Install Docker Compose
RUN apk add --no-cache docker-compose

EXPOSE 3307

VOLUME ["/repo"]