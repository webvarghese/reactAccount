
import AccountHeadTable from "./AccountHeadTable";
import { useState, useEffect, useMemo } from "react";
import AccountHeadTab from "./AccountHeadTab";


function AccountHeadRightPanel({accountHeads, accountTypes, schedules,selectAccountHead}) {
  const [filteredList, setFilteredList] = useState([]);
  const [list, setList]  = useState([])
 
  useEffect(()=>{
    const fillList =()=>{
      const newList = []
      accountHeads.map((accHead)=>{
        const objAcHead = new Object({})
        const scheduleName = accHead.scheduleId > 0 ? schedules.filter((sch)=>sch.scheduleId === accHead.scheduleId)[0].scheduleName :"Not set"
        const accountType = accHead.accountTypeId > 0 ? accountTypes.filter((accTyp)=>accTyp.accountTypeId === accHead.accountTypeId)[0].accountTypeName : "Not set"
        objAcHead.accountHeadId = accHead.accountHeadId
        objAcHead.scheduleName = scheduleName
        objAcHead.accountTypeName = accountType
        objAcHead.accountHeadName = accHead.accountHeadName
        newList.push(objAcHead)
      })
      setList(newList)
    }
    fillList()
  },[accountHeads])

  useEffect(()=>{
    setFilteredList(list)
    },[list])

  const filterList = (str) => {
    if (str.length > 1) {
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
 
  return (
    <div className="right-panel">
      <AccountHeadTab filterList={filterList}  />
      <AccountHeadTable list ={filteredList}
      selectAccountHead={selectAccountHead}/>
    </div>
  );
}

export default AccountHeadRightPanel;