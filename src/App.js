import React from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="todo">
      <div className="container">
        <Header />
        <FormInput />
      </div>
    </div>
  );
};

export default App;
