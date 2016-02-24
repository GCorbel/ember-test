FROM node:latest

RUN npm config set registry http://registry.npmjs.org/

RUN npm install -g ember-cli
RUN npm install -g bower

# install watchman
RUN \
	git clone https://github.com/facebook/watchman.git &&\
	cd watchman &&\
	git checkout v3.1 &&\
	./autogen.sh &&\
	./configure &&\
	make &&\
	make install

RUN mkdir /frontend
ADD ./main /frontend
RUN mkdir /custom-fields
ADD ./modules/custom-fields /custom-fields

RUN apt-get install wget && wget https://github.com/GCorbel/dotfiles/raw/master/development_docker_install.sh -O - | sh

EXPOSE 4200 35729

WORKDIR /frontend
