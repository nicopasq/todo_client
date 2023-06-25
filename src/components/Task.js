import React from "react";
import { Button, Checkbox, Grid, Typography } from "@mui/joy";
import "../styles/taskBlock.css";

function Task ({task, id, toggleUpdateTask, idToUpdateTask}){

  function deleteTask(id){
    fetch(`http://localhost:3000/tasks/${id}`, {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
  }

    return (
    <li key={id} className="task">
      <Grid
        id="gridContainer"
        container
        spacing={4}
        sx={{ flexGrow: 1, width: "100%" }}
      >
        <Grid onClick={e => [toggleUpdateTask(), idToUpdateTask(id)]}  xs={4}>
          <Typography color="warning" className="taskData" level="h2">
            {task.description}
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Typography onClick={e => [toggleUpdateTask(), idToUpdateTask(id)]} sx={{borderRight:"1px solid grey", height:"100%"}} color="info" className="taskData" level="h2">
            {task.category}
          </Typography>
        </Grid>
        <Grid xs={2}>
          <div style={{ float: "right", marginLeft: "46px" }}>
            <Button onClick={e => deleteTask(task.id)} variant="solid" sx={{ margin: "10px", top: "-0.5vh" }} className="taskData">
                Complete Task!
            </Button>
          </div>
        </Grid>
      </Grid>
    </li>
    );
}

export default Task;