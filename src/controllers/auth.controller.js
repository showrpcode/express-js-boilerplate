const { StatusCodes } = require('http-status-codes');
const { jsonResponse, Logger } = require('../utils');
const authSevice = require('../services/auth.service');
const tokenService = require('../services/token.service');

const AuthController =
{
    login: async (req, res) => {
        const { username, password } = req.body || {};
        result = await authSevice.login(username, password);
        if (result.length) {
            const userDetails = result[0];
            try {
                const accessToken = tokenService.generateAccessToken(userDetails);
                const refreshToken = tokenService.generateRefreshToken(userDetails);
                res.status(StatusCodes.OK)
                    .json(jsonResponse(true, 'user login successfully',
                        {
                            user_id: userDetails.user_id,
                            username: username,
                            accessToken,
                            refreshToken
                        }));
            } catch (error) {
                Logger.error(error.message, error.stack);
                throw new Error("Something bad happened");
            }
        } else {
            res.status(StatusCodes.UNAUTHORIZED)
                .json(jsonResponse(false, 'invalid username / password'));
        }
    }
}

module.exports = AuthController;