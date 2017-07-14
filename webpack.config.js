const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const browserConfig = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [{
      test: /\.scss$/,
      enforce: 'pre',
      loader: 'import-glob-loader',
    }, {
      test: /.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
      },
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!sass-loader',
      }),
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader',
    }],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

const serverConfig = {
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname),
    filename: 'server.min.js',
    libraryTarget: 'commonjs2',
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [{
      test: /js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {presets: ['react']},
    }],
  },
};

module.exports = [browserConfig, serverConfig];
