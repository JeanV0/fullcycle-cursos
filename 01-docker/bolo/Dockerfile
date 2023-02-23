FROM nginx:latest 

WORKDIR /application

RUN apt-get update ; \
apt-get install vim -y

COPY html/index.html /usr/share/nginx/