# Image Location
FROM node:8.16.0-alpine

# MAINTENER
MAINTAINER Maissacrement <emmariodelar@gmail.com>

# WORKSPACE
WORKDIR /app

# INIT DOCKER PROJECT
COPY package.json .
RUN yarn

# ADD REPO ON DOCKER
COPY . .

# ASSIGN PORT AND FUNCTIONNALITY
EXPOSE 8081
RUN ["yarn"]
