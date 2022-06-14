const getAccountHead =(id)=>{
    const data = getObjectById_("AccountHeads", id,4)
    const objAccountHead ={}
    objAccountHead.accountHeadId = data[0]
    objAccountHead.scheduleId = data[1]
    objAccountHead.accountTypeId = data[2]
    objAccountHead.accountHeadName = data[3]
    return objAccountHead
  }

  const getAccountHeads =()=>{
    const accountHeadList = getObjectArray_('AccountHeads',4)
    const accountHeads = []
    accountHeadList.map((accountHead)=>{
      const objAccountHead = {}
      objAccountHead.accountHeadId = accountHead[0]
      objAccountHead.scheduleId = accountHead[1]
      objAccountHead.accountTypeId = accountHead[2]
      objAccountHead.accountHeadName = accountHead[3]
      accountHeads.push(objAccountHead)
    })
    console.log(accountHeads)
    return accountHeads
  }


const addAccountHead=(data)=>{
    const objArray = [data.scheduleId, data.accountTypeId, data.accountHeadName]
    const id = addObject_('AccountHeads',objArray)
    const objAdded = getAccountHead(id)
    return objAdded
  }

 
  const updateAccountHead=(data)=>{
    const objArray = [data.accountHeadId, data.scheduleId, data.accountTypeId,data.accountHeadName]
    const id = updateField_('AccountHeads',data.accountHeadId,4,objArray)
    const objUpdated = getAccountHead(id)
    return objUpdated
  }

  const deleteAccountHead =(id)=>{
      if(deleteObject_("AccountHeads",id)){
          return id
      } else {
          return 0
      }
  }