import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos((todos) => [...todos, task]);
  };

  const removeTodo = (taskToRemove) => {
    setTodos((todos) => todos.filter((task) => task !== taskToRemove));
  };

  return (
    <div>
      <NewTodoForm createTodo={addTodo} />
      {todos.map((task, index) => (
        <Todo key={index} task={task} removeTodo={() => removeTodo(task)} />
      ))}
    </div>
  );
}

export default TodoList;
