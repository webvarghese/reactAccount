
import AddAccountHead from "./AddAccountHead"
function AccountHeadLeftPanel({accountTypes, schedules,addAccountHead,selectedAccountHead, updateAccountHead,deleteAccountHead}) {
  
  return (
    <div className="left-panel">
      <AddAccountHead  
      accountTypes ={accountTypes}
      schedules = {schedules} selectedAccountHead = {selectedAccountHead}
      addAccountHead={addAccountHead} 
      updateAccountHead ={updateAccountHead} 
      deleteAccountHead={deleteAccountHead} 
      />
    </div>
  );
}

export default AccountHeadLeftPanel;