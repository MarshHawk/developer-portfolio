FROM node:11.5

COPY . .

RUN apt-get clean && npm install