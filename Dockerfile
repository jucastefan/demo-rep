FROM node:alpine

WORKDIR /usr/src/app

COPY ./sourceCode /usr/src/app

RUN npm install -g @angular/cli

RUN npm install -f

CMD ["ng", "serve", "--host", "0.0.0.0"]

