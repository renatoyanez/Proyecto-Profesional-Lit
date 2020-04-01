const S = require('sequelize');
const db = require('../db/db');
const crypto = require('crypto');

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
    },
    salt: {
        type: S.STRING
    } //creates salt from the received password string. This will later be used to validate the user.
}, { sequelize: db, modelName: 'user' })

User.addHook("beforeCreate", (User) => {
    User.salt = crypto.randomBytes(20).toString('hex');
    User.password = User.hashPassword(User.password);
}) //Crypto generates hash and salt from the received password string. This will later be used to validate the user.

User.prototype.hashPassword = (password) => {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
    //use cryptos hash generator for the password
}

User.prototype.validPassword = (password) => {
    return this.password === this.hashPassword(password);
    //using passport to finally validate the password
}


module.exports = User