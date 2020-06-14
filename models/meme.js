const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
  postLink: String,
  title: String,
  url: String,
  nsfw: Boolean,
  spoiler: Boolean
});

module.exports = mongoose.model('Meme', memeSchema);