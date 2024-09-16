const mongoose = require('mongoose');

const { Schema } = mongoose;

const helpfulSchema = new Schema({
    isGoodForPeople: {
        type: Boolean,
        required: true
    },
    isGoodForPlants: {
        type: Boolean,
        required: true
    }
});

const Helpful = mongoose.model('Helpful', helpfulSchema);

module.exports = Helpful;


// isGoodForPeople Boolean
// isGoodForAnimals Boolean