import { useState } from "react";
import { v4 } from "uuid";
export function Todo() {
  const [temp, setTemp] = useState("");
  const [todo, setTodo] = useState({});

  const takeTask = (task) => {
    setTemp(task.target.value);
  };

  const addTask = () => {
    setTodo((obj) => ({ ...obj, [v4()]: { task: temp, status: "dispClass" } }));
  };

  const changeClass = (keyVal) => {
    todo[keyVal]["status"] === "dispClass"
      ? setTodo((obj) => ({
          ...obj,
          [keyVal]: { task: todo[keyVal]["task"], status: "dispNone" }
        }))
      : setTodo((obj) => ({
          ...obj,
          [keyVal]: { task: todo[keyVal]["task"], status: "dispClass" }
        }));
  };

  return (
    <div>
      <h1>Ex10: Todo List</h1>
      <label htmlFor="">Enter Task </label>
      <input onChange={takeTask} type="text" />
      <button onClick={() => addTask(temp)}>Add Task</button>
      <div className="myTasks">
        <h4>Your Tasks</h4>
        {Object.keys(todo).map((key) => (
          <p
            className={todo[key]["status"]}
            key={key}
            onClick={() => changeClass(key)}
          >
            {todo[key]["task"]}
          </p>
        ))}
      </div>
    </div>
  );
}
