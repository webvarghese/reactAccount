
import { useEffect, useState } from "react";
const AddAccountHead = ({addAccountHead,updateAccountHead, deleteAccountHead, accountHead}) => {
  const [accountHeadId, setAccountHeadId] = useState("");
  const [accountHeadType, setAccountHeadType] = useState("")
  const [accountHeadName, setAccountHeadName] = useState("");

  const clearAccountHead =()=>{
    setAccountHeadId("")
    setAccountHeadType("")
    setAccountHeadName("")
  }

  useEffect(()=>{
    clearAccountHead()
    showAccountHead(accountHead)
  },[accountHead])

  const showAccountHead=(accountHead)=>{
    if(accountHead.accountHeadId > 0){
      setAccountHeadId(accountHead.accountHeadId)
      setAccountHeadType(accountHead.accountHeadType)
      setAccountHeadName(accountHead.accountHeadName)
    }
  }
  return (
    <>
      <div className="add-form">
        <div className="form-control">
          <label>AccountHead Id</label>
          <input
            type="text"
            readOnly={true}
            placeholder="Account Head Id"
            value={accountHeadId}
            onChange={(e) => setAccountHeadId(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Account Head Type</label>
          <input
            type="text"
            placeholder="Account Head Type"
            value={accountHeadType}
            onChange={(e) => setAccountHeadType(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Account Head Name</label>
          <input
            type="text"
            placeholder="Account Head Name"
            value={accountHeadName}
            onChange={(e) => setAccountHeadName(e.target.value)} 
          />
        </div>
        <div className="button-block">
            <button className="btn-add" onClick={()=>addAccountHead({accountHeadType,accountHeadName})}>Add</button>
            <button className="btn-update" onClick={()=>updateAccountHead({accountHeadId,accountHeadType,accountHeadName})}>Update</button>
            <button className="btn-clear" onClick={clearAccountHead}>Clear</button>
            <button className="btn-delete" onClick={()=>deleteAccountHead(accountHeadId)}>Delete</button>
        </div>
        
      </div>
    </>
  );
};
export default AddAccountHead;