#!/usr/bin/env sh
':'; //; exec "$(command -v nodejs || command -v node)" "$0" "$@"


const l = console.log;

const fs = require('fs');
const { join } = require('path');
const {
  readVersion,
  incMajorVersion,
  incMinorVersion,
  incPatchVersion,
  replacePackageJsonStringVersion,
  updatePackJsonFileInPlace
} = require('./bump');

const mainPackJsonPath = join(__dirname, '../../', 'package.json');
const accordSimplePackJsonPath = join(__dirname, '../../', 'projects/@ngx-dummy/accordion-simple', 'package.json');


function patchVersionPacksJson(...packJsonFilePaths) {
  return packJsonFilePaths.map(async filePath => {
    const oldVer = await readVersion(filePath);
    const newVer = incPatchVersion(oldVer);
    updatePackJsonFileInPlace(filePath, newVer);
  });
}

const patchPackagesVersions = async () => {
  await patchVersionPacksJson([mainPackJsonPath, accordSimplePackJsonPath]);
};

patchPackagesVersions();