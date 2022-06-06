import { useEffect} from "react";
const SubHeadTable = ({ inputList,selectSubHead }) => {
  useEffect(()=>{

  },[inputList])
    return (
      <div className="list-table">
        <table>
          <thead>
            <tr>
              <th>SubHead Id</th>
              <th>SubHead Name</th>              
            </tr>
          </thead>
          <tbody>
              {inputList.map((input,index)=>{
                  return (
                    <tr className="selectedRow" key={index} onClick={()=>selectSubHead(input.subHeadId)}>
                    <td>{input.subHeadId}</td>
                    <td>{input.subHeadName}</td>
                  </tr>
                  )
              })}
                
          </tbody>
        </table>
      </div>
    );
  };
  export default SubHeadTable;