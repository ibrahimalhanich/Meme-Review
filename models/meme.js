const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const memeSchema = new mongoose.Schema({
  postLink: String,
  title: String,
  url: String,
  nsfw: Boolean,
  spoiler: Boolean,
  comments: [commentSchema]
});



module.exports = mongoose.model('Meme', memeSchema);