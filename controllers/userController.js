const { Users } = require("../models");
//get all users
const allUsers = async (req, res) => {
  try {
    const allUsers = await Users.findAll()
    res.status(200).json(allUsers)
  } catch (err) {
    console.log(res.status(500).json(err));
  }
};
//get user by id
const userById =  (req, res) => {
  try {
    const userById = Users.findById({
      _id: req.params.id
    })
    userById
      .populate("thoughts")
      .populate("friends")
      .then((users) => {
        const thisUser = {};
        res.status(200).json(users);
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
