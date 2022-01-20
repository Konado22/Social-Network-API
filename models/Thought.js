const { Schema, model } = require("mongoose");
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      //between 1 and 280 characters
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      //default current date
      //getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    // reactions: {
    //   //array of nested documents created with the reactionSchema
    // }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
const Thoughts = model("Thoughts", thoughtsSchema);
module.exports = Thoughts;
