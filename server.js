const path = require('path');
const express = require('express');
const app = express();
const nunjucks = require('./config/nunjucksConfig');
const port = parseInt(process.env.PORT, 10) || 3000;

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

//view engine
nunjucks({ app, viewDirectory: path.resolve(__dirname, 'src/views') });

//static files
app.use(express.static(path.resolve(__dirname, 'src/static')));

app.get('/', (req, res) => {
  res.render('index/index', {
    script: '/index/script.js',
    style: '/index/style.css'
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));
