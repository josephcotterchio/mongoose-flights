var express = require("express");
var router = express.Router();
var flightsCtrl = require("../controllers/flights");

router.get("/", flightsCtrl.index);

router.get("/new", flightsCtrl.newFlights);
router.post("/", flightsCtrl.create);
router.get("/:id", flightsCtrl.show);
router.post("/:id", flightsCtrl.addDestination);
//router.delete('/:id', flightsCtrl.deleteFlight);
router.post("/:id/ticket", flightsCtrl.addTicket);
router.get("/deleteFlight/:id", flightsCtrl.deleteFlight);

module.exports = router;
