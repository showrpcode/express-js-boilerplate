const httpStatus = require('http-status-codes');

function loginAuthUser(req, res, next) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(httpStatus.BAD_REQUEST).json({
            success: false,
            message: 'username and password are required',
            data: {},
            error: {}
        });
    }

    next(); // Proceed to the actual route handler
}

module.exports = loginAuthUser;
