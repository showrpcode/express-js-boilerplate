const { db, Logger } = require('../utils');

const authSevice = {
    login: async (username, password) => {
        try {
            const result = await db.select('SELECT user_id, username FROM users WHERE username = :uname AND password = :pass',
                {
                    uname: username,
                    pass: password
                });
            return result;
        } catch (error) {
            Logger.error(error.message, error.stack);
            return [];
        }
    },
};

module.exports = authSevice;
