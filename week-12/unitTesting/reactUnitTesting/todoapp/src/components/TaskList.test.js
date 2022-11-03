import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

describe("TaskList component", () => {
  test("renders a new list of tasks passed into it via props", () => {
    const tasks = ["task1", "Another task", "a third task"];
    render(<TaskList tasksArray={tasks} />);
    const listOfTasks = screen.getAllByRole("heading");
    listOfTasks.forEach((task, index) => {
      expect(task.textContent).toContain(tasks[index]);
    });
  });
});
