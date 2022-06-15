const getAllDataArrays = ()=>{
    const dataArray = {}
    dataArray.AccountHeads = getAccountHeads();
    dataArray.AccountTypes = getAccountTypes();
    dataArray.Persons = getPersons();
    dataArray.Schedules = getSchedules();
    dataArray.PrayerGroups = getPrayerGroups();
    dataArray.Transactions = getTransactions()
    dataArray.Budgets = getBudgets()
    dataArray.Items = getItems()
  console.log(dataArray)
    return dataArray;
}