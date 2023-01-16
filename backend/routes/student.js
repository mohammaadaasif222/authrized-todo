const express = require("express");

const StudentsRouter = express.Router();

const Students = [{name:"marc",gender:"male"},{name:"khonsu",gender:"male"}]

StudentsRouter.get("/students", (req, res) => {
  res.send({ Students: Students });
});

StudentsRouter.post("/add", (req, res) => {
  const data = req.body
  Students.push(data);
  res.send({ Students: Students });
});

module.exports =StudentsRouter;