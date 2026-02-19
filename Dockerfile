# Build stage
FROM node:20-alpine

# Set working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build production
RUN npm run build

# Set timezone to IST
ENV TZ=Asia/Kolkata
RUN apk add --no-cache tzdata curl && \
    cp /usr/share/zoneinfo/${TZ} /etc/localtime && \
    echo ${TZ} > /etc/timezone

# Expose the app port
EXPOSE 5179

# Run the app
CMD ["npx", "serve", "-s", "build", "-l", "tcp://0.0.0.0:5179"]


