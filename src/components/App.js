import React from "react";
import TaskBlock from "./TaskBlock";
import { Container } from "@mui/joy";

function App (){
    return (
        <Container>
            <h2>Hello World</h2>
            <TaskBlock taskList={['Tasks will come from API']}/>
        </Container>
    )
}

export default App;