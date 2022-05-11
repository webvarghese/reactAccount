
import AddPerson from "./AddPerson"
function PersonLeftPanel({addPerson,updatePerson,deletePerson,person}) {
  
  return (
    <div className="left-panel">
      <AddPerson addPerson={addPerson} updatePerson ={updatePerson} deletePerson={deletePerson} person={person} />
    </div>
  );
}

export default PersonLeftPanel;