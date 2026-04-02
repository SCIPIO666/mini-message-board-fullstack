const HomeModel = require('../models/homeModel');
const logger = require('../utils/logger');

exports.fetchWelcomeMessage = async () => {
  logger.info('Service: Fetching welcome message logic started');
  const result = await HomeModel.getDbStatus();
  return result ? "Welcome to the Modern Lab API" : "System Maintenance";
};