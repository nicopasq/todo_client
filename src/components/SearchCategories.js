import { Option, Select } from "@mui/joy";
import React from "react";

function SearchCategories({categories}){
    const categoryList = categories.map((category, id) => (
        <Option key={id} value={category}>{category}</Option>
    ));

    console.log(categoryList)
    return (
        <Select placeholder="Search Categories" sx={{width:"10vw", right:"3vw"}}>
            <Option value="Select Category" id={0}>Select Category</Option>
            {categoryList}
        </Select>
    )
}

export default SearchCategories;