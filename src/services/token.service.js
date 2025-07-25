const jwtToken = require('jsonwebtoken');
const { access_secrete_key, refresh_secrete_key } = require('../config/constants');

const tokenService = {
    generateAccessToken: (userDetails = {}) => {
        return jwtToken.sign(userDetails, access_secrete_key, { expiresIn: '1h' });
    },
    generateRefreshToken: (userDetails = {}) => {
        return jwtToken.sign(userDetails, refresh_secrete_key, { expiresIn: '1d' });
    },
    verifyAccessToken: (accessToken = '') => {
        return jwtToken.verify(accessToken, access_secrete_key);
    },
    verifyRefreshToken: (refreshToken = '') => {
        return jwtToken.verify(refreshToken, refresh_secrete_key);
    }
}

module.exports = tokenService;