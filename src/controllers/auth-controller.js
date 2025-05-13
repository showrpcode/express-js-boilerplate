const httpStatus = require('http-status-codes');

function login(req, res) {
    const { username, password } = req.body;
    res.status(httpStatus.OK).json({
        'success': true,
        'message': 'user login fetch successfully',
        'data': {
            username: username,
            password: password
        },
        'error': {}
    });
}

module.exports = {
    login
}