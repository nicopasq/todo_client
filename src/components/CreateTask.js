import { Button, Grid, Textarea } from "@mui/joy";
import React, { useState } from "react";
import "../styles/createTask.css";

function CreateTask() {
    const [desc, setDesc] = useState('')
    const [cat, setCat] = useState('')
    function handleSubmit(e){
        e.preventDefault()
    }

  return (
    <div id="createTaskBar">
      <form onSubmit={handleSubmit}>
        <Grid id="gridContainer" container spacing={3} sx={{ flexGrow: 1 }}>
          <Grid xs={4}>
            <Textarea
            className="textInput"
            placeholder="Description of Task"
            onChange={e => setDesc(e.target.value)}
            value={desc}
            />
          </Grid>
          <Grid xs={4}>
            <Textarea
            className="textInput"
            placeholder="Category" 
            onChange={e => setCat(e.target.value)}
            value={cat}
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
