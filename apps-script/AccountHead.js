const getAccountHead =(id)=>{
    const data = getObjectById_("AccountHeads", id,3)
    const objAccountHead ={}
    objAccountHead.accountHeadId = data[0]
    objAccountHead.accountHeadType = data[1]
    objAccountHead.accountHeadName = data[2]
    return objAccountHead
  }

  const getAccountHeads =()=>{
    const accountHeadList = getObjectArray_('AccountHeads',3)
    const accountHeads = []
    accountHeadList.map((accountHead)=>{
      const objAccountHead = {}
      objAccountHead.accountHeadId = accountHead[0]
      objAccountHead.accountHeadType = accountHead[1]
      objAccountHead.accountHeadName = accountHead[2]
      accountHeads.push(objAccountHead)
    })
    console.log(accountHeads)
    return accountHeads
  }


const addAccountHead=(data)=>{
    const objArray = [data.accountHeadType, data.accountHeadName]
    const id = addObject_('AccountHeads',objArray)
    const objAdded = getAccountHead(id)
    return objAdded
  }

 
  const updateAccountHead=(data)=>{
    const objArray = [data.accountHeadId, data.accountHeadType,data.accountHeadName]
    const id = updateField_('AccountHeads',data.accountHeadId,3,objArray)
    const objUpdated = getAccountHead(id)
    return objUpdated
  }

  const deleteAccountHead =(id)=>{
      console.log(id)
      if(deleteObject_("AccountHeads",id)){
          return id
      } else {
          return 0
      }
  }