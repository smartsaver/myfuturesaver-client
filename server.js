require('dotenv')
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const port = parseInt(process.env.PORT, 10) || 3000;

nunjucks.configure('src/views', {
  autoescape: false,
  express: app
});

app.set('view engine', 'njk');

app.get('/', (req, res) => res.render('hello'));

app.listen(port, () =>
  console.log(`Server listening on port ${port}...`)
);
