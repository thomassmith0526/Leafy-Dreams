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
        // plant: async () => await Plant.find(), 
        // startUp: async () => await StartUp.find(),
        // state: async () => await State.find(),
        // bug: async () => await Bug.find(),
        // helpful: async () => await Helpful.find(),
    },
            
    Mutation: {
        hello: () => 'Hello FRIENDS!!!!',
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