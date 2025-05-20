ARG BASE_REGISTRY=docker.io/library
ARG BASE_IMAGE=node:lts-alpine3.20

FROM ${BASE_REGISTRY}/${BASE_IMAGE} AS builder

USER root 

# Corepack
RUN corepack enable
RUN corepack prepare yarn@stable --activate

COPY ./ /app
WORKDIR /app

# Build
RUN yarn install --immutable
RUN yarn build

FROM ${BASE_REGISTRY}/${BASE_IMAGE} AS runtime

USER root

# Install corepack
RUN corepack enable
RUN corepack prepare yarn@stable --activate

# Set working directory
WORKDIR /app

COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/.yarn /app/.yarn
COPY --from=builder /app/yarn.lock /app/yarn.lock
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/next.config.mjs /app/next.config.mjs
COPY --from=builder /app/tsconfig.json /app/tsconfig.json

RUN yarn install --immutable

# Run the app
EXPOSE 3000

# Keep the container running indefinitely
#CMD ["sleep", "infinity"] # USED FOR DEBUGGING

# Start the app
CMD ["yarn", "start"]










