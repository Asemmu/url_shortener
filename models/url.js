const { Sequelize, DataTypes } = require('sequelize');

const {sequelize} = require('../util/database');

const URL = sequelize.define('url', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    url: {
        type: Sequelize.CHAR,
        allowNull: false,
        Max: 255
    },
    short_name: {
        type: DataTypes.STRING,
        allowNull: false,
        Max: 255
    }
  
});

module.exports = URL;