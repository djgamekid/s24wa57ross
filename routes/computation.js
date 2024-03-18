var express = require('express');
var router = express.Router();

/* GET computation listing. */
router.get('/', function(req, res, next) {
  var num1 = Math.floor(Math.random() * 61);
  res.send(`Math.cos applied to ${num1} is ${Math.cos(num1)}`);
});

module.exports = router;
