var express = require('express');
var router = express.Router();
const passport = require('passport');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('./users/index', { title: 'Meme Review', user: req.user, name: req.query.name });
});
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/users',
    failureRedirect: '/users'
  }
));

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/users');
});
module.exports = router;
