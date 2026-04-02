var express = require('express');
var router = express.Router();
const logger=require('../src/utils/logger')
/* GET home page. */
router.get('/', function(req, res, next) {
 logger.error('User is accessing the home route,error test');
 logger.debug('debuggging,debug test')
 logger.warn('warning,testing warning')
 logger.fatal('testing fatal')
 logger.debug('testing debug')
 logger.info('good info,routine,testing info()')
  res.render('index', { title: 'Express' });
});

module.exports = router;
