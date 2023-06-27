import React, { useEffect, useState } from "react";
import TaskBlock from "./TaskBlock";
import { Container, Typography } from "@mui/joy";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterByCat, setFilterByCat] = useState([]);
  const [displayUpdateTask, setDisplayUpdateTask] = useState("none");
  const [taskId, setTaskId] = useState('');
  const allCategories = tasks.map(task => task.category.split("\n")[0].toLowerCase());
  const uniqueCategories = [...new Set(allCategories)];

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((resp) => resp.json())
      .then((data) => setTasks(data));
  }, []);

  function addNewTask(newTask){
    setTasks(tasks => [...tasks, newTask])
  }

  function toggleUpdateTask(taskID){
    if(displayUpdateTask ==="none"){
      setDisplayUpdateTask("block")
    } else if (displayUpdateTask ==="block"){
      setDisplayUpdateTask("none")
    }
    setTaskId(taskID);
  }
console.log("TASKID:",taskId)

  function updateTaskList(newTask){
    const updatedTasks = tasks.map(task => task.id === newTask.id ? task = newTask : task);
    setTasks(updatedTasks);

    const updatedFilter = filterByCat.filter(task => task.category !== newTask.category && task.id !== newTask.id)
    setFilterByCat(updatedFilter)
  }

  function removeFromTaskList(id){
    const updatedTasks = tasks.filter(task => task.id !== id)
    const updatedFilter = filterByCat.filter(category => category.id !== id)
    setFilterByCat(updatedFilter)
    setTasks(updatedTasks)
  }

  function filterTasks(category){
    const filteredTasks = tasks.filter(task => task.category.toLowerCase() === category.toLowerCase());
    return category === "Select Category" ? setFilterByCat([]) : setFilterByCat(filteredTasks);
  }

  const displayTasks = filterByCat.length > 0 ? filterByCat : tasks;
  return (
    <Container>
      <Typography level="h1">To-Do App</Typography>
      <CreateTask categories={uniqueCategories} addNewTask={addNewTask} filterTasks={filterTasks} />
      <TaskBlock taskList={displayTasks} toggleUpdateTask={toggleUpdateTask} removeFromTaskList={removeFromTaskList}/>
      <UpdateTask display={displayUpdateTask} toggleUpdateTask={toggleUpdateTask} taskId={taskId} updateTaskList={updateTaskList}/>
    </Container>
  );
}

export default App;
