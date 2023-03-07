import { useState } from 'react';
const TaskField = ({addTaskToArray}) => {
  const [task, setTask] = useState('');

  const changeTask = (e) => setTask(e.target.value);

  const submitTask = (e) => {
    e.preventDefault();
    if (task.length) {
      addTaskToArray(task);
    } else {
      alert('Please input a task.');
    }
  };

  return (
    <div>
      <form onSubmit={submitTask} className="form-control">
        <label>Task</label>
        <input value={task} onChange={changeTask} />
        <button className="btn btn-block">Save Task</button>
      </form>
    </div>
  );
};

export default TaskField;
