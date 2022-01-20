const router = require("express").Router();
const {
  getThoughts,
  thoughtById,
  updateThought,
  createThought,
  deleteThought,
} = require("../../controllers/thoughtController");
//get all Thoughts
//create Thought
router.route('/')
.get(getThoughts)
.post(createThought);
//get thought by id
//update Thought by id
//delete Thought
router.route("/:id")
.get(thoughtById)
.put(updateThought)
.delete(deleteThought);
module.exports = router;
