const jwt = require('jwt-simple');
const config = require('../config');
const User = require('../models/user');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const cities = req.body.cities || [];

  if(!email || !password) {
    return res.status(422).send({ error: 'You must provide valid email or password.'})
  }

  //check if the email exists
  User.findOne({ email: email }, function(err, existingUser) {
    //connection to database failed
    if(err) {
      return next(err);
    }
    //return an error if email exists
    if(existingUser) {
      return res.status(422).send({ error: 'Email is in use.'}); //422 unable to process
    }

    //create and save an account if email does not exists
    const user = new User({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      cities:cities
    });
    
    user.save(function(err) {
      if(err) { return next(err); }
      //respond to request to indicate the user was created
      res.json({ token: tokenForUser(user) });
    });
  });

};


exports.signin = function(req, res, next) {
  res.send({ token: tokenForUser(req.user)});
};