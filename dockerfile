FROM node:18-alpine AS base
COPY . /app/
WORKDIR /app
RUN npm install -g npm && npm install

