const logger = require('../utils/logger');

const requestLogger = (req, res, next) => {
  logger.info(`Incoming: ${req.method} ${req.url}`);
  next();
};