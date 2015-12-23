#!/usr/bin/env bash

eval "$(docker-machine env opcodes)"
docker pull originalbrownbear/vld
docker-compose stop && docker-compose rm -f -v && docker-compose build && docker-compose up -d