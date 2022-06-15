import { useEffect} from "react";
const BudgetTable = ({ list,selectBudget }) => {
  
    return (
      <div className="list-table">
        <table>
          <thead>
            <tr>
              <th>Budget Id</th>
              <th>Account Head</th> 
              <th>Budget Amount</th>
            </tr>
          </thead>
          <tbody>
              {list.map((input,index)=>{
                  return (
                    <tr className="selectedRow" key={index} onClick={()=>selectBudget(input.budgetId)}>
                    <td>{input.budgetId}</td>
                    <td>{input.accountHeadName}</td>
                      <td>{input.budgetAmount}</td>
                  </tr>
                  )
              })}
                
          </tbody>
        </table>
      </div>
    );
  };
  export default BudgetTable;