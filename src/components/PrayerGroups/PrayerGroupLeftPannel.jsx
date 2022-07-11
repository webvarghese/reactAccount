import AddPrayerGroup from "./AddPrayerGroup"
function PrayerGroupLeftPanel({addPrayerGroup,updatePrayerGroup,deletePrayerGroup,selectedPrayerGroup, clearFields}) {
  
  return (
    <div className="left-panel">
      <AddPrayerGroup addPrayerGroup={addPrayerGroup} updatePrayerGroup ={updatePrayerGroup} deletePrayerGroup={deletePrayerGroup} selectedPrayerGroup={selectedPrayerGroup} clearFields ={clearFields} />
    </div>
  );
}

export default PrayerGroupLeftPanel;