import React, { useEffect, useState } from "react";
import TaskBlock from "./TaskBlock";
import { Container, Typography } from "@mui/joy";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [displayUpdateTask, setDisplayUpdateTask] = useState("none");
  const [taskId, setTaskId] = useState('');
  const allCategories = tasks.map(task => task.category.split("\n")[0]);
  const uniqueCategories = [...new Set(allCategories)];

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((resp) => resp.json())
      .then((data) => setTasks(data));
  }, []);

  function addNewTask(newTask){
    setTasks(tasks => [...tasks, newTask])
  }

  function toggleUpdateTask(){
    if(displayUpdateTask ==="none"){
      setDisplayUpdateTask("block")
    } else if (displayUpdateTask ==="block"){
      setDisplayUpdateTask("none")
    }
  }

  function idToUpdateTask(id){
    setTaskId(id + 1)
  }

  function updateTaskList(newTask){
    const updatedTasks = tasks.map(task => task.id === newTask.id ? task = newTask : task)
    setTasks(updatedTasks)
  }

  function removeFromTaskList(id){
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }

  return (
    <Container>
      <Typography level="h1">To-Do App</Typography>
      <CreateTask categories={uniqueCategories} addNewTask={addNewTask}/>
      <TaskBlock taskList={tasks} toggleUpdateTask={toggleUpdateTask} idToUpdateTask={idToUpdateTask} removeFromTaskList={removeFromTaskList}/>
      <UpdateTask display={displayUpdateTask} toggleUpdateTask={toggleUpdateTask} taskId={taskId} updateTaskList={updateTaskList}/>
    </Container>
  );
}

export default App;
