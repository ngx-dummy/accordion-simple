#!/usr/bin/env sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

const d = console.debug;
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

module.exports = updateVersion;