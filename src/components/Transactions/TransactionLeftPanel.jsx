
import AddReciept from "./AddReciept";
import AddPayment from "./AddPayment"
import { useState} from "react";

import TransactionLeftTab from "./TransactionLeftTab";

function TransactionLeftPanel({accountHeads, user, persons, items ,addTransaction, updateTransaction, deleteTransaction, selectedTransaction}) {
  
  const [showHeading, setShowHeading] = useState(false)
  const toggleHeading =(e)=>{
    if(e.target.textContent==='Reciept'){
      setShowHeading(false)
    } else if(e.target.textContent==='Payment'){
      setShowHeading(true)
    }
  }
  return (
    <div className="left-panel">
      <TransactionLeftTab toggleHeading= {toggleHeading} showHeading={showHeading} />

        {showHeading ?
        <AddReciept addTransaction={addTransaction} 
        updateTransaction={updateTransaction} 
        deleteTransaction={deleteTransaction} user={user}
        items ={items} accountHeads = {accountHeads} persons ={persons} selectedTransaction = {selectedTransaction} />
        :
        <AddPayment addTransaction={addTransaction} 
        updateTransaction={updateTransaction} 
        deleteTransaction={deleteTransaction} user ={user}
        items ={items} accountHeads = {accountHeads} persons ={persons} selectedTransaction = {selectedTransaction} />
        }
  
    </div>
  );
}

export default TransactionLeftPanel;