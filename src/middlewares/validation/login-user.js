const { StatusCodes } = require('http-status-codes');
const { jsonResponse } = require('../../utils');

function loginUser(req, res, next) {
    const { username, password } = req.body || {};
    if (!username || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json(jsonResponse(false, 'username and password are required'));
    }

    next(); // Proceed to the actual route handler
}

module.exports = loginUser;
