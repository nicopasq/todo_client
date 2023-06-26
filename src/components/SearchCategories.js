import { Option, Select } from "@mui/joy";
import React from "react";

function SearchCategories(){
    return (
        <Select placeholder="Search Categories" sx={{width:"10vw", right:"3vw"}}>
            <Option>Opt 1</Option>
        </Select>
    )
}

export default SearchCategories;