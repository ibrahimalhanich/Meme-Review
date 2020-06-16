var express = require('express');
var router = express.Router();
var memesCtrl = require('../controllers/memes');
// const viewMeme = require('../controllers/memes');

// router.get('/', memesCtrl.displayDB);
// router.get('/', function (req, res) {
//   console.log(req);
//   res.send('GET handler for /dogs route.');
// });
router.get('/:id', memesCtrl.viewMeme);
module.exports = router;
