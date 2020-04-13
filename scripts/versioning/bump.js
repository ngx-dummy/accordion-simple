
const d = console.debug;
function udpateMajorVersion(version) {
	return updateVersion(version, 'major');
}
function updateMinorVersion(version) {
	return updateVersion(version, 'minor');
}
function updatePatchVersion(version) {
	return updateVersion(version, 'patch');
}


const verReg = /(["|']version["|']\s?\:\s*)\"([\.\d]+)"/gi;
/**
 * 
 * @param {string} packageJson - contents of 'package.json' file to be parsed / version field updated
 * @param {string} newVersion - string representations of new 'version' field to be injected in 'package.json' file (i.e, "1.1.0")
 */
const updateVersion = (packageJson, newVersion) => {

  // const veres2018Reg = /(?<="version":\s?)(\.\d)+/;

  let version = packageJson.match(verReg);
  d('PackageVersion capture: ', version);

  const newVer = JSON.stringify(newVersion);
  packageJson = packageJson.replace(verReg, `$1${newVer}`);

  d('Version after: ', packageJson);

  return packageJson;
};

/**
 *
 * @param {string} version - version (in form: [major].[minor].[patch]) from package.json
 * @param {('major'|'minor'|'patch')} type - how to update version (i.e, which part)S
 */
function updateVersion(version, type) {
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

module.exports = {
	udpateMajorVersion,
	updateMinorVersion,
	updatePatchVersion,
	updateVersion
};
