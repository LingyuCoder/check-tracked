'use strict';

const execSync = require('child_process').execSync;
const co = require('co');
const RE_TRACKED = /^\s*\?\?\s+(.*)/;

module.exports = co.wrap(function*(cwd) {
  cwd = cwd || process.cwd();
  let cmdRst = '';
  try {
    cmdRst = execSync('git status --porcelain', {
      cwd: cwd,
      stdio: 'pipe'
    }).toString();
  } catch (e) {
    if (e.message.indexOf('Not a git repository') !== -1)
      return Promise.reject(new Error(`No git repository was found in ${cwd}`));
    return Promise.reject(e);
  }
  let fileList = cmdRst.split('\n')
    .map(line => {
      let matchRst = line.trim().match(RE_TRACKED);
      if (!matchRst) return null;
      return matchRst[1];
    })
    .filter(v => !!v);
  return {
    success: fileList.length === 0,
    detail: fileList
  };
});
