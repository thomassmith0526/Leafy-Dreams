const { Plant, StartUp, State, Bug, Helpful, Maintenance } = require('../models');

const resolvers = {
    Query: {
        hello: () => 'Hello From Query!'
        // plant: async () => await Plant.find(), //add back in when ready 
    },

    Mutation: {
        hello: () => 'Hello From Mutation!',
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