import AccountTypeRightPanel from "./AccountTypeRightPannel";
import AccountTypeLeftPanel from "./AccountTypeLeftPannel"
import {useState, useEffect} from 'react'

const AccountType = ({accountTypes,addAccountType, updateAccountType, deleteAccountType}) => {
  const [selectedAccountType,setSelectedAccountType] = useState("")  
  const selectAccountType =(id)=>{
    const objAccountType = accountTypes.filter((accountType)=>{
      return accountType.accountTypeId === id
    })[0]
    setSelectedAccountType(objAccountType)
  }
 
 
  return (
    <div className="container">
      <AccountTypeLeftPanel addAccountType={addAccountType} 
      updateAccountType={updateAccountType} 
      deleteAccountType={deleteAccountType} 
      selectedAccountType={selectedAccountType}
      />
      <AccountTypeRightPanel accountTypes={accountTypes} selectAccountType={selectAccountType} />
    </div>
  );
};
export default AccountType;