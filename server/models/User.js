const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema({
   userName:{
    type: String,
    required:true,
   },
   email:{
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],

   },
   password:{
    type: String,
    required: true,
    minLength:5,
   },
   // myPlants{

   // }
});

userSchema.pre('save', async function (next) {
   if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hashSync(this.password, saltRounds)
   }
   next()
})

userSchema.methods.isCorrectPassword = async function (password) {
   return bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);

module.exports = User;

