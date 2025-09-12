ARG BASE_REGISTRY=docker.io/library
ARG BASE_IMAGE=node:lts-bookworm

FROM ${BASE_REGISTRY}/${BASE_IMAGE} AS base

USER root

# Install git, bash, and corepack
RUN apt-get update && \
	apt-get install -y --no-install-recommends git bash postgresql-client curl && \
	rm -rf /var/lib/apt/lists/* && \
	npm install -g corepack && \
	corepack enable && \
	corepack prepare yarn@stable --activate

# Enable terminal for VSCode
ENV SHELL=/bin/bash

VOLUME [ "/repo" ]