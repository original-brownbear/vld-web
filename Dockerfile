FROM debian:jessie

ENV TERM linux
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8
ENV LC_ALL en_US.UTF-8
RUN apt-get update && apt-get install -y locales curl wget curl git build-essential gnupg2 libssl-dev libffi-dev autoconf
RUN echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen \
   && locale-gen en_US.utf8 \
   && /usr/sbin/update-locale LANG=en_US.UTF-8

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update && apt-get install -y --force-yes pkg-config \
    bison rubygems make g++ gcc ruby automake libtool libsqlite3-dev sqlite3

#SETUP RVM
RUN gpg2 --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 && curl -L https://get.rvm.io | bash -s stable
ENV PATH /usr/local/rvm/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
RUN source /etc/profile.d/rvm.sh

COPY Gemfile /src/Gemfile
COPY rubygems.sh /src/rubygems.sh
COPY .ruby-version /src/.ruby-version
COPY .ruby-gemset /src/.ruby-gemset
WORKDIR /src
RUN chmod +x rubygems.sh && bash -l rubygems.sh
RUN apt-get update && apt-get install -y nodejs
COPY . /src

RUN chmod +x run.sh

CMD ["/bin/bash", "-lc", "/src/run.sh"]