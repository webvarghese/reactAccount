

import { useState, useEffect, useCallback } from "react";
import BudgetTab from "./BudgetTab";
import BudgetTable from "./BudgetTable";

function BudgetRightPanel({ budgets, accountHeads, selectBudget}) {
  const [list, setList] = useState([]);
 const [filteredList, setFilteredList] = useState([])
  
  useEffect(() => {
    const combinedList = budgets.map((budget)=>{
      const objBudget = {}
      objBudget.budgetId = budget.budgetId
      objBudget.budgetAmount = budget.budgetAmount
      if(budget.accountHeadId > 0){
        objBudget.accountHeadId = budget.accountHeadId
        const accountHeadName = accountHeads.filter((accountHead)=>accountHead.accountHeadId === budget.accountHeadId)[0].accountHeadName
        objBudget.accountHeadName = accountHeadName
      }
      return objBudget
    })
    console.log(budgets)
    setList(combinedList);
    setFilteredList(combinedList)
  }, [budgets]);

  const filterList = (str) => {
    console.log(list)
    if (str.length > 0) {
      setFilteredList(
        list.filter(
          (data) =>
            JSON.stringify(data).toLowerCase().indexOf(str.toLowerCase()) !== -1
        )
      );
    } else {
      setFilteredList(list);
    }
  };
 
  return (
    <div className="right-panel">
      <BudgetTab filterList={filterList}  />
      <BudgetTable list={filteredList} selectBudget={selectBudget}/>
    </div>
  );
}

export default BudgetRightPanel;