import SubHeadRightPanel from "./SubHeadRightPannel";
import SubHeadLeftPanel from "./SubHeadLeftPannel"
import {useState, useEffect} from 'react'

const SubHead = () => {
  const [subHeadList,setSubHeadList] = useState([])
  const [subHd, setSubHd] = useState('')
  

  useEffect(()=>{
    google.script.run.withSuccessHandler((list)=>{
        setSubHeadList(list)   
      }).getSubHeads();
  },[])

  
 
  const addSubHead =(objSubHead)=>{
    google.script.run.withSuccessHandler((d)=>{
      if(d.subHeadId > 0){
        setSubHeadList([...subHeadList,d]) 
      } else {
        alert('Error while adding SubHead')
      }
        
      }).addSubHead(objSubHead);      
  }
  
  const updateSubHead = (objSubHead)=>{
    google.script.run.withSuccessHandler((d)=>{
      if(d.subHeadId > 0){
        setSubHeadList(subHeadList.map((subHead)=>{
          if(subHead.subHeadId === objSubHead.subHeadId){
            return d
          } else {
            return subHead
          }
        }))
      } else {
        alert("Error while updating the SubHead")
      }
    }).updateSubHead(objSubHead);
  }
  
  

  const deleteSubHead = (id)=>{
      google.script.run.withSuccessHandler((id)=>{
        if(id > 0){
          setSubHeadList(subHeadList.filter((subHead)=>{
            return subHead.subHeadId !== id
          }))
        } else {
          alert("Error while deleting SubHead")
        }
      }).deleteSubHead(id)
  }
  const setSubHead =(id)=>{
    const subHead = subHeadList.filter((subHead)=>subHead.subHeadId=== id)[0]
    setSubHd(subHead)
  }
  return (
    <div className="container">
      <SubHeadLeftPanel addSubHead={addSubHead} updateSubHead={updateSubHead} deleteSubHead={deleteSubHead} subHead={subHd}/>
      <SubHeadRightPanel list={subHeadList} setSubHead={setSubHead} />
    </div>
  );
};
export default SubHead;