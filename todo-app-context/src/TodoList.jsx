import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { todos, deleteTodo } = useContext(TodoContext);

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid gray",
      }}
    >
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            border: "1px solid gray",
            alignItems: "center",
            listStyleType: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {todo.title}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
