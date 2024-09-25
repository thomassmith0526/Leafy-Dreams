const mongoose = require('mongoose');
const User = require('./models/User');
const Plant = require('./models/Plant');

const users = [
    { userName: 'Josh_Stringer', email: 'joshstringer@live.com', password: '12345678', plant: [] },
    { userName: 'Mariah_Young', email: 'mariah@yahoo.com', password: '456789', plant: [] },
    { userName: 'Alice_Young', email: 'alicehatesemail@google.com', password: '789012', plant: [] }
];

const MONGO_URI = 'mongodb://localhost:27017/plant_db';

const seedDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await Plant.deleteMany({});
        await User.deleteMany({});

        await User.insertMany(users);
        console.log('User data seeded!!!');

    } catch (error) {
        console.error('Seed failed...', error);
    } finally {
        await mongoose.connection.close();
    }
};

seedDB();