'use strict';

require('should');
const checker = require('../index');
const fs = require('fs');
const path = require('path');
const os = require('os');
const del = require('del');

describe('check-tracked', () => {
  afterEach(() => del.sync([path.join(__dirname, 'newfile')], {
    force: true
  }));
  it('should resolve object with success false if found untracked files', () => {
    fs.writeFileSync(path.join(__dirname, 'newfile'), 'test', 'utf-8');
    return checker().should.be.fulfilledWith({
      success: false,
      detail: `?? test/newfile\n`
    });
  });
  it('should resolve object with success true no untracked files', () => {
    return checker(process.cwd()).should.be.fulfilledWith({
      success: true,
      detail: ''
    });
  });
  it('should reject when error', () => {
    return checker(os.tmpdir()).should.be.rejectedWith(Error);
  });
});
