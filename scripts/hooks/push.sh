#!/usr/bin/env sh

# npm run-script build:sample
echo enter commit message
read msg
# msg="$1"

echo commiting..
git add .
git commit -am "$msg"
git push origin