#!/bin/bash

ROOT=$(pwd)
WORKING_DIR=$ROOT/dist/@ngx-dummy/accordion-simple

cp -ruf $ROOT/README.md $WORKING_DIR/
cp -ruf $ROOT/LICENSE $WORKING_DIR/

cd $WORKING_DIR
npm pack
npm publish --access public
