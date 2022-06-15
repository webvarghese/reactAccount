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
  //const [subHeads, setSubHeads] = useState([])
  const [items, setItems] = useState([])
  const [budgets, setBudgets] = useState([])

  const [message, setMessage] = useState('')
  const [messageBox, setMessageBox] = useState(false)
  
  
 
  useEffect(()=>{
    const getData = async ()=>{
      const dataArray =await getAllDataArrays()
      console.log(dataArray)
      const AccountHeads = dataArray.AccountHeads.splice(0)
      const AccountTypes = dataArray.AccountTypes.splice(0)
      const Persons = dataArray.Persons.splice(0)
      const PrayerGroups = dataArray.PrayerGroups.splice(0)
      const Schedules = dataArray.Schedules.splice(0)
      //const SubHeads = dataArray.SubHeads.splice(0)
      const Transactions = dataArray.Transactions.splice(0)
      const Items = dataArray.Items.splice(0)
      const Budgets = dataArray.Budgets.splice(0)
      setAccountHeads(AccountHeads)
      setAccountTypes(AccountTypes)
      setSchedules(Schedules)
      setPersons(Persons)
      setPrayerGroups(PrayerGroups)
      setBudgets(Budgets)
      setTransactions(Transactions)
      setItems(Items)
    }
    getData()
    
  },[])
  console.log(budgets)
  const showMessage =(msg)=>{
    setMessage(msg)
    setMessageBox(true)
    setTimeout(()=>{
     setMessage("")
     setMessageBox(false) 
    },3000)
  }
  
 const addPerson =async(obj)=>{
   const objPerson = await runGoogleScript("addPerson",obj)
   if(objPerson.personId > 0){
     setPersons([...persons,objPerson])
   }
 }
  const updatePerson =async(obj)=>{
   const objPerson = await runGoogleScript("updatePerson",obj)
   if(objPerson.personId > 0){
     setPersons(persons.map((person)=>{if(person.personId === objPerson.personId){return objPerson} else {return person}}))
   }
 }
  const deletePerson = async(id)=>{
    const returnId = await runGoogleScript("deletePerson", id)
    if(returnId === id){
      setPersons(persons.filter((person)=>{ return person.personId !== returnId}))
    }
  }
  //Prayer Groups
  const addPrayerGroup =async(obj)=>{
   const objPrayerGroup = await runGoogleScript("addPrayerGroup",obj)
   if(objPrayerGroup.prayerGroupId > 0){
     setPrayerGroups([...prayerGroups,objPrayerGroup])
   }
 }
  const updatePrayerGroup =async(obj)=>{
   const objPrayerGroup = await runGoogleScript("updatePrayerGroup",obj)
   if(objPrayerGroup.prayerGroupId > 0){
     setPrayerGroups(prayerGroups.map((prayerGroup)=>{if(prayerGroup.prayerGroupId === objPrayerGroup.prayerGroupId){return objPrayerGroup} else {return prayerGroup}}))
   }
 }
  const deletePrayerGroup = async(id)=>{
    if (persons.some(person => person.prayerGroupId === id)) {
    showMessage('Cant delete !! Prayer group contains members')
      return
}
    const returnId = await runGoogleScript("deletePrayerGroup", id)
    if(returnId === id){
      setPrayerGroups([prayerGroups.filter((prayerGroup)=>{return prayerGroup.prayerGroupId !== returnId})])
    }
  }
  //Transactions 
  const addTransaction =async(obj)=>{
   const objTransaction = await runGoogleScript("addTransaction",obj)
   if(objTransaction.transactionId > 0){
     setTransactions([...transactions,objTransaction])
   }
 }
  const updateTransaction =async(obj)=>{
   const objTransaction = await runGoogleScript("updateTransaction",obj)
   if(objTransaction.transactionId > 0){
     setTransactions(transactions.map((transaction)=>{if(transaction.transactionId === objTransaction.transactionId){return objTransaction} else {return transaction}}))
     deleteItems(objTransaction.transactionId)
     addItems(objTransaction.items)
   }
 }
  const deleteTransaction = async(id)=>{
    const returnId = await runGoogleScript("deleteTransaction", id)
    if(returnId === id){
      setTransactions([transactions.filter((transaction)=>{return transaction.transactionId !== returnId})])
      deleteItems(returnId)
    }
  }

  //Items
const deleteItems = (id)=>{
  setItems([items.filter((item)=>{return item.transactionId !== id})])
} 
  const addItems =(returnItems)=>{
    setItems([...items,...returnItems])
  }

  // Schedules
  const addSchedule =async(obj)=>{
   const objSchedule = await runGoogleScript("addSchedule",obj)
   if(objSchedule.scheduleId > 0){
     setSchedules([...schedules,objSchedule])
   }
 }
  const updateSchedule =async(obj)=>{
   const objSchedule = await runGoogleScript("updateSchedule",obj)
   if(objSchedule.scheduleId > 0){
     setSchedules(schedules.map((schedule)=>{if(schedule.scheduleId === objSchedule.scheduleId){return objSchedule} else {return schedule}}))
   }
 }
  const deleteSchedule = async(id)=>{
    if (accountHeads.some(accountHead => accountHead.scheduleId === id)) {
    showMessage('Cant delete !! Schedule contains accountHeads')
      return
}
    const returnId = await runGoogleScript("deleteSchedule", id)
    if(returnId === id){
      setSchedules(schedules.filter((schedule)=>{return schedule.scheduleId !== returnId}))
    }
  }
  //account heads
  const addAccountHead =async(obj)=>{
   const objAccountHead = await runGoogleScript("addAccountHead",obj)
   if(objAccountHead.accountHeadId > 0){
     setAccountHeads([...accountHeads,objAccountHead])
   }
 }
  const updateAccountHead =async(obj)=>{
   const objAccountHead = await runGoogleScript("updateAccountHead",obj)
   if(objAccountHead.accountHeadId > 0){
     setAccountHeads(accountHeads.map((accountHead)=>{if(accountHead.accountHeadId === objAccountHead.accountHeadId){return objAccountHead} else {return accountHead}}))
   }
 }
  const deleteAccountHead = async(id)=>{
    const returnId = await runGoogleScript("deleteAccountHead", id)
    if(returnId === id){
      setAccountHeads(accountHeads.filter((accountHead)=>{ return accountHead.accountHeadId !== returnId}))
    }
  }
  
  //budgets
 const addBudget =async(obj)=>{
   const objBudget = await runGoogleScript("addBudget",obj)
   if(objBudget.budgetId > 0){
     setBudgets([...budgets,objBudget])
   }
 }
  const updateBudget =async(obj)=>{
   const objBudget = await runGoogleScript("updateBudget",obj)
   if(objBudget.budgetId > 0){
     setBudgets(budgets.map((budget)=>{if(budget.budgetId === objBudget.budgetId){return objBudget} else {return budget}}))
   }
 }
  const deleteBudget = async(id)=>{
    const returnId = await runGoogleScript("deleteBudget", id)
    if(returnId === id){
      setBudgets(budgets.filter((budget)=>{ return budget.budgetId !== returnId}))
    }
  }
  
  // account types
  const addAccountType =async(obj)=>{
   const objAccountType = await runGoogleScript("addAccountType",obj)
   if(objAccountType.accountTypeId > 0){
     setAccountTypes([...accountTypes,objAccountType])
   }
 }
  const updateAccountType =async(obj)=>{
   const objAccountType = await runGoogleScript("updateAccountType",obj)
   if(objAccountType.accountTypeId > 0){
     setAccountTypes(accountTypes.map((accountType)=>{if(accountType.accountTypeId === objAccountType.accountTypeId){return objAccountType} else {return accountType}}))
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
    }
  }
  
  return (
    <>
      <Nav />
      {messageBox && <MessageBox message={message}/>}
      <Routes>
        <Route path ="/transactions" element ={<Transactions transactions ={transactions} items ={items} persons ={persons} accountHeads ={accountHeads}/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/person/*" element={<Person persons={persons} prayerGroups={prayerGroups} addPerson={addPerson} updatePerson ={updatePerson} deletePerson ={deletePerson} />} />
        <Route path ="/accountHead/*" element={<AccountHead accountHeads = {accountHeads} accountTypes ={accountTypes} schedules={schedules} addAccountHead={addAccountHead} updateAccountHead={updateAccountHead} deleteAccountHead= {deleteAccountHead} />}/>
        <Route path ="/schedule" element ={<Schedule schedules= {schedules} addSchedule={addSchedule} updateSchedule={updateSchedule} deleteSchedule={deleteSchedule} />}/>
        <Route path ="/accountType" element ={<AccountType accountTypes = {accountTypes} addAccountType={addAccountType} updateAccountType={updateAccountType} deleteAccountType={deleteAccountType}/>}/>
        <Route path ="/prayerGroup" element ={<PrayerGroup prayerGroups = {prayerGroups} addPrayerGroup={addPrayerGroup} updatePrayerGroup ={updatePrayerGroup} deletePrayerGroup={deletePrayerGroup} />}/>
        <Route path ="/budget" element ={<Budget 
accountHeads= {accountHeads} budgets = {budgets} addBudget={addBudget} updateBudget ={updateBudget} deleteBudget={deleteBudget} />}/>
      </Routes>
    </>
  );
}

export default Main;
