const { db } = require('../utils');

const userService = {
    getUsers: async () => {
        return await db.select('SELECT user_id, username FROM users');
    }
}

module.exports = userService;