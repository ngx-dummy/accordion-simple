const { commitPrettier } = require('./prettier');
const { resolve }        = require('path');
const simpleGit          = require('simple-git/promise');
const chalk              = require('chalk');

const root = resolve(__dirname, '../..');
const git = simpleGit(root);

const notCleanTreeString = chalk`
{red Cannot push non clean tree (stash or add/commit all )}

`;

(async () => {
  try {
    const hasDiff = !!(await git.diff());

    if (hasDiff) {
      console.error(notCleanTreeString);
      return process.exit(1);
    }

    const diff = await git.diff([
      '--name-only',
      '--diff-filter=d',
      'origin/master...HEAD'
    ]);
    const changedFiles = diff.split('\n');

    await commitPrettier(changedFiles);

    console.log(chalk`
Pre-Push Validation Succeeded

`);
    process.exit();
  } catch (err) {
    console.error(chalk`
{red Pre-Push Validation Failed, error body below}

`);
    console.error(err);
    return process.exit(1);
  }
})();
