const express = require('express');
const expressConfig = require('../../config/expressConfig');
const router = express.Router();

router.get('/', (req, res) => {
  const { staticUrl } = expressConfig;
  res.render('index/index', {
    script: `${staticUrl}/index/script.js`,
    style: `${staticUrl}/index/style.css`
  });
});

module.exports = router;
