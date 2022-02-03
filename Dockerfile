# STAGE 1 - build the react app
# set the base image to build from
# This is the application image from which all other subsequent
# applications run. Alpine Linux is a security-oriented, lightweight #(~5Mb) Linux distribution.
FROM node:14-alpine as build

RUN apk --no-cache add --virtual builds-deps build-base python3 yarn
# set working directory
# this is the working folder in the container from which the app.   # will be running from
WORKDIR /app
# add the node_modules folder to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV production
# copy package.json file to /app directory for installation prep
COPY ./modules/ui/package.json .
COPY ./modules/ui/.npmrc .
# install dependencies
RUN yarn
# copy everything to /app directory
COPY ./modules/ui/. .
# build the app
RUN yarn build
# STAGE 2 - build the final image using a nginx web server
# distribution and copy the react build files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
# needed this to make React Router work properly
RUN rm /etc/nginx/conf.d/default.conf
COPY ./modules/ui/nginx/nginx.conf /etc/nginx/conf.d
# Expose port 80 for HTTP Traffic
EXPOSE 80
# start the nginx web server
CMD ["nginx", "-g", "daemon off;"]
