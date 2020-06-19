// const axios = require('axios');

// module.exports = axios.get("https://meme-api.herokuapp.com/gimme/cleanmemes/5")
//   .then(function (response) {
//     // console.log("fetch meme", response.data.memes);
//     return response.data.memes;
//   });
// const controllerMeme = require('/Users/Ibrahim/Workspace/meme-review/controllers/memes');
const memeModel = require('/Users/Ibrahim/Workspace/meme-review/models/meme');
// const userModel = require('/Users/Ibrahim/Workspace/meme-review/models/user');


const memeData = [
  {
    "postLink": "https://www.reddit.com/r/meirl/comments/h9eakd/meirl/",
    "title": "meirl",
    "url": "https://i.redd.it/052y2k8852551.png",
    "nsfw": false,
    "spoiler": false,
    "comments": []
  }, {
    "postLink": "https://www.reddit.com/r/meirl/comments/h99d05/meirl/",
    "title": "meirl",
    "url": "https://i.redd.it/0b6uy4d9a0551.png",
    "nsfw": false,
    "spoiler": false,
    "comments": []
  }, {
    "postLink": "https://www.reddit.com/r/meirl/comments/h0pucd/meirl/",
    "title": "meirl",
    "url": "https://i.redd.it/moabvqkav6451.jpg",
    "nsfw": false,
    "spoiler": false,
    "comments": []
  }, {
    "postLink": "https://www.reddit.com/r/meirl/comments/h7zy13/meirl/",
    "title": "meirl",
    "url": "https://i.redd.it/v1uccrwdnl451.png",
    "nsfw": false,
    "spoiler": false,
    "comments": []
  }, {
    "postLink": "https://www.reddit.com/r/meirl/comments/gzsepv/meirl/",
    "title": "meirl",
    "url": "https://i.redd.it/ewr4wfnkcx351.jpg",
    "nsfw": false,
    "spoiler": false,
    "comments": []
  }
]


// memeModel.deleteMany().then(result => {
//   console.log(result);
// }).catch(err => {
//   next(err);
// });

memeModel.create(memeData).then(result => {
  console.log(result);
}).catch(err => {
  next(err);
});

// {
//   "_id": {
//       "$oid": "5eeac4d1ecba622c4b86f9aa"
//   },
//   "postLink": "https://www.reddit.com/r/meirl/comments/h9eakd/meirl/",
//   "title": "https://i.redd.it/052y2k8852551.png",
//   "nsfw": false,
//   "spoiler": false,
//   "comments": [""]
// }