import ScheduleRightPanel from "./ScheduleRightPannel";
import ScheduleLeftPanel from "./ScheduleLeftPannel"
import {useState, useEffect} from 'react'

const Schedule = ({dataArray}) => {
  const [scheduleList,setScheduleList] = useState([])
  const [sch, setSch] = useState('')
  

  const temp = dataArray.Schedules
  useEffect(()=>{
   setScheduleList([...temp])
  },[dataArray])

  
 
  const addSchedule =(objSchedule)=>{
    google.script.run.withSuccessHandler((d)=>{
      if(d.scheduleId > 0){
        setScheduleList([...scheduleList,d]) 
      } else {
        alert('Error while adding Schedule')
      }
        
      }).addSchedule(objSchedule);      
  }
  
  const updateSchedule = (objSchedule)=>{
    google.script.run.withSuccessHandler((d)=>{
      if(d.scheduleId > 0){
        setScheduleList(scheduleList.map((schedule)=>{
          if(schedule.scheduleId === objSchedule.scheduleId){
            return d
          } else {
            return schedule
          }
        }))
      } else {
        alert("Error while updating the Schedule")
      }
    }).updateSchedule(objSchedule);
  }
  
  

  const deleteSchedule = (id)=>{
      google.script.run.withSuccessHandler((id)=>{
        if(id > 0){
          setScheduleList(scheduleList.filter((schedule)=>{
            return schedule.scheduleId !== id
          }))
        } else {
          alert("Error while deleting Schedule")
        }
      }).deleteSchedule(id)
  }
  const setSchedule =(id)=>{
    const schedule = scheduleList.filter((schedule)=>schedule.scheduleId=== id)[0]
    setSch(schedule)
  }
  return (
    <div className="container">
      <ScheduleLeftPanel addSchedule={addSchedule} updateSchedule={updateSchedule} deleteSchedule={deleteSchedule} schedule={sch}/>
      <ScheduleRightPanel list={scheduleList} setSchedule={setSchedule} />
    </div>
  );
};
export default Schedule;