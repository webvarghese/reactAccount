import AccountHeadRightPanel from "./AccountHeadRightPannel";
import AccountHeadLeftPanel from "./AccountHeadLeftPannel"
import {useState} from "react"


const AccountHead = ({accountHeads, schedules, accountTypes,addAccountHead,updateAccountHead,deleteAccountHead}) => {
  const [selectedAccountHead, setSelectedAccountHead] = useState('')
  const selectAccountHead = (id)=>{
    const objAccountHead = accountHeads.filter((accountHead)=>
      accountHead.accountHeadId === id
    )[0]
    const objSchedule = schedules.filter((schedule)=>schedule.scheduleId === objAccountHead.scheduleId)[0]
    const objAccountType = accountTypes.filter((type)=>type.accountTypeId === objAccountHead.accountTypeId)[0]
  objAccountHead.scheduleName = objSchedule.scheduleName
  objAccountHead.accountTypeName = objAccountType.accountTypeName
    setSelectedAccountHead(objAccountHead)
  }
  return (
    <div className="container">
      <AccountHeadLeftPanel  
      accountTypes ={accountTypes}
      schedules = {schedules} addAccountHead={addAccountHead} selectedAccountHead ={selectedAccountHead}
      updateAccountHead={updateAccountHead} 
      deleteAccountHead ={deleteAccountHead} 
      />

      <AccountHeadRightPanel accountHeads ={accountHeads} 
      accountTypes ={accountTypes}
      schedules = {schedules} 
        selectAccountHead={selectAccountHead}
       />
    </div>
  );
};
export default AccountHead;