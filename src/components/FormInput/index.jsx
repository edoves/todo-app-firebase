import React from "react";
import "./form_input.css";

const FormInput = () => {
  return (
    <div className="todo__input wrap">
      <form>
        <input type="text" placeholder="Enter todo for the day" />
        <button className="todo__btn">Add</button>
      </form>
    </div>
  );
};

export default FormInput;
