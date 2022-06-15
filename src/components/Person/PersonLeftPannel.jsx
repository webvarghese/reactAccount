
import AddPerson from "./AddPerson"
function PersonLeftPanel({prayerGroups, addPerson,updatePerson,deletePerson,selectedPerson}) {
  
  return (
    <div className="left-panel">
      <AddPerson prayerGroups={prayerGroups} addPerson={addPerson} updatePerson ={updatePerson} deletePerson={deletePerson} selectedPerson={selectedPerson} />
    </div>
  );
}

export default PersonLeftPanel;