// import Header from './SAME_FOLDER_FILES' - 0 levels up
// import Header from '../ONE_LEVEL_UP_FOLDER_FILES'
// import Header from '../ONE_LEVEL_UP_FOLDER/FILE.js'
// import Header from '../../TWO_LEVEL_UP_FOLDER_FILES'

import { useState } from 'react';

import Header from './components/Header';
import TaskField from './components/TaskField';
import TaskList from './components/TaskList';

import './App.css';

const App = () => {
  const [tasksArray, setTasksArray] = useState([]);

  const addTaskToArray = (task) => {
    console.log(task);
    setTasksArray([...tasksArray, task]);
  };

  const deleteTaskFromArray = (taskToDelete) => {
    // This has a bug => Tasks with the same names will be deleted
    setTasksArray(tasksArray.filter((task) => task !== taskToDelete));
  };

  return (
    <div className="container">
      <Header></Header>
      <TaskField addTaskToArray={addTaskToArray}></TaskField>
      <TaskList
        tasksArray={tasksArray}
        deleteTaskFromArray={deleteTaskFromArray}
      ></TaskList>
    </div>
  );
};

export default App;
