const Flight = require("../models/flight");
var Ticket = require("../models/ticket");

function index(req, res) {
Flight.find({}, function (err, flights) {
res.render('/flight', { title: 'All Flights', flights });
});
 }

function show(req, res) {
Flight.findById(req.params.id, function (err, flight) {
res.render('/show', { title: 'Flight Detail', flight });
 });
 }

function newFlight(req, res) {
res.render('/new', { title: 'Add Flight' });
}

function create(req, res) {
    Flight.create(req.body);
    res.redirect("/flight");
}

module.exports = {
    index:index,
    show:show,
    newFlight:newFlight,
    create:create,
 };
