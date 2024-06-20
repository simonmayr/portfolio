
# Use this image as the platform to build the app
FROM node:22-alpine as portfolio-app

# Install pnpm globally
RUN npm install -g pnpm

# The WORKDIR instruction sets the working directory for everything that will happen next
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml .

# Clean install all node modules
RUN pnpm i

# Copy all local files into the image
COPY vite.config.ts svelte.config.js .
COPY src ./src
COPY static ./static

# Build SvelteKit app
RUN pnpm build

# Delete source code files that were used to build the app that are no longer needed
RUN rm -rf src/ static/ docker-compose.yml

# The USER instruction sets the user name to use as the default user for the remainder of the current stage
USER node:node

# This is the command that will be run inside the image when you tell Docker to start the container
CMD ["node","build/index.js"]
