'use strict';
const frontpack = require('@frontpack/frontpack');

const fp = new frontpack();
const config = fp
  .preset([
    'common',
    'angular',
    'dll'
  ])
  .config({
    entry: {
      vendor: ['./src/polyfills.ts']
    }
  }).option({
    typescript: {
      lint: false
    },
  }).export();
module.exports = config;