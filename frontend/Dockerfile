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
WORKDIR /frontend

ADD ./main/package.json /frontend/package.json
ADD ./main/bower.json /frontend/bower.json
ADD ./main/node_modules /frontend/node_modules/
ADD ./main/bower_components /frontend/bower_components/

RUN mkdir /custom-fields
ADD ./modules/custom-fields/package.json /custom-fields/package.json
ADD ./modules/custom-fields /custom-fields

RUN npm link ../custom-fields

ADD ./main /frontend

RUN apt-get install wget && wget https://github.com/GCorbel/dotfiles/raw/master/development_docker_install.sh -O - | sh

RUN apt-get install sudo && \
    adduser --disabled-login --gecos "" docker --uid 1000  && \
    usermod -a -G root docker && \
    echo 'docker ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
    cp -r /root/.zsh* /home/docker/ && \
    cp -r /root/.oh-my-zsh /home/docker/ && \
    chown -R docker /home/docker

USER docker

EXPOSE 4200 35729

WORKDIR /frontend
