const pino = require('pino');

// In development, make it "pretty". In production, leave it as fast JSON.
const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: process.env.NODE_ENV !== 'production' 
    ? { target: 'pino-pretty', options: { colorize: true } } 
    : undefined
});

module.exports = logger;