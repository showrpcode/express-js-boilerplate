const { StatusCodes } = require('http-status-codes');
const { jsonResponse, Logger } = require('../utils');

function notFound(req, res, next) {
    Logger.error(`Cannot ${req.method} ${req.originalUrl}`);
    res.status(StatusCodes.NOT_FOUND).json(jsonResponse(false, `Cannot ${req.method} ${req.originalUrl}`));
}

module.exports = notFound;
