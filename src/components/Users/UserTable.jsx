import { useEffect} from "react";
const UserTable = ({ list,selectUser }) => {
  
    return (
      <div className="list-table">
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>User Name</th> 
              <th>Password</th>             
            </tr>
          </thead>
          <tbody>
              {list.map((input,index)=>{
                  return (
                    <tr className="selectedRow" key={index} onClick={()=>selectUser(input.userId)}>
                    <td>{input.userId}</td>
                    <td>{input.userName}</td>
                    <td>{input.password}</td>
                  </tr>
                  )
              })}
                
          </tbody>
        </table>
      </div>
    );
  };
  export default UserTable;