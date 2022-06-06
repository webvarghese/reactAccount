const getSubHead =(id)=>{
    const data = getObjectById_("SubHeads", id,2)
    const objSubHead ={}
    objSubHead.subHeadId = data[0]
    objSubHead.subHeadName = data[1]
    return objSubHead
  }

  const getSubHeads =()=>{
    const subHeadsList = getObjectArray_('SubHeads',2)
    const subHeads = []
    subHeadsList.map((subHead)=>{
      const objSubHead = {}
      objSubHead.subHeadId = subHead[0]
      objSubHead.subHeadName = subHead[1]
      subHeads.push(objSubHead)
    })
    return subHeads
  }


const addSubHead=(data)=>{
    const objArray = [data.subHeadName]
    const id = addObject_('SubHeads',objArray)
    
    const objAdded = getSubHead(id)
    return objAdded
  }

 
  const updateSubHead=(data)=>{
    const objArray = [data.subHeadId, data.subHeadName]
    const id = updateField_('SubHeads',data.subHeadId,2,objArray)
    const objUpdated = getSubHead(id)
    return objUpdated
  }

  const deleteSubHead =(id)=>{
      if(deleteObject_("SubHeads",id)){
          return id
      } else {
          return 0
      }
  }