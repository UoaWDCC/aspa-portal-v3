ARG BASE_REGISTRY=docker.io/library
ARG BASE_IMAGE=node:lts-alpine3.20

# Builder stage
FROM ${BASE_REGISTRY}/${BASE_IMAGE} AS builder

# Corepack
RUN corepack enable && \
    corepack prepare yarn@stable --activate

WORKDIR /app

# Copy only package files first to leverage cache (separate layer for dependencies)
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Install dependencies
RUN yarn install --immutable

# Copy source files
COPY . .

# Build application
RUN yarn build

# Runtime stage
FROM ${BASE_REGISTRY}/${BASE_IMAGE} AS runtime

WORKDIR /app

# Install minimal runtime dependencies in a single layer
RUN apk add --no-cache curl && \
    corepack enable && \
    corepack prepare yarn@stable --activate

# Copy only necessary files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Install production dependencies only
RUN yarn workspaces focus --production

# Configure container
EXPOSE 3000

# Add health check to ensure the app is running
HEALTHCHECK --interval=30s --timeout=10s --start-period=90s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Start the app
CMD ["yarn", "start"]