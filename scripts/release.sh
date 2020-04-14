#!/usr/bin/env sh

ROOT=$(pwd)
sh $ROOT/scripts/versioning/pack-version.sh

verStr=".version"
TAGSTR=$($ROOT/node_modules/node-jq/bin/jq $verStr package.json)

temp="${TAGSTR%\"}"
temp="${temp#\"}"

TAGPREF="v"
TAG=$TAGPREF"$temp"
echo "$TAG" | sh $ROOT/scripts/push-tagged.sh