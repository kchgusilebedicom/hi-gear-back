FROM node:14-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn global add rimraf && yarn install 
COPY . .

RUN yarn build

FROM node:14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
CMD echo ${NODE_ENV}
