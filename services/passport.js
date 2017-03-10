const passport = require('passport');
const config = require('../config');
const User = require('../models/user');
const JwtStrategy = require('passport').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//create jwt Strategy payload is decrypted jwt token
//check if user id in the payload exists in db, 
//if yes, call 'done' with that user
//if not, call done without a user object
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    User.findById(payload.sub, function(err, user) {
        if(err) { return done(err, false); }//search error

        if(user) {
            done(null, user);
        } else {
            done(null, false);//could not find the user in the db
        }
    });
});

//tell passport to use this Strategy
passport.use('login',jwtLogin);