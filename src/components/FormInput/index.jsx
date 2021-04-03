import React from "react";
import Todos from "../TodoList";
import "./form_input.css";

const FormInput = () => {
  return (
    <>
      <div className="todo__input wrap">
        <form>
          <input type="text" placeholder="Enter todo for the day" />
          <button className="todo__btn">Add</button>
        </form>
      </div>
      <ul class="todo__list wrap">
        <Todos />
      </ul>
    </>
  );
};

export default FormInput;
