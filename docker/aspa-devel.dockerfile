ARG BASE_REGISTRY=mcr.microsoft.com
ARG BASE_IMAGE=devcontainers/typescript-node:20

FROM ${BASE_REGISTRY}/${BASE_IMAGE} AS base

USER root

# Install Git
RUN apt-get update && \
    apt-get install -y git && \
    apt-get clean -y && \
    rm -rf /var/lib/apt/lists/*

# Corepack
RUN corepack enable
RUN corepack prepare yarn@stable --activate

# Enable terminal for VSCode
ENV SHELL /bin/bash

VOLUME [ "/repo" ]