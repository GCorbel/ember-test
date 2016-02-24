FROM rails:latest

RUN apt-get update -qq && apt-get install -y build-essential

RUN apt-get install -y libqtwebkit-dev qt4-qmake g++

RUN mkdir /api
WORKDIR /api

ADD ./Gemfile* /api/

RUN bundle --jobs 20

ADD . /api

RUN apt-get install wget && wget https://github.com/GCorbel/dotfiles/raw/master/development_docker_install.sh -O - | sh

RUN apt-get install sudo && \
    adduser --disabled-login --gecos "" docker --uid 1000  && \
    usermod -a -G root docker && \
    echo 'docker ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
    cp -r /root/.zsh* /home/docker/ && \
    cp -r /root/.oh-my-zsh /home/docker/ && \
    chown -R docker /home/docker

USER docker

EXPOSE "3000"
