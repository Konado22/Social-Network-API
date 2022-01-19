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
  await Users.findOne({
    where: {
      _id: req.params.id,
    },
  });
};
//update user
const updateUser = async (req, res) => {
  await Users.findOneAndUpdate({
    where: {
      _id: req.body.id,
      username: req.body.username,
      email: req.body.email,
      //.need thoughts and friends?
    },
  });
};
//create user
const createUser = async (req, res) => {
  await Users.create(req.body);
};
//delete user
const deleteUser = async (req, res) => {
  await Users.findOneAndDelete({
      where: {
          _id:req.params.id
      }
  });
};
module.exports = allUsers , userById , updateUser, createUser, deleteUser
