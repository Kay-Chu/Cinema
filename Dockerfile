# syntax=docker/dockerfile:1
FROM node:16.17.0-alpine3.16
ENV NODE_ENV=production
WORKDIR /Cdex
COPY ["package.json", "package-lock.json*", "./"]
COPY . .
RUN npm install
CMD [ "npm", "start"]