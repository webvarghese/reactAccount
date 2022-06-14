import { useEffect, useState } from "react";
const AddPrayerGroup = ({addPrayerGroup,updatePrayerGroup, deletePrayerGroup, selectedPrayerGroup}) => {
  const [prayerGroupId, setPrayerGroupId] = useState("");
  const [prayerGroupName, setPrayerGroupName] = useState("");

  const clearPrayerGroup =()=>{
    setPrayerGroupId("")
    setPrayerGroupName("")
  }

  useEffect(()=>{
    clearPrayerGroup()
    setPrayerGroupId(selectedPrayerGroup.prayerGroupId)
    setPrayerGroupName(selectedPrayerGroup.prayerGroupName)
  },[selectedPrayerGroup])
  
  return (
    <>
      <div className="add-form">
        <div className="form-control">
          <label>PrayerGroup Id</label>
          <input
            type="text"
            readOnly={true}
            placeholder="PrayerGroup Id"
            value={prayerGroupId}
            onChange={(e) => setPrayerGroupId(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>PrayerGroup Name</label>
          <input
            type="text"
            placeholder="PrayerGroup Name"
            value={prayerGroupName}
            onChange={(e) => setPrayerGroupName(e.target.value)} 
          />
        </div>
        <div className="button-block">
            <button className="btn-add" onClick={()=>addPrayerGroup({prayerGroupName})}>Add</button>
            <button className="btn-update" onClick={()=>updatePrayerGroup({prayerGroupId,prayerGroupName})}>Update</button>
            <button className="btn-clear" onClick={clearPrayerGroup}>Clear</button>
            <button className="btn-delete" onClick={()=>deletePrayerGroup(prayerGroupId)}>Delete</button>
        </div>
        
      </div>
    </>
  );
};
export default AddPrayerGroup;