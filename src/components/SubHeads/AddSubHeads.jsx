
import { useEffect, useState } from "react";
const AddSubHead = ({addSubHead,updateSubHead, deleteSubHead, subHead}) => {
  const [subHeadId, setSubHeadId] = useState("");
  const [subHeadName, setSubHeadName] = useState("");

  const clearSubHead =()=>{
    setSubHeadId("")
    setSubHeadName("")
  }

  useEffect(()=>{
    clearSubHead()
    showSubHead(subHead)
  },[subHead])

  const showSubHead=(subHead)=>{
    if(subHead.subHeadId > 0){
      setSubHeadId(subHead.subHeadId)
      setSubHeadName(subHead.subHeadName)
    }
  }
  return (
    <>
      <div className="add-form">
        <div className="form-control">
          <label>SubHead Id</label>
          <input
            type="text"
            readOnly={true}
            placeholder="SubHead Id"
            value={subHeadId}
            onChange={(e) => setSubHeadId(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>SubHead Name</label>
          <input
            type="text"
            placeholder="SubHead Name"
            value={subHeadName}
            onChange={(e) => setSubHeadName(e.target.value)} 
          />
        </div>
        <div className="button-block">
            <button className="btn-add" onClick={()=>addSubHead({subHeadName})}>Add</button>
            <button className="btn-update" onClick={()=>updateSubHead({subHeadId,subHeadName})}>Update</button>
            <button className="btn-clear" onClick={clearSubHead}>Clear</button>
            <button className="btn-delete" onClick={()=>deleteSubHead(subHeadId)}>Delete</button>
        </div>
        
      </div>
    </>
  );
};
export default AddSubHead;