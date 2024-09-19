const mongoose = require('mongoose');
const User = require('./models/User');

const users = [
    { userName: 'Josh', email: 'joshstringer@live.com', password: '123' },
    { userName: 'Mariah', email: 'mariah@yahoo.com', password: '456' },
    { userName: 'Alice', email: 'alicehatesemail@google.com', password: '789' }    
];

const MONGO_URI = 'mongodb://localhost:27017/plant_db';

const seedDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await User.deleteMany({});
        await User.insertMany(users);
        console.log('User data seeded!');        
    } catch (error) {
        console.error('Failed to seed data...', error);
    } finally {
        await mongoose.connection.close();
    }
};

seedDB();