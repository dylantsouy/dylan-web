# Set the base image to node:12-alpine
FROM node:16-alpine as build

# Specify where our app will live in the container
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Copy the React App to the container
COPY package*.json ./

# Prepare the container for building React
RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm","start"]
