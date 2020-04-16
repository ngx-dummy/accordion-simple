#!/bin/bash

PROJ_DIR=$(pwd)/dist/@ngx-dummy/accordion-simple
WORKING_DIR=$PROJ_DIR
cd $WORKING_DIR

npm pack
npm publish --access public
