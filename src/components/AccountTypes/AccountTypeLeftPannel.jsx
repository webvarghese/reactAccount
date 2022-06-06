
import AddAccountType from "./AddAccountTypes"
function AccountTypeLeftPanel({addAccountType,updateAccountType,deleteAccountType,accountType, clearFields}) {
  
  return (
    <div className="left-panel">
      <AddAccountType addAccountType={addAccountType} 
      updateAccountType ={updateAccountType} 
      deleteAccountType={deleteAccountType} 
      accountType={accountType} 
      clearFields={clearFields}/>
    </div>
  );
}

export default AccountTypeLeftPanel;