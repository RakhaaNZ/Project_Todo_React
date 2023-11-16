import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text) => {
    setTodos([...todos, { text }]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
