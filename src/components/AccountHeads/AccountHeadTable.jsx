import { useEffect} from "react";
const AccountHeadTable = ({ inputList,selectAccountHead }) => {
  useEffect(()=>{

  },[inputList])
    return (
      <div className="list-table">
        <table>
          <thead>
            <tr>
              <th>Account head Id</th>
              <th>Account Head Type</th>
              <th>Account Head Name</th>              
            </tr>
          </thead>
          <tbody>
              {inputList.map((input,index)=>{
                  return (
                    <tr className="selectedRow" key={index} onClick={()=>selectAccountHead(input.accountHeadId)}>
                    <td>{input.accountHeadId}</td>
                    <td>{input.accountHeadType}</td>
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