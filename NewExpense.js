import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'


function NewExpense(props) {
    function SaveExpenseDataHandler(EnteredExpenseData) {//geting data from ExpenseForm(child)
        const expense = {
            ...EnteredExpenseData
        }
        props.onAddExpense(expense)//passing data to app
        console.log(expense)
    }


    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>

}

export default NewExpense