import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import TransactionRightTab from "./TransactionRightTab";
import TransactionTable from "./TransactionTable";

function TransactionRightPanel({transactions, accountHeads, items, persons, selectTransaction}) {
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([]);
  useEffect(()=>{
    const combinedList = transactions.map((transaction)=>{
        const objTransaction = {}
        objTransaction.transactionId = transaction.transactionId
        const inputDate = new Date(transaction.transactionDate).toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric"
        });
        objTransaction.transactionDate = inputDate
        objTransaction.transactionBillNo = transaction.transactionBillNo
        if(transaction.personId > 0){
          const person = persons.filter((perso)=>perso.personId === transaction.personId)[0]
          const personDetails = person.personName + ", " + person.personAddress
          objTransaction.person = personDetails
        }
        const transactionItems = items.filter((item)=>item.transactionId === transaction.transactionId)
        .map((i)=>{
          const objItem ={}
          objItem.itemId = i.itemId
          if(i.accountHeadId > 0){
            const accountHead = accountHeads.filter((accountHead)=>accountHead.accountHeadId === i.accountHeadId)[0].accountHeadName
            objItem.accountHeadName = accountHead
          }
          objItem.amount = i.amount
          objItem.details = i.details
          return objItem
        })
        objTransaction.transactionItems = transactionItems
        objTransaction.transactionBy = transaction.transactionBy
        objTransaction.transactionBankDetails = transaction.transactionBankDetails
        const savedDate = new Date(transaction.savedTimeStamp).toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric"
        });
        objTransaction.savedTimeStamp = savedDate
        objTransaction.user = transaction.userName
        return objTransaction
    })
    setList(combinedList)
    setFilteredList(combinedList)
  },[transactions])

  const filterList = (str) => {
    if (str.length > 0) {
      setFilteredList(
        list.filter(
          (data) =>
            JSON.stringify(data).toLowerCase().indexOf(str.toLowerCase()) !== -1
        )
      );
    } else {
      setFilteredList(list);
    }
  };
  const searchByDate = (fromDate, toDate) => {
    let startDate = fromDate ? new Date(fromDate) : new Date();
    let thisDate = new Date();
    let endDate = toDate ? new Date(toDate) : new Date();
    startDate = startDate <= endDate ? startDate : thisDate;
    endDate = endDate <= thisDate ? endDate : thisDate;
   
    // setSearchList(list.filter((item)=>{
    //   const itemDate = new Date(item.date)
    //   return itemDate >= startDate && itemDate <= endDate
    // }))
  };
  return (
    <div className="right-panel">
      <TransactionRightTab onSearch={filterList} />
      <TransactionTable list={filteredList} selectTransaction={selectTransaction} />
    </div>
  );
}

export default TransactionRightPanel;
