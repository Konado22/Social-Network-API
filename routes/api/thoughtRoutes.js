const router = require("express").Router();
const {
  getThoughts,
  thoughtById,
  updateThought,
  createThought,
  deleteThought,
} = require("../../controllers/thoughtController");
//get all Thoughts
router.route.get(getThoughts).post(createThought);
//get thought by id
router.route("/:id").get(thoughtById).put(updateThought).delete(deleteThought);
//update Thought by id
//create Thought++
//delete Thought
module.exports = router;
