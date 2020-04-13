#!/usr/bin/env sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

const fs = require('fs')
fs.appendFileSync('file', 'hello', {})


module.exports = updateVersion;