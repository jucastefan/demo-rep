FROM node:alpine as builder

WORKDIR /usr/src/app

COPY ./sourceCode /usr/src/app

RUN npm install -g @angular/cli

RUN npm install -f

RUN npm run build --prod

FROM nginx

COPY --from=builder /usr/src/app/dist/epiesa-clone /usr/share/nginx/html

COPY ./nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80
