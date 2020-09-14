FROM buildkite/puppeteer:latest

RUN mkdir -p /e2e
WORKDIR /e2e

COPY ./package.json /e2e/
RUN  yarn install

COPY ./ /e2e/
