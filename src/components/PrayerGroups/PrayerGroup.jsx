import PrayerGroupRightPanel from "./PrayerGroupRightPannel";
import PrayerGroupLeftPanel from "./PrayerGroupLeftPannel"
import {useState, useEffect} from 'react'

const PrayerGroup = ({prayerGroups,addPrayerGroup,updatePrayerGroup,deletePrayerGroup}) => {
  
  const [selectedPrayerGroup, setSelectedPrayerGroup] = useState('')
  const selectPrayerGroup =(id)=>{
    const objPrayerGroup = prayerGroups.filter((prayerGroup)=>{
      return prayerGroup.prayerGroupId === id
    })[0]
    setSelectedPrayerGroup(objPrayerGroup)
  }

  
  return (
    <div className="container">
      <PrayerGroupLeftPanel addPrayerGroup={addPrayerGroup} updatePrayerGroup={updatePrayerGroup} deletePrayerGroup={deletePrayerGroup} selectedPrayerGroup={selectedPrayerGroup}/>
      <PrayerGroupRightPanel prayerGroups={prayerGroups} selectPrayerGroup={selectPrayerGroup} />
    </div>
  );
};
export default PrayerGroup;