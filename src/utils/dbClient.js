const database = require('../config/database');
const { QueryTypes } = require('sequelize');

const dbClient = {
    select: async (query = '', params = {}) => {
        return await database.query(query, {
            replacements: params,
            type: QueryTypes.SELECT,
        });
    },

    insert: async (query = '', params = {}) => {
        return await database.query(query, {
            replacements: params,
            type: QueryTypes.INSERT,
        });
    },

    update: async (query = '', params = {}) => {
        return await database.query(query, {
            replacements: params,
            type: QueryTypes.UPDATE,
        });
    },

    delete: async (query = '', params = {}) => {
        return await database.query(query, {
            replacements: params,
            type: QueryTypes.DELETE,
        });
    },

    call: async (query = '', params = {}) => {
        return await database.query(query, {
            replacements: params,
            type: QueryTypes.RAW, // or SELECT, depending on SP
        });
    }
};

module.exports = dbClient;
