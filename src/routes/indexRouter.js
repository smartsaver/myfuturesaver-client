const express = require('express');
const expressConfig = require('../../config/expressConfig');
const router = express.Router();

router.get('/', (_, res) => {
  const { staticUrl } = expressConfig;
  res.render('index/index', {
    logo: `${staticUrl}/images/logo-small.png`,
    headerImage: `${staticUrl}/images/header-image-fade-sides.png`,
    script: `${staticUrl}/index/script.js`,
    style: `${staticUrl}/index/style.css`
  })
});

module.exports = router;
