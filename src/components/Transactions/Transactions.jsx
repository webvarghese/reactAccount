
import TransactionRightPanel from "./TransactionRightPanel";
import TransactionLeftPanel from "./TransactionLeftPanel"
import {useState, useEffect}  from 'react'

const Transactions = ({persons, user, accountHeads, transactions, items, addTransaction, updateTransaction, deleteTransaction }) => {
  const [selectedTransaction, setSelectedTransaction] = useState([]);
  
  

  
  const selectTransaction =(id)=>{
    const transaction = transactions.filter((transaction)=>transaction.transactionId=== id)[0]
    setSelectedTransaction(transaction)
  }
  return (
    <div className="container">
      <TransactionLeftPanel
      accountHeads = {accountHeads} user = {user} persons = {persons} items = {items}
      addTransaction={addTransaction} 
      updateTransaction={updateTransaction} 
      deleteTransaction={deleteTransaction}
      selectedTransaction = {selectedTransaction}
      />
      <TransactionRightPanel transactions ={transactions} accountHeads = {accountHeads} items ={items} persons = {persons} selectTransaction={selectTransaction} user ={user} />
    </div>
  );
};
export default Transactions;
