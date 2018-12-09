const express = require('express');
const expressConfig = require('../../../config/expressConfig');
const router = express.Router();
const content = require('./content');

router.get('/', (_, res) => {
  const { staticUrl } = expressConfig;
  res.render('index/index', {
    logo: `${staticUrl}/images/logo-small.png`,
    logoForWhite: `${staticUrl}/images/logo-for-white.jpg`,
    content,
    informationSurveyUrl: 'https://www.surveymonkey.com/r/3VJ2CN3',
    respSurveyUrl: 'https://www.smartsaver.org/startmyresp/',
    script: `${staticUrl}/index/script.js`,
    style: `${staticUrl}/index/style.css`
  })
});

module.exports = router;
