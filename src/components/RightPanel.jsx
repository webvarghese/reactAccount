import { Routes, Route } from "react-router-dom";
import Table from "./Table";
import { useState, useEffect, useCallback } from "react";

import Tab from "./Tab";

function RightPanel({ list }) {
  const [searchList, setSearchList] = useState([]);
  useCallback(()=>{
    setSearchList(list);
  },[list])
  useEffect(() => {
    setSearchList(list)
  }, [list,setSearchList]);

  const filterList = (str) => {
    console.log(str);
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
    console.log(startDate, endDate);
    // setSearchList(list.filter((item)=>{
    //   const itemDate = new Date(item.date)
    //   return itemDate >= startDate && itemDate <= endDate
    // }))
  };
  return (
    <div className="right-panel">
      <Tab onSearch={filterList} searchByDate={searchByDate} />
      <Routes>
        <Route path="/some" element={<Table inputList={searchList} />} />
        <Route path="/somemore" element={<Table inputList={searchList} />} />
      </Routes>
    </div>
  );
}

export default RightPanel;
