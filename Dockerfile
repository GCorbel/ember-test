FROM rails:latest

RUN curl --silent --location https://deb.nodesource.com/setup_4.x | bash

RUN apt-get update -qq && apt-get install -y build-essential

RUN apt-get install -y libqtwebkit-dev qt4-qmake g++

RUN apt-get install -y xvfb
RUN apt-get install -y nodejs

RUN mkdir /tests
WORKDIR /tests

ADD ./tests/Gemfile* /tests/

ADD ./api /api
ADD ./frontend /frontend
ADD ./tests /tests

ENV PHANTOM_JS="phantomjs-1.9.8-linux-x86_64"
RUN wget https://bitbucket.org/ariya/phantomjs/downloads/$PHANTOM_JS.tar.bz2
RUN tar xvjf $PHANTOM_JS.tar.bz2

RUN mv $PHANTOM_JS /usr/local/share
RUN ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/bin

RUN bundle --jobs 20

WORKDIR /frontend

RUN npm install && npm config set registry http://registry.npmjs.org/ && npm install -g bower ember-cli && bower install --allow-root

RUN apt-get install wget && wget https://github.com/GCorbel/dotfiles/raw/master/development_docker_install.sh -O - | sh

EXPOSE "3000" "35729" "4200"
