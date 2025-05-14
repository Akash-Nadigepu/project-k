# Stage 1: Build the Vite React app
FROM node:18-alpine AS build
WORKDIR /app

# Copy dependency files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Remove default Nginx config if needed
RUN rm /etc/nginx/conf.d/default.conf

# Add custom Nginx config (optional but recommended for SPA routing)
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
