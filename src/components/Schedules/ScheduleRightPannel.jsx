

import { useState, useEffect, useCallback } from "react";
import ScheduleTab from "./ScheduleTab";
import ScheduleTable from "./ScheduleTable";

function ScheduleRightPanel({ schedules, selectSchedule}) {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(()=>{
    setFilteredList(schedules)
  },[schedules])
  
  const filterList = (str) => {
    if (str.length > 1) {
      setFilteredList(
        schedules.filter(
          (data) =>
            JSON.stringify(data).toLowerCase().indexOf(str.toLowerCase()) !== -1
        )
      );
    } else {
      setFilteredList(schedules);
    }
  };
 
  return (
    <div className="right-panel">
      <ScheduleTab filterList={filterList}  />
      <ScheduleTable list={filteredList} selectSchedule={selectSchedule}/>
    </div>
  );
}

export default ScheduleRightPanel;