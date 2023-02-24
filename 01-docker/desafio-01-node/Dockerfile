FROM node:19.5.0 as app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "main.js" ]

FROM nginx:latest as nginx

COPY default.conf /etc/nginx/sites-enabled/default.conf

EXPOSE 80