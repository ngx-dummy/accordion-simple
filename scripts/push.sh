#!/usr/bin/env sh

# npm run-script build:sample
echo enter commit message
read msg
# msg="$1"

echo commiting..
if [ "$msg" != "" ]; 
then
  git add .
  git commit -am "$msg"
  git push origin
else
  echo Pleae enter a commit message
  exit 256
fi