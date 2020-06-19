#!/usr/bin/env sh

SRC_DIR=$(pwd)/projects/@ngx-dummy/accordion-simple
TD_OUT=$(pwd)/docs/typedocs
if [[ ! -e $TD_OUT ]]; then
    mkdir $TD_OUT
fi

typedoc --out $TD_OUT --tsconfig $SRC_DIR/tsconfig.lib.json --exclude "**/*+(index|.spec|.e2e).ts" --excludeNotExported --excludePrivate