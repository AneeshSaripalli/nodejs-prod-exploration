FROM node:12

ENV PORT 3000

# Create app directory
WORKDIR /app

# Installing dependencies
COPY package*.json ./
RUN NODE_ENV=development npm install

# Copying source files
COPY . .

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"