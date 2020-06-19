#!/usr/bin/env sh

SRC_DIR=$(pwd)/projects/@ngx-dummy/accordion-simple
TD_OUT=$(pwd)/docs/typedocs
mkdir -p $TD_OUT
typedoc --out $TD_OUT --tsconfig $SRC_DIR/tsconfig.lib.json --exclude "**/*+(index|.spec|.e2e).ts" --excludeNotExported --excludePrivate