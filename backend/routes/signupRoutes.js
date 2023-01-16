const express = require("express");
const signUpRouter = express.Router();
const Users = require('../Users')


signUpRouter.post("/addUser", (req, res) => {
  const data = req.body;
  Users.push(data);
  res.send({ Users: Users });
});
signUpRouter.get("/allUsers", (req, res) => {
  res.send({ Users: Users });
});


module.exports = signUpRouter;
