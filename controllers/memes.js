const Meme = require('../models/meme');
const memeData = require('../api/fetchmemes');

module.exports = {
  populateDb,
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
  // Meme.create(memeData).then(data => {
  // console.log(data);
  // res.render('./users/index', { memeObj: data });
  // }).catch(err => {
  // next(err);
  // });
}