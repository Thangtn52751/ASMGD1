const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    ten: {
        type: String,
        required: true
    },
    namSX: {
        type: Number
    },
    hang: {
        type: String,
        required: true
    },
    gia: {
        type: Number
    }
});

const CarModel = new mongoose.model('xehoi', CarSchema);

module.exports = CarModel;