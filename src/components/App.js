import React from "react";
import TaskBlock from "./TaskBlock";
import { Container, Typography } from "@mui/joy";
import CreateTask from "./CreateTask";

function App (){
    return (
        <Container>
            <Typography level="h1">Tasks</Typography>
            <CreateTask/>
            <TaskBlock taskList={['Tasks will come from API']}/>
        </Container>
    )
}

export default App;