FROM node:lts

COPY . .

RUN apt-get clean && npm install && npm install -g react-scripts