
import { useEffect, useState } from "react";
const AddPerson = ({addPerson,updatePerson, deletePerson, person}) => {
  const [personId, setPersonId] = useState("");
  const [personName, setPersonName] = useState('')
  const [personAddress, setPersonAddress] = useState("");

  const clearPerson =()=>{
    setPersonId("")
    setPersonName('')
    setPersonAddress('')
  }

  useEffect(()=>{
    clearPerson()
    showPerson(person)
  },[person])

  const showPerson=(person)=>{
    if(person.personId > 0){
      setPersonId(person.personId)
      setPersonName(person.personName)
      setPersonAddress(person.personAddress)
    }
  }
  return (
    <>
      
      <div className="add-form">
        <div className="form-control">
          <label>Person Id</label>
          <input
            type="text"
            readOnly={true}
            placeholder="personId"
            value={personId}
            onChange={(e) => setPersonId(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Person Name</label>
          <input
            type="text"
            placeholder="Person Name"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Person Address</label>
          <input
            type="text"
            placeholder="Person Address"
            value={personAddress}
            onChange={(e) => setPersonAddress(e.target.value)} 
          />
        </div>
        <div className="button-block">
            <button className="btn-add" onClick={()=>addPerson({personName,personAddress})}>Add</button>
            <button className="btn-update" onClick={()=>updatePerson({personId,personName,personAddress})}>Update</button>
            <button className="btn-clear" onClick={clearPerson}>Clear</button>
            <button className="btn-delete" onClick={()=>deletePerson(personId)}>Delete</button>
        </div>
        
      </div>
    </>
  );
};
export default AddPerson;