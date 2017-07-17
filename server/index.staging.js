import express from 'express';
import path from 'path';
import App from '../src/app';
import React from 'react';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.staging.js';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import webpack from 'webpack';

const app = express();
const compiler = webpack(config[0]);

app.use(express.static(path.join(__dirname)));
app.use(webpackDevMiddleware(compiler, {
  publicPath: config[0].output.publicPath,
}));
app.get('*', (req, res) => {
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  );

  if (context.url) res.redirect(context.url);

  res.send(`
      <!DOCTYPE html>
      <head>
        <title>MasterClass Platform</title>
        <link rel="stylesheet" href="assets/css/bundle.css">
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="assets/js/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is listening');
});
