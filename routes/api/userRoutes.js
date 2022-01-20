const router = require("express").Router();
const {
  allUsers,
  userById,
  updateUser,
  createUser,
  deleteUser,
} = require("../../controllers/userController");

//get user
//create user

router.route("/").get(allUsers).post(createUser);

//get user by id
//update user by id
//delete user

router.route("/:id").get(userById).delete(deleteUser).put(updateUser);
module.exports = router;
