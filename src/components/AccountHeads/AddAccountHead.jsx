
import { useEffect, useState } from "react";
import MultiOptionInput from "../MultiOptionInput";

const AddAccountHead = ({accountTypes, schedules,selectedAccountHead, addAccountHead,updateAccountHead, deleteAccountHead}) => {
  const [scheduleList, setScheduleList] = useState([])
  const [typeList, setTypeList] = useState([])
  const [accountHeadId, setAccountHeadId] = useState("");
  const [scheduleId, setScheduleId] = useState("")
  const [scheduleName, setScheduleName] = useState('')
  const [accountTypeId, setAccountTypeId] = useState("")
  const [accountTypeName, setAccountTypeName] = useState('')
  const [accountHeadName, setAccountHeadName] = useState("");
  
  const fillSchedule =(schedule)=>{
    setScheduleId(schedule.idField)
    setScheduleName(schedule.textField)
  }
  const fillAccountType=(type)=>{
    setAccountTypeId(type.idField)
    setAccountTypeName(type.textField)
  }
  const clearAccountHead =()=>{
    setAccountHeadId("")    
    setAccountTypeId("")
    setScheduleName("")
    setAccountTypeName("")    
    setScheduleId("")
    setAccountHeadName("")
  }
  const displayScheduleName =(scheduleName)=>{
    setScheduleName(scheduleName)
  }

  const displayAccountType = (type)=>{
    setAccountTypeName(type)
  }

  useEffect(()=>{
    setAccountHeadId(selectedAccountHead.accountHeadId) 
    setScheduleId(selectedAccountHead.scheduleId)    
    setScheduleName(selectedAccountHead.scheduleName)
    setAccountTypeId(selectedAccountHead.accountTypeId)
    setAccountTypeName(selectedAccountHead.accountTypeName)
    setAccountHeadName(selectedAccountHead.accountHeadName)
  },[selectedAccountHead])
  
  useEffect(()=>{
    const list = schedules.map((sch)=>new Object({idField:sch.scheduleId, textField:sch.scheduleName}))
    setScheduleList(list)
  },[])
  useEffect(()=>{
    const list = accountTypes.map((typ)=>new Object({idField:typ.accountTypeId, textField:typ.accountTypeName}))
    setTypeList(list)
  },[])
 
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
          <label>Schedule Name</label>
          <MultiOptionInput promptList ={scheduleList} 
          textField={scheduleName} 
          idField={scheduleId} 
          fillText = {fillSchedule}
          displayText={displayScheduleName}
          />
        </div>
        <div className="form-control">
          <label>AccountType</label>
          <MultiOptionInput promptList ={typeList} 
          textField={accountTypeName} 
          idField ={accountTypeId} 
          fillText ={fillAccountType}
          displayText={displayAccountType}
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
            <button className="btn-add" onClick={()=>addAccountHead({scheduleId,accountTypeId, accountHeadName})}>Add</button>
            <button className="btn-update" onClick={()=>updateAccountHead({accountHeadId,scheduleId,accountTypeId,accountHeadName})}>Update</button>
            <button className="btn-clear" onClick={clearAccountHead}>Clear</button>
            <button className="btn-delete" onClick={()=>deleteAccountHead(accountHeadId)}>Delete</button>
        </div>
        
      </div>
    </>
  );
};
export default AddAccountHead;