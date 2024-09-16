const mongoose = require('mongoose');

const { Schema } = mongoose;

const stateSchema = new Schema({
    heat: {
        type: String
    },
    shade: {
        type: String
    },
    water: {
        type: String
    },
    plants: [
        {
            type: String
        }
    ],
    bugs: [
        {
            type: String
        }
    ]
});

const State = mongoose.model('State', stateSchema);

module.exports = State;


// heat varchar
// shade varchar
// water varchar
// plants varchar array
// bugs varchar array