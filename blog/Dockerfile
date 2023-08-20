# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Build the Gatsby site
RUN npm run build

# Install the Gatsby CLI
RUN npm install -g gatsby-cli

# Expose the port Gatsby will run on
EXPOSE 8000

# Start the Gatsby development server
CMD ["gatsby", "develop", "-H", "0.0.0.0"]
