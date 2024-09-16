const mongoose = require('mongoose');

const { Schema } = mongoose;

const maintenanceSchema = new Schema({
    pesticides: [
        {
            type: String
        }
    ],
    directSunlight: {
        type: Boolean
    },
    repot: {
        type: Boolean
    },
    trimming: {
        type: Boolean
    }
});

const Maintenance = mongoose.model('Maintenance', maintenanceSchema);

module.exports = Maintenance;


// pesticides varchar array
// directSunlight Boolean
// repot Boolean
// trimming Boolean