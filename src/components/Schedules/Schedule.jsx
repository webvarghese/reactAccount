import ScheduleRightPanel from "./ScheduleRightPannel";
import ScheduleLeftPanel from "./ScheduleLeftPannel"
import {useState, useEffect} from 'react'

const Schedule = ({schedules,addSchedule,updateSchedule,deleteSchedule}) => {
  
  const [selectedSchedule, setSelectedSchedule] = useState('')
  const selectSchedule =(id)=>{
    const objSchedule = schedules.filter((schedule)=>{
      return schedule.scheduleId === id
    })[0]
    setSelectedSchedule(objSchedule)
  }

  
  return (
    <div className="container">
      <ScheduleLeftPanel addSchedule={addSchedule} updateSchedule={updateSchedule} deleteSchedule={deleteSchedule} selectedSchedule={selectedSchedule}/>
      <ScheduleRightPanel schedules={schedules} selectSchedule={selectSchedule} />
    </div>
  );
};
export default Schedule;