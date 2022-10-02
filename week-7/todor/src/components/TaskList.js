import "./TaskList.css";

export default function TaskList({ tasksArray, deleteTaskFromArray }) {
  return (
    <div>
      {tasksArray.map(function (task, index) {
        return (
          <h3 key={index} className="TaskList-task">
            {index + 1}. {task}{" "}
            <button className="TaskList-delete_icon" onClick={() => deleteTaskFromArray(task)}>
              x
            </button>
          </h3>
        );
      })}
    </div>
  );
}
