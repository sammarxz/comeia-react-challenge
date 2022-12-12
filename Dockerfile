FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps
RUN npm run prepare

COPY . . 

EXPOSE 5173

CMD ["npm", "run", "dev"]