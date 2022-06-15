import BudgetRightPanel from "./BudgetRightPannel";
import BudgetLeftPanel from "./BudgetLeftPannel"
import {useState, useEffect} from 'react'

const Budget = ({budgets, accountHeads, addBudget,updateBudget, deleteBudget}) => {
  const [selectedBudget,setSelectedBudget] = useState('')  
  
 
  
  const selectBudget =(id)=>{
    const budget = budgets.filter((budget)=>budget.budgetId=== id)[0]
    setSelectedBudget(budget)
  }
  return (
    <div className="container">
      <BudgetLeftPanel accountHeads={accountHeads} addBudget={addBudget} updateBudget={updateBudget} deleteBudget={deleteBudget} selectedBudget ={selectedBudget}/>
      <BudgetRightPanel budgets={budgets} accountHeads = {accountHeads} selectBudget={selectBudget} />
    </div>
  );
};
export default Budget;