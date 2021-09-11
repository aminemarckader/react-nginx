# # FROM node:alpine as build
# # WORKDIR '/app'

# # COPY . /app/

# # RUN npm install --silent
# # RUN npm install react-scripts -g --silent

# # RUN npm run build


# # EXPOSE 4793
# # CMD ["nginx","-g","daemon off;"]

# FROM node:alpine
# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# RUN npm run build

# FROM nginx:1.20.1-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d

# EXPOSE 4793
# CMD ["npm", "run", "start"]

# Name the node stage "builder"
FROM node:alpine AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN yarn install && yarn build

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]