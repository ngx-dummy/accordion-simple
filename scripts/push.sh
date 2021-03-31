#!/usr/bin/env sh

# npm run-script build:sample
echo enter commit message
read msg
# msg="$1"

echo committing..
if [ "$msg" != "" ]; 
then
  git add .
  git commit -am "$msg"
  echo Start pushing to $(git remote get-url origin) ..
  git push origin
else
  echo Please enter a commit message
  exit 256
fi