import { useEffect, useState } from "react";
import TextPrompt from "./TextPrompt";
const AddTask = ({ onAdd }) => {
  const [date, setDate] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState("");
  const [by, setBy] = useState("");
  const [bankDetails, setBankDetails] = useState("");
  const [verified, setVerified] = useState(false);

  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [prompt, setPrompt] = useState([]);

  const [target, setTarget] = useState("");

  const [showPrompt, setShowPrompt] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      alert("Please enter date of transaction");
      return;
    }
    onAdd({ date, from, to, purpose, amount, verified });
    setDate("");
    setFrom("");
    setTo("");
    setPurpose("");
    setAmount("");
    setVerified(false);
  };
  const promptList = ["John", "Joseph", "Jane", "Thomas", "Christo"];
  const whenChanged = (e) => {
    const str = e.target.value;
    setTarget(e);
    setPrompt(promptList.filter((p) => p.toLowerCase().indexOf(str) >= 0));
  };
  const whenFocus = (e) => {
    setX(e.target.getBoundingClientRect().right);
    setY(e.target.getBoundingClientRect().top);
    console.log(e.target.getBoundingClientRect().top);
  };
  useEffect(() => {
    console.log(prompt);
    if (prompt.length > 0) {
      setShowPrompt(true);
    }
  }, [prompt]);
  useEffect(() => {
    console.log(by);
  }, [by]);

  const fillText = (text) => {
    console.log(target.target.placeholder);
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
  // const formatDate = (e) => {
  //   const inputDate = new Date(e.target.value).toLocaleDateString("en-us", {
  //     weekday: "long",
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric"
  //   });
  //   console.log(inputDate);
  // };
  return (
    <>
      {showPrompt && (
        <TextPrompt x={x} y={y} prompt={prompt} fillText={fillText} />
      )}
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Date</label>
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>From</label>
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              whenChanged(e);
            }}
            onFocus={whenFocus}
          />
        </div>
        <div className="form-control">
          <label>To</label>
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
              whenChanged(e);
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
              value={bankDetails}
              onChange={(e) => setBankDetails(e.target.value)}
            />
          </div>
        )}
        <div className="form-control form-control-check">
          <label>Verified ?</label>
          <input
            type="checkbox"
            checked={verified}
            value={verified}
            onChange={(e) => setVerified(e.currentTarget.checked)}
          />
        </div>
        <input
          type="submit"
          className="btn btn-block"
          value="Save Transaction"
        />
      </form>
    </>
  );
};
export default AddTask;
