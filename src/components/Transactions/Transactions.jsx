
import TransactionRightPanel from "./TransactionRightPanel";
import TransactionLeftPanel from "./TransactionLeftPanel"
import {useState, useEffect}  from 'react'

const Transactions = ({persons, user, accountHeads, transactions, items, addTransaction, updateTransaction, deleteTransaction,clearFields }) => {
  const [selectedTransaction, setSelectedTransaction] = useState([]);
  
  const selectTransaction =(id)=>{
    console.log("select transaction called")
    if(id>0){
      const transaction = transactions.filter((transaction)=>transaction.transactionId=== id)[0]
      setSelectedTransaction(transaction)
    }
  }

  useEffect(()=>{
    selectTransaction(0)
  },[clearFields])

  return (
    <div className="container">
      <TransactionLeftPanel
      accountHeads = {accountHeads} user = {user} persons = {persons} items = {items}
      addTransaction={addTransaction} 
      updateTransaction={updateTransaction} 
      deleteTransaction={deleteTransaction}
      selectedTransaction = {selectedTransaction}
      clearFields={clearFields}
      />
      <TransactionRightPanel transactions ={transactions} accountHeads = {accountHeads} items ={items} persons = {persons} selectTransaction={selectTransaction} user ={user} />
    </div>
  );
};
export default Transactions;
