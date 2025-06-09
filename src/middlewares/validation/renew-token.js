const { StatusCodes } = require('http-status-codes');
const { jsonResponse } = require('../../utils');

function renewToken(req, res, next) {
    const { refreshToken } = req.body || {};
    if (!refreshToken) {
        return res.status(StatusCodes.BAD_REQUEST).json(jsonResponse(false, 'refresh token is required'));
    }

    next(); // Proceed to the actual route handler
}

module.exports = renewToken;
