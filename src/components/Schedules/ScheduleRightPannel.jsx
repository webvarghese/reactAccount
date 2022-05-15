

import { useState, useEffect, useCallback } from "react";
import ScheduleTab from "./ScheduleTab";
import ScheduleTable from "./ScheduleTable";

function ScheduleRightPanel({ list, setSchedule}) {
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
      <ScheduleTab onSearch={filterList}  />
      <ScheduleTable inputList={searchList} selectSchedule={setSchedule}/>
    </div>
  );
}

export default ScheduleRightPanel;