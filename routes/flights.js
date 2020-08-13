var express = require('express');
var router = express.Router();
let flightsCtrl = require("../controllers/flights");

/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.send("hello")
  //res.render('index.ejs');
  res.render('flights/flight.ejs', flightsCtrl.create);
});


module.exports = router;
