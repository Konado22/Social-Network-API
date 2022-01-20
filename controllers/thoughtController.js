const { Thoughts } = require("../models");
//get all thoughts
const getThoughts = async (req, res) => {
  try {
    await Thoughts.findAll();
  } catch (error) {
    console.log(res.status(500).json(error));
  }
};
//get thought by id
const thoughtById = async (req, res) => {
  try {
    await Thoughts.findOne({
      where: {
        _id: req.params.thoughtId,
      },
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
//update thought
const updateThought = async (req, res) => {
  try {
    await Thoughts.FindOneAndUpdate({
      where: {
        _id: req.params.thoughtId,
      },
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
//create thought
const createThought = async (req, res) => {
  try {
    await Thoughts.create(req.body).then((newThought) => {
      res.status(200).json("new thought created");
    });
    {
      $push: {
        thoughts: thought._id.toString();
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//delete thought
const deleteThought = async (req, res) => {
  try {
    await Thoughts.delete({
      where: {
        _id: req.params.thoughtId,
      },
    });
    res.status(200).json("Thought deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getThoughts,
  thoughtById,
  updateThought,
  createThought,
  deleteThought,
};
