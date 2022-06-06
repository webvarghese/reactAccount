import { useEffect, useState } from "react";

const AddReceipt = ({ addTransaction, updateTransaction, deleteTransaction, dataArray, transaction }) => {
  const [transactionId, setTransactionId] = useState("")
  const [transactionDate, setDate] = useState("");
  const [transactionReceiptNo, setReceiptNo] = useState("");
  const [transactionFrom, setFrom] = useState("");
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("")
  const [transactionItems, setItems] = useState([]);
  const [transactionBy, setBy] = useState("");
  const [transactionType, setType] = useState("Reciept")
  const [bankDetails, setBankDetails] = useState("");

  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [prompt, setPrompt] = useState([]);

  const [target, setTarget] = useState("");

  const [showPrompt, setShowPrompt] = useState(false);
  const [personList, setPersonList] = useState([])
  
  setPersonList([...dataArray.Persons])

    const clearTransaction = ()=>{
      setDate("");
      setReceiptNo("");
      setFrom("");
      setPurpose("");
      setAmount("");
      setItems([])
      setBy("");
      setType("Receipt");
      setBankDetails("")
    }
    const fillTransaction = (transaction)=>{
      if(transaction.transactionId > 0 && transaction.transactionType === "Receipt"){
        setTransactionId(transaction.transactionId)
        setDate(transaction.transactionDate);
        setReceiptNo(transaction.transactionReceiptNo);
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
  const whenChanged = (e,promptList) => {
    const str = e.target.value;
    if (str.length < 1){
      setShowPrompt(false);
      return
    } 
    setTarget(e);
    setPrompt(promptList.filter((p) => p.toLowerCase().indexOf(str) >= 0));
  };
  const whenFocus = (e) => {
    setX(e.target.getBoundingClientRect().right);
    setY(e.target.getBoundingClientRect().top);
  };
  useEffect(() => {
    setShowPrompt(false);
    if (prompt.length > 0) {
      setShowPrompt(true);
    }
  }, [prompt]);

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
      <div className="add-form">
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
            value={transactionReceiptNo}
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
          {items.map((item, index)=>{
            return <p key={index}>{item.purpose + " : " +item.amount }</p>
          })}
          <h3>{"Total : "}<span>&#8360;</span> {+ items.reduce((tot, item)=>{
           return  tot + parseInt(item.amount,10)
          },0)}</h3>
        </div>
        <div
          className="form-control"
          value={by}
          onChange={(e) => setBy(e.target.value)}
        >
          <label>By</label>
          <input type="radio" value="Cash" name="by" /> Cash
          <input type="radio" value="Bank" name="by" /> Bank
        </div>
        {by === "Bank" && (
          <div className="form-control">
            <label>Bank Details</label>
            <input
              type="text"
              placeholder="Bank Details"
              value={transactioBankDetails}
              onChange={(e) => setBankDetails(e.target.value)}
            />
          </div>
        )}
        <div className="button-block">
            <button className="btn-add" onClick={()=>addTransaction({transactionDate,
                                                                      transactionReceiptNo,
                                                                      transactionFrom,
                                                                      transactionItems,
                                                                      transactionBy,
                                                                      transactionType,
                                                                      transactionBankDetails})}>Add</button>
            <button className="btn-update" onClick={()=>updateTransaction({transactionId,
                                                                      transactionDate,
                                                                      transactionReceiptNo,
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

export default AddReceipt;
