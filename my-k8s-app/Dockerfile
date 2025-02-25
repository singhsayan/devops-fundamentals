# Use a minimal base image
FROM node:20-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --only=production

# Copy application source code
COPY . .

# Build the application (if required)
RUN npm run build

# Use a smaller base image for the final container
FROM node:20-alpine

WORKDIR /app

# Copy dependencies & build files from the builder stage
COPY --from=builder /app /app

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "src/app.js"]