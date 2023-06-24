import React, { useEffect, useState } from "react";
import TaskBlock from "./TaskBlock";
import { Container, Typography } from "@mui/joy";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [displayUpdateTask, setDisplayUpdateTask] = useState("none");
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((resp) => resp.json())
      .then((data) => setTasks(data));
  }, []);

  function addNewTask(newTask){
    setTasks(tasks => [...tasks, newTask])
  }

  function openUpdateTask(){
    setDisplayUpdateTask(!displayUpdateTask)
  }
  return (
    <Container>
      <Typography level="h1">To-Do App</Typography>
      <CreateTask addNewTask={addNewTask}/>
      <TaskBlock taskList={tasks} openUpdateTask={openUpdateTask}/>
      <UpdateTask display={displayUpdateTask}/>
    </Container>
  );
}

export default App;
