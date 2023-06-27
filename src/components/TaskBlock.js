// Rectangular block that will display the tasks
// Each task will be able to be completed or deleted
// Each tasks will be editable
// Tasks come from fetch request to API
import React from "react";
import "../styles/taskBlock.css";
import Task from "./Task";

function TaskBlock({ taskList, toggleUpdateTask, idToUpdateTask, removeFromTaskList }) {
  const tasks = taskList.map((task) => <Task key={task.id} task={task} toggleUpdateTask={toggleUpdateTask} idToUpdateTask={idToUpdateTask} removeFromTaskList={removeFromTaskList}/>);
  return (
    <div id="taskBlock">
      <ul style={{ listStyleType: "none" }}>{tasks}</ul>
    </div>
  );
}

export default TaskBlock;
