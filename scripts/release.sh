#!/usr/bin/env sh

ROOT=$(pwd)
PACK_VER=$ROOT/scripts/versioning/pack-version.sh
NODE_JQ=$ROOT/node_modules/node-jq/bin/jq
PUSH_TAGGED=$ROOT/scripts/push-tagged.sh

chmod +x $PACK_VER $NODE_JQ $PUSH_TAGGED  
sh $PACK_VER

verStr=".version"
TAGSTR=$($NODE_JQ $verStr package.json)

temp="${TAGSTR%\"}"
temp="${temp#\"}"

TAGPREF="v"
TAG=$TAGPREF"$temp"
echo "$TAG" | sh $PUSH_TAGGED
echo "pushing to origin-origin"
git push origin-origin --all