const Meme = require('../models/meme');
const User = require('../models/user');
// const memeData = require('../generateMeme');
var userArray = [];
// var index = 0;
module.exports = {
  populateDb,
  displayDB,
  clearDB,
  viewMeme,
  createComment,
  deleteComment,
  createMeme,
  createMemePage
};

function populateDb(req, res, next) {
  memeData.then(data => {
    Meme.create(data).then(result => {
      res.render('./users/index', { memeObj: result });
    }).catch(err => {
      next(err);
    });
  }).catch(err => {
    next(err);
  });
}

function displayDB(req, res, next) {
  Meme.find().then(result => {
    res.render('./users/index', { memeObj: result });
  }).catch(err => {
    next(err);
  })
}

function clearDB(req, res, next) {
  Meme.deleteMany().then(result => {
    res.render('./users/index', { memeObj: result });
  }).catch(err => {
    next(err);
  });
}

function viewMeme(req, res, next) {
  Meme.findById(req.params.id).populate("comments.user").then(result => {
    res.render('./users/meme', { memeObj: result });
  }).catch(err => {
    next(err);
  });
}

function createComment(req, res, next) {
  if (!req.user) return res.redirect('/auth/google');
  let commentSchema = {
    "content": req.body.commentvalue,
    "user": req.user
  };
  Meme.findById(req.params.id).then(result => {
    result.comments.push(commentSchema);
    result.save(function (err) {
      if (err) next(err);
      res.redirect(`/memes/${req.params.id}`);
    })
  }).catch(err => {
    next(err);
  });
}

function deleteComment(req, res, next) {
  Meme.findById(req.params.memeid).then(result => {
    result.comments.pull(req.params.commentid);
    result.save(function (err) {
      if (err) next(err);
      res.redirect(`/memes/${req.params.memeid}`);
    })
  }).catch(err => {
    next(err);
  })
}

function createMemePage(req, res, next) {
  res.render('./users/newmeme', { errorFlag: 0 });
}

function createMeme(req, res, next) {
  let errorFlag = 0;
  if (req.body.memeurl.match(/\.(jpeg|jpg|gif|png)$/) != null) {
    let memeObject = objectifyMyMeme(req.body.memeurl, req.body.memetitle);
    Meme.create(memeObject).then(result => {
      res.redirect('/');
    }).catch(err => {
      next(err);
    });
  } else {
    errorFlag = 1;
    res.render('./users/newmeme', { errorFlag: errorFlag });
  }
}

function objectifyMyMeme(url, title) {
  let objectifiedMeme;
  return objectifiedMeme = {
    "postlink": url,
    "title": title,
    "url": url,
    "nsfw": false,
    "spoiler": false,
    "comments": []
  };
}

