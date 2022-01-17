const { Schema, Types } = require("mongoose");
//
const reactionSchema = new Schema({
  reactionId: {},
  reactionBody: {},
  username: {},
  timeCreated: {},
});
module.exports = Reactions;
