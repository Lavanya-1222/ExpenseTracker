import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from "./ExpenseFilter"
import './Expenses.css'
import { useState } from "react"
function Expenses(props) {
    const[selectyear,setselectedyear]=useState('')

    function saveselectYear(selectedyear) {
        setselectedyear(selectedyear)
        console.log(selectedyear)
    }
    const FilterExpense=props.expense.filter(expenseEach=>{
        return expenseEach.date.getFullYear().toString()===selectyear;})

    return <div className='Expenses'>
        <div className="Container">
            <label className='item'>Year</label>
            <ExpenseFilter className='item1' onSelectYear={saveselectYear} />
        </div>



        {FilterExpense.map((expenseEach) =>(//taking each element from appa expense

            <ExpenseItem date={expenseEach.date}
                title={expenseEach.title}
                amount={expenseEach.amount}>
            </ExpenseItem>))}

    </div>
}
export default Expenses