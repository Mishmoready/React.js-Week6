import React, { useState } from "react";
import "./TaskField.css";

// export default function TaskField({ onAdd }) {
//   const [task, setTask] = useState("");

//   const submitTask = (e) => {
//     e.preventDefault();

//     if (task.length > 0) {
//       onAdd(task);
//       setTask("");
//     } else {
//       alert("Please input a task.");
//     }
//   };

//   return (
//     <div>
//       <form
//         className="task-form__control"
//         onSubmit={(e) => {
//           submitTask(e);
//         }}
//       >
//         <label>Task</label>
//         <input
//           value={task}
//           onChange={(event) => setTask(event.target.value)}
//           placeholder="Add Task"
//         ></input>
//         <button className="btn">Save Task</button>
//       </form>
//     </div>
//   );
// }
export default function TaskField({ addTaskToArray }) {
  const [task, setTask] = useState("");
  const changeTask = (e) => setTask(e.target.value);
  const submitTask = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      addTaskToArray(task);
      setTask("");
    } else {
      alert("Please input a task.");
    }
    console.log(task);
  };
  return (
    <div>
      <form onSubmit={submitTask} className="task-form__control">
        <label>Task</label>
        <input value={task} onChange={changeTask} />
        <button className="btn">Save Task</button>
      </form>
    </div>
  );
}
