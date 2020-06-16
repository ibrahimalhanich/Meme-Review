const axios = require('axios');

module.exports = axios.get("https://meme-api.herokuapp.com/gimme/cleanmemes/5")
  .then(function (response) {
    // console.log("fetch meme", response.data.memes);
    return response.data.memes;
  });