const jq = require('node-jq');
const { readFileSync } = require('fs');
const { join } = require('path');

const l = console.log;

const packageJson = readFileSync(join(__dirname, './package.json'), { encoding: 'utf-8' });


(async () => {
  try {

    let res = await jq.run('.version', './package.json');
    l('READ results::: ');
    l(res);
  }
  catch (e) {
    l(e.message || e);
  }
})();

