# Use an official Node runtime as a parent image
FROM node:14-alpine as build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY .. .

# Build the application
RUN npm run build

# Use a smaller base image for the final image
FROM nginx:alpine

# Copy the build output to replace the default Nginx contents
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the host machine
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
