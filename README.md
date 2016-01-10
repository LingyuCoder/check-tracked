# check-tracked

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/check-tracked.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/check-tracked?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/check-tracked.png)](https://travis-ci.org/LingyuCoder/check-tracked)
[![Dependency Status](https://david-dm.org/LingyuCoder/check-tracked.svg)](https://david-dm.org/LingyuCoder/check-tracked)
[![devDependency Status](https://david-dm.org/LingyuCoder/check-tracked/dev-status.svg)](https://david-dm.org/LingyuCoder/check-tracked#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/check-tracked.svg?style=flat-square)](http://npmjs.org/package/check-tracked)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/check-tracked.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/check-tracked.svg?style=flat-square)](https://npmjs.org/package/check-tracked)

> Check whether all files have been tracked

## Installation

```bash
$ npm install --save check-tracked
```

## Usage

```javascript
const checker = require('check-tracked');
checker('/Users/xxx/project_dir') // default process.cwd()
  .then(result => {
    /*
    {
      success: Boolean, // check passed
      detail: ArrayOf(String) // untracked file list
    }
    */
    if(result.success) {
      console.log('Passed');
    } else {
      console.log(result.detail);
    }
  })
  .catch(e => console.error(e.message));


```

## Test

```bash
$ npm run test
$ npm run test-cov
$ npm run test-travis
```

## License

The MIT License (MIT)

Copyright (c) 2015 LingyuCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
