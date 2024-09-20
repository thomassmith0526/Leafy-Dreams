const User = require('../models/User');
const { Plant, StartUp, State, Bug, Helpful, Maintenance } = require('../models');

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
        getUser: async (parent, { userId }) => {
            try {
                const user = await User.findOne({ _id: userId });
                return user;
            } catch (error) {
                throw new Error('User not found.');
            }
        },
        // getAllPlants: async () => {
        //     try {
        //         return await Plant.find();
        //     } catch (error) {
        //         throw new Error('Failed to fetch all plants.');
        //     }
        // },
        // getOnePlant: async (_, { plantId }) => {
        //     try {
        //         const plant = await Plant.findOne({ _id: plantId });
        //         if (!plant) {
        //             throw new Error('Plant not found.');
        //         }
        //         return plant;
        //     } catch (error) {
        //         throw new Error('Plant not found.');
        //     }
        // },               

        // plant: async () => await Plant.find(), 
        // startUp: async () => await StartUp.find(),
        // state: async () => await State.find(),
        // bug: async () => await Bug.find(),
        // helpful: async () => await Helpful.find(),
    },
            
    Mutation: {
       
        addUser: async (_, { userName, email, password }) => {
            try {
                if (!userName || !email || !password) {
                    throw new Error('Please add required information.');
            }
                const newUser = new User({ userName, email, password });
                const savedUser = await newUser.save();
                return savedUser;
          } catch(error) {
            throw new Error('Failed to create new user.');
          }
        },
        //   updateUser: async (_, { _id, userName, email }) => {
        //      try {
        //     const updatedUser = await User.findByIdAndUpdate(_id, { userName, email }, { new: true });
        //     return updatedUser;
        //  } catch (error) {
        //     throw new Error('Failed to update user.');
        //  }
        // },
        //   deleteUser: async (_, { userId }) => {
        //     try {
        //         await User.findByIdAndDelete(userId);
        //         return 'User has been deleted!';
        //     } catch (error) {
        //         throw new Error('Failed to delete user.');
        //     }
        // },

        // findPlant: async (_, { state, name }) => {
        //     const newPlant = new Plant({ state, name });
        //     return await newPlant.save();
        // },
        // updatePlant: async (_, { userId, state, name }) => {
        //     return await Plant.findByIdAndUpdate(userId, { state, name }, { new: true});
        // }
      
    },
};

module.exports = resolvers;