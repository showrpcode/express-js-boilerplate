const { jsonResponse, Logger } = require('../utils');

function errorHanlder(err, req, res, next) {
  Logger.error(err.message, err.stack);
  res.status(err.statusCode).json(jsonResponse(false, err.message));
}

module.exports = errorHanlder;