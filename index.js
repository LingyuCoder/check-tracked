'use strict';

const execSync = require('child_process').execSync;
const co = require('co');
const RE_TRACKED = /^\?\?/m;

module.exports = co.wrap(function*(cwd) {
  cwd = cwd || process.cwd();
  try {
    let cmdRst = execSync('git status --porcelain', {
      cwd: cwd,
      stdio: 'pipe'
    }).toString();
    return {
      success: !RE_TRACKED.test(cmdRst),
      detail: cmdRst
    };
  } catch (e) {
    if (e.message.indexOf('Not a git repository') !== -1)
      return Promise.reject(new Error(`No git repository was found in ${cwd}`));
    return Promise.reject(e);
  }
});
