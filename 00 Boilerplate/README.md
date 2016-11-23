# 00 Boilerplate

The first thing we need to do for creating our React tabs component is setting up our workspace, so let's get started.

## Summary

- [Install the basic tools](#install-the-basic-tools)
- [Set up working directory](#set-up-working-directory)
	- [Install Node.js](#install-node.js)
	- [Add entry points](#add-entry-points)
- [Main project dependencies](#main-project-dependencies)
- [TypeScript](#typeScript)
	- [Install TypeScript](#install-typeScript)
	- [Add typings](#add-typings)
	- [Configure typings](#configure-typings)
- [Webpack](#webpack)
	- [Install Webpack and plugins](#install-webpack-and-plugins)
	- [Configure Webpack](#configure-ebpack)
- [Testing](#testing)
 	- [Install testing suite](#install-testing-suite)

### Install the basic tools

If you have not installed [Node.js](https://https://nodejs.org) yet, then it's time to. Go to https://https://nodejs.org, download and install it. Once installation is done you can check using a command prompt or terminal interpreter that Node.js and its package manager _npm_ are installed in your computer. Simply run:

```shell
node --version
```
```shell
npm --version
```

and you should see used versions like `v7.1.0` and `4.0.2` (or superior) respectively.

> If you're using Windows make sure `node` and `npm` commands are in your `PATH` environment variable.

### Set up working directory

#### Install Node.js

Create a folder and establish yourself in there. Open a terminal prompt and type:

```shell
npm init
```

With this command we're going to create a `package.json` file. This file holds various metadata relevant to the project we're creating. This command will ask you a bunch of questions about the app we're going to create. Just answer kindly and keep it simple. We'll be using this configuration:

```json
{
  "name": "react-tabs-ts",
  "version": "1.0.0",
  "description": "Sample repository create a simple tabs component using React TypeScript and Bootstrap",
  "main": "index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "react",
    "bootstrap"
  ],
  "author": "Santiago Camargo Rodríguez <santi.camargo.rodriguez@gmail.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/crsanti/react-tabs-ts"
  }
}
```

#### Add entry points

We will define two main entry points for our application. We will first create a `src` folder. Since we are going to work with TypeScript and SASS let's add two empty files inside `src`: A `main.ts` TypeScript entry and a `styles.scss` SASS entry. Next we'll also add a simple `index.html` webpage with the next content:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello</title>
  </head>
  <body>
    <h1>Sample using React, Bootstrap, SASS and TypeScript</h1>
  </body>
</html>
```

Finally your working directory should look like this:

```
.
├── src/
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
│
└── package.json
```

### Main project dependencies

Before we step into development tools and its configuration let's install our final dependencies for this project: React and Bootstrap. Type in the command prompt:

```shell
npm install --save bootstrap react react-dom
```

### TypeScript

#### Install TypeScript

This project will use TypeScript 2.2 or as the main language versión so let's install it:

```shell
npm install --save-dev typescript@^2.2.0-dev.20161123
```

#### Add typings

To work well with TypeScript we will need to provide to our project the proper dependencies typing definitions. Since we're not going to use Bootstrap's JavaScript files or jQuery we will not install its typing definitions. We'll only need React typings:

```shell
npm install --save-dev @types/react @types/react-dom
```

> Take notice of we have installed this packages using the `--save-dev` flag since they are not part of the main project dependencies.

#### Configure typings
We will add a `tsconfig.json` file at the root level of the project folder. We will use a simple configuration that allow us create `sourcemaps` and use [JSX](https://jsx.github.io) syntax.

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "declaration": false,
    "noImplicitAny": false,
    "jsx": "react",
    "sourceMap": true,
    "noLib": false,
    "suppressImplicitAnyIndexErrors": true
  },
  "compileOnSave": false,
  "exclude": [
    "node_modules"
  ]
}
```

### Webpack

#### Install Webpack and plugins

As we have already defined our working directory and created a `package.json` let's install Webpack and set up it's configuration file. This module bundler will allow us to speed up our workflow once we're coding the app. Let's install `webpack` and `webpack-dev-server`. `webpack-dev-server` will allow us to run a simple server that listens file changes and automatically compile and build the files to be served by a lite web server.

```shell
npm install --save-dev webpack@^2.1.0-beta.27 webpack-dev-server@^2.1.0-beta.11
```

Once you have installed `webpack` and `webpack-dev-server` you should see their commands under `node_modules/.bin/` folder.

We'll also install a plugin for webpack called `html-webpack-plugin`:

```shell
npm install --save-dev html-webpack-plugin
```

This plugin will simplify the creation of the `index.html` file and will be responsible of automatically adding the `<script>` tag with our bundle. Another great plugin we're going to install is `clean-webpack-plugin`:

```shell
npm install --save-dev clean-webpack-plugin
```

This plugin will clean our dist directory when we generate a new bundle.

We're going to need the `extract-text-plugin` for extracting our styles to a new and fresh `styles.css` file:

```shell
npm install --save-dev extract-text-webpack-plugin@^2.0.0-beta.4
```

We will also need proper file loaders to handle different types of files. We need to handle `.css` stylesheet files, `.ts` and `.tsx` TypeScript files, font files, etc, so let's install them:

```shell
npm install --save-dev css-loader url-loader file-loader ts-loader style-loader sass-loader node-sass
```

#### Configure Webpack

Let's create a simple configuration file called `webpack.config.js` and add the following snippet:

```javascript
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  entry: [
    './main.ts',
    './styles.scss',
    '../node_modules/bootstrap/dist/css/bootstrap.css'
  ],
  output: {
    path: path.join(basePath, 'dist'),
    filename: 'bundle.[id].js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(basePath, 'dist'),
    inline: true,
    host: '0.0.0.0',
    port: 8080,
    stats: 'errors-only',
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader'],
        }),
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(basePath, 'src', 'index.html'),
      hash: true,
    }),
    new ExtractTextPlugin({
      filename: 'styles.[id].css',
      disable: false,
      allChunks: true,
    }),
  ],
};
```

Finally we need to update our `package.json` to add an entry point to start our project:

```diff
"main": "src/main.ts",
  "scripts": {
+    "start": "webpack-dev-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
```

### Testing

#### Install testing suite

TODO
