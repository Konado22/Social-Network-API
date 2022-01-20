const { Users } = require("../models");
//get all users
const allUsers = async (req, res) => {
  try {
    await Users.findAll().then(console.log(res));
  } catch (err) {
    console.log(res.status(500).json(err));
  }
};
//get user by id
const userById = async (req, res) => {
  try {
    const users = await Users.find()
      .populate("thoughts")
      .populate("friends")
      .select("-__v")
      .then((users) => {
        const user = { users };
        res.status(200).json(user);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};
//update user
const updateUser = async (req, res) => {
  try {
    const updatedUser = await Users.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
//create user
const createUser = async (req, res) => {
  try {
    await Users.create(req.body).then(() => {
      res.json(req.body);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    await Users.findOneAndDelete({
      where: {
        _id: req.params.id,
      },
    });
    res.status(200).json("The user has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = { allUsers, userById, updateUser, createUser, deleteUser };
