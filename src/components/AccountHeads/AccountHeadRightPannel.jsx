
import AccountHeadTable from "./AccountHeadTable";
import { useState, useEffect, useCallback } from "react";
import AccountHeadTab from "./AccountHeadTab";

function AccountHeadRightPanel({ list, setAccountHead}) {
  const [searchList, setSearchList] = useState([]);
  useCallback(()=>{
    
  },[list])
  
  useEffect(() => {
    setSearchList(list);
    filterList('')
  }, [list]);

  const filterList = (str) => {
    console.log(str);
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
      <AccountHeadTable inputList={searchList} selectAccountHead={setAccountHead}/>
    </div>
  );
}

export default AccountHeadRightPanel;