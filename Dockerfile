FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm install
ENV BUILDING=true

COPY . .

RUN npm run build

# Add these lines
COPY init-db.js ./
CMD ["sh", "-c", "node init-db.js && npm start"]
