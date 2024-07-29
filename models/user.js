const { Sequelize, DataTypes } = require('sequelize');

const {sequelize} = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.CHAR,
        allowNull: false,
        Max: 255
    },
    password: {
        type: Sequelize.CHAR,
        allowNull: false,
        Max: 255
    },
    passwordToken: {
        type: Sequelize.CHAR
    },
    passwordTokenExpiry: {
        type: Sequelize.DATE
    }
});

module.exports = User;