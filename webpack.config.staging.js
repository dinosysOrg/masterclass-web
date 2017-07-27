const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const browserConfig = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'staging'),
    publicPath: '/assets/',
    filename: 'js/bundle.js',
  },
  devtool: 'inline-source-map',
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
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {discardComments: {removeAll: true}},
      canPrint: true,
    }),
  ],
};

const serverConfig = {
  entry: './server/index.staging.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, 'staging'),
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
    }, {
      test: /\.scss$/,
      loader: 'ignore-loader',
    }],
  },
};

module.exports = [browserConfig, serverConfig];
