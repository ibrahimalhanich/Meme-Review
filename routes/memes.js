var express = require('express');
var router = express.Router();
var memesCtrl = require('../controllers/memes');
// const viewMeme = require('../controllers/memes');

// router.get('/', memesCtrl.populateDb);
// router.get('/', function (req, res) {
//   console.log(req);
//   res.send('GET handler for /dogs route.');
// });
router.get('/addmeme', memesCtrl.createMemePage);
router.post('/addmeme', memesCtrl.createMeme);
router.get('/:id', memesCtrl.viewMeme);
router.post('/:id/add-comment', memesCtrl.createComment);
router.post('/:memeid/delete-comment/:commentid', memesCtrl.deleteComment);
// action="/memes/<%= memeObj._id %>/add-comment">
module.exports = router;
