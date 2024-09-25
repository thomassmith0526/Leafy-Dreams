const mongoose = require('mongoose');

const { Schema } = mongoose;

const plantSchema = new Schema({
   
    commonName: {
        type: String,
        required: true
    },
    thumbNail: {
        type: String
    }, 
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;