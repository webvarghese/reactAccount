
import { useEffect, useState } from "react";
const AddSchedule = ({addSchedule,updateSchedule, deleteSchedule, selectedSchedule}) => {
  const [scheduleId, setScheduleId] = useState("");
  const [scheduleName, setScheduleName] = useState("");

  const clearSchedule =()=>{
    setScheduleId("")
    setScheduleName("")
  }

  useEffect(()=>{
    clearSchedule()
    fillSchedule(selectedSchedule)
  },[selectedSchedule])
  
  const fillSchedule = (schedule)=>{
    setScheduleId(schedule.scheduleId)
    setScheduleName(schedule.scheduleName)
  }
  
  return (
    <>
      <div className="add-form">
        <div className="form-control">
          <label>Schedule Id</label>
          <input
            type="text"
            readOnly={true}
            placeholder="Schedule Id"
            value={scheduleId}
            onChange={(e) => setScheduleId(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Schedule Name</label>
          <input
            type="text"
            placeholder="Schedule Name"
            value={scheduleName}
            onChange={(e) => setScheduleName(e.target.value)} 
          />
        </div>
        <div className="button-block">
            <button className="btn-add" onClick={()=>addSchedule({scheduleName})}>Add</button>
            <button className="btn-update" onClick={()=>updateSchedule({scheduleId,scheduleName})}>Update</button>
            <button className="btn-clear" onClick={clearSchedule}>Clear</button>
            <button className="btn-delete" onClick={()=>deleteSchedule(scheduleId)}>Delete</button>
        </div>
        
      </div>
    </>
  );
};
export default AddSchedule;