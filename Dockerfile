FROM node:16-alpine
WORKDIR /todo

ENV PATH="./node-modules/.bin:$PATH"

COPY . .

EXPOSE 3001

CMD [ "yarn", "start" ]
