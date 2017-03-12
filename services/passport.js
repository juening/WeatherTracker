const passport = require('passport');
const config = require('../config');
const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//create jwt Strategy payload which is decrypted jwt token
//check if user id in the payload exists in db, 
//if yes, call 'done' with that user
//if not, call done without a user object
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    User.findById(payload.sub, function(err, user) {
        if(err) { return done(err, false); }//connection error

        if(user) {
            done(null, user);//search  find the user
        } else {
            done(null, false);//could not find the user in the db
        }
    });
});

//create local Strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    //verify email and password, call done with the user if email and password are correct
    //otherwise call done with false
    User.findOne({ email: email }, function(err, user) {
        if(err) { return done(err); }
        if(!user) { return done(null, false); }

        //hash the new password to check if it equal to the hashed password in db
        user.comparePassword(password, function(err, isMatch) {
            if(err) { return done(err); }
            if(!isMatch) { return done(null, false); }

            return done(null, user);
        });
    });
});

//tell passport to use this Strategy
passport.use(jwtLogin);
passport.use(localLogin);