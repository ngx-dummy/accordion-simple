#!/bin/bash

PROJ_DIR=$(pwd)/dist/@ngx-dummy/accordion-simple
WORKING_DIR=$PROJ_DIR
cp --remove-destination ./{README.md,LICENSE} $WORKING_DIR/

cd $WORKING_DIR
npm pack
npm publish --access public