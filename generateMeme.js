const memeModel = require('./models/meme');

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
];

console.log(memeData);
memeModel.create(memeData).then(result => {
  console.log(result);
}).catch(err => {
  next(err);
});

