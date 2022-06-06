const getAllDataArrays = ()=>{
    const dataArray = {}
    dataArray.AccountHeads = getAccountHeads();
    dataArray.AccountTypes = getAccountTypes();
    dataArray.Persons = getPersons();
    dataArray.Schedules = getSchedules();
    dataArray.SubHeads = getSubHeads();
    dataArray.Transactions = getTransactions()
    dataArray.Items = getItems()
    return dataArray;
}