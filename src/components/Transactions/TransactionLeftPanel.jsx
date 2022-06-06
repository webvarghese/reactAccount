
import AddReciept from "./AddReciept";
import AddPayment from "./AddPayment"
import { useState} from "react";

import TransactionLeftTab from "./TransactionLeftTab";

function TransactionLeftPanel({dataArray,addTransaction, updateTransaction, deleteTransaction, transaction}) {
  
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
      <TransactionLeftTab toggleHeading= {toggleHeading} show={showHeading} />

        {showHeading ?
        <AddReciept addTransaction={addTransaction} 
        updateTransaction={updateTransaction} 
        deleteTransaction={deleteTransaction}
        dataArray ={dataArray} 
        transaction ={transaction} />
        :
        <AddPayment addTransaction={addTransaction} 
        updateTransaction={updateTransaction} 
        deleteTransaction={deleteTransaction}
        dataArray ={dataArray} 
        transaction ={transaction} />
        }
  
    </div>
  );
}

export default TransactionLeftPanel;