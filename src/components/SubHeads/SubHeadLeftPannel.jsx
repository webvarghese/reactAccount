
import AddSubHead from "./AddSubHeads"
function SubHeadLeftPanel({addSubHead,updateSubHead,deleteSubHead,subHead}) {
  
  return (
    <div className="left-panel">
      <AddSubHead addSubHead={addSubHead} updateSubHead ={updateSubHead} deleteSubHead={deleteSubHead} subHead={subHead} />
    </div>
  );
}

export default SubHeadLeftPanel;