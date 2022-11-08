#!/usr/bin/env sh
':'; //; exec "$(command -v nodejs || command -v node)" "$0" "$@"


const { run } = require('node-jq');
const { sed } = require('shelljs');

const l = console.log;
const err = console.error;

const verReg = new RegExp(/([\"|\']version[\"|\']\s?\:\s*)\"([\.\d]+)\"/gi);

function incrementVersionFragment(version, type) {
	l('Version to increment fragment on :: ', version);
	let [major, minor, patch] = version.split('.');
	switch (type) {
		case 'major':
			return `${(parseInt(major) + 1).toString()}.${minor}.${patch}`;

		case 'minor':
			return `${major}.${(parseInt(minor) + 1).toString()}.${patch}`;

		case 'patch':
			return `${major}.${minor}.${(parseInt(patch) + 1).toString()}`;

		default:
			throw "Please set one  of  of following major.minor.patch  ";
	}
}

function incMajorVersion(version) {
	return incrementVersionFragment(version, 'major');
}
function incMinorVersion(version) {
	return incrementVersionFragment(version, 'minor');
}
function incPatchVersion(version) {
	return incrementVersionFragment(version, 'patch');
}

const replacePackageJsonStringVersion = (packageJsonString, newVersion) => {
	if (!newVersion) throw new Error('Provide new Version to substitute..');

	// const ver2018Reg = /(?<="version":\s?)(\.\d)+/;

	const newVer = JSON.stringify(newVersion);
	packageJsonString = packageJsonString.replace(verReg, `$1${newVer}`);
	return packageJsonString;
};

const updatePackJsonFileInPlace = (packageJsonFile, newVersion) => {
	return sed('-i', verReg, `$1${newVersion}`+ '"', packageJsonFile);
};


async function readVersion(packageJsonFilePath) {
	try {
		const field = '.version';
		let res = await run(field, packageJsonFilePath);
		return res.toString();
	}
	catch (e) {
		err(e.message || e);
	}
}

module.exports = {
	incMajorVersion,
	incMinorVersion,
	incPatchVersion,
	replacePackageJsonStringVersion,
	updatePackJsonFileInPlace,
	readVersion
};
