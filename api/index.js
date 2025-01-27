const cors_proxy = require('../lib/cors-anywhere');

// Export the serverless function for Vercel
module.exports = (req, res) => {
  cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: [
      'cookie',
      'cookie2',
    ],
  })(req, res);
};
