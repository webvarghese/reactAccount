const getBudget =(id)=>{
    const data = getObjectById_("Budgets", id,3)
    const objBudget ={}
    objBudget.budgetId = data[0]
    objBudget.accountHeadId = data[1]
    objBudget.budgetAmount = data[2]
    return objBudget
  }

  const getBudgets =()=>{
    const budgetsList = getObjectArray_('Budgets',3)
    const budgets = []
    budgetsList.map((data)=>{
      const objBudget ={}
      objBudget.budgetId = data[0]
      objBudget.accountHeadId = data[1]
      objBudget.budgetAmount = data[2]
      budgets.push(objBudget)
    })
    
    return budgets
  }


const addBudget=(data)=>{
    const objArray = [data.accountHeadId, data.budgetAmount]
    const id = addObject_('Budgets',objArray)
    const objAdded = getBudget(id)
    return objAdded
  }

 
  const updateBudget=(data)=>{
    const objArray = [data.budgetId, data.accountHeadId, data.budgetAmount]
    const id = updateField_('Budgets',data.budgetId,3,objArray)
    const objUpdated = getBudget(id)
    return objUpdated
  }

  const deleteBudget =(id)=>{
      if(deleteObject_("Budgets",id)){
          return id
      } else {
          return 0
      }
  }