const HomeService = require('../services/homeService');
const logger = require('../utils/logger');

exports.getHomeData = async (req, res) => {
  try {
    const data = await HomeService.fetchWelcomeMessage();
    res.status(200).json({ success: true, data });
  } catch (error) {
    logger.error(`Controller Error: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};