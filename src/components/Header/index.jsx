import React from "react";
import "./header.css";

const Header = () => {
  const curretDate = (option) => {
    const date = new Date();
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    switch (option) {
      case "day":
        return date.toLocaleString("default", { weekday: "long" });

      case "fullDate":
        return date.toLocaleString("default", options);
    }
  };
  return (
    <header className="todo__header">
      <div className="overflow">
        <h1>
          <span>{curretDate("day")} </span>Todo's
        </h1>
        <span>{curretDate("fullDate")}</span>
      </div>
    </header>
  );
};

export default Header;
