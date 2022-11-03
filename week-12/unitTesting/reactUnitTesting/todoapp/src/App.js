import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskField from "./components/TaskField";
import TaskList from "./components/TaskList";
export default function App() {
  const [tasksArray, setTasksArray] = useState([]);
  const addTaskToArray = (task) => {
    setTasksArray([...tasksArray, task]);
  };
  const deleteTaskFromArray = (taskToDelete) => {
    setTasksArray(tasksArray.filter((task) => task !== taskToDelete));
  };

  return (
    <div className="container">
      <Header />
      <TaskField addTaskToArray={addTaskToArray} />
      <TaskList tasksArray={tasksArray} deleteTaskFromArray={deleteTaskFromArray} />
    </div>
  );
}
