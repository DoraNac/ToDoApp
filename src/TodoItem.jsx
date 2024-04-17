import React from "react";

function TodoItem({ id, text, done, onToggle, onDelete }) {
  const handleToggle = () => {
    onToggle(id);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={done}
        onChange={handleToggle}
      />
      <span className="todo-text">{text}</span>
      <div className="deleteButtonDiv">
        <button className="deleteButton" onClick={() => onDelete(id)}>
          Delete
        </button>{" "}
      </div>
    </li>
  );
}

export default TodoItem;
