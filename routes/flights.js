var express = require('express');
var router = express.Router();
let flightsCtrl = require("../controllers/flights");

/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/show', flightsCtrl.show);
router.post('/', flightsCtrl.create);

module.exports = router;
