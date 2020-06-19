#!/usr/bin/env sh

SRC_DIR=$(pwd)/dist/accordion-sample
TD_OUT=$(pwd)/docs

if [[ ! -e $TD_OUT ]]; then
    mkdir $TD_OUT
elif [[ ! -d $TD_OUT ]]; then
    echo "$TD_OUT already exists but is not a directory" 1>&2
fi

npm run build:sample:prod
cp -r $SRC_DIR/** $TD_OUT