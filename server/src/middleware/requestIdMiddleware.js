const { v4: uuidv4 } = require('uuid');
const logger=require('../utils/logger')
const requestIdMiddleware = (req, res, next) => {
  req.id = uuidv4();

  // attach to response (useful for frontend/debugging)
  res.setHeader('X-Request-Id', req.id);

  next();
};
const requestLoggerMiddleware = (req, res, next) => {
  req.log = logger.child({ reqId: req.id });
  next();
};

module.exports = {requestIdMiddleware,requestLoggerMiddleware}