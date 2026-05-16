const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    duration: { type: String, required: true },
    rating: { type: Number, required: true },
    tags: [String]
});

module.exports = mongoose.model('Trip', tripSchema)