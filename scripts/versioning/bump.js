function udpateMajorVersion(version) {
  return updateVersion(version, 'major');
}
function updateMinorVersion(version) {
  return updateVersion(version, 'minor');
}
function updatePatchVersion(version) {
  return updateVersion(version, 'patch');
}

/**
 * 
 * @param {string} version - version (in form: [major].[minor].[patch]) from package.json
 * @param {('major'|'minor'|'patch')} type - how to update version (i.e, which part)S
 */
function updateVersion(version, type) {
  let [major, minor, patch] = version.split('.');
  switch (type) {
    case 'major':
      return `${((parseInt(major)) + 1).toString()}.${minor}.${patch}`;

    case 'minor':
      return `${major}.${((parseInt(minor)) + 1).toString()}.${patch}`;

    case 'patch':
      return `${major}.${minor}.${((parseInt(patch)) + 1).toString()}`;

    default:
      throw `Please set one  of  of following 'major', 'minor' or 'patch .. `;
  }
}

module.exports = {
  udpateMajorVersion,
  updateMinorVersion,
  updatePatchVersion
};