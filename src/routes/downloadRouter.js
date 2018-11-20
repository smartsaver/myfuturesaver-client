const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  res.download(path.join(__dirname + `/../download/${fileName}`));
});

module.exports = router;
