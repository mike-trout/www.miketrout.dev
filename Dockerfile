FROM nginx:alpine
COPY www.miketrout.dev.conf /etc/nginx/conf.d/
COPY ./html /var/www/miketrout.dev/html/
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
