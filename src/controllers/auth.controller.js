const { StatusCodes } = require('http-status-codes');
const { jsonResponse } = require('../utils');
const authSevice = require('../services/auth.service');

const AuthController =
{
    login: async (req, res) => {
        const { username, password } = req.body || {};
        console.log(authSevice);
        result = await authSevice.login(username, password);
        console.log('userlist', result);
        res.status(StatusCodes.OK).json(jsonResponse(
            true,
            'user login fetch successfully',
            {
                username: username,
                password: password
            }));
    }
}

module.exports = AuthController;
