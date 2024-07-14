FROM node:18-alpine

WORKDIR /NEWS-M

COPY public/ /NEWS-M/public

COPY src/ /NEWS-M/src

COPY package.json /NEWS-M/

RUN npm install

CMD ["npm", "start"]
