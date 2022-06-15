import PersonRightPanel from "./PersonRightPannel";
import PersonLeftPanel from "./PersonLeftPannel"
import {useState} from 'react'

const Person = ({persons, prayerGroups, addPerson, updatePerson, deletePerson}) => {
   
  const [selectedPerson, setSelectedPerson] = useState('')
 
  const selectPerson =(id)=>{
    const person = persons.filter((person)=>person.personId=== id)[0]
    setSelectedPerson(person)
  }
  return (
    <div className="container">
      <PersonLeftPanel prayerGroups = {prayerGroups} addPerson={addPerson} updatePerson={updatePerson} deletePerson ={deletePerson} selectedPerson={selectedPerson}/>
      <PersonRightPanel persons={persons} prayerGroups ={prayerGroups} selectPerson={selectPerson} />
    </div>
  );
};
export default Person;