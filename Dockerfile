FROM rails:latest

RUN apt-get update -qq && apt-get install -y build-essential

RUN apt-get install -y libqtwebkit-dev qt4-qmake g++

RUN apt-get install -y xvfb
RUN curl --silent --location https://deb.nodesource.com/setup_5.x | bash -
RUN apt-get install -y nodejs
RUN curl -L https://www.npmjs.com/install.sh | sh

RUN mkdir /api
WORKDIR /api

ADD ./api/Gemfile* /api/

RUN bundle --jobs 20

ADD ./frontend/package.json /frontend/package.json
ADD ./frontend/bower.json /frontend/bower.json
ADD ./frontend/node_modules /frontend/node_modules/
ADD ./frontend/bower_components /frontend/bower_components/
ADD ./custom-fields /custom-fields

WORKDIR /frontend

RUN npm link ../custom-fields && npm config set registry http://registry.npmjs.org/
RUN npm install && npm install -g bower ember-cli && bower install --allow-root

ADD ./api /api
ADD ./frontend /frontend
ADD ./tests /tests

RUN apt-get install -y python-dev && git clone https://github.com/facebook/watchman.git && cd watchman && git checkout tags/v3.0.0 && ./autogen.sh && ./configure && make && make install

RUN apt-get install wget && wget https://github.com/GCorbel/dotfiles/raw/master/development_docker_install.sh -O - | sh

RUN apt-get install sudo && \
    adduser --disabled-login --gecos "" docker --uid 1000  && \
    usermod -a -G root docker && \
    echo 'docker ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
    cp -r /root/.zsh* /home/docker/ && \
    cp -r /root/.oh-my-zsh /home/docker/ && \
    chown -R docker /home/docker

USER docker

EXPOSE "3000" "35729" "4200"
