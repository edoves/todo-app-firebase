import React from "react";
import "./todos.css";
const Todos = ({ todoItem, id }) => {
  const { todo } = todoItem;

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
        <span>
          <i className="fa fa-trash"></i>
        </span>
      </div>
    </li>
  );
};

export default Todos;
