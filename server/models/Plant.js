const mongoose = require('mongoose');

const { Schema } = mongoose;

const plantSchema = new Schema({
    state: {
        type: Schema.Types.ObjectId,
        ref: 'State',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    startup_id: {
        type: Schema.Types.ObjectId,
        ref: 'StartUp'
    },
    bug_id: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Bug'
        }
    ],
    helpful_id: {
        type: Schema.Types.ObjectId,
        ref: 'Helpful'
    },
    maintenance_id: {
        type: Schema.Types.ObjectId,
        ref: 'Maintenance'
    }
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;


// state varchar
// name varchar
// startup_id BigInt
// bug_id BigInt array
// helpful_id BigInt
// maintenance_id BigInt