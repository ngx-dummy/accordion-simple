#!/usr/bin/env sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

npm run-script build:sample
git add .
git commit -am ''