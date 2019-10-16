# Use the Node.js Minify package to minify sources
FROM node:alpine AS minify
# NPM install the Minify package
RUN npm install minify --global
# Copy the website source to the tmp folder
COPY ./miketrout.dev /tmp/miketrout.dev
# Minify the CSS, HTML and JS
WORKDIR /tmp/miketrout.dev
RUN minify ./css/main.css > ./css/main.min.css && \
    mv ./css/main.min.css ./css/main.css && \
    minify ./css/print.css > ./css/print.min.css && \
    mv ./css/print.min.css ./css/print.css && \
    minify ./script/main.js > ./script/main.min.js && \
    mv ./script/main.min.js ./script/main.js && \
    minify index.html > index.min.html && \
    mv index.min.html index.html

# Using Nginx as the base image
FROM nginx:alpine
# Copy in the Nginx config
COPY www.miketrout.dev.conf /etc/nginx/conf.d/
# Copy in the website source from the minify stage
COPY --from=minify /tmp/miketrout.dev /var/www/miketrout.dev
# Expose port 80
EXPOSE 80
# Set the entrypoint
ENTRYPOINT ["nginx", "-g", "daemon off;"]
