const { Thoughts, Users } = require("../models");
//get all thoughts
const getThoughts = async (req, res) => {
  try {
    const allThoughts = await Thoughts.find();
    res.status(200).json(allThoughts);
  } catch (error) {
    console.log(res.status(500).json(error));
  }
};
//get thought by id
const thoughtById =  (req, res) => {
  try {
    const singleThought =  Thoughts.findById({
      _id: req.params.id,
    })
     singleThought
      .populate("users")
      .populate("friends")
      .then((thoughts) => {
        const thisThought = {thoughts}
        res.status(200).json(thisThought)
      });
  } catch (error) {
    res.status(500).json(error);
  }
};
//update thought
const updateThought = async (req, res) => {
  try {
    await Thoughts.FindOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
  );
  } catch (error) {
    res.status(500).json(error);
  }
};
//create thought
const createThought = async (req, res) => {
  try {
    await Thoughts.create(req.body)
    .then( () => {
      res.status(200).json(req.body);
    });
    {
      $push: {
        thoughts: Thoughts._id.toString();
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//delete thought
const deleteThought = async (req, res) => {
  try {
    await Thoughts.findOneAndDelete({
      where:{
      _id: req.params.id,
    }});
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
