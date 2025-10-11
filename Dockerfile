# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.13.1

# --- Builder stage ---
FROM node:${NODE_VERSION}-slim AS builder
WORKDIR /app

# Install dependencies (npm ci for deterministic builds)
COPY --link package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Copy the rest of the application source
COPY --link . .

# Build the app (Vite + TypeScript)
RUN --mount=type=cache,target=/root/.npm \
    npm run build

# --- Production stage ---
FROM node:${NODE_VERSION}-slim AS final
WORKDIR /app

# Create a non-root user
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# Copy built app and production dependencies only
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"
USER appuser

# Expose the default Vite preview port
EXPOSE 4173

CMD ["npx", "vite", "preview", "--host"]
