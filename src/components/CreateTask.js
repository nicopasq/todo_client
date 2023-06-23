import { Button, Grid, Textarea } from "@mui/joy";
import React, { useState } from "react";
import "../styles/createTask.css";

function CreateTask() {
    const [newTask, setNewTask] = useState({
        description:'',
        category:'',
        completed:false
    })
    const {category, description} = newTask

    function handleSubmit(e){
        e.preventDefault()
        console.log(newTask)
    }

    function handleChange(e){
        setNewTask({...newTask, [e.target.name]: e.target.value})
    }

  return (
    <div id="createTaskBar">
      <form onSubmit={handleSubmit}>
        <Grid id="gridContainer" container spacing={3} sx={{ flexGrow: 1 }}>
          <Grid xs={4}>
            <Textarea
            className="textInput"
            placeholder="Description of Task"
            onChange={e => handleChange(e)}
            value={description}
            name="description"
            />
          </Grid>
          <Grid xs={4}>
            <Textarea
            className="textInput"
            placeholder="Category" 
            onChange={e => handleChange(e)}
            value={category}
            name="category"
            />
          </Grid>
          <Grid xs={4}>
            <Button variant="solid" type="submit">
              Add Task
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default CreateTask;
