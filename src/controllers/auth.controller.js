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
        } else {
            res.status(StatusCodes.UNAUTHORIZED)
                .json(jsonResponse(false, 'invalid username / password'));
        }
    },

    renewToken: async (req, res) => {
        const { refreshToken } = req.body || {};
        try {
            const result = tokenService.verifyRefreshToken(refreshToken);
            if (Object.keys(result).length != 0) {
                const userDetails = {
                    user_id: result.user_id,
                    username: result.username
                };
                const accessToken = tokenService.generateAccessToken(userDetails);
                const refreshToken = tokenService.generateRefreshToken(userDetails);
                res.status(StatusCodes.OK)
                    .json(jsonResponse(true, 'token renew successfully',
                        {
                            accessToken,
                            refreshToken
                        }));
            } else {
                throw new Error("something went wrong while renew token");
            }
        } catch (error) {
            if (error.name == 'JsonWebTokenError') {
                res.status(StatusCodes.BAD_REQUEST)
                    .json(jsonResponse(false, error.message));
            }
        }
    }
}

module.exports = AuthController;