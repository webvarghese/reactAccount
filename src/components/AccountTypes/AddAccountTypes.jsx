
import { useEffect, useState, useMemo } from "react";
const AddAccountType = ({addAccountType,updateAccountType, deleteAccountType, selectedAccountType}) => {
  const [accountTypeId, setAccountTypeId] = useState("");
  const [accountTypeName, setAccountType] = useState("");

  const clearAccountType =()=>{
    setAccountTypeId("")
    setAccountType("")
  }

  const fillAccountType =(accountType)=>{
    setAccountTypeId(accountType.accountTypeId)
    setAccountType(accountType.accountTypeName)
  }
  useEffect(()=>{
    clearAccountType()
    fillAccountType(selectedAccountType)
  },[selectedAccountType])

  
  return (
    <>
      <div className="add-form">
        <div className="form-control">
          <label>AccountType Id</label>
          <input
            type="text"
            readOnly={true}
            placeholder="Account Type Id"
            value={accountTypeId}
            onChange={(e) => setAccountTypeId(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>AccountType Name</label>
          <input
            type="text"
            placeholder="AccountType Name"
            value={accountTypeName}
            onChange={(e) => setAccountType(e.target.value)} 
          />
        </div>
        <div className="button-block">
            <button className="btn-add" onClick={()=>addAccountType({accountTypeName})}>Add</button>
            <button className="btn-update" onClick={()=>updateAccountType({accountTypeId,accountTypeName})}>Update</button>
            <button className="btn-clear" onClick={clearAccountType}>Clear</button>
            <button className="btn-delete" onClick={()=>deleteAccountType(accountTypeId)}>Delete</button>
        </div>
        
      </div>
    </>
  );
};
export default AddAccountType;