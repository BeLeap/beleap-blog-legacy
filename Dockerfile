FROM node:12

ARG CACHEBUST=1
COPY . /beleap-blog

WORKDIR /beleap-blog
RUN yarn

CMD yarn start