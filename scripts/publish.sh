#!/usr/bin/env sh

PROJ_DIR=$(pwd)/dist/@ngx-dummy/accordion-simple
pushd $PROJ_DIR

npm pack
npm publish --access public

popd
exit 0
