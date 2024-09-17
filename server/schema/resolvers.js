const { Bug, Helpful, Maintenance, Plant, StartUp, State } = require('../models');

const resolvers = {
    Query: {
        hello: () => 'Hello From Query!'
    },

    Mutation: {
        hello: () => 'Hello From Mutation!',
    },
};

module.exports = resolvers;