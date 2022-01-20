const { Schema, model } = require("mongoose");
const usersSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\.\S+/, 'Must match an email address!']
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref:'Users'
    //array of _id values referencing the Users model
  }],
  thoughts: [{
    type:Schema.Types.ObjectId,
    ref: 'Thoughts'
    //array of _id values referencing the Thoughts model
  }],
  
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});
const Users = model('Users', usersSchema);
module.exports = Users;
