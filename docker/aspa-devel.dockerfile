ARG BASE_REGISTRY=docker.io/library
ARG BASE_IMAGE=node:lts-alpine3.20

FROM ${BASE_REGISTRY}/${BASE_IMAGE} AS base

USER root

# Install git, bash, and corepack
RUN apk add --no-cache git bash postgresql-client curl openssh-client && \
	corepack enable && \
	corepack prepare yarn@stable --activate

# Install flyctl
RUN curl -L https://fly.io/install.sh | sh && \
	ln -s /root/.fly/bin/fly /usr/local/bin/fly

# Enable terminal for VSCode
ENV SHELL=/bin/bash

VOLUME [ "/repo" ]