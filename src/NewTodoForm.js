import React, { useState } from "react";

function NewTodoForm({ createTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New Todo:</label>
      <input
        id="task"
        name="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default NewTodoForm;
