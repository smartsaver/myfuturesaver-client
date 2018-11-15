const path = require('path');
const express = require('express');
const nunjucks = require('./nunjucksConfig');
const staticUrl = '/static';

function loadConfigs(app) {
  //view engine
  nunjucks({ app, viewDirectory: path.resolve(__dirname, '../src/views') });
  //static files
  app.use(staticUrl, express.static(path.resolve(__dirname, '../src/static')));
}

module.exports = {
  loadConfigs,
  staticUrl
};
