import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname)));
app.get('*', (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>MasterClass Platform</title>
        <link rel="stylesheet" href="css/bundle.css">
      </head>

      <body>
        <div id="app"></div>
        <script src="js/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is listening');
});
