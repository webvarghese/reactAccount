

import { useState, useEffect, useCallback } from "react";
import SubHeadTab from "./SubHeadTab";
import SubHeadTable from "./SubHeadTable";

function SubHeadRightPanel({ list, setSubHead}) {
  const [searchList, setSearchList] = useState([]);
  useCallback(()=>{
    
  },[list])
  
  useEffect(() => {
    setSearchList(list);
    filterList('')
  }, [list]);

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
      <SubHeadTab onSearch={filterList}  />
      <SubHeadTable inputList={searchList} selectSubHead={setSubHead}/>
    </div>
  );
}

export default SubHeadRightPanel;