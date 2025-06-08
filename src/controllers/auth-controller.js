const httpStatus = require('http-status-codes');
const { jsonResponse, Logger } = require('../utils');

function login(req, res) {
    const { username, password } = req.body || {};
    Logger.info(username);
    res.status(httpStatus.OK).json(jsonResponse(
        true,
        'user login fetch successfully',
        {
            username: username,
            password: password
        }));
}

module.exports = {
    login
}