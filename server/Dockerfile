FROM node:18-bullseye-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Strapi project (optional if you have a build step)
# RUN npm run build

# Expose the port Strapi will run on
EXPOSE 1337

# Start the Strapi server
CMD ["npm", "run", "develop"]
