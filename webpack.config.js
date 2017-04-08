'use strict';
const frontpack = require('@frontpack/frontpack');

const fp = new frontpack({
  debug: false
});

const config = fp
  .preset([
    'common',
    'style',
    'angular',
    'html',
    'copy',
    'server'
  ])
  .config({
    entry: {
      main: [
        './src/polyfills.ts',
        './src/main.ts',
        './src/styles.scss'
      ]
    }
  }).option({
    server: {
      historyApiFallback: true,
      browserSync: {
        port: 4200
      }
    },
    copy: [],
    options: {}
  }).export();
module.exports = config;