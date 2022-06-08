import AccountHeadRightPanel from "./AccountHeadRightPannel";
import AccountHeadLeftPanel from "./AccountHeadLeftPannel"
import {useState, useEffect} from 'react'


const AccountHead = () => {
  const [accountHeadList,setAccountHeadList] = useState([])
  const [scheduleList, setScheduleList] = useState([])
  const [accountTypeList, setAccountTypeList] = useState([])
  const [acc, setAcc] = useState('')

  useEffect(()=>{
    const getData = async ()=>{
      const accountHeads =await getAccountHeads()
      const accountTypes = await getAccountTypes()
      const schedules = await getSchedules()
      setAccountHeadList(accountHeads)
      setAccountTypeList(accountTypes)
      setScheduleList(schedules)
    }
    getData()
  },[])

  
  
 
  const addAccountHead =(objAccountHead)=>{
    google.script.run.withSuccessHandler((d)=>{
      if(d.accountHeadId > 1){
        setAccountHeadList([...accountHeadList,d]) 
      } else {
        alert('Error while adding AccountHead')
      }
        
      }).addAccountHead(objAccountHead);      
  }
  
  const updateAccountHead = (objAccountHead)=>{
    google.script.run.withSuccessHandler((d)=>{
      if(d.accountHeadId > 0){
        setAccountHeadList(accountHeadList.map((accountHead)=>{
          if(accountHead.accountHeadId === objAccountHead.accountHeadId){
            return d
          } else {
            return accountHead
          }
        }))
      } else {
        alert("Error while updating the person")
      }
    }).updateAccountHead(objAccountHead);
  }
  
  

  const deleteAccountHead = (id)=>{
      google.script.run.withSuccessHandler((id)=>{
        if(id > 0){
          setAccountHeadList(accountHeadList.filter((accountHead)=>{
            return accountHead.accountHeadId !== id
          }))
        } else {
          alert("Error while deleting AccountHead")
        }
      }).deleteAccountHead(id)
  }
  const setAccountHead =(id)=>{
    const accountHead = accountHeadList.filter((accountHead)=>accountHead.accountHeadId=== id)[0]
    setAcc(accountHead)
  }
  return (
    <div className="container">
      <AccountHeadLeftPanel accountHeadList ={accountHeadList} 
      accountTypeList ={accountTypeList}
      scheduleList = {scheduleList}
      addAccountHead={addAccountHead} 
      updateAccountHead={updateAccountHead} 
      deleteAccountHead ={deleteAccountHead} 
      accountHead={acc}/>

      <AccountHeadRightPanel accountHeadList ={accountHeadList} 
      accountTypeList ={accountTypeList}
      scheduleList = {scheduleList} 
      setAccountHead={setAccountHead} />
    </div>
  );
};
export default AccountHead;