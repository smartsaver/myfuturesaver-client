var express = require('express');
var router = express.Router();
const content = require('../content');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/index', {
    logo: '/images/logo-small.png',
    logoForWhite: '/images/logo-for-white.jpg',
    content,
    informationSurveyUrl: 'https://www.surveymonkey.com/r/3VJ2CN3',
    respSurveyUrl: 'https://www.smartsaver.org/startmyresp/',
    script: '/javascripts/index.js',
    style: '/stylesheets/index.css'
  });
});

module.exports = router;
