# Use the Node.js Minify package to minify sources
FROM node:alpine AS minify
# NPM install the Minify package
RUN npm install minify --global
# Copy the website source to the tmp folder
COPY ./miketrout.dev /tmp/miketrout.dev
# Minify the CSS
WORKDIR /tmp/miketrout.dev/css
RUN minify main.css > main.min.css && mv main.min.css main.css
# Minify the JavaScript
WORKDIR /tmp/miketrout.dev/script
RUN minify main.js > main.min.js && mv main.min.js main.js
# Minify the HTML
WORKDIR /tmp/miketrout.dev
RUN minify index.html > index.min.html && mv index.min.html index.html

# Using Nginx as the base image
FROM nginx
# Copy in the Nginx config
COPY www.miketrout.dev.conf /etc/nginx/conf.d/
# Copy in the website source from the minify stage
COPY --from=minify /tmp/miketrout.dev /var/www/miketrout.dev
# Expose port 80
EXPOSE 80
# Set the entrypoint
ENTRYPOINT ["nginx", "-g", "daemon off;"]
