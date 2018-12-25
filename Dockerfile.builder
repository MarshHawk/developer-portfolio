FROM node:11.5

COPY . .

RUN apt-get clean && npm install && npm install -g react-scripts