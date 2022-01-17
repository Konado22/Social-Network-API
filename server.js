const express = require('express');
const PORT = 3001;
const db = require("./config/connection");
const app = require(express());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})