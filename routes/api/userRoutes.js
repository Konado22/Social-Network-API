const router = require("express").Router();
const {
  allUsers,
  userById,
  updateUser,
  createUser,
  deleteUser,
} = require("../../models/User");
//get user
router.route('/').get(allUsers).post(createUser);
//get user by id
router.route("/:id").get(userById).delete(deleteUser).put(updateUser);
//update user by id
//create user
//delete user
module.exports = router;
