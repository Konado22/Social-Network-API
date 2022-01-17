const {Schema, model} = require('mongoose')
const Users = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    friends:{
        type:
    },
    thoughts:{
        ref
    }
})