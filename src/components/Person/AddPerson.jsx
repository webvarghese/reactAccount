
import { useEffect, useState } from "react";
import MultiOptionInput from "../MultiOptionInput"
const AddPerson = ({prayerGroups, addPerson,updatePerson, deletePerson, selectedPerson}) => {
  const [personId, setPersonId] = useState("");
  const [personName, setPersonName] = useState('')
  const [personAddress, setPersonAddress] = useState("");
  const [prayerGroupId, setPrayerGroupId] = useState("")
  const [prayerGroupName, setPrayerGroupName] = useState("")
  const [prayerGroupList, setPrayerGroupList] = useState([])

  const clearPerson =()=>{
    setPersonId("")
    setPersonName('')
    setPersonAddress('')
    setPrayerGroupId("")
    setPrayerGroupName("")
  }

  useEffect(()=>{
    clearPerson()
    showPerson(selectedPerson)
  },[selectedPerson])

  useEffect(()=>{
    console.log(prayerGroups)
    setPrayerGroupList(prayerGroups.map((prayerGroup)=>{
      const objPrayerGroup = {}
      objPrayerGroup.idField = prayerGroup.prayerGroupId
      objPrayerGroup.textField = prayerGroup.prayerGroupName
      return objPrayerGroup
    }))
  },[prayerGroups])

  const showPerson=(person)=>{
    if(person.personId > 0){
      setPersonId(person.personId)
      setPersonName(person.personName)
      setPersonAddress(person.personAddress)
      setPrayerGroupId(person.prayerGroupId)
      if(person.prayerGroupId > 0){
        const prayerGroupName = prayerGroups.filter((prayerGroup)=>prayerGroup.prayerGroupId === person.prayerGroupId)[0].prayerGroupName
      setPrayerGroupName(prayerGroupName)
      }
      
    }
  }
  const fillPrayerGroup =(prayerGroup)=>{
    setPrayerGroupId(prayerGroup.idField)
    setPrayerGroupName(prayerGroup.textField)
  }
  const displayPrayerGroupName = (str)=>{
    setPrayerGroupName(str)
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
        <div className="form-control">
          <label>Prayer Group</label>
          <MultiOptionInput promptList ={prayerGroupList} 
          textField={prayerGroupName} 
          idField={prayerGroupId} 
          fillText = {fillPrayerGroup}
          displayText={displayPrayerGroupName}
          />
        </div>
        <div className="button-block">
            <button className="btn-add" onClick={()=>addPerson({personName,personAddress,prayerGroupId})}>Add</button>
            <button className="btn-update" onClick={()=>updatePerson({personId,personName,personAddress,prayerGroupId})}>Update</button>
            <button className="btn-clear" onClick={clearPerson}>Clear</button>
            <button className="btn-delete" onClick={()=>deletePerson(personId)}>Delete</button>
        </div>
        
      </div>
    </>
  );
};
export default AddPerson;