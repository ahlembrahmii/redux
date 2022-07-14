import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const listOfTasks = useSelector((state) => state.TaskReducer.todos);
  const filteredTasks = useSelector((state) => state.TaskReducer.filteredTodos);

  if (filteredTasks.length > 0) {
    return (
      <div>
        <div className="todo-list">
          {filteredTasks.map((el, index) => (
            <TaskCard el={el} key={index} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="todo-list">
        {listOfTasks.map((el, index) => (
          <TaskCard el={el} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
