const { Schema, Types } = require("mongoose");
//
const Reactions = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId
  },
  reactionBody: {
    type:String,
    required:true,
    maxlength:280
  },
  username: {
    type: String,
    required: true,
    unique:true
  },
  createdAt: {
    type:Date,
    default:Date.now
  },
});
module.exports = Reactions;
