const getAccountType =(id)=>{
    const data = getObjectById_("AccountTypes", id,2)
    const objAccountType ={}
    objAccountType.accountTypeId = data[0]
    objAccountType.accountTypeName = data[1]
    return objAccountType
  }

  const getAccountTypes =()=>{
    const accountTypesList = getObjectArray_('AccountTypes',2)
    const accountTypes = []
    accountTypesList.map((accountType)=>{
      const objAccountType = {}
      objAccountType.accountTypeId = accountType[0]
      objAccountType.accountTypeName = accountType[1]
      accountTypes.push(objAccountType)
    })
    return accountTypes
  }


const addAccountType=(data)=>{
    const objArray = [data.accountTypeName]
    const id = addObject_('AccountTypes',objArray)
    
    const objAdded = getAccountType(id)
    return objAdded
  }

 
  const updateAccountType=(data)=>{
    const objArray = [data.accountTypeId, data.accountTypeName]
    const id = updateField_('AccountTypes',data.accountTypeId,2,objArray)
    const objUpdated = getAccountType(id)
    return objUpdated
  }

  const deleteAccountType =(id)=>{
      if(deleteObject_("AccountTypes",id)){
          return id
      } else {
          return 0
      }
  }