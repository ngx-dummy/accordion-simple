const { readFileSync } = require('fs');
const PackVersion = require('./scripts/aux-funcs/pack-version');
const l = console.log;


const packageContents = readFileSync('./package.json', { encoding: 'utf-8' });
l('Raw package.json: ', packageContents);

const newPackageJson = PackVersion(packageContents, '1.1.2')
l('NEW:::');
l(newPackageJson);
