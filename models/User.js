const {Schema, model} = require('mongoose')
const Users = new Schema({
    username: {
        type: String,
        unique:true,
        required: true,
        trimmed:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //?
        // vadilation:
        //?
    },
    friends:{
        //array of _id values referencing the Users model
    },
    thoughts:{
        //array of _id values referencing the Thoughts model
    }
})