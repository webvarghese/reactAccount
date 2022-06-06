import { useEffect} from "react";
const AccountTypeTable = ({ inputList,selectAccountType }) => {
  useEffect(()=>{

  },[inputList])
    return (
      <div className="list-table">
        <table>
          <thead>
            <tr>
              <th>AccountType Id</th>
              <th>AccountType</th>              
            </tr>
          </thead>
          <tbody>
              {inputList.map((input,index)=>{
                  return (
                    <tr className="selectedRow" key={index} onClick={()=>selectAccountType(input.accountTypeId)}>
                    <td>{input.accountTypeId}</td>
                    <td>{input.accountTypeName}</td>
                  </tr>
                  )
              })}
                
          </tbody>
        </table>
      </div>
    );
  };
  export default AccountTypeTable;