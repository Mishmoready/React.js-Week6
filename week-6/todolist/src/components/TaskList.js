function TaskList({ showTasks, deleteTask }) {
  return (
    <div>
      {showTasks.map((element, index) => (
        <h3 key={index} className="task">
          {index + 1}. {element}
          <button onClick={() => deleteTask(index)}>❎</button>
        </h3>
      ))}
    </div>
  );
}

export default TaskList;
