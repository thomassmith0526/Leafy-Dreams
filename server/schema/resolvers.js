const { User, Plant }  = require('../models/index.js');

const resolvers = {
    Query: {
        getAllUsers: async () => {
            try {
                const users = await User.find();
                return users;
            } catch (error) {
                throw new Error('Failed to fetch all users.');
            }
        },

        getUser: async (parent, { email }) => {
            try {
                const user = await User.findOne({ email }).populate('plant');
                console.log(user);
                return {
                    _id: user._id,
                    userName: user.userName,
                    email: user.email,
                    password: user.password,
                    plant: user.plant.map(plant => ({
                        _id: plant._id,
                        commonName: plant.commonName,
                        thumbNail: plant.thumbNail
                    }))
                };
            } catch (error) {
                throw new Error('User not found.');
            }
        },   
        
        getUserPlants: async (_, { email }) => {
            const user = await User.findOne({ email }).populate('plant');
            return user ? user.plant : [];
        },
        
    },
            
    Mutation: {
       
        signupUser: async (_, { userName, email, password }) => {
            try {
                if (!userName || !email || !password) {
                    throw new Error('Please add required information.');
            }
                const newUser = new User({ userName, email, password, plant:[] });
                const savedUser = await newUser.save();
                return savedUser;
          } catch(error) {
            throw new Error('Failed to create new user.');
          }
        },

        addPlant: async (_, { email, commonName, thumbNail }) => {
            console.log('Email:', email);
            console.log('Common Name:', commonName);
            console.log('Thumbnail URL:', thumbNail);
            try {
                const user = await User.findOne({ email });
                console.log(user);
                if (!user) {
                    throw new Error('User not found');
                }
                const existingPlant = await Plant.findOne({ commonName });
                if (existingPlant) {
                    const isPlantAdded = user.plant.some(plant => plant.commonName === commonName);
                    if (isPlantAdded) {
                        throw new Error('Plant already in database');
                    }
                    console.log('Plant already in database:', existingPlant);
                    return user;
                }
                const newPlant = new Plant({ commonName, thumbNail });
                await newPlant.save();
                //maybe plant/plants is the issue
                user.plant.push({ _id: newPlant._id, commonName, thumbNail });
                await user.save();
                await user.populate('plant');
                console.log('Plant added to user:', user);
                return user;
            } catch (error) {
                console.error('Error in addPlant:', error.message);
                throw new Error(error.message);
            }
        },
    },
};

module.exports = resolvers;