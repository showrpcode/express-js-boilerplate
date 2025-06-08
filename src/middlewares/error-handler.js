const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const { jsonResponse, Logger } = require('../utils');

function errorHanlder(err, req, res, next) {
  Logger.error(err.message, err.stack);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(jsonResponse(false, ReasonPhrases.INTERNAL_SERVER_ERROR, {}, err.message));
}

module.exports = errorHanlder;