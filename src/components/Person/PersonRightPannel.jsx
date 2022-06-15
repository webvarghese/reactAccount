
import PersonTable from "./PersonTable";
import { useState, useEffect, useCallback } from "react";
import PersonTab from "./PersonTab";

function PersonRightPanel({ persons, prayerGroups, selectPerson}) {
  const [filteredList, setFilteredList] = useState([]);
  const [list,setList] = useState([])
  
  useEffect(() => {
    const combinedList = persons.map((person)=>{
      const newObj = {}
      newObj.personId = person.personId
      newObj.personName = person.personName
      newObj.personAddress = person.personAddress
      if(person.prayerGroupId > 0){
        newObj.prayerGroupId = person.prayerGroupId
        const prayerGroupName = prayerGroups.filter((prayerGroup)=>prayerGroup.prayerGroupId === person.prayerGroupId)[0].prayerGroupName
      console.log(prayerGroupName)
      newObj.prayerGroupName = prayerGroupName
      }
      return newObj
    })
    console.log(combinedList)
    setList(combinedList);
  }, [persons]);
  
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
      <PersonTab filterList={filterList}  />
      <PersonTable list={filteredList} selectPerson={selectPerson}/>
    </div>
  );
}

export default PersonRightPanel;