ARG BASE_REGISTRY=docker.io/library
ARG BASE_IMAGE=node:lts-alpine3.20

FROM ${BASE_REGISTRY}/${BASE_IMAGE} AS base

USER root

# Install Git and bash
RUN apk add --no-cache git bash

# Corepack
RUN corepack enable
RUN corepack prepare yarn@stable --activate

# Enable terminal for VSCode
ENV SHELL /bin/bash

VOLUME [ "/repo" ]