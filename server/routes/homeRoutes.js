const router = require('express').Router();
const homeController = require('../controllers/homeController');
const logger = require('../src/utils/logger');

router.get('/', (req, res) => {
  logger.debug('Route Matched: GET /');
  homeController.getHomeData(req, res);
});