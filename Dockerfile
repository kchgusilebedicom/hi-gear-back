FROM node:14-alpine as development
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build


FROM node:14-alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
COPY --from=development /usr/src/app/build ./build
RUN echo ${NODE_ENV}
CMD ["node", "build/main"]