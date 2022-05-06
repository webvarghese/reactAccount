
import AddReciept from "./AddReciept";
import AddPayment from "./AddTask"
import { useState} from "react";

import LeftTab from "./LeftTab";

function LeftPanel() {
  const [transactions, setTransactions] = useState([]);
  const [showHeading, setShowHeading] = useState(false)
  const toggleHeading =(e)=>{
    if(e.target.textContent==='Reciept'){
      setShowHeading(false)
    } else if(e.target.textContent==='Payment'){
      setShowHeading(true)
    }
  }
  

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    console.log(transactions);
  };
  return (
    <div className="left-panel">
      <LeftTab toggleHeading= {toggleHeading} show={showHeading} />

        {showHeading ?
        <AddReciept onAdd={addTransaction} />
        :
        <AddPayment onAdd={addTransaction} />
        }
  
    </div>
  );
}

export default LeftPanel;