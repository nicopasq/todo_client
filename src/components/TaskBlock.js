// Rectangular block that will display the tasks
// Each task will be able to be completed or deleted
// Each tasks will be editable
// Tasks come from fetch request to API
import React from "react";
import "../styles/taskBlock.css";
import Task from "./Task";

function TaskBlock({ taskList, openUpdateTask }) {
  const tasks = taskList.map((task, id) => <Task key={id} task={task} id={id} openUpdateTask={openUpdateTask}/>);
  return (
    <div id="taskBlock">
      <ul style={{ listStyleType: "none" }}>{tasks}</ul>
    </div>
  );
}

export default TaskBlock;
