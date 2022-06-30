import { useEffect, useState } from "react";
import MultiOptionInput from "../MultiOptionInput";

const AddPayment = ({ addTransaction, updateTransaction, deleteTransaction, items, accountHeads, persons, selectedTransaction, user }) => {
  const [transactionId, setTransactionId] = useState("")
  const [transactionDate, setDate] = useState("");
  const [transactionBillNo, setBillNo] = useState("");
  const [personId, setPersonId] = useState("")
  const [personName, setPersonName] = useState("");
  const [personAddress, setPersonAddress] = useState("");
  const [transactionBy, setBy] = useState("");
  const [transactionBankDetails, setBankDetails] = useState("");
  const [accountHeadId, setAccountHeadId] = useState("")
  const [accountHeadName, setAccountHeadName] = useState("")
  const [amount, setAmount] = useState("") 
  const [details, setDetails] = useState("")
  const [transactionItems, setItems] = useState([]);
  
  const [personList, setPersonList] = useState([])
  const [accountHeadList, setAccountHeadList] = useState([])

  useEffect(()=>{
    const list = persons.map((person)=>{
      const objPerson = {}
      objPerson.idField = person.personId
      objPerson.textField = person.personName + ", " + person.personAddress
      return objPerson
    })
    setPersonList(list)
  },[persons])

  useEffect(()=>{
    const list = accountHeads.map((accountHead)=>{
      const objAccountHead = {}
      objAccountHead.idField = accountHead.accountHeadId
      objAccountHead.textField = accountHead.accountHeadName 
      return objAccountHead
    })
    setAccountHeadList(list)
  },[accountHeads])

    const clearTransaction = ()=>{
      setTransactionId("")
      setDate("");
      setBillNo("");
      setPersonId("")
      setPersonName("")
      setPersonAddress("")
      setBy("");
      setBankDetails("")
      setAccountHeadId("");
      setAccountHeadName("")
      setAmount("");
      setDetails("")
      setItems([])
    }

    useEffect(()=>{
      const ShowTransaction = (transaction)=>{
        if(transaction.transactionId > 0 ){
          setTransactionId(transaction.transactionId)
          setDate(transaction.transactionDate);
          setBillNo(transaction.transactionBillNo);
          setPersonId(transaction.personId);        
          setBy(transaction.transactionBy);
          setBankDetails(transaction.transactionBankDetails)
          const person = persons.filter((person)=>person.personId === transaction.personId)[0]
          setPersonName(person.personName)
          setPersonAddress(person.personAddress)
          const itemList = items.filter(item=>item.transactionId === transaction.transactionId)
          setItems(itemList)
        }
      }
      ShowTransaction(selectedTransaction)
    },[selectedTransaction])
    
    
  const addItem = () => {
    setItems([...transactionItems, { accountHeadId, amount,details }]);
    setAccountHeadId('')
    setAccountHeadName("")
    setAmount('')
    setDetails("")
  };
  
  const fillPerson =(person)=>{
    const id = person.idField
    const objPerson = persons.filter((per)=>per.personId === id)[0]
    setPersonId(objPerson.personId)
    setPersonName(objPerson.personName)
    setPersonAddress(objPerson.personAddress)
  }
  const displayPerson =(str)=>{
    setPersonName(str)
  }

  const deleteItem = (id)=>{
    setItems(transactionItems.filter((tItem)=>tItem.itemId !== id))
  }

  const fillAccountHead =(accountHead)=>{
    setAccountHeadId(accountHead.idField)
    setAccountHeadName(accountHead.textField)
  }

  const displayAccountHead =(str)=>{
    setAccountHeadName(str)
  }
 
  return (
    <>
      <div className="add-form" >
        <div className="form-control">
          <label>Date</label>
          <input
            type="date"
            placeholder="Date"
            value={transactionDate}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Transaction Id</label>
          <input
            type="text"
            readOnly={true}
            placeholder="Transaction Id"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Bill/Receipt No</label>
          <input
            type="text"
            placeholder="Bill/Receipt No"
            value={transactionBillNo}
            onChange={(e) => setBillNo(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Person Name</label>
          <MultiOptionInput promptList ={personList} 
          textField={personName} 
          idField={personId} 
          fillText = {fillPerson}
          displayText={displayPerson}
          />
        </div>
        <div className="form-control">
          <label>Person Address</label>
          <input
            type="text"
            readOnly={true}
            placeholder="Person Address"
            value={personAddress}
            onChange={(e) => setPersonAddress(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Purpose</label>
          <MultiOptionInput promptList ={accountHeadList} 
          textField={accountHeadName} 
          idField={accountHeadId} 
          fillText = {fillAccountHead}
          displayText={displayAccountHead}
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Details</label>
          <input
            type="text"
            placeholder="Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <button className="btn-small" onClick={addItem}>
          Add Item
        </button>
        <div>
          {transactionItems.map((item, index)=>{
            const purpose = accountHeads.filter((accountHead)=>accountHead.accountHeadId === item.accountHeadId)[0].accountHeadName
            return <p key={index} >{purpose + " : " + item.amount + "( " + item.details + " )" } <span><button onClick={()=>deleteItem(item.itemId)}>X</button></span> </p>
          })}
          <h3>{"Total : "}<span>&#8360;</span> {+ transactionItems.reduce((tot, item)=>{
           return  tot + parseInt(item.amount,10)
          },0)}</h3>
        </div>
        <div
          className="form-control"
          value={transactionBy}
          onChange={(e) => setBy(e.target.value)}
        >
          <label>By</label>
          <input type="radio" value="Cash" name="by" /> Cash
          <input type="radio" value="Bank" name="by" /> Bank
        </div>
        {transactionBy === "Bank" && (
          <div className="form-control">
            <label>Bank Details</label>
            <input
              type="text"
              placeholder="Bank Details"
              value={transactionBankDetails}
              onChange={(e) => setBankDetails(e.target.value)}
            />
          </div>
        )}
        <div className="button-block">
            <button className="btn-add" onClick={()=>addTransaction({transactionDate,
                                                                      transactionBillNo,
                                                                      personId,
                                                                      transactionBy,
                                                                      transactionItems,
                                                                      transactionBankDetails,
                                                                      savedTimeStamp:Date(),
                                                                      userName:user.userName})}>Add</button>
            <button className="btn-update" onClick={()=>updateTransaction({transactionId,
                                                                      transactionDate,
                                                                      transactionBillNo,
                                                                      personId,
                                                                      transactionBy,
                                                                      transactionItems,
                                                                      transactionBankDetails,
                                                                      savedTimeStamp:Date(),
                                                                      userName:user.userName})}>Update</button>
            <button className="btn-clear" onClick={clearTransaction}>Clear</button>
            <button className="btn-delete" onClick={()=>deleteTransaction(transactionId)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default AddPayment;
