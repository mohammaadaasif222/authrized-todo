import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import "./todo.css";

const Todo = (props) => {
  const [complete, setCompelete] = useState(false);

  const makeCompelete = () => {
    if(!complete){
    setCompelete(true)
    }else{
      setCompelete(false)
    }
  };
  return (
    <>
      <div className="col-md-3 m-2 border todo-card bg-light">
        <ImCross
          title="Delete"
          className="icon-style"
          onClick={() => {
            props.onSelect(props.id);
          }}
          onChange={() => {
            props.onChange(props.id);
          }}
        />
        <div className= {complete? "content complete" : "content "}>{props.text}</div>  <span>
        <button className={complete? "btn btn-primary" : "btn btn-warning"} onClick={()=>makeCompelete()}>
        {complete? "completed" : "incomplete"}
        </button>
      </span>
        <span className="date-style text-muted">{props.date}</span>
      </div>
    
    </>
  );
};
export default Todo;
