import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"
import Transactions from "./Transactions/Transactions";
import About from "./About";
import Person from './Person/Person'
import AccountHead from './AccountHeads/AccountHead' 
import Schedule from './Schedules/Schedule'
import AccountType from './AccountTypes/AccountType'
import SubHead from './SubHeads/SubHead'
import Nav from "./Nav";
import { getAllDataArrays } from "./Utilities"

function Main() {
  const [accountHeads, setAccountHeads] = useState([])
  const [accountTypes, setAccountTypes] = useState([])
  const [schedules, setSchedules] = useState([])
  const [persons, setPersons] = useState([])
  const [prayerGroups, setPrayerGroups] = useState([])
  const [transactions, setTransactions] = useState([])
  const [subHeads, setSubHeads] = useState([])
  const [items, setItems] = useState([])
  const [budgets, setBudgets] = useState([])
  
  
 
  useEffect(()=>{
    const getData = async ()=>{
      const dataArray =await getAllDataArrays()
      const AccountHeads = dataArray.AccountHeads.splice(0)
      // const AccountTypes = dataArray.AccountTypes.splice(0)
      // const Persons = dataArray.Persons.splice(0)
      // const PrayerGroups = dataArray.PrayerGroups.splice(0)
      // const Schedules = dataArray.Schedules.splice(0)
      // const SubHeads = dataArray.SubHeads.splice(0)
      // const Transactions = dataArray.Transactions.splice(0)
      // const Items = dataArray.Items.splice(0)
      // const Budgets = dataArray.Budgets.splice(0)
      setAccountHeads(AccountHeads)
      // setAccountTypes(AccountTypes)
      // setSchedules(Schedules)
      // setPersons(Persons)
      // setPrayerGroups(PrayerGroups)
      // setSubHeads(SubHeads)
      // setTransactions(Transactions)
      // setItems(Items)
      // setBudgets(Budgets)
    }
    getData()
  },[])
  console.log(accountHeads)
  return (
    <>
      <Nav />
      <Routes>
        <Route path ="/transactions" element ={<Transactions transactions ={transactions} items ={items} persons ={persons} accountHeads ={accountHeads}/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/person/*" element={<Person persons={persons} prayerGroups={prayerGroups}/>} />
        <Route path ="/accountHead/*" element={<AccountHead accountHeads = {accountHeads} accountTypes ={accountTypes} schedules={schedules} />}/>
        <Route path ="/schedule" element ={<Schedule schedules= {schedules}/>}/>
        <Route path ="/accountType" element ={<AccountType accountTypes = {accountTypes}/>}/>
        <Route path ="/subHead" element ={<SubHead subHeads = {subHeads}/>}/>
      </Routes>
    </>
  );
}

export default Main;
