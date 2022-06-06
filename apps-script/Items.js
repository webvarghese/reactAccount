const getItem =(id)=>{
    const data = getObjectById_("Items", id,5)
    const objItem ={}
    objItem.itemId = data[0]
    objItem.transactionId = data[1]
    objItem.accountHeadId = data[2]
    objItem.amount = data[3]
    objItem.details = data[4]
    return objItem
  }

  const getItems =()=>{
    const itemsList = getObjectArray_('Items',5)
    const items = []
    itemsList.map((data)=>{
      const objItem = {}
      objItem.itemId = data[0]
      objItem.transactionId = data[1]
      objItem.accountHeadId = data[2]
      objItem.amount = data[3]
      objItem.details = data[4]
      items.push(objItem)
    })
    return items
  }


const addItem=(data)=>{
    const objArray = [data.transactionId,data.accountHeadId,data.amount, data.details]
    const id = addObject_('Items',objArray)
    const objAdded = getItem(id)
    return objAdded
  }

 
  const updateItem=(data)=>{
    const objArray = [data.itemId, data.transactionId,data.accountHeadId,data.amount, data.details]
    const id = updateField_('Items',data.itemId,5,objArray)
    const objUpdated = getItem(id)
    return objUpdated
  }

  const deleteItem =(id)=>{
      if(deleteObject_("Items",id)){
          return id
      } else {
          return 0
      }
  }

  const deleteItemsOfTransaction_ =(id)=>{
      try {
          const ss = SpreadsheetApp.getActiveSpreadsheet()
          const ws = ss.getSheetByName("Items")
          let Ids = ws.getRange(2,2,ws.getLastRow()-1,1).getValues()
                          .map(r=>r[0].toString().toLowerCase())
          while (Ids.indexOf(id.toString().toLowerCase())>-1){
            const posIndex = Ids.indexOf(id.toString().toLowerCase())
            const rowNumber = posIndex === -1 ? 0 : posIndex + 2
            ws.deleteRow(rowNumber)
            Ids = ws.getRange(2,2,ws.getLastRow()-1,1).getValues()
                          .map(r=>r[0].toString().toLowerCase())
          }
          return true
      } catch (error) {
        console.log(error)
        return false
      }
  }

  const getItemsForTransaction_ =(id)=>{
    const itemsList = getObjectArray_('Items',5)
    const items = []
    itemsList.map((data)=>{
      if(data[1]===id){
        const objItem = {}
        objItem.itemId = data[0]
        objItem.transactionId = data[1]
        objItem.purposeId = data[2]
        objItem.amount = data[3]
        objItem.details = data[4]
        items.push(objItem)
      }
    })
    return items
  }