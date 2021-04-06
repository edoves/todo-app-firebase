import React from "react";
import "./todos.css";
import { db } from "../../firebase";
const Todos = ({ todoItem, id }) => {
  const { todo } = todoItem;

  console.log(id);

  const handleDeleteTodo = () => {
    db.collection("todos").doc(id).delete();
  };

  return (
    <li className="bounceIn">
      <span className="text">{todo}</span>
      <div className="options">
        <span>
          <i className="fa fa-check"></i>
        </span>
        <span>
          <i className="fa fa-edit"></i>
        </span>
        <span onClick={handleDeleteTodo}>
          <i className="fa fa-trash"></i>
        </span>
      </div>
    </li>
  );
};

export default Todos;
