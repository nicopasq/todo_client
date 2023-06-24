import { Button, Grid, Textarea } from "@mui/joy";
import React from "react";
import '../styles/updateTask.css'

function UpdateTask({task}){
return (
    <form >
        <Grid id="gridContainer" container spacing={3} sx={{ flexGrow: 1 }}>
          <Grid xs={4}>
            <Textarea
            className="updateTaskInput"
            placeholder="New description of Task"
            // onChange={e => handleChange(e)}
            // value={description}
            // name="description"
            />
          </Grid>
          <Grid xs={4}>
            <Textarea
            className="updateTaskInput"
            placeholder="Category" 
            // onChange={e => handleChange(e)}
            // value={category}
            // name="category"
            />
          </Grid>
          <Grid xs={4}>
            <Button variant="solid" type="submit">
              Add Task
            </Button>
          </Grid>
        </Grid>
      </form>
)
}

export default UpdateTask;