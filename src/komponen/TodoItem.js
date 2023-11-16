import React from "react";

const TodoItem = ({ index, todo, deleteTodo }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
