FROM node:20.12.2-slim
WORKDIR /app/
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci
