
import AddReciept from "./AddReciept";
import AddPayment from "./AddPayment"
import { useState, useEffect} from "react";

import TransactionLeftTab from "./TransactionLeftTab";

function TransactionLeftPanel({accountHeads, user, persons, items ,addTransaction, updateTransaction, deleteTransaction, selectedTransaction,clearFields}) {
  
  const [showHeading, setShowHeading] = useState(false)

  useEffect(()=>{
    if(selectedTransaction.transactionId > 0){
      console.log(selectedTransaction)
      const selectedItem = items.filter((item)=>item.transactionId === selectedTransaction.transactionId)[0]
      console.log(selectedItem)
      const selectedAccountHead = accountHeads.filter((accountHead)=>accountHead.accountHeadId === selectedItem.accountHeadId)[0]
      if(selectedAccountHead.accountTypeId === 1){
        setShowHeading(true)
      } else {
        setShowHeading(false)
      }
    }
  },[selectedTransaction])

  const toggleHeading =(e)=>{
    clearFields()
    if(e.target.textContent==='Reciept'){
      setShowHeading(false)
    } else if(e.target.textContent==='Payment'){
      setShowHeading(true)
    }
  }
  return (
    <div className="left-panel">
      <TransactionLeftTab toggleHeading= {toggleHeading} showHeading={showHeading} clearFields ={clearFields} />

        {showHeading ?
        <AddReciept addTransaction={addTransaction} 
        updateTransaction={updateTransaction} 
        deleteTransaction={deleteTransaction} user={user}
        items ={items} accountHeads = {accountHeads} persons ={persons} selectedTransaction = {selectedTransaction} clearFields ={clearFields} />
        :
        <AddPayment addTransaction={addTransaction} 
        updateTransaction={updateTransaction} 
        deleteTransaction={deleteTransaction} user ={user}
        items ={items} accountHeads = {accountHeads} persons ={persons} selectedTransaction = {selectedTransaction}  clearFields ={clearFields}/>
        }
  
    </div>
  );
}

export default TransactionLeftPanel;