import "./App.css";
import Header from "./components/Header";
import TaskField from "./components/TaskField";
import TaskList from "./components/TaskList";

import { useState } from "react";

export default function App() {
  const [tasksArray, setTasksArray] = useState([]);
  const addTaskToArray = (task) => {
    setTasksArray([...tasksArray, task]);
  };

  const deleteTaskFromArray = (taskToDelete) => {
    setTasksArray(
      tasksArray.filter(function (task) {
        return task !== taskToDelete;
      })
    );
  };

  console.log(tasksArray);

  return (
    <div className="App-container">
      <Header />
      <TaskField addTaskToArray={addTaskToArray} />
      <TaskList deleteTaskFromArray={deleteTaskFromArray} tasksArray={tasksArray} />
    </div>
  );
}
