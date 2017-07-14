const ExtractTextPlugin = require('extract-text-webpack-plugin');

const browserConfig = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: __dirname,
    filename: './build/bundle.js',
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
        fallbackLoader: 'style-loader',
        loader: 'css-loader!sass-loader',
      }),
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader',
    }],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'build/bundle.css',
    }),
  ],
};

const serverConfig = {
  entry: './server/index.js',
  target: 'node',
  output: {
    path: __dirname,
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
