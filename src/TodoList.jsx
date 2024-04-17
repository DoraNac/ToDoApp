import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onAddTodo,
  onDeleteTodo,
  onToggleTodo,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: inputValue,
        done: false,
      };
      onAddTodo(newTodo);
      setInputValue("");
    }
  };

  return (
    <div className="main">
      <h1 className="appTitle">Todo App</h1>
      <div className="inputButtonContainer">
        <input
          type="text"
          placeholder="Enter a new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
            onDelete={() => onDeleteTodo(todo.id)}
            onToggle={() => onToggleTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}
