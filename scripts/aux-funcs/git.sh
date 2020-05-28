#!/usr/bin/env sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

const simpleGit   = require('simple-git/promise');
const { resolve } = require('path');

const root = resolve(__dirname, '../..');
const git = simpleGit(root);

const hasDiff = async () => { return !!(await git.diff()) };

const diff = async () => {
   return await git.diff([
    '--name-only',
    '--diff-filter=d',
    'origin/master...HEAD'
  ]);
};

module.exports = { hasDiff, diff };