const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('../webpack.config.dev.js');
const path = require('path');

const app = express();
const compiler = webpack(config);

app.use(express.static(path.join(__dirname, 'development')));
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));
app.get('*', (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>MasterClass Platform</title>
        <link rel="stylesheet" href="assets/css/bundle.css">
      </head>
      <body>
        <div id="app"></div>
        <script src="assets/js/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening');
});

