import { Button, Grid, Textarea } from "@mui/joy";
import React from "react";
import '../styles/createTask.css'

function CreateTask(){
    return (
        <div id="createTaskBar">
            <form>

            <Grid id="gridContainer" container spacing={3} sx={{flexGrow: 1}}>
                <Grid xs={4}>
                    <Textarea placeholder="Description of Task" sx={{bgcolor:"#DBC950"}}/>
                </Grid>

                <Grid xs={4}>
                    <Textarea placeholder="Category" sx={{bgcolor:"#DBC950"}}/>
                </Grid>

                <Grid xs={4}>
                    <Button variant="solid" type="submit">Add Task</Button>
                </Grid>
            
            </Grid>

            </form>
        </div>
    )
}

export default CreateTask;