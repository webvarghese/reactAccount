import { useEffect} from "react";
const PrayerGroupTable = ({ list,selectPrayerGroup }) => {
  
    return (
      <div className="list-table">
        <table>
          <thead>
            <tr>
              <th>PrayerGroup Id</th>
              <th>PrayerGroup Name</th>              
            </tr>
          </thead>
          <tbody>
              {list.map((input,index)=>{
                  return (
                    <tr className="selectedRow" key={index} onClick={()=>selectPrayerGroup(input.prayerGroupId)}>
                    <td>{input.prayerGroupId}</td>
                    <td>{input.prayerGroupName}</td>
                  </tr>
                  )
              })}
                
          </tbody>
        </table>
      </div>
    );
  };
  export default PrayerGroupTable;