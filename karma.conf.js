// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
const webpackConfig = Object.assign({},require('./webpack.config'));
delete webpackConfig.output;
webpackConfig.plugins = webpackConfig.plugins.filter((plugin) => {
  return (plugin.constructor.name !== 'BrowserSyncPlugin')
});

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: './src/polyfills.ts', watched: false },
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      '**/*.ts': ['webpack']
    },
    webpack: webpackConfig,
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'coverage-istanbul']
              : ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
