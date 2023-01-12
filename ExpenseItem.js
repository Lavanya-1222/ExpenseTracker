import ExpenseDate from "./ExpenseDate"
import React  from 'react'
import './ExpenseItem.css'
function ExpenseItem(props)
{

return <div>
<div className='compo'>

  <div><b>{props.title}</b></div>
  <ExpenseDate date={props.date}></ExpenseDate>
  <div>${props.amount}</div>

</div>
<br/>
</div>

}
export default ExpenseItem