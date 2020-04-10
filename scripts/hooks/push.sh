#!/usr/bin/env sh

# npm run-script build:sample

msg="$1"

echo commiting all
git add .
git commit -am "$msg"