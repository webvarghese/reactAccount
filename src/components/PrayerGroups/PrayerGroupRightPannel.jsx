

import { useState, useEffect, useCallback } from "react";
import PrayerGroupTab from "./PrayerGroupTab";
import PrayerGroupTable from "./PrayerGroupTable";

function PrayerGroupRightPanel({ prayerGroups, selectPrayerGroup}) {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(()=>{
    setFilteredList(prayerGroups)
  },[prayerGroups])
  
  const filterList = (str) => {
    if (str.length > 1) {
      setFilteredList(
        prayerGroups.filter(
          (data) =>
            JSON.stringify(data).toLowerCase().indexOf(str.toLowerCase()) !== -1
        )
      );
    } else {
      setFilteredList(prayerGroups);
    }
  };
 
  return (
    <div className="right-panel">
      <PrayerGroupTab filterList={filterList}  />
      <PrayerGroupTable list={filteredList} selectPrayerGroup={selectPrayerGroup}/>
    </div>
  );
}

export default PrayerGroupRightPanel;