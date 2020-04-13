#!/usr/bin/env sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

const { resolve } = require('path');

const { promisify } = require('util');
const { spawn } = require('child_process');
const simpleGit = require('simple-git/promise');
const ora = require('ora');
const spawnAsync = promisify(spawn);

const root = resolve(__dirname, '../..');
const git = simpleGit(root);

async function commitPrettier(changedFiles) {
	const targetFiles = changedFiles.filter(line => line.match(/\.(js|ts)$/));
	if (!targetFiles || !targetFiles.length) return;

	const stylingSpinner = ora(` Formatting ${targetFiles.length} files `).start();

	await spawnAsync('prettier', ['--config', `${resolve(root, '.prettierrc')}`, '--write', ...targetFiles], {
		stdio: ['ignore', 'ignore', process.stderr],
		cwd: root,
		env: {
			PATH: `${resolve(root, 'node_modules/.bin')}:${process.env.PATH}`
		}
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