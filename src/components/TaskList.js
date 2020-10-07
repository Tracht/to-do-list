import React, { useState } from "react";

import TaskInput from "./TaskInput";
import Task from "./Task";

export default () => {
  const [tasks, setTasks] = useState([
    { text: "Eat something", complete: true },
    { text: "Write a blog post about birds", complete: false }
  ]);

  return (
    <div className="App">
      <TaskInput
        onSubmit={(text) => setTasks([{ text, complete: false }, ...tasks])}
      />

      <h2>Things to do</h2>
      <ul class="task__list">
        {tasks.map((task) => (
          <Task {...task} />
        ))}
      </ul>
      <hr />

      <button class="btn btn-sm btn-dark">
        Delete all tasks
      </button>
    </div>
  );
};
