import React from "react";
import { Button, Checkbox, Grid, Typography } from "@mui/joy";
import "../styles/taskBlock.css";

function Task ({task, id}){
    return (
    <li key={id} className="task">
      <Grid
        id="gridContainer"
        container
        spacing={4}
        sx={{ flexGrow: 1, width: "100%" }}
      >
        <Grid xs={4}>
          <Typography color="warning" id="desc" level="h2">
            {task.description}
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Typography color="info" id="category" level="h2">
            {task.category}
          </Typography>
        </Grid>
        <Grid xs={2}>
          <div style={{ float: "right", marginLeft: "46px" }}>
            <Checkbox id="checkBox" checked={task.completed} />
            <Button variant="plain" sx={{ margin: "10px", top: "-0.5vh" }}>
              Delete
            </Button>
          </div>
        </Grid>
      </Grid>
    </li>
    );
}

export default Task;