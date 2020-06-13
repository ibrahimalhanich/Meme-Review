var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String
});

module.exports = mongoose.model('User', userSchema);