# Base stage
FROM node:24.3.0-alpine AS base

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache curl

# Copy package files
COPY package*.json ./

# Dependencies stage
FROM base AS deps
RUN npm ci --only=production && npm cache clean --force

# Development stage
FROM base AS development
RUN npm ci && npm cache clean --force
COPY . .

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 vueuser && \
    chown -R vueuser:nodejs /app

USER vueuser
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]

# Build stage for production
FROM base AS builder
RUN npm ci && npm cache clean --force
COPY . .
RUN npm run build

# Production stage
FROM node:24.3.0-alpine AS production
WORKDIR /app
# copy built assets from builder
COPY --from=builder /app/dist ./dist

# lightweight static file server
RUN npm i -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"] 