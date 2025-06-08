const httpStatus = require('http-status-codes');
const { x_api_key } = require('../config/constants');
const { jsonResponse } = require('../utils');

function authRequest(req, res, next) {
    const apiKey = req.headers['x-api-key']; // Header keys are case-insensitive
    if (!apiKey) {
        return res.status(httpStatus.UNAUTHORIZED).json(jsonResponse(false, 'API key is missing'));
    }
    if (apiKey !== x_api_key) {
        return res.status(httpStatus.FORBIDDEN).json(jsonResponse(false, 'Invalid API key'));
    }

    next(); // API key is valid, proceed to route handler
}

module.exports = authRequest;
