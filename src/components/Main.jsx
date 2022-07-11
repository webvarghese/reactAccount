import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"
import Transactions from "./Transactions/Transactions";
import About from "./About";
import Person from './Person/Person'
import AccountHead from './AccountHeads/AccountHead' 
import Schedule from './Schedules/Schedule'
import AccountType from './AccountTypes/AccountType'
import PrayerGroup from './PrayerGroups/PrayerGroup'
import Budget from "./Budgets/Budget"
import User from "./Users/User"
import Nav from "./Nav";
import MessageBox from "./MessageBox"
import { getAllDataArrays,runGoogleScript } from "../functions/Utilities"

function Main() {
  const [accountHeads, setAccountHeads] = useState([])
  const [accountTypes, setAccountTypes] = useState([])
  const [schedules, setSchedules] = useState([])
  const [persons, setPersons] = useState([])
  const [prayerGroups, setPrayerGroups] = useState([])
  const [transactions, setTransactions] = useState([])
  const [users, setUsers] = useState([])
  const [items, setItems] = useState([])
  const [budgets, setBudgets] = useState([])

  const [message, setMessage] = useState('')
  const [color, setColor]= useState('')
  const [messageBox, setMessageBox] = useState(false)
  
  const user = {userName:"Accountant", userId :1}
 
  useEffect(()=>{
    const getData = async ()=>{
      const dataArray =await getAllDataArrays()
      const AccountHeads = dataArray.AccountHeads.splice(0)
      const AccountTypes = dataArray.AccountTypes.splice(0)
      const Persons = dataArray.Persons.splice(0)
      const PrayerGroups = dataArray.PrayerGroups.splice(0)
      const Schedules = dataArray.Schedules.splice(0)
      const Users = dataArray.Users.splice(0)
      const Transactions = dataArray.Transactions.splice(0)
      const Items = dataArray.Items.splice(0)
      const Budgets = dataArray.Budgets.splice(0)
      setAccountHeads(AccountHeads)
      setAccountTypes(AccountTypes)
      setSchedules(Schedules)
      setPersons(Persons)
      setPrayerGroups(PrayerGroups)
      setUsers(Users)
      setBudgets(Budgets)
      setTransactions(Transactions)
      setItems(Items)
    }
    getData()
    
  },[])

  const showMessage =(msg,colr)=>{
    setMessage(msg)
    setColor(colr)
    setMessageBox(true)
    setTimeout(()=>{
     setMessage("")
     setMessageBox(false) 
    },3000)
  }

  const clearFields = ()=>{}
  // =================== Persons ===========================================
 const addPerson =async(obj)=>{
   const objPerson = await runGoogleScript("addPerson",obj)
   if(objPerson.personId > 0){
     setPersons([...persons,objPerson])
     showMessage(`Successfully added the person ${objPerson.personName} !!`,"addMsg")
     clearFields()
   }
 }
  const updatePerson =async(obj)=>{
   const objPerson = await runGoogleScript("updatePerson",obj)
   if(objPerson.personId > 0){
     setPersons(persons.map((person)=>{if(person.personId === objPerson.personId){return objPerson} else {return person}}))
     showMessage(`Successfully updated the person ${objPerson.personName} !!`,"updateMsg")
     clearFields()
   }
 }
  const deletePerson = async(id)=>{
    const returnId = await runGoogleScript("deletePerson", id)
    if(returnId === id){
      setPersons(persons.filter((person)=>{ return person.personId !== returnId}))
      showMessage(`Deleted the record. Cant be undone !!`,"deleteMsg")
      clearFields()
    }
  }
  //Prayer Groups
  const addPrayerGroup =async(obj)=>{
   const objPrayerGroup = await runGoogleScript("addPrayerGroup",obj)
   if(objPrayerGroup.prayerGroupId > 0){
     setPrayerGroups([...prayerGroups,objPrayerGroup])
     showMessage(`Successfully added the prayer group ${objPrayerGroup.prayerGroupName} !!`,"addMsg")
     clearFields()
   }
 }
  const updatePrayerGroup =async(obj)=>{
   const objPrayerGroup = await runGoogleScript("updatePrayerGroup",obj)
   if(objPrayerGroup.prayerGroupId > 0){
     setPrayerGroups(prayerGroups.map((prayerGroup)=>{if(prayerGroup.prayerGroupId === objPrayerGroup.prayerGroupId){return objPrayerGroup} else {return prayerGroup}}))
     showMessage(`Successfully updated the prayer group ${objPrayerGroup.prayerGroupName} !!`,"updateMsg")
     clearFields()
   }
 }
  const deletePrayerGroup = async(id)=>{
    if (persons.some(person => person.prayerGroupId === id)) {
    showMessage('Cant delete !! Prayer group contains members',"warnMsg")
      return
}
    const returnId = await runGoogleScript("deletePrayerGroup", id)
    if(returnId === id){
      setPrayerGroups([prayerGroups.filter((prayerGroup)=>{return prayerGroup.prayerGroupId !== returnId})])
      showMessage(`Deleted the record. Cant be undone !!`,"deleteMsg")
      clearFields()
    }
  }
  //Transactions 
  const addTransaction =async(obj)=>{
   const objTransaction = await runGoogleScript("addTransaction",obj)
   if(objTransaction.transactionId > 0){
     setTransactions([...transactions,objTransaction])
     addItems(objTransaction.transactionItems)
     showMessage(`Successfully added the entry for ${objTransaction.transactionBillNo} !!`,"addMsg")
     clearFields()
   }
 }
  const updateTransaction =async(obj)=>{
   const objTransaction = await runGoogleScript("updateTransaction",obj)
   if(objTransaction.transactionId > 0){
     setTransactions(transactions.map((transaction)=>{if(transaction.transactionId === objTransaction.transactionId){return objTransaction} else {return transaction}}))
     const itemListAfterDelete = items.filter((item)=>item.transactionId !== objTransaction.transactionId)
     setItems([...itemListAfterDelete, ...objTransaction.transactionItems])
     showMessage(`Successfully updated the transaction for ${objTransaction.transactionBillNo} !!`,"updateMsg")
     clearFields()
   }
 }
  const deleteTransaction = async(id)=>{
    const returnId = await runGoogleScript("deleteTransaction", id)
    if(returnId === id){
      setTransactions(transactions.filter((transaction)=>{return transaction.transactionId !== returnId}))
      deleteItems(returnId)
      showMessage(`Deleted the record. Cant be undone !!`,"deleteMsg")
      clearFields()
    }
  }

  //Items
const deleteItems = (id)=>{
  setItems(items.filter((item)=>item.transactionId !== id))
} 
  const addItems =(returnItems)=>{
    setItems([...items, ...returnItems])
  }

  // Schedules
  const addSchedule =async(obj)=>{
   const objSchedule = await runGoogleScript("addSchedule",obj)
   if(objSchedule.scheduleId > 0){
     setSchedules([...schedules,objSchedule])
     showMessage(`Successfully added the schedule ${objSchedule.scheduleName} !!`,"addMsg")
     clearFields()
   }
 }
  const updateSchedule =async(obj)=>{
   const objSchedule = await runGoogleScript("updateSchedule",obj)
   if(objSchedule.scheduleId > 0){
     setSchedules(schedules.map((schedule)=>{if(schedule.scheduleId === objSchedule.scheduleId){return objSchedule} else {return schedule}}))
     showMessage(`Successfully updated the schedule ${objSchedule.scheduleName} !!`,"updateMsg")
     clearFields()
   }
 }
  const deleteSchedule = async(id)=>{
    if (accountHeads.some(accountHead => accountHead.scheduleId === id)) {
    showMessage('Cant delete !! Schedule contains accountHeads',"warnMsg")
      return
}
    const returnId = await runGoogleScript("deleteSchedule", id)
    if(returnId === id){
      setSchedules(schedules.filter((schedule)=>{return schedule.scheduleId !== returnId}))
      showMessage(`Deleted the record. Cant be undone !!`,"deleteMsg")
      clearFields()
    }
  }
  //account heads
  const addAccountHead =async(obj)=>{
   const objAccountHead = await runGoogleScript("addAccountHead",obj)
   if(objAccountHead.accountHeadId > 0){
     setAccountHeads([...accountHeads,objAccountHead])
     showMessage(`Successfully added account head ${objAccountHead.accountHeadName} !!`,"addMsg")
     clearFields()
   }
 }
  const updateAccountHead =async(obj)=>{
   const objAccountHead = await runGoogleScript("updateAccountHead",obj)
   if(objAccountHead.accountHeadId > 0){
     setAccountHeads(accountHeads.map((accountHead)=>{if(accountHead.accountHeadId === objAccountHead.accountHeadId){return objAccountHead} else {return accountHead}}))
     showMessage(`Successfully updated the account head ${objAccountHead.accountHeadName} !!`,"updateMsg")
     clearFields()
   }
 }
  const deleteAccountHead = async(id)=>{
    if (items.some(item => item.accountHeadId === id)) {
      showMessage('Cant delete !! AccountHead contains itemss',"warnMsg")
        return
    }
    const returnId = await runGoogleScript("deleteAccountHead", id)
    if(returnId === id){
      setAccountHeads(accountHeads.filter((accountHead)=>{ return accountHead.accountHeadId !== returnId}))
      showMessage(`Deleted the record. Cant be undone !!`,"deleteMsg")
      clearFields()
    }
  }
  
  //budgets
 const addBudget =async(obj)=>{
   const objBudget = await runGoogleScript("addBudget",obj)
   if(objBudget.budgetId > 0){
     setBudgets([...budgets,objBudget])
     showMessage(`Successfully added budget for ${objBudget.budgetAmount} !!`,"addMsg")
     clearFields()
   }
 }
  const updateBudget =async(obj)=>{
   const objBudget = await runGoogleScript("updateBudget",obj)
   if(objBudget.budgetId > 0){
     setBudgets(budgets.map((budget)=>{if(budget.budgetId === objBudget.budgetId){return objBudget} else {return budget}}))
     showMessage(`Successfully updated the budget for ${objBudget.budgetAmount} !!`,"updateMsg")
     clearFields()
   }
 }
  const deleteBudget = async(id)=>{
    const returnId = await runGoogleScript("deleteBudget", id)
    if(returnId === id){
      setBudgets(budgets.filter((budget)=>{ return budget.budgetId !== returnId}))
      showMessage(`Deleted the record. Cant be undone !!`,"deleteMsg")
      clearFields()
    }
  }

  //Users
  
 const addUser =async(obj)=>{
  const objUser = await runGoogleScript("addUser",obj)
  if(objUser.userId > 0){
    setUsers([...users,objUser])
    showMessage(`Successfully added User ${objUser.userName} !!`,"addMsg")
    clearFields()
  }
}
 const updateUser =async(obj)=>{
  const objUser = await runGoogleScript("updateUser",obj)
  if(objUser.userId > 0){
    setUsers(users.map((user)=>{if(user.userId === objUser.userId){return objUser} else {return user}}))
    showMessage(`Successfully updated the user ${objUser.userName} !!`,"updateMsg")
    clearFields()
  }
}
 const deleteUser = async(id)=>{
   const returnId = await runGoogleScript("deleteUser", id)
   if(returnId === id){
     setUsers(users.filter((user)=>{ return user.userId !== returnId}))
     showMessage(`Deleted the record. Cant be undone !!`,"deleteMsg")
     clearFields()
   }
 }
  
  // account types
  const addAccountType =async(obj)=>{
   const objAccountType = await runGoogleScript("addAccountType",obj)
   if(objAccountType.accountTypeId > 0){
     setAccountTypes([...accountTypes,objAccountType])
     showMessage(`Successfully added account type ${objAccountType.accountTypeName} !!`,"addMsg")
     clearFields()
   }
 }
  const updateAccountType =async(obj)=>{
   const objAccountType = await runGoogleScript("updateAccountType",obj)
   if(objAccountType.accountTypeId > 0){
     setAccountTypes(accountTypes.map((accountType)=>{if(accountType.accountTypeId === objAccountType.accountTypeId){return objAccountType} else {return accountType}}))
     showMessage(`Successfully updated the account head ${objAccountType.accountTypeName} !!`,"updateMsg")
     clearFields()
   }
 }
  const deleteAccountType = async(id)=>{
    if (accountHeads.some(accountHead => accountHead.accountTypeId === id)) {
    showMessage('Cant delete !! Account Types contain Account Heads')
      return
  }
    const returnId = await runGoogleScript("deleteAccountType", id)
    if(returnId === id){
      setAccountTypes(accountTypes.filter((accountType)=>{return accountType.accountTypeId !== returnId}))
      showMessage(`Deleted the record. Cant be undone !!`,"deleteMsg")
      clearFields()
    }
  }
  
  return (
    <>
      <Nav />
      {messageBox && <MessageBox message={message} color ={color}/>}
      <Routes>
        <Route path ="/transactions" element ={<Transactions transactions ={transactions} items ={items} persons ={persons} accountHeads ={accountHeads} user={user} addTransaction={addTransaction} updateTransaction={updateTransaction} deleteTransaction={deleteTransaction} clearFields ={clearFields}/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/person/*" element={<Person persons={persons} prayerGroups={prayerGroups} addPerson={addPerson} updatePerson ={updatePerson} deletePerson ={deletePerson} clearFields ={clearFields} />} />
        <Route path ="/accountHead/*" element={<AccountHead accountHeads = {accountHeads} accountTypes ={accountTypes} schedules={schedules} addAccountHead={addAccountHead} updateAccountHead={updateAccountHead} deleteAccountHead= {deleteAccountHead} clearFields ={clearFields} />}/>
        <Route path ="/schedule" element ={<Schedule schedules= {schedules} addSchedule={addSchedule} updateSchedule={updateSchedule} deleteSchedule={deleteSchedule} clearFields ={clearFields} />}/>
        <Route path ="/accountType" element ={<AccountType accountTypes = {accountTypes} addAccountType={addAccountType} updateAccountType={updateAccountType} deleteAccountType={deleteAccountType} clearFields ={clearFields}/>}/>
        <Route path ="/prayerGroup" element ={<PrayerGroup prayerGroups = {prayerGroups} addPrayerGroup={addPrayerGroup} updatePrayerGroup ={updatePrayerGroup} deletePrayerGroup={deletePrayerGroup} clearFields ={clearFields} />}/>
        <Route path ="/budget" element ={<Budget 
accountHeads= {accountHeads} budgets = {budgets} addBudget={addBudget} updateBudget ={updateBudget} deleteBudget={deleteBudget} clearFields ={clearFields} />}/>
        <Route path ="/user" element ={<User users = {users} addUser={addUser} updateUser ={updateUser} deleteUser={deleteUser} clearFields ={clearFields} />}/>
      </Routes>
    </>
  );
}

export default Main;
