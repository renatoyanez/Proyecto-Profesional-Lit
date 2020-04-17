const S = require("sequelize");
const db = require("../db/db");
const crypto = require('crypto');

class User extends S.Model {}

User.init(
  {
    username: {
      type: S.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Username already in use!"
      }
    },

    email: {
      type: S.STRING,
      allowNull: false,
      isEmail: true,
      unique: {
        args: true,
        msg: "Email address already in use!"
      }
    },
    password: {
      type: S.STRING,
      allowNull: false
    },
    admin: {
      type: S.BOOLEAN
    },
    salt: {
        type: S.STRING
    } 
    //creates salt from the received password string. This will later be used to validate the user.
  },
  { sequelize: db, modelName: "user" }
);

User.addHook("beforeCreate", function(user) {
  console.log("PASSWORD:   ", user.password);
  user.salt = crypto.randomBytes(20).toString('hex');
  user.password = user.hashPassword(user.password);
  console.log("SALT:   ", user.salt);
    
}) //Crypto generates hash and salt from the received password string. This will later be used to validate the user.

User.prototype.hashPassword = function(password) {

    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
    
    //use cryptos hash generator for the password
}

User.prototype.validPassword = function(password) {
  
    return this.password === this.hashPassword(password);
    //using passport to finally validate the password
}



module.exports = User;
