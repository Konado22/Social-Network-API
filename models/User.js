const { Schema, Types } = require("mongoose");
const Users = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\.\S+/, 'Must match an email address!']
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref:'users'
    //array of _id values referencing the Users model
  }],
  thoughts: [{
    type:Schema.Types.ObjectId,
    ref: 'thoughts'
    //array of _id values referencing the Thoughts model
  }],
  
},
{
  toJSON: {
    virtuals: true,
  },
  id: false
});
module.exports = Users;
