
import AddSchedule from "./AddSchedule"
function ScheduleLeftPanel({addSchedule,updateSchedule,deleteSchedule,selectedSchedule}) {
  
  return (
    <div className="left-panel">
      <AddSchedule addSchedule={addSchedule} updateSchedule ={updateSchedule} deleteSchedule={deleteSchedule} selectedSchedule={selectedSchedule} />
    </div>
  );
}

export default ScheduleLeftPanel;