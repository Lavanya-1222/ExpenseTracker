import React,{useState} from "react";

const ExpenseFilter=(props)=>
{const [selected,setYear]=useState(2021)

    function dropdownChangeHandler(event){
setYear(event.target.value)
}
props.onSelectYear(selected)
return <div>
    <select value={selected} onChange={dropdownChangeHandler}>
        <option>2021</option>
        <option>2020</option>
        <option>2022</option>
        <option>2023</option>
    </select>
</div>

}
export default ExpenseFilter