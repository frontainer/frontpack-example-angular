'use strict';
const frontpack = require('@frontpack/frontpack');

const fp = new frontpack({
  debug: false
});

const config = fp
  .preset([
    'style',
    'angular',
    'html'
  ])
  .config({
    context: __dirname + '/src',
    resolve: {
      extensions: ['.js', '.ts', '.sass', '.scss', '.css', '.ejs', '.html']
    },
  })
  .option({
    angular: {
      ts: {
        configFileName: './src/tsconfig.app.json'
      }
    }
  });

module.exports = config.export();
