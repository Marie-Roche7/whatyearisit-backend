var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', function(req, res, next) {
  const date = new Date().getFullYear().toString()
  res.json({ year: date });
});

module.exports = router;
