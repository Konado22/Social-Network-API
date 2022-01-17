const app = require("express").Router();
const {
  getThoughts,
  thoughtById,
  updateThought,
  createThought,
  deleteThought,
} = require("../../controllers/thoughtController");
//get Thought
app.get("/", getThoughts);
//get thought by id
app.get("/:id", thoughtById);
//update Thought by id
app.put("/:id", updateThought);
//create Thought
app.post("/", createThought);
//delete Thought
app.delete("/", deleteThought);
module.exports = app;
