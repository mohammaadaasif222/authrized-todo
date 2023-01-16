import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Todo from "../Todo.js";
import "./main.css";

const Main = () => {
  const [font, setFont] = useState("");
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  const loadTodos = async () => {
    try {
      const response = await fetch("http://localhost:9000/alltodos");
      const data = await response.json();
      setAllTodos(data.Todos);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTimeout(() => loadTodos(), 500);
  }, []);

  const handleCard = () => {
    fetch("http://localhost:9000/addtodo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: todo,
        date: new Date().toDateString(),
        isComplete: false,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(JSON.stringify(response)));
    setTodo("");
    setTimeout(() => loadTodos(), 200);
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const deleteItem = (id) => {
    fetch(`http://localhost:9000/alltodos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);
      });
    });
    setTimeout(() => loadTodos(), 300);
  };

  const fontHandler = (e) => {
    setFont(e.target.value);
  };

  return (
    <div className="col-md-12 border p-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 editing-tools">
            <select name="fonts" id="fonts" onChange={fontHandler}>
              <option value="sans-serif">sans-serif</option>
              <option value="Georgia">Georgia</option>
              <option value="cursive">cursive</option>
              <option value="fantasy">fantasy</option>
              <option value="monospace">monospace</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              className="todo-input"
              type="text"
              placeholder="Add a Item "
              value={todo}
              onChange={handleChange}
              maxLength="300"
            ></input>
            <Button
              variant="outline-success"
              className="add-btn"
              onClick={handleCard}
            >
              +
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="row reverse-row justify-content-center"
        style={{ fontFamily: font }}
      >
        <ul>
          {allTodos.map((item, index) => {
            return (
              <Todo
                text={item.todo}
                date={item.date}
                id={item.id}
                key={index}
                onSelect={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Main;
