const getAllDataArrays = ()=>{
  const dataArray = {}
  dataArray.AccountHeads = getAccountHeads()
  dataArray.AccountTypes = getAccountTypes()
  dataArray.Persons = getPersons()
  dataArray.PrayerGroups = getPrayerGroups()
  dataArray.Budgets = getBudgets()
  dataArray.Schedules = getSchedules()
  dataArray.Items = getItems()
  dataArray.Transactions = getTransactions()
  return dataArray
}