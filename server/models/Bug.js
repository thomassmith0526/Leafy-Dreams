const mongoose = require('mongoose');

const { Schema } = mongoose;

const bugSchema = new Schema({
    isGood: {
        type: Boolean,
        required: true
    }
});

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;


// isGood Boolean