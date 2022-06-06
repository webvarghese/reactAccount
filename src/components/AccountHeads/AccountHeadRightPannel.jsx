
import AccountHeadTable from "./AccountHeadTable";
import { useState, useEffect, useMemo } from "react";
import AccountHeadTab from "./AccountHeadTab";


function AccountHeadRightPanel({accountHeadList, accountTypeList, scheduleList, setAccountHead}) {
  const [searchList, setSearchList] = useState([]);
  const [list, setList]  = useState([])


 

  
 
  useEffect(()=>{
    const fillList =()=>{
      const newList = []
      accountHeadList.map((accHead)=>{
        const objAcHead = new Object({})
        const scheduleName = accHead.scheduleId > 0 ? scheduleList.filter((sch)=>sch.scheduleId === accHead.scheduleId)[0].scheduleName :"Not set"
        const accountType = accHead.accountTypeId > 0 ? accountTypeList.filter((accTyp)=>accTyp.accountTypeId === accHead.accountTypeId)[0].accountTypeName : "Not set"
        objAcHead.accountHeadId = accHead.accountHeadId
        objAcHead.scheduleName = scheduleName
        objAcHead.accountTypeName = accountType
        objAcHead.accountHeadName = accHead.accountHeadName
        newList.push(objAcHead)
      })
      setList(newList)
    }
    fillList()
  },[accountHeadList])

  useEffect(()=>{
    setSearchList(list)
    },[list])

  const filterList = (str) => {
    if (str.length > 1) {
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
 
  return (
    <div className="right-panel">
      <AccountHeadTab onSearch={filterList}  />
      <AccountHeadTable inputList ={searchList}
      selectAccountHead={setAccountHead}/>
    </div>
  );
}

export default AccountHeadRightPanel;