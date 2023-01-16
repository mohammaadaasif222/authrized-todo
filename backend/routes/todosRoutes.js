const express = require("express");


const todosRouter = express.Router();

const Todos = []

todosRouter.get("/alltodos", (req, res) => {
  res.send({ Todos: Todos });
});

todosRouter.post("/addTodo", (req, res) => {
  const data = {
    id:Todos.length+1,
    todo:req.body.todo,
    date:req.body.date
  }
  Todos.push(data);
 
  res.send({ Todos: Todos });
});

todosRouter.delete('/alltodos/:id',(req,res)=>{
  Todos.pop(req.params.id)
  res.send({Todos:Todos})
})

module.exports =todosRouter;