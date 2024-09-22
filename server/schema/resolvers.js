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
        loginUser: async(_,{email, password }) => {
            console.log('hey')
            try {
                const user = await User.findOne({email})
                console.log(user)
            if (!user) {
                    throw new Error('Failed to find Email');
                }
                
                const correctPass = await user.isCorrectPass(password);
            if (!correctPass) {
                    throw new Error('Incorrect Password');

                }

                return {user};
            } catch(error) {
                throw new Error('Failed to Login')
            }
        },
        //   updateUser: async (_, { _id, name, email }) => {
        //     return await User.findByIdAndUpdate(_id, { name, email }, { new: true });
        //   },
        //   deleteUser: async (_, { _id }) => {
        //     await User.findByIdAndDelete(_id);
        //     return 'User deleted';
        //   },

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