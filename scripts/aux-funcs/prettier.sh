#!/usr/bin/env node
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

const { resolve, join } = require('path');

const { promisify } = require('util');
const { spawn } = require('child_process');
const simpleGit = require('simple-git/promise');
const ora = require('ora');
const spawnAsync = promisify(spawn);

const root = join(__dirname, '../..');
const git = simpleGit(root);

async function commitPrettier(changedFiles) {
	const targetFiles = changedFiles.filter(line => line.match(/\.ts$/));
	if (!targetFiles || !targetFiles.length) return;

	const stylingSpinner = ora(` Formatting ${targetFiles.length} files `).start();
	let prettierName = (process.platform === "win32") ? 'prettier.cmd' : 'prettier'
	await spawnAsync(join(root, 'node_modules/.bin/', prettierName), ['--config', `${join(root, '.prettierrc')}`, '--write', ...targetFiles], {
		stdio: ['ignore', 'ignore', process.stderr],
		cwd: root
	});
	stylingSpinner.stopAndPersist({
		symbol: '✅'
	});

	const gitSpinner = ora(' Creating automated style commit').start();
	await git.add(targetFiles);

	await git.commit('[AUTOMATED]: Prettier Code Styling');
	gitSpinner.stopAndPersist({
		symbol: '✅'
	});
}

module.exports = { commitPrettier };