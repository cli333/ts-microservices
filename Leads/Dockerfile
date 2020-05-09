FROM node:8

WORKDIR /app

COPY package*.json ./

COPY tsconfig*.json ./

RUN npm install

COPY ./ ./

RUN npm run postinstall

EXPOSE 5000

CMD [ "npm", "run", "start" ]