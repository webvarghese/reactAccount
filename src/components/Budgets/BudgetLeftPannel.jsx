
import AddBudget from "./AddBudget"
function BudgetLeftPanel({accountHeads, addBudget, updateBudget, deleteBudget, selectedBudget,clearFields}) {
  
  return (
    <div className="left-panel">
      <AddBudget accountHeads={accountHeads} addBudget={addBudget} updateBudget ={updateBudget} deleteBudget={deleteBudget} selectedBudget={selectedBudget} clearFields ={clearFields} />
    </div>
  );
}

export default BudgetLeftPanel;