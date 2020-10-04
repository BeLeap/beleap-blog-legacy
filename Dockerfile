FROM node:12
WORKDIR /beleap-blog

RUN yarn global add next
COPY . /beleap-blog

RUN yarn
RUN yarn build

CMD yarn start