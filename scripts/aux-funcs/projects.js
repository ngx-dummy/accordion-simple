const { readdirSync, statSync } = require('fs');
const { join } = require('path');

const getProjects = (projDir) => readdirSync(projDir).filter(dir => {
  // const path = join(projDir, dir);
  const isDir = statSync(dir).isDirectory();
  // const packages = isDir;
  return dir;
});


console.log(getProjects(join(__dirname, '../../', 'projects')));


module.exports = {
  getProjects
};