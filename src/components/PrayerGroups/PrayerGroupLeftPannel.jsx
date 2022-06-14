import AddPrayerGroup from "./AddPrayerGroup"
function PrayerGroupLeftPanel({addPrayerGroup,updatePrayerGroup,deletePrayerGroup,selectedPrayerGroup}) {
  
  return (
    <div className="left-panel">
      <AddPrayerGroup addPrayerGroup={addPrayerGroup} updatePrayerGroup ={updatePrayerGroup} deletePrayerGroup={deletePrayerGroup} selectedPrayerGroup={selectedPrayerGroup} />
    </div>
  );
}

export default PrayerGroupLeftPanel;