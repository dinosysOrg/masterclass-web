import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../src/app';

const app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
        <link rel="stylesheet" href="/bundle.css">
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="app">${renderToString(<App />)}</div>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening');
});
