
import AddAccountType from "./AddAccountTypes"
function AccountTypeLeftPanel({addAccountType,updateAccountType,deleteAccountType,selectedAccountType}) {
  
  return (
    <div className="left-panel">
      <AddAccountType addAccountType={addAccountType} 
      updateAccountType ={updateAccountType} 
      deleteAccountType={deleteAccountType} 
      selectedAccountType={selectedAccountType} 
      />
    </div>
  );
}

export default AccountTypeLeftPanel;