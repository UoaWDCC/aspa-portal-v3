ARG BASE_REGISTRY=docker.io/library
ARG BASE_IMAGE=node:lts-bookworm

FROM ${BASE_REGISTRY}/${BASE_IMAGE} AS base

USER root

# Install git, bash, and corepack

RUN apt-get update && \
	# Install development tools and Xvfb + common browser libs used by Cypress
	apt-get install -y --no-install-recommends \
		git \
		bash \
		postgresql-client \
		curl \
		xvfb \
		xauth \
		libgtk-3-0 \
		libnss3 \
		libxss1 \
		libasound2 \
		libgbm1 \
		libx11-xcb1 \
		fonts-liberation \
		ca-certificates && \
	# cleanup apt lists
	rm -rf /var/lib/apt/lists/* && \
	npm install -g corepack && \
	corepack enable && \
	corepack prepare yarn@stable --activate

# Enable terminal for VSCode
ENV SHELL=/bin/bash

VOLUME [ "/repo" ]