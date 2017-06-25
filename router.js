const express = require('express');
const path = require('path');

const publicPath = path.resolve(__dirname, 'client/public');

const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: true });
const requireSignin = passport.authenticate('local', { session: false});

module.exports = function(app) {

  app.post('/api/signin', requireSignin, Authentication.signin);
  app.post('/api/signup', Authentication.signup);
  // app.get('/feature', requireAuth, function(req, res) {
  //   res.send({state:'okay'});
  // });
  app.use(express.static(publicPath));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/client/public/index.html'));
  });
};
