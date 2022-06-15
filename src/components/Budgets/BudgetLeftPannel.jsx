
import AddBudget from "./AddBudget"
function BudgetLeftPanel({accountHeads, addBudget, updateBudget, deleteBudget, selectedBudget}) {
  
  return (
    <div className="left-panel">
      <AddBudget accountHeads={accountHeads} addBudget={addBudget} updateBudget ={updateBudget} deleteBudget={deleteBudget} selectedBudget={selectedBudget} />
    </div>
  );
}

export default BudgetLeftPanel;