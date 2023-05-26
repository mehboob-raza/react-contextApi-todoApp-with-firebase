import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
  const { addTodo } = useContext(TodoContext);
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput.trim() !== "") {
      addTodo({
        title: todoInput,
      });
      setTodoInput("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        width: "100%",
      }}
    >
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList />
    </div>
  );
};

export default App;
