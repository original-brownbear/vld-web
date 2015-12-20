#!/usr/bin/env bash

/bin/bash -l
echo "source /etc/profile.d/rvm.sh" | /bin/bash -l
cd /src
echo "rvm install $(cat .ruby-version)" | /bin/bash -l
echo "rvm use $(cat .ruby-version)" | /bin/bash -l
echo "rvm gemset create $(cat .ruby-gemset)" | /bin/bash -l
echo "rvm use $(cat .ruby-version)@$(cat .ruby-gemset)" | /bin/bash -l
echo "gem install bundler" | /bin/bash -l
echo "bundle install" | /bin/bash -l

