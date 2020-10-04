FROM node:12

RUN yarn global add next

ARG CACHEBUST=1
COPY . /beleap-blog

WORKDIR /beleap-blog
RUN yarn
RUN yarn build

CMD yarn start