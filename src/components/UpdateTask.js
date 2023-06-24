import { Button, Grid, Textarea, Typography } from "@mui/joy";
import React from "react";
import '../styles/updateTask.css'

function UpdateTask({display, toggleUpdateTask}){
    
    function handleSubmit(e){
        e.preventDefault()
        toggleUpdateTask()
    }

return (
    <div id="updateTaskBg" style={{display:display}}>
    <form id="updateTaskForm" onSubmit={handleSubmit}>
    <Typography id="updatingCurrentTask" level="h5" variant="solid" sx={{height:"4vh"}}>
        Updating "Some Task"
        <Button variant="soft" sx={{float:"right", height:"5px"}}onClick={e => toggleUpdateTask()}>X</Button>
    </Typography>
        <Grid id="updateTaskGrid" container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={8}> 
          <Typography level="h5">New Description</Typography>
            <Textarea
            className="updateTaskInput"
            placeholder="New description of Task"
            value="This task has been updated"
            />
          </Grid>
          <Grid xs={8}>
          <Typography level="h5">Category</Typography>
            <Textarea
            className="updateTaskInput"
            placeholder="Category" 
            value="Updated Task"
            />
          </Grid>
          <Grid xs={8}>
            <Button variant="solid" type="submit">
              Update Task
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
)
}

export default UpdateTask;