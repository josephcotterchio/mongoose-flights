const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'WestJet', 'Mongoose Airlines']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: Date.now() + 365 * 24 * 60 * 60000
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA', 'YYZ', 'MON']
    },
    destinations: {
        type: String,
    }
}, {
    timestamps: true
});


// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);