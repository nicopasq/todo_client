import React, { useEffect, useState } from "react";
import TaskBlock from "./TaskBlock";
import { Container, Typography } from "@mui/joy";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [displayUpdateTask, setDisplayUpdateTask] = useState("none");
  const [taskId, setTaskId] = useState('');
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

  return (
    <Container>
      <Typography level="h1">To-Do App</Typography>
      <CreateTask addNewTask={addNewTask}/>
      <TaskBlock taskList={tasks} toggleUpdateTask={toggleUpdateTask} idToUpdateTask={idToUpdateTask}/>
      <UpdateTask display={displayUpdateTask} toggleUpdateTask={toggleUpdateTask} taskId={taskId}/>
    </Container>
  );
}

export default App;
