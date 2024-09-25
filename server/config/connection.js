const mongoose = require('mongoose');

const mongoURI = process.env.NODE_ENV === 'production'
    ? 'mongodb+srv://joshstringer:vHwMvfyHljdttfgC@plantcluster.jfen1.mongodb.net/team_plant_db?retryWrites=true&w=majority&appName=PlantCluster'
    : 'mongodb://localhost:27017/plant_db';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

module.exports = mongoose;