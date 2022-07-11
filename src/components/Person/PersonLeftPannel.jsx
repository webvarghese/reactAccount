
import AddPerson from "./AddPerson"
function PersonLeftPanel({prayerGroups, addPerson,updatePerson,deletePerson,selectedPerson, clearFields}) {
  
  return (
    <div className="left-panel">
      <AddPerson prayerGroups={prayerGroups} addPerson={addPerson} updatePerson ={updatePerson} deletePerson={deletePerson} selectedPerson={selectedPerson} clearFields ={clearFields} />
    </div>
  );
}

export default PersonLeftPanel;