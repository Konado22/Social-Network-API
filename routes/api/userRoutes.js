const app = require("express").Router();
const {
  allUsers,
  userById,
  updateUser,
  createUser,
  deleteUser,
} = require("../../models/User");
//get user
app.get("/", allUsers);
//get user by id
app.get("/:id", userById);
//update user by id
app.put("/:id", updateUser);
//create user
app.post("/createUser", createUser);
//delete user
app.delete("/deleteUser", deleteUser);
module.exports = app;
