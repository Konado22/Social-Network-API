const { Schema, model } = require("mongoose");
const Thoughts = new Schema({
  thoughtText: {
    type: String,
    required: true,
    //between 1 and 280 characters
  },
  createdAt: {
    type: Date,
    //default current date
    //getter method to format the timestamp on query
  },
  username: {
    type: String,
    required: true,
  },
  reactions: {
    //array of nested documents created with the reactionSchema
  },
});
module.exports = Thoughts;
