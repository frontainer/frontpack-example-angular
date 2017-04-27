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
      vendor: ['polyfills.ts']
    }
  }).option({
    angular: {
      lint: false,
      ts: {
        configFileName: './src/tsconfig.app.json'
      }
    },
  });

module.exports = function(env) {
  return config.export(env);
};
