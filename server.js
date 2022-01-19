const express = require("express");
const PORT =process.env.PORT || 3001;
const db = require("./config/connection");
const routes = require("./routes");
const app = require(express());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
