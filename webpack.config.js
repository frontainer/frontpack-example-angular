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
        'polyfills.ts',
        'main.ts',
        'styles.scss'
      ]
    }
  }).option({
    server: {
      historyApiFallback: true,
      browserSync: {
        port: 4200
      }
    },
    angular: {
      ts: {
        configFileName: './src/tsconfig.app.json'
      }
    },
    copy: {},
    options: {}
  });

module.exports = function(env) {
  return config.export(env);
};