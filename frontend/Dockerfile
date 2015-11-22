FROM node:latest

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

EXPOSE 4200 35729

WORKDIR /frontend
