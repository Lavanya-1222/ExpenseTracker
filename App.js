import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
function App()
{
    const Initial_expense=[
    {
        id:'e1',
 date:new Date(2021,2,23),
 title:'Cloth',
amount:500
     },
    {
    id:'e2',
date:new Date(2020,2,23),
title:'papers',
amount:500
}
];

const [expense,setExpense]=useState(Initial_expense)
function AddExpense(entereddata){//geting data from NewExpense.js
const updatedexpense=[entereddata,...Initial_expense]
setExpense(updatedexpense)//combining initial expense and entered expense and updating passing to Expense.js
}

return <div>
<NewExpense onAddExpense={AddExpense}></NewExpense>

<Expenses expense={expense}></Expenses>
</div>
}
export default App