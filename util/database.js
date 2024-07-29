const Sequelize = require('sequelize');
const DB_NAME = process.env.CURRENT_ENV == 'TEST' ? process.env.DB_NAME_TEST : process.env.DB_NAME;
const sequelize = new Sequelize(DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: process.env.DB_TYPE || 'mysql',
    host: process.env.DB_HOST,
    logging: false,
    dialectOptions:
    {
      charset: 'utf8mb4',
    }
});


async function connect() 
{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
module.exports = {sequelize, connect};
/* 
without sequelize
const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'node_user',
    database: 'node-complete',
    password: '12345678'
});

module.exports = pool.promise(); */