#!/usr/bin/env sh

read tag

echo "commiting release '$tag'"
if [ "$tag" != "" ]; 
then
  git add .
  git commit -am "release $tag"
  git tag --force -a $tag -m "Release '$tag'"
  git push --force origin $tag
  git push
else
  echo Pleae enter a tag number of form number.number.number
  exit 256
fi