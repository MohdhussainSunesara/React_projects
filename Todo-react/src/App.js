import "./App.css";
import React, { useState } from "react";
import { TodoList } from "./components/TodoList";

const App = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addItems = () => {
    setItems((oldItems) => {
      return [...oldItems, value];
    });
    setValue("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main-div">
      <div className="center-div">
        <h1>ToDo List</h1>
        <input
          type="text"
          placeholder="Add Items"
          value={value}
          onChange={handleChange}
        ></input>
        <button onClick={addItems}>+</button>
        <ol>
          {items.map((itemval, index) => {
            return (
              <TodoList
                text={itemval}
                key={index}
                id={index}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
