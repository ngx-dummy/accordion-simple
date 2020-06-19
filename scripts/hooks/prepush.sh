#!/usr/bin/env sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"


const { resolve }        = require('path');
const chalk              = require('chalk');
const { commitPrettier } = require(resolve(__dirname, '../aux-funcs/prettier.sh'));
const { hasDiff, diff }  = require(resolve(__dirname, '../aux-funcs/git.sh'));

const notCleanTreeString  = chalk`
{red Cannot push non clean tree (stash or add/commit all )}

`;

(async function () {
  try {
    if (await hasDiff()) {
      console.error(notCleanTreeString);
      return process.exit(1);
    }

    const changedFiles = (await diff()).split('\n');
    await commitPrettier(changedFiles);

    console.log(chalk`
      {green Pre-Push Validation Succeeded}
   `);
    process.exit();
  } catch (err) {
    console.log(chalk`
      {red Pre-Push Validation Failed, error body below}
    `);
    console.error(err);
    return process.exit(1);
  }
})();
