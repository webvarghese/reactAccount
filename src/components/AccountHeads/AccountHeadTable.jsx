import { useEffect, useState} from "react";
const AccountHeadTable = ({ list,selectAccountHead }) => {
  
    return (
      <div className="list-table">
        <table>
          <thead>
            <tr>
              <th>Account head Id</th>
              <th>Schedule Name</th>
              <th>Account Type</th>
              <th>Account Head Name</th>              
            </tr>
          </thead>
          <tbody>
              {list.length > 0 && list.map((input,index)=>{
                  return (
                    <tr className="selectedRow" key={index} onClick={()=>selectAccountHead(input.accountHeadId)}>
                    <td>{input.accountHeadId}</td>
                    <td>{input.scheduleName}</td>
                    <td>{input.accountTypeName}</td>
                    <td>{input.accountHeadName}</td>
                  </tr>
                  )
              })}
                
          </tbody>
        </table>
      </div>
    );
  };
  export default AccountHeadTable;