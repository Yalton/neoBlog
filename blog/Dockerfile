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


RUN gatsby build

# Expose the port Gatsby will run on
EXPOSE 9000

# Serve the Gatsby production build
CMD ["gatsby", "serve", "-H", "0.0.0.0", "-p", "9000"]