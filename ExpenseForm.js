import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [Enteredtitle, setNewTitle] = useState('')
    const [Enteredamount, setNewamount] = useState('')
    const [Entereddate, setNewdate] = useState('')



    function titleChangeHandler(event) {
        setNewTitle(event.target.value)
    }



    function amountChangeHandler(event) {
        setNewamount(event.target.value)
    }


    function dateChangeHandler(event) {
        setNewdate(event.target.value)
    }

    let expense = {
        title: Enteredtitle,
        amount: Enteredamount,
        date: new Date(Entereddate),
    }

    function submitHandler(event) {

        event.preventDefault();//prevent from refresh
        setNewTitle('')//set clear after submiting
        setNewamount('')
        setNewdate('')

        props.onSaveExpenseData(expense)

    }



    return <form onSubmit={submitHandler}>
        <div className="Form-details">
            <label>Title</label>
            <input type='text' value={Enteredtitle} onChange={titleChangeHandler}></input>
            <label>Amount</label>
            <input type='nummber' value={Enteredamount} onChange={amountChangeHandler}></input>
            <br></br>
            <label>Date</label>
            <input type='date' value={Entereddate} onChange={dateChangeHandler}></input>
            <button type='submit' className='Button' >Add Expense</button>
            <label>Year</label>
        </div>
    </form>

}

export default ExpenseForm