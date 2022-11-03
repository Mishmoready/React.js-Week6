import React from "react";
import "./TaskList.css";

export default function TaskList({ tasksArray, deleteTaskFromArray }) {
  return (
    <div>
      {tasksArray.map((task, index) => (
        <h3 key={index} className="task">
          {index + 1}. {task}
          <button onClick={() => deleteTaskFromArray(task)} className="delete-icon">
            x
          </button>
        </h3>
      ))}
    </div>
  );
}
