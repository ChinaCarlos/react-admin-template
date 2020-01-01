FROM nginx:latest
LABEL "jian.man@carlosme.fun"="react-admin-template"
LABEL version="0.01"
LABEL description="React-Admin-Template"

RUN rm -fr  /usr/share/nginx/html/*

WORKDIR /usr/share/nginx/html

COPY ./build/ /usr/share/nginx/html

EXPOSE 80

# CMD ["nodemon","./bin/www"]