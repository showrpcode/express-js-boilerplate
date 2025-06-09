const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const { jsonResponse } = require('../utils');
const tokenService = require('../services/token.service')

function AuthUser(req, res, next) {
    let authorization = req.headers['authorization'];

    if (!authorization) {
        return res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse(false, ReasonPhrases.UNAUTHORIZED));
    }
    authorization = authorization && authorization.split(' ')[1];
    try {
        const userDetails = tokenService.verifyAccessToken(authorization);
        const { user_id, username } = userDetails;
        req.user = { user_id, username };
    } catch (error) {
        if (error.name == 'JsonWebTokenError') {
            return res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse(false, ReasonPhrases.UNAUTHORIZED));
        }
    }
    next(); // Proceed to the actual route handler
}

module.exports = AuthUser;