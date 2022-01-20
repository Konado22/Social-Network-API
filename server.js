const express = require("express");
const PORT =process.env.PORT || 3001;
const db = require("./config/connection");
const routes = require("./routes");
const app = require('express').Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
db.once('open', () => {
  app.use(PORT, () => {
      console.log(`API server running on port ${PORT}! :) `);
  });
});