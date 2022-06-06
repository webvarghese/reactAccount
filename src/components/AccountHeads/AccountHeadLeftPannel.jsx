
import AddAccountHead from "./AddAccountHead"
function AccountHeadLeftPanel({accountHeadList, accountTypeList, scheduleList, addAccountHead,updateAccountHead,deleteAccountHead,accountHead}) {
  
  return (
    <div className="left-panel">
      <AddAccountHead accountHeadList ={accountHeadList} 
      accountTypeList ={accountTypeList}
      scheduleList = {scheduleList} 
      addAccountHead={addAccountHead} 
      updateAccountHead ={updateAccountHead} 
      deleteAccountHead={deleteAccountHead} 
      accountHead={accountHead} />
    </div>
  );
}

export default AccountHeadLeftPanel;