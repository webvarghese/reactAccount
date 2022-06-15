
import { useEffect, useState } from "react";
import MultiOptionInput from "../MultiOptionInput"
const AddBudget = ({accountHeads, addBudget,updateBudget, deleteBudget, selectedBudget}) => {
  const [budgetId, setBudgetId] = useState("");
  
  const [accountHeadId, setAccountHeadId] = useState("")
  const [accountHeadName, setAccountHeadName] = useState("")
  const [budgetAmount, setBudgetAmount] = useState("");
  const [accountHeadList, setAccountHeadList] = useState([])

  const clearBudget =()=>{
    setBudgetId("")
    setBudgetAmount("")
    setAccountHeadId("")
    setAccountHeadName("")
  }

  useEffect(()=>{
    clearBudget()
    showBudget(selectedBudget)
  },[selectedBudget])
  
 useEffect(()=>{
  setAccountHeadList(accountHeads.map((accountHead)=>{
      const objAccountHead = {}
      objAccountHead.idField = accountHead.accountHeadId
      objAccountHead.textField = accountHead.accountHeadName
      return objAccountHead
    }))
  },[accountHeads])

  const displayAccountHead = (str)=>{
    setAccountHeadName(str)
  }
  const fillAccountHead = (accountHead)=>{
    setAccountHeadId(accountHead.idField)
    setAccountHeadName(accountHead.textField)
  }
  

  const showBudget=(budget)=>{
    if(budget.budgetId > 0){
      setBudgetId(budget.budgetId)
      setBudgetAmount(budget.budgetAmount)
      if(budget.accountHeadId > 0){
        setAccountHeadId(budget.accountHeadId)
      const accountHeadName = accountHeads.filter((accountHead)=>accountHead.accountHeadId === budget.accountHeadId)[0].accountHeadName
        setAccountHeadName(accountHeadName)
      }
    }
  }
  return (
    <>
      <div className="add-form">
        <div className="form-control">
          <label>Budget Id</label>
          <input
            type="text"
            readOnly={true}
            placeholder="Budget Id"
            value={budgetId}
            onChange={(e) => setBudgetId(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Account Head</label>
          <MultiOptionInput promptList ={accountHeadList} 
          textField={accountHeadName} 
          idField={accountHeadId} 
          fillText = {fillAccountHead}
          displayText={displayAccountHead}
          />
        </div>
        <div className="form-control">
          <label>Budget Amount</label>
          <input
            type="text"
            placeholder="Budget Amount"
            value={budgetAmount}
            onChange={(e) => setBudgetAmount(e.target.value)} 
          />
        </div>
        <div className="button-block">
            <button className="btn-add" onClick={()=>addBudget({accountHeadId,budgetAmount})}>Add</button>
            <button className="btn-update" onClick={()=>updateBudget({budgetId,accountHeadId,budgetAmount})}>Update</button>
            <button className="btn-clear" onClick={clearBudget}>Clear</button>
            <button className="btn-delete" onClick={()=>deleteBudget(budgetId)}>Delete</button>
        </div>
        
      </div>
    </>
  );
};
export default AddBudget;