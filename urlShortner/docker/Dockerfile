# Use Node.js official image
FROM node:18

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire folder contents into the container's working directory
COPY . .

# Expose the application port (5000)
EXPOSE 5000

# Command to run your app
CMD ["node", "server.js"]