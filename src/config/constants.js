const dotenv = require('dotenv');
const path = require('node:path');

dotenv.config(path.join('', '.env'));

module.exports = {
    host: process.env.HOST || "127.0.0.1",
    port: process.env.PORT || 3000,
    x_api_key: process.env.X_API_KEY || '',
    access_secrete_key: process.env.ACCESS_SECRETE_KEY || '',
    refresh_secrete_key: process.env.REFRESH_SECRETE_KEY || '',
};