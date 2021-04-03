import React, { useState, useEffect } from "react";
import Todos from "../TodoList";
import "./form_input.css";
import { db } from "../../firebase";
import firebase from "firebase";

const FormInput = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addData = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      completed: false,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  const getTodos = () => {
    db.collection("todos")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        let tempTodos = [];
        tempTodos = snapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data(),
        }));
        setTodos(tempTodos);
      });

    //////// async await version so slow
    // let todosCollection = db.collection("todos");
    // let allTodos = await todosCollection.get();
    // let tempTodos = [];

    // tempTodos = allTodos.docs.map((doc) => ({
    //   id: doc.id,
    //   todo: doc.data(),
    // }));
    // setTodos(tempTodos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div className="todo__input wrap">
        <form onSubmit={addData}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter todo for the day"
          />
          <button className="todo__btn">Add</button>
        </form>
      </div>
      <ul className="todo__list wrap">
        {todos.map(({ id, todo }) => (
          <Todos key={id} id={id} todoItem={todo} />
        ))}
      </ul>
    </>
  );
};

export default FormInput;
