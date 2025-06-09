const jwtToken = require('jsonwebtoken');
const { access_secrete_key, refresh_secrete_key } = require('../config/constants');

const token = {
    generateAccessToken: (userDetails = {}) => {
        return jwtToken.sign(userDetails, access_secrete_key, { expiresIn: '1h' });
    },
    generateRefreshToken: (userDetails = {}) => {
        return jwtToken.sign(userDetails, refresh_secrete_key, { expiresIn: '1d' });
    }
}

module.exports = token;