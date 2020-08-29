 # Create image based on the official Node 6 image from the dockerhub
FROM node:latest

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Get all the code needed to run the app
COPY . /usr/src/app

# Install dependecies
RUN npm install

# execute command tsc 
RUN npm run build
# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["node", "dist/index.js"]