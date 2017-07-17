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
    path: path.join(__dirname, 'development'),
    publicPath: '/assets/',
    filename: 'js/bundle.js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.scss$/,
      enforce: 'pre',
      loader: 'import-glob-loader',
    }, {
      test: /.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          },
        },
      ],
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
      filename: 'css/bundle.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

const serverConfig = {
  entry: './server/index.dev.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, 'development'),
    filename: 'server.min.js',
    libraryTarget: 'commonjs2',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /.js$/,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          },
        },
      ],
    }],
  },
};

module.exports = [browserConfig, serverConfig];