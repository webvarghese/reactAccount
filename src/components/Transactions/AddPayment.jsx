import { useEffect, useState } from "react";

const AddPayment = ({ addTransaction, updateTransaction, deleteTransaction, dataArray, transaction }) => {
  const [transactionId, setTransactionId] = useState("")
  const [transactionDate, setDate] = useState("");
  const [transactionVoucherNo, setVoucherNo] = useState("");
  const [transactionFrom, setFrom] = useState("");
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("")
  const [transactionItems, setItems] = useState([]);
  const [transactionBy, setBy] = useState("");
  const [transactionType, setType] = useState("Payment")
  const [transactionBankDetails, setBankDetails] = useState("");

 
  const [personList, setPersonList] = useState([])

  useEffect(()=>{
    setPersonList([...dataArray.Persons])
  },[dataArray])

    const clearTransaction = ()=>{
      setDate("");
      setReceiptNo("");
      setFrom("");
      setPurpose("");
      setAmount("");
      setItems([])
      setBy("");
      setType("Payment");
      setBankDetails("")
    }
    const fillTransaction = (transaction)=>{
      if(transaction.transactionId > 0 && transaction.transactionType === "Payment"){
        setTransactionId(transaction.transactionId)
        setDate(transaction.transactionDate);
        setVoucherNo(transaction.transactionVoucherNo);
        setFrom(transaction.transactionFrom);
        setItems(transaction.transactionItems)
        setBy(transaction.transactionBy);
        setType(transaction.transactionType);
        setBankDetails(transaction.transactionBankDetails)
      }
    }
    
  const addItem = () => {
    setItems([...transactionItems, { purpose, amount,details }]);
    setPurpose('')
    setAmount('')
    setDetails("")
  };
  
  useEffect(() => {
    if (transaction.transactionId > 0) {
      fillTransaction(transaction);
    }
  }, [transaction]);
 

  const fillText = (text) => {
    switch (target.target.placeholder) {
      case "From":
        setFrom(text);
        break;
      case "To":
        setTo(text);
        break;
      case "Purpose":
        setPurpose(text);
        break;
      default:
        break;
    }
    setShowPrompt(false);
  };
  
  return (
    <>
      {showPrompt && (
        <TextPrompt x={x} y={y} prompt={prompt} fillText={fillText} />
      )}
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
          <label>Receipt No</label>
          <input
            type="text"
            placeholder="Receipt No"
            value={transactionVoucherNo}
            onChange={(e) => setReceiptNo(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>From</label>
          <input
            type="text"
            placeholder="From"
            value={transactionFrom}
            onChange={(e) => {
              setFrom(e.target.value);
              whenChanged(e,personList);
            }}
            onFocus={whenFocus}
          />
        </div>
        <div className="form-control">
          <label>Purpose</label>
          <input
            type="text"
            placeholder="Purpose"
            value={purpose}
            onChange={(e) => {
              setPurpose(e.target.value);
              whenChanged(e);
            }}
            onFocus={whenFocus}
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
            return <p key={index}>{item.purpose + " : " +item.amount }</p>
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
                                                                      transactionVoucherNo,
                                                                      transactionFrom,
                                                                      transactionItems,
                                                                      transactionBy,
                                                                      transactionType,
                                                                      transactionBankDetails})}>Add</button>
            <button className="btn-update" onClick={()=>updateTransaction({transactionId,
                                                                      transactionDate,
                                                                      transactionVoucherNo,
                                                                      transactionFrom,
                                                                      transactionItems,
                                                                      transactionBy,
                                                                      transactionType,
                                                                      transactionBankDetails})}>Update</button>
            <button className="btn-clear" onClick={clearTransaction}>Clear</button>
            <button className="btn-delete" onClick={()=>deleteTransaction(transactionId)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default AddPayment;
