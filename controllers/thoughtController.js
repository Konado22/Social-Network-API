const { Users } = require('../models');
const { Thoughts } = require('../models');
//get all thoughts
const getThoughts = async (req,res) => {
    try {
        await Thoughts.findAll()
    } catch (error) {
       console.log(res.status(500).json(error))
    }
}
//get thought by id
const thoughtById = async (req,res) => {
    await Thoughts.findOne({
        where: {
            thoughtId:req.params.thoughtId
        }
    })
}
//update thought
const updateThought = async (req,res) => {
    await Thoughts.FindOneAndUpdate({
        where: {
            thoughtId: req.params.thoughtId
        }
    })
}
//create thought
const createThought = async (req,res) => {
    await Thoughts.create(req.body)
}
//delete thought
const deleteThought = async (req,res) => {
    await Thoughts.delete({
        where:{
            thoughtId: req.params.thoughtId
        }
    })
}