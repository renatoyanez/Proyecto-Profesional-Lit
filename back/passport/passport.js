const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models/index");

passport.use(
  new LocalStrategy(
    { usernameField: "email" }, //set the email as the parameter for the strategy
    (inputEmail, password, done) => {
      User.findOne({
        where: {
          email: inputEmail
        } //matches the input as the actual email found in db
      }).then(user => {
          if (!user) {
            return done(null, false, {
              message: "Incorrect username."
            });
          }
          if (!user.validPassword(password)) {
            return done(null, false, {
              message: "Incorrect password."
            });
          }
          return done(null, user); //all is ok after passing the middleware
        })
        .catch(done);
    }
  )
);

// update
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Usuario.findByPk(id)
      .then(user => done(null, user))
});

module.exports = passport;
