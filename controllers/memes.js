const Meme = require('../models/meme');
const memeData = require('../api/fetchmemes');

module.exports = {
  populateDb,
  displayDB,
  clearDB,
  viewMeme,
  createComment
};

function populateDb(req, res, next) {
  // console.log("popDB", memeData);
  memeData.then(data => {
    Meme.create(data).then(result => {
      console.log(result);
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
    console.log(result);
    res.render('./users/index', { memeObj: result });
  }).catch(err => {
    next(err);
  })
}

function clearDB(req, res, next) {
  Meme.deleteMany().then(result => {
    res.render('./users/index', { memeObj: result });
    console.log(result);
  }).catch(err => {
    next(err);
  });
}

function viewMeme(req, res, next) {
  console.log("VIEW MEME");
  console.log(req.params);
  Meme.findById(req.params.id).then(result => {
    console.log(result);
    res.render('./users/meme', { memeObj: result });
  }).catch(err => {
    next(err);
  });
}

function createComment(req, res, next) {
  req.body.user = req.user;
  // console.log(req.body.commentvalue);
  // console.log("create comment func");
  // console.log(req.params.id);
  Meme.findByIdAndUpdate(req.params.id).then(result => {
    result.comments = [];
    let commentSchema = {
      "content": req.body.commentvalue,
      "user": req.body.user
    };
    result.comments.push(commentSchema);
    result.save(function (err) {
      if (err) next(err);
      res.render('./users/meme', { memeObj: result });
    })
  }).catch(err => {
    next(err);
  });
}