const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/plant_db';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected succesfully');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

module.exports = mongoose;