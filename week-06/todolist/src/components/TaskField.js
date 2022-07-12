import { useState } from "react";
import TaskList from "./TaskList";

function TaskField() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setTask(e.target.value);
  };

  const handleClick = () => {
    taskArray.push(task);
    console.log(taskArray);
    setTaskArray([...taskArray]);
    //other method
    // setTaskArray(taskArray.concat([task]));
    //or
    // setTaskArray([...taskArray, task]);
  };

  const deleteTaskArray = (index) => {
    console.log(index);

    taskArray.splice(index, 1);

    setTaskArray([...taskArray]);
  };

  return (
    <div className="task-field">
      {taskArray.length > 0 ? (
        <h2>You have {taskArray.length} task to do.⭐</h2>
      ) : (
        <h2>Please enter a task😁</h2>
      )}

      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Save your task</button>
      <TaskList showTasks={taskArray} deleteTask={deleteTaskArray} />
    </div>
  );
}

export default TaskField;
