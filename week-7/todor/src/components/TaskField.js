import { useState } from "react";
import "./TaskField.css";

export default function TaskField({ addTaskToArray }) {
  const [task, setTask] = useState("");
  const changeTask = (e) => setTask(e.target.value);
  const submitTask = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      addTaskToArray(task);
      setTask("");
    } else {
      alert("Please input a task!");
    }
  };

  return (
    <div>
      <form onSubmit={submitTask} className="TaskField-form_control">
        <label>Task</label>
        <input value={task} onChange={changeTask} />
        <button className="TaskField-btn">Save Task</button>
      </form>
    </div>
  );
}
