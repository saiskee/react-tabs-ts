/* eslint-disable */
var webpackConfig = require('./webpack.config.test');

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['mocha', 'chai', 'sinon-chai'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [
      'Chrome',
    ],

    client: {
      mocha: {
        reporter: 'html', // change Karma's debug.html to the mocha web reporter
        ui: 'bdd',
        timeout: 15000
      }
    },

    singleRun: false,

    files: [
      {
        pattern: 'karma.entry.js',
        watched: false
      },
    ],

    preprocessors: {
      'karma.entry.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only',
    },

    reporters: [
      'mocha',
    ],

  });
}
