import { useState,useEffect} from "react";
const PersonTable = ({ inputList,selectPerson }) => {
  const [list, setList] = useState([])
  useEffect(()=>{
    setList(inputList)
    
  },[list])
    return (
      <div className="list-table">
        <table>
          <thead>
            <tr>
              <th>Person Id</th>
              <th>Person Name</th>
              <th>Person Address</th>              
            </tr>
          </thead>
          <tbody>
              {list.map((input,index)=>{
                  return (
                    <tr className="selectedRow" key={index} onClick={()=>selectPerson(input.personId)}>
                    <td>{input.personId}</td>
                    <td>{input.personName}</td>
                    <td>{input.personAddress}</td>
                  </tr>
                  )
              })}
                
          </tbody>
        </table>
      </div>
    );
  };
  export default PersonTable;