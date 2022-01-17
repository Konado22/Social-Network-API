const Users = require('../models');
const { Thoughts } = require('../models');
//get all thoughts
const getThoughts = (req,res) => {
    try {
        Thoughts.findAll()
    } catch (error) {
       console.log(res.status(500).json(error))
    }
}
//get thought by id
//update thought
//create thought
//delete thought