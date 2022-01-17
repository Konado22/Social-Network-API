const {Schema, model} = require('mongoose')
const Thoughts = new Schema({
    thoughtId:{ 
        type: Schema.ObjectId,
        unique: true
    },
    thoughtContent:{
        type: String,
    },
    username:{
        type: String,
        references: Users
    }
})
