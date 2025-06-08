const { Sequelize } = require('sequelize');

const database = new Sequelize('postgres', 'pg-admin', 'pg-admin', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});



module.exports = database;