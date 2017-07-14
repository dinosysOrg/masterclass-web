import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import config from '../webpack.config.js';
import App from '../src/app';

const app = express();
const compiler = webpack(config[0]);

app.use(express.static('build'));
app.use(webpackDevMiddleware(compiler, {
  publicPath: config[0].output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>MasterClass Platform</title>
        <link rel="stylesheet" href="/bundle.css">
      </head>

      <body>
        <div id="app">${renderToString(<App />)}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening');
});
