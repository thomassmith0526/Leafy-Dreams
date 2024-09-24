const mongoose = require('mongoose');
const User = require('./models/User');
const Plant = require('./models/Plant');

const users = [
    { userName: 'Josh_Stringer', email: 'joshstringer@live.com', password: '12345678', plant: [] },
    { userName: 'Mariah_Young', email: 'mariah@yahoo.com', password: '456789', plant: [] },
    { userName: 'Alice_Young', email: 'alicehatesemail@google.com', password: '789012', plant: [] }
];

const plants = [
    { name: 'Sunflower'},
    { name: 'Rose'},
    { name: 'Bluebonnet'},
    { name: 'Ivy'},
    { name: 'Aloe Vera'},
    { name: 'Lily'}
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

        const addedPlants = await Plant.insertMany(plants);
        users[0].plant.push({ _id: addedPlants[0]._id, name: addedPlants[0].name });
        users[0].plant.push({ _id: addedPlants[1]._id, name: addedPlants[1].name });
        users[1].plant.push({ _id: addedPlants[2]._id, name: addedPlants[2].name });
        users[1].plant.push({ _id: addedPlants[3]._id, name: addedPlants[3].name });
        users[2].plant.push({ _id: addedPlants[4]._id, name: addedPlants[4].name });
        users[2].plant.push({ _id: addedPlants[5]._id, name: addedPlants[5].name });
        console.log('Plant data seeded!!!');

        await User.insertMany(users);
        console.log('User data seeded!!!');

    } catch (error) {
        console.error('Seed failed...', error);
    } finally {
        await mongoose.connection.close();
    }
};

seedDB();