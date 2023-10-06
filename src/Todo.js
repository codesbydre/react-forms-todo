import React from "react";

function Todo({ task, removeTodo }) {
  return (
    <div>
      {task}
      <button onClick={removeTodo}>X</button>
    </div>
  );
}

export default Todo;
