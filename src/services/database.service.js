const database = require('../config/database');

const databaseService = {
    init: async () => {
        try {
            await database.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    },
    close: async () => {
        try {
            database.close();
        } catch (error) {
            console.error('Unable to close connection to the database:', error);
        }
    }
}

module.exports = databaseService;