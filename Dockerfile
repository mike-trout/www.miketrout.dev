FROM nginx
COPY www.miketrout.dev.conf /etc/nginx/conf.d/
COPY ./miketrout.dev /var/www/miketrout.dev/
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
