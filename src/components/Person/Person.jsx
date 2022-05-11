import PersonRightPanel from "./PersonRightPannel";
import PersonLeftPanel from "./PersonLeftPannel"
import {useState, useEffect} from 'react'

const Person = () => {
  const [personList,setPersonList] = useState([])
  const [perso, setPerso] = useState('')
  

  useEffect(()=>{
    google.script.run.withSuccessHandler((list)=>{
        setPersonList(list)   
      }).getPersons();
  },[])

  
 
  const addPerson =(objPerson)=>{
    google.script.run.withSuccessHandler((d)=>{
      if(d.personId > 1){
        setPersonList([...personList,d]) 
      } else {
        alert('Error while adding person')
      }
        
      }).addPerson(objPerson);      
  }
  
  const updatePerson = (objPerson)=>{
    google.script.run.withSuccessHandler((d)=>{
      if(d.personId > 0){
        setPersonList(personList.map((person)=>{
          if(person.personId === objPerson.personId){
            return d
          } else {
            return person
          }
        }))
      } else {
        alert("Error while updating the person")
      }
    }).updatePerson(objPerson);
  }
  
  

  const deletePerson = (id)=>{
      google.script.run.withSuccessHandler((id)=>{
        if(id > 0){
          setPersonList(personList.filter((person)=>{
            return person.personId !== id
          }))
        } else {
          alert("Error while deleting person")
        }
      }).deletePerson(id)
  }
  const setPerson =(id)=>{
    const person = personList.filter((person)=>person.personId=== id)[0]
    setPerso(person)
  }
  return (
    <div className="container">
      <PersonLeftPanel addPerson={addPerson} updatePerson={updatePerson} deletePerson ={deletePerson} person={perso}/>
      <PersonRightPanel list={personList} setPerson={setPerson} />
    </div>
  );
};
export default Person;