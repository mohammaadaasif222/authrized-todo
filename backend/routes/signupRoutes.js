const express = require("express");
const signUpRouter = express.Router();
const Users = require("../Users");

signUpRouter.post("/addUser", (req, res) => {
  if(Users.find((item)=>item.email === req.body.email)){
    return res.status(422).send({ error: "This email alredy used" });
  }else{
    const data = req.body;
    Users.push(data);
    res.status(201).send({ messege: "Sign Up successfull" });
    res.send({ Users: Users });
  }
 
});
signUpRouter.get("/allUsers", (req, res) => {
  res.send({ Users: Users });
});

module.exports = signUpRouter;
