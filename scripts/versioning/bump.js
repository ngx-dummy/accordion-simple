const { run } = require('node-jq');
const { sed } = require('shelljs');

const l = console.log;

const verReg = new RegExp(/(["|']version["|']\s?\:\s*)\"([\.\d]+)"/gi);


/**
 *
 * @param {string} version - version (in form: [major].[minor].[patch]) from package.json
 * @param {('major'|'minor'|'patch')} type - how to update version (i.e, which part)S
 */
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
			throw `Please set one  of  of following 'major', 'minor' or 'patch .. `;
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


/**
 * 
 * @param {string} packageJsonString - contents of 'package.json' file to be parsed / version field updated
 * @param {string} newVersion - string representations of new 'version' field to be injected in 'package.json' file (i.e, "1.1.0")
 */
const replacePackageJsonStringVersion = (packageJsonString, newVersion) => {
	if (!newVersion) throw new Error('Provide new Version to substitute..');

	// const veres2018Reg = /(?<="version":\s?)(\.\d)+/;

	const newVer = JSON.stringify(newVersion);
	packageJsonString = packageJsonString.replace(verReg, `$1${newVer}`);
	return packageJsonString;
};

const updatePackJsonFileInPlace = (packageJsonFile, newVersion) => {
	return sed('-i', verReg, `$1${newVersion}"`, packageJsonFile);
};


async function readVersion(pakcageJsonFilePath) {
	try {
		const field = '.version';
		let res = await run(field, pakcageJsonFilePath);
		return res.toString();
	}
	catch (e) {
		l(e.message || e);
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
