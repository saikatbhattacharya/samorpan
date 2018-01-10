FROM node:8.9.4-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json yarn.lock /usr/src/app/
COPY . /usr/src/app
RUN npm install \
    && npm build \
    && mkdir /tmp_app \
    && mv -f package.json yarn.lock src/server /tmp_app/ \
    && rm -rf * \
    && mv -f /tmp_app/* . \
    && rm -rf /tmp_app \
    && npm install --prod \
    && npm cache clean \
    && mkdir logs \
    && mkdir logs/pm2logs
CMD yarn serve:docker