
import { useEffect, useState } from "react";
import MultiOptionInput from "../MultiOptionInput";

const AddAccountHead = ({accountTypeList, scheduleList,addAccountHead,updateAccountHead, deleteAccountHead, accountHead}) => {
  const [accountHeadId, setAccountHeadId] = useState("");  
  const [accountTypeId, setAccountTypeId] = useState("")
  const [scheduleId, setScheduleId] = useState("")
  const [accountHeadName, setAccountHeadName] = useState("");
  const [schList, setScheduleList] = useState([])
  const [scheduleName, setScheduleName] = useState('')
  const [typeList, setTypeList] = useState([])
  const [accountTypeName, setAccountTypeName] = useState('')
  

  const clearAccountHead =()=>{
    setAccountHeadId("")    
    setAccountTypeId("")
    setScheduleName("")
    setAccountTypeName("")    
    setScheduleId("")
    setAccountHeadName("")
  }
  const returnSchedule =(scheduleName)=>{
    setScheduleName(scheduleName)
  }

  const returnType = (type)=>{
    setAccountTypeName(type)
  }

  useEffect(()=>{
    clearAccountHead()
    showAccountHead(accountHead)
  },[accountHead])

  const fillType=(type)=>{
    setAccountTypeId(type.idField)
    setAccountTypeName(type.textField)
  }

  const fillSchedule =(schedule)=>{
    setScheduleId(schedule.idField)
    setScheduleName(schedule.textField)
  }
  
  useEffect(()=>{
    const list = scheduleList.map((sch)=>new Object({idField:sch.scheduleId, textField:sch.scheduleName}))
    setScheduleList(list)
  },[scheduleList])
  useEffect(()=>{
    const list = accountTypeList.map((typ)=>new Object({idField:typ.accountTypeId, textField:typ.accountTypeName}))
    setTypeList(list)
  },[accountTypeList])

  const showAccountHead=(accountHead)=>{
    if(accountHead.accountHeadId > 0){
      setAccountHeadId(accountHead.accountHeadId)
      setScheduleId(accountHead.scheduleId)
      const schName = scheduleList.filter((schedule)=>schedule.scheduleId=== accountHead.scheduleId)[0].scheduleName
      const tpName = accountTypeList.filter((type)=>type.accountTypeId === accountHead.accountTypeId)[0].accountTypeName
      setAccountTypeName(tpName)
      setScheduleName(schName)
      setAccountTypeId(accountHead.accountTypeId)
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
          <label>Schedule Name</label>
          <MultiOptionInput promptList ={schList} 
          textField={scheduleName} 
          idField={scheduleId} 
          fillText = {fillSchedule}
          returnText={returnSchedule}
          />
        </div>
        <div className="form-control">
          <label>AccountType</label>
          <MultiOptionInput promptList ={typeList} 
          textField={accountTypeName} 
          idField ={accountTypeId} 
          fillText ={fillType}
          returnText={returnType}
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