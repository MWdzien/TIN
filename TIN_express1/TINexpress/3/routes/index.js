var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '3' });
});

router.post('/result', function(req, res, next){
  const { firstName, lastName, month, year } = req.body;
  res.render('result', { firstName, lastName, month, year });
})

module.exports = router;
