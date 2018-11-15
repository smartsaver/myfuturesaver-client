const express = require('express');
const app = express();
const nunjucks = require('./config/nunjucksConfig');
const port = parseInt(process.env.PORT, 10) || 3000;

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

nunjucks({ app, viewDirectory: 'src/views'});

app.get('/', (req, res) => res.render('hello'));

app.listen(port, () => console.log(`Server listening on port ${port}...`));
