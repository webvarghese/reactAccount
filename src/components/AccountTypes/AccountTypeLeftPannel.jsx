
import AddAccountType from "./AddAccountTypes"
function AccountTypeLeftPanel({addAccountType,updateAccountType,deleteAccountType,selectedAccountType,clearFields}) {
  
  return (
    <div className="left-panel">
      <AddAccountType addAccountType={addAccountType} 
      updateAccountType ={updateAccountType} 
      deleteAccountType={deleteAccountType} 
      selectedAccountType={selectedAccountType} 
      clearFields ={clearFields}
      />
    </div>
  );
}

export default AccountTypeLeftPanel;