
import AddAccountHead from "./AddAccountHead"
function AccountHeadLeftPanel({addAccountHead,updateAccountHead,deleteAccountHead,accountHead}) {
  
  return (
    <div className="left-panel">
      <AddAccountHead addAccountHead={addAccountHead} updateAccountHead ={updateAccountHead} deleteAccountHead={deleteAccountHead} accountHead={accountHead} />
    </div>
  );
}

export default AccountHeadLeftPanel;