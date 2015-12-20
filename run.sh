#!/usr/bin/env bash

cd /src
echo "rvm use $(cat .ruby-version)@$(cat .ruby-gemset)" | /bin/bash -l
echo "bundle install" | /bin/bash -l
echo "RAILS_ENV=development rake db:setup" | /bin/bash -l
echo "RAILS_ENV=development rails server -p 80 -b 0.0.0.0" | /bin/bash -l