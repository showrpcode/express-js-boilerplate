const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || '';

module.exports = {
    PORT, API_KEY
}