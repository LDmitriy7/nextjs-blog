FROM node:18-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

CMD npm start