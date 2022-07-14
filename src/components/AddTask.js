import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, filterTasks } from "../redux/actions/action";

const AddTask = () => {
  const [Text, setText] = useState("");
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addTask({ id: Math.random(), task: Text, isDone: false }));
    setText("");
  };

  const handleFilter = (e) => {
    dispatch(filterTasks(e.target.value));
  };
  return (
    <div className="add">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={Text}
      />
      <button onClick={add}>add</button>

      <div
        style={{
          width: 500,
          display: "flex",
          justifyContent: "space-around",
          margin: "10px 0",
        }}
      >
        <div>
          <input
            type="radio"
            name="task"
            value="all"
            id="all"
            onClick={handleFilter}
          />
          <label className="form-label" htmlFor="all">
            All
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="completed"
            id="completed"
            onClick={handleFilter}
          />
          <label className="form-label" htmlFor="completed">
            Completed
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="uncompleted"
            id="uncompleted"
            onClick={handleFilter}
          />
          <label className="form-label" htmlFor="uncompleted">
            Uncompleted
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
