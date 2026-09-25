FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx prisma generate
RUN rm -rf dist && npm run build && ls -la dist/

EXPOSE 3000

CMD ["npm", "start"]
