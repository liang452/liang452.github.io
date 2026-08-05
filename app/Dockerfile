# Build stage
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 
# builds static webpage files

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
# second container

EXPOSE 80