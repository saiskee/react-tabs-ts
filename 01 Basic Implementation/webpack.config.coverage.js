/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

var basePath = __dirname;

module.exports = {
  devtool: 'inline-source-map',
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|spec)/,
        loaders: ['istanbul-instrumenter-loader'],
        enforce: 'post',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      }
    ],
    noParse: [
      /node_modules(\\|\/)sinon/,
    ],
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
  },
};
