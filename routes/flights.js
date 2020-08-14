var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/flight', flightsCtrl.index);
router.get('/show', flightsCtrl.show);
router.post('/new', flightsCtrl.create);

module.exports = router;
