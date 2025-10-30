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

# Install dependencies 
RUN yarn install --immutable

# Copy source files
COPY . .

# Generate payload types
RUN yarn payload generate:types

# Set PAYLOAD_SECRET build argument
ARG PAYLOAD_SECRET
ENV PAYLOAD_SECRET=${PAYLOAD_SECRET}

# Build application
RUN yarn build

# Runtime stage
FROM ${BASE_REGISTRY}/${BASE_IMAGE} AS runtime

WORKDIR /app

# Corepack and curl(for health check)
RUN apk add --no-cache curl && \
    corepack enable && \
    corepack prepare yarn@stable --activate

# Just copy the built files from the builder stage
COPY --from=builder /app /app
RUN chmod +x ./start.sh

# Listen to port 3000
EXPOSE 3000

# Add health check to ensure the app is running
HEALTHCHECK --interval=30s --timeout=10s --start-period=90s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Keep the container running indefinitely
#CMD ["sleep", "infinity"] # USED FOR DEBUGGING

# Start the app
# CMD ["yarn", "start"]

# Use the startup script
CMD ["./start.sh"]