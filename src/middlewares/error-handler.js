const { jsonResponse, Logger } = require('../utils');
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

function errorHanlder(err, req, res, next) {
  Logger.error(err.message, err.stack);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(jsonResponse(false, ReasonPhrases.INTERNAL_SERVER_ERROR));
}

module.exports = errorHanlder;