const getTransaction =(id)=>{
    const data = getObjectById_("Transactions", id,8)
    const objTransaction ={}
    objTransaction.transactionId = data[0]
    objTransaction.transactionDate = data[1]
    objTransaction.transactionBillNo = data[2]
    objTransaction.personId = data[3]
    objTransaction.transactionBy = data[4]
    objTransaction.transanctionBankDetails = data[5]
    objTransaction.savedTimeStamp = data[6]
    objTransaction.userId = data[7]
    return objTransaction
  }

  const getTransactions =()=>{
    const transactionsList = getObjectArray_('Transactions',8)
    const transactions = []
    transactionsList.map((data)=>{
      const objTransaction ={}
      objTransaction.transactionId = data[0]
      objTransaction.transactionDate = data[1]
      objTransaction.transactionBillNo = data[2]
      objTransaction.personId = data[3]
      objTransaction.transactionBy = data[4]
      objTransaction.transanctionBankDetails = data[5]
      objTransaction.savedTimeStamp = data[6]
      objTransaction.userId = data[7]
      transactions.push(objTransaction)
    })
    return transactions
  }


const addTransaction=(data)=>{
    const objArray = [data.transactionDate, 
                      data.transactionBillNo,
                      data.personId,
                      data.transactionBy,
                      data.transactionBankDetails,
                      data.savedTimeStamp,
                      data.userId]
    const id = addObject_('Transactions',objArray)
    data.transactionItems.map((item)=>{
      addItem({...item, transactionId:id})
    })
    const objTrans = getTransaction(id)
    const itemsArray = getItemsForTransaction_(id)
    const objAdded = {...objTrans, transactionItems : itemsArray}
    return objAdded
  }

 
  const updateTransaction=(data)=>{
    const objArray = [data.transactionId, 
                      data.transactionDate, 
                      data.transactionBillNo,
                      data.personId,
                      data.transactionBy,
                      data.transactionBankDetails,
                      data.savedTimeStamp,
                      data.userId]
    const id = updateField_('Transactions',data.transactionId,8,objArray)
    deleteItemsOfTransaction_(id)
    data.transactionItems.map((item)=>{
      addItem({...item, transactionId:id})
    })
    const objTrans = getTransaction(id)
    const itemsArray = getItemsForTransaction_(id)
    const objAdded = {...objTrans, transactionItems : itemsArray}
    return objAdded
  }

  const deleteTransaction =(id)=>{
      if(deleteObject_("Transactions",id)){
          deleteItemsOfTransaction_(id)
          return id
      } else {
          return 0
      }
  }