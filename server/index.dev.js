import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import {StaticRouter} from 'react-router-dom';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';
import App from '../src/app';
import path from 'path';
import {Provider} from 'react-redux';
import configureStore from '../src/configs/store.config';

const store = configureStore();

const app = express();
const compiler = webpack(config[0]);

app.use(express.static(path.join(__dirname, 'development')));
app.use(webpackDevMiddleware(compiler, {
  publicPath: config[0].output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));
app.get('*', (req, res) => {
  const context = {};

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App/>
      </StaticRouter>
    </Provider>
  );

  if (context.url) res.redirect(context.url);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>MasterClass Platform</title>
        <link rel="stylesheet" href="/assets/css/bundle.css">
      </head>
      <body>
        <div id="app"><div>${html}</div></div>
        <script src="/assets/js/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening');
});

