#!/usr/bin/env sh

ROOT=$(pwd)
sh $ROOT/scripts/versioning/pack-version.sh

verStr=".version"
TAG=$($ROOT/node_modules/node-jq/bin/jq $verStr package.json)
echo $TAG | sh $ROOT/scripts/push-tagged.sh