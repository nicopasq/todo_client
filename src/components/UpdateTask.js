import { Button, Grid, Textarea, Typography } from "@mui/joy";
import React from "react";
import '../styles/updateTask.css'

function UpdateTask({task}){
return (
    <div id="updateTaskBg">
    <form id="updateTaskForm">
    <Typography id="updatingCurrentTask" level="h5" variant="solid">Updating "Some Task"</Typography>
        <Grid id="updateTaskGrid" container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={8}>
            <Textarea
            className="updateTaskInput"
            placeholder="New description of Task"
            // onChange={e => handleChange(e)}
            // value={description}
            // name="description"
            />
          </Grid>
          <Grid xs={8}>
            <Textarea
            className="updateTaskInput"
            placeholder="Category" 
            // onChange={e => handleChange(e)}
            // value={category}
            // name="category"
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