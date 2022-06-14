
export const runGoogleScript = (serverFunctionName, obj)=>{
    return new Promise((resolve, reject)=>{
      google.script.run.withSuccessHandler
      (data=> {resolve(data)})
      .withFailureHandler(er=>{reject(er)})[serverFunctionName](obj)
    })
  }

  export const getAccountHeads = async()=>{
      try {
        const data = await runGoogleScript('getAccountHeads')        
        return data 
      }catch (error) {
          return []
      }
  }

  export const getAccountTypes = async()=>{
    try {
      const data = await runGoogleScript('getAccountTypes')
      return data 
    }catch (error) {
        return []
    }
}

export const getPersons = async()=>{
  try {
    const data = await runGoogleScript('getPersons')
    return data 
  }catch (error) {
      return []
  }
}

export const getSchedules = async()=>{
  try {
    const data = await runGoogleScript('getSchedules')
    return data 
  }catch (error) {
      return []
  }
}

export const getSubHeads = async()=>{
  try {
    const data = await runGoogleScript('getSubHeads')
    return data 
  }catch (error) {
      return []
  }
}

export const getTransactions = async()=>{
  try {
    const data = await runGoogleScript('getTransactions')
    return data 
  }catch (error) {
      return []
  }
}

export const getAllDataArrays = async ()=>{
  console.log("getAllarrays called")
  try {
    const data = await runGoogleScript('getAllDataArrays')
    console.log(data)
    return data 
  }catch (error) {
    console.log(error)
      return {}
  }
}







