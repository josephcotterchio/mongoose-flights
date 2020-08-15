var mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA', 'MON', 'YYZ'],
    },
    arrival: {
        type: Date,
    },
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Mongoose Air', 'WestJet']
    },
    flightNo: {
        type: Number,
        min: 1,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function () {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        },
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA', 'MON', 'YYZ'],
        default: 'MON',
    },
    destinations: [destinationSchema]
});


module.exports = mongoose.model('Flight', flightSchema);