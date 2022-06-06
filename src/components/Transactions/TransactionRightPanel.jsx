import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import TransactionRightTab from "./TransactionRightTab";
import TransactionTable from "./TransactionTable";

function TransactionRightPanel({dataArray, setTransaction}) {
  const [searchList, setSearchList] = useState([]);
  const list = dataArray.Transactions
  useCallback(()=>{
    setSearchList([...list]);
  },[dataArray])
  useEffect(() => {
    setSearchList([...list])
  }, [dataArray,setSearchList]);

  const filterList = (str) => {
    if (str.length > 0) {
      setSearchList(
        list.filter(
          (data) =>
            JSON.stringify(data).toLowerCase().indexOf(str.toLowerCase()) !== -1
        )
      );
    } else {
      setSearchList(list);
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
      <TransactionRightTab onSearch={filterList} searchByDate={searchByDate} />
      <TransactionTable inputList={searchList} selectTransaction={setTransaction} />
    </div>
  );
}

export default TransactionRightPanel;
