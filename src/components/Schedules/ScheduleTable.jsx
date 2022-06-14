import { useEffect} from "react";
const ScheduleTable = ({ list,selectSchedule }) => {
  
    return (
      <div className="list-table">
        <table>
          <thead>
            <tr>
              <th>Schedule Id</th>
              <th>Schedule Name</th>              
            </tr>
          </thead>
          <tbody>
              {list.map((input,index)=>{
                  return (
                    <tr className="selectedRow" key={index} onClick={()=>selectSchedule(input.scheduleId)}>
                    <td>{input.scheduleId}</td>
                    <td>{input.scheduleName}</td>
                  </tr>
                  )
              })}
                
          </tbody>
        </table>
      </div>
    );
  };
  export default ScheduleTable;