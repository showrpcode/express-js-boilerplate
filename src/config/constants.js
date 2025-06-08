const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    host: process.env.HOST || "127.0.0.1",
    port: process.env.PORT || 3000,
    x_api_key: process.env.X_API_KEY || '',
};