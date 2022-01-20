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
    await Users.findOne({
      where: {
        _id: req.params.id,
      },
    });  
  } catch (error) {
    res.status(500).json(error)
  }
};
//update user
const updateUser = async (req, res) => {
  try {
    await Users.findOneAndUpdate({
      where: {
        _id: req.body.id,
        username: req.body.username,
        email: req.body.email,
        //.need thoughts and friends?
      },
    });  
  } catch (error) {
    res.status(500).json(error)
  }
};
//create user
const createUser = async (req, res) => {
  await Users.create(req.body);
};
//delete user
const deleteUser = async (req, res) => {
  try {
    await Users.findOneAndDelete({
      where: {
          _id:req.params.id
      }
  });
  } catch (error) {
    res.status(500).json(error)
  }
};
module.exports = allUsers , userById , updateUser, createUser, deleteUser
