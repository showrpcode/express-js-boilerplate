const httpStatus = require('http-status-codes');
const { API_KEY } = require('../config/constants');

function validateApiKey(req, res, next) {
    const apiKey = req.headers['api-key']; // Header keys are case-insensitive

    if (!apiKey) {
        return res.status(httpStatus.UNAUTHORIZED).json({
            success: false,
            message: 'API key is missing',
            data: {},
            error: {}
        });
    }

    if (apiKey !== API_KEY) {
        return res.status(httpStatus.FORBIDDEN).json({
            success: false,
            message: 'Invalid API key',
            data: {},
            error: {}
        });
    }

    next(); // API key is valid, proceed to route handler
}

module.exports = validateApiKey;
