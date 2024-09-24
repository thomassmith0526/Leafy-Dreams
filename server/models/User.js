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
  
   plant: [{
      _id: {
         type: Schema.Types.ObjectId,
         ref: 'Plant',
      },
      name: {
         type: String
      }
   }]
});

userSchema.pre('save', async function (next) {
   if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hashSync(this.password, saltRounds)
   }
   next()
})

userSchema.methods.isCorrectPass= async function (password) {
   return bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);

module.exports = User;

