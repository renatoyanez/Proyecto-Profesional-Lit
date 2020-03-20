const S = require('sequelize');
const db = require('../db/db');
//const crypto = require('crypto');

class User extends S.Model { }

User.init({
    username: {
        type: S.STRING,
        allowNull: false
    },
    email: {
        type: S.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: S.STRING,
        allowNull: false
    }

}, { sequelize: db, modelName: 'user' })

module.exports = User