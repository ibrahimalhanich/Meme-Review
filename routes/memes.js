var express = require('express');
var router = express.Router();
var memesCtrl = require('../controllers/memes');

router.get('/users', memesCtrl.populateDb);

module.exports = router;
