import AccountTypeRightPanel from "./AccountTypeRightPannel";
import AccountTypeLeftPanel from "./AccountTypeLeftPannel"
import {useState, useEffect} from 'react'

const AccountType = () => {
  const [accountTypeList,setAccountTypeList] = useState([])
  const [accType, setAccType] = useState('')
  const [clearFields, setClearFields] = useState(false)
  

  useEffect(()=>{
    google.script.run.withSuccessHandler((list)=>{
        setAccountTypeList(list)   
      }).getAccountTypes();
  },[])

  
 
  const addAccountType =(objAccountType)=>{
    google.script.run.withSuccessHandler((d)=>{
      if(d.accountTypeId > 0){
        setAccountTypeList([...accountTypeList,d]) 
      } else {
        alert('Error while adding AccountType')
      }
        
      }).addAccountType(objAccountType);      
  }
  
  const updateAccountType = (objAccountType)=>{
    google.script.run.withSuccessHandler((d)=>{
      if(d.accountTypeId > 0){
        setAccountTypeList(accountTypeList.map((accountType)=>{
          if(accountType.accountTypeId === objAccountType.accountTypeId){
            return d
          } else {
            return accountType
          }
        }))
      } else {
        alert("Error while updating the AccountType")
      }
    }).updateAccountType(objAccountType);
  }
  
  

  const deleteAccountType = (id)=>{
      google.script.run.withSuccessHandler((id)=>{
        if(id > 0){
          setAccountTypeList(accountTypeList.filter((accountType)=>{
            return accountType.accountTypeId !== id
          }))
          setClearFields(true)
        } else {
          alert("Error while deleting AccountType")
        }
      }).deleteAccountType(id)
  }
  const setAccountType =(id)=>{
    const accountType = accountTypeList.filter((accountType)=>accountType.accountTypeId=== id)[0]
    setAccType(accountType)
  }
  return (
    <div className="container">
      <AccountTypeLeftPanel addAccountType={addAccountType} 
      updateAccountType={updateAccountType} 
      deleteAccountType={deleteAccountType} 
      accountType={accType}
      clearFields={clearFields}/>
      <AccountTypeRightPanel list={accountTypeList} setAccountType={setAccountType} />
    </div>
  );
};
export default AccountType;