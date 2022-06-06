
import TransactionRightPanel from "./TransactionRightPanel";
import TransactionLeftPanel from "./TransactionLeftPanel"
import {useState, useEffect}  from 'react'

const Transactions = ({dataArray}) => {
  const [transactionList, setTransactionList] = useState([]);
  const [trans, setTrans] = useState("")
  const addTransaction =(objTransaction)=>{
    google.script.run.withSuccessHandler((data)=>{
        if(data.transactionId > 1){
          setTransactionList([...transactionList,d]) 
        } else {
          alert('Error while adding transaction')
        }
      }).addTransaction(objTransaction);      
  }
  
  const updateTransaction = (objTransaction)=>{
    google.script.run.withSuccessHandler((data)=>{
      if(data.transactionId > 0){
        setTransactionList(transactionList.map((transaction)=>{
          if(transaction.transactionId === objTransaction.transactionId){
            return data
          } else {
            return transaction
          }
        }))
      } else {
        alert("Error while updating the transaction")
      }
    }).updateTransaction(objTransaction);
  }
  
  

  const deleteTransaction = (id)=>{
      google.script.run.withSuccessHandler((id)=>{
        if(id > 0){
          setPersonList(transactionList.filter((transaction)=>{
            return transaction.transactionId !== id
          }))
        } else {
          alert("Error while deleting transaction")
        }
      }).deleteTransaction(id)
  }
  const setTransaction =(id)=>{
    const transaction = transactionList.filter((transaction)=>transaction.transactionId=== id)[0]
    setTrans(transaction)
  }
  return (
    <div className="container">
      <TransactionLeftPanel
      addTransaction={addTransaction} 
      updateTransaction={updateTransaction} 
      deleteTransaction={deleteTransaction}
      dataArray ={dataArray} 
      transaction ={trans}
      />
      <TransactionRightPanel dataArray={dataArray} setTransaction={setTransaction} />
    </div>
  );
};
export default Transactions;
