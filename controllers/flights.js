const Flight = require("../models/flight");



function index(req, res) {
Movie.find({}, function (err, movies) {
res.render('flights/index', { title: 'All Flights', flights });
});
 }

function show(req, res) {
Flight.findById(req.params.id, function (err, flight) {
res.render('flights/show', { title: 'Flight Detail', flight });
 });
 }

function newFlight(req, res) {
res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
 // convert nowShowing's checkbox of nothing or "on" to boolean
 req.body.nowFlying = !!req.body.nowFlying;
//     // remove whitespace next to commas
req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');

};
//     // split if it's not an empty string
//     if (req.body.cast) req.body.cast = req.body.cast.split(',');
//     for (let key in req.body) {
//         if (req.body[key] === '') delete req.body[key];
//     }

//     const movie = new Movie(req.body);
//     movie.save(function (err) {
//         // one way to handle errors
//         if (err) return res.redirect('/movies/new');
//         console.log(movie);
//         // for now, redirect right back to new.ejs
//         res.redirect('/movies');
//     });
// }

module.exports = {
    index:index,
    show:show,
    newFlight:newFlight,
    create:create,

 };
