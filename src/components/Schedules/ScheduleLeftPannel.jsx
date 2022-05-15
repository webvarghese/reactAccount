
import AddSchedule from "./AddSchedule"
function ScheduleLeftPanel({addSchedule,updateSchedule,deleteSchedule,schedule}) {
  
  return (
    <div className="left-panel">
      <AddSchedule addSchedule={addSchedule} updateSchedule ={updateSchedule} deleteSchedule={deleteSchedule} schedule={schedule} />
    </div>
  );
}

export default ScheduleLeftPanel;