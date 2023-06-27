import { Option, Select } from "@mui/joy";
import React from "react";

function SearchCategories({categories, filterTasks}){

    function handleClick(e){
        const categoryName = e.target.innerText;
        filterTasks(categoryName);
    }

    const categoryList = categories.map((category, id) => (
        <Option 
        key={id} 
        value={category}
        onClick={handleClick}
        >
            {category}
        </Option>
    ));
    categoryList.unshift(<Option onClick={handleClick} value="Select Category" key={':r1:'}>Select Category</Option>)  

    return (
        <Select placeholder="Search Categories" sx={{width:"10vw", right:"3vw"}}>
            {categoryList}
        </Select>
    )
}

export default SearchCategories;