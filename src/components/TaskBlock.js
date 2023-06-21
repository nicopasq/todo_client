// Rectangular block that will display the tasks
// Each task will be able to be completed or deleted
// Each tasks will be editable 
// Tasks come from fetch request to API
import { Sheet } from "@mui/joy";
import React from "react";

function TaskBlock({taskList}){
    const tasks = taskList.map(task => task)
    return (
        <Sheet color="primary" variant="soft">

        </Sheet>
        )
    }
    
    export default TaskBlock;