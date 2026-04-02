var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
 logger.info('User is accessing the home route');
  res.render('index', { title: 'Express' });
});

module.exports = router;
