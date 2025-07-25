const { rateLimit } = require('express-rate-limit');
const { jsonResponse } = require('../utils');
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: jsonResponse(false, 'Too many requests. Please try again after 15 minutes.'),
});

module.exports = authLimiter;