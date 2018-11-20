const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('./nunjucksConfig');
const staticUrl = '/static';

function loadConfigs(app) {
  //view engine
  nunjucks({ app, viewDirectory: path.resolve(__dirname, '../src/views') });
  //static files
  app.use(staticUrl, express.static(path.resolve(__dirname, '../src/static')));
  //body parser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}

module.exports = {
  loadConfigs,
  staticUrl
};
