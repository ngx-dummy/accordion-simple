#!/usr/bin/env sh

read tag

echo "committing release '$tag'"
if [ "$tag" != "" ]; 
then
  git add .
  git commit -am "release $tag"
  git tag --force -a $tag -m "Release '$tag'"
  git push --force origin $tag
  git push --force origin-origin $tag
  echo "pushing to ngx-dummy home (origin-origin)"
  git push origin-origin --all
  echo "git push"
  git push
else
  echo Please enter a tag number of a form of: number.number.number
  exit 256
fi