function getObjectArray_(file,col){
  try {
        const ss = SpreadsheetApp.getActiveSpreadsheet()
        const ws = ss.getSheetByName(file)
        let row = (ws.getLastRow()-1) < 1?1: (ws.getLastRow() -1) 
        return ws.getRange(2,1,row,col).getDisplayValues()
  } catch (error) {
    console.log(error)
      return []
  }
}

function deleteObject_(file,id){
  try {
      const ss = SpreadsheetApp.getActiveSpreadsheet()
      const ws = ss.getSheetByName(file)
      const Ids = ws.getRange(2,1,ws.getLastRow()-1,1).getValues()
                      .map(r=>r[0].toString().toLowerCase())
      const posIndex = Ids.indexOf(id.toString().toLowerCase())
      const rowNumber = posIndex === -1 ? 0 : posIndex + 2
      ws.deleteRow(rowNumber)
      return true
  } catch (error) {
    console.log(error)
    return false
  }
  
}

function getObjectById_(file,id,col){ 
  try {
          const ss = SpreadsheetApp.getActiveSpreadsheet()
        const ws = ss.getSheetByName(file)
        if((ws.getLastRow()>1)&& (id>0)){
            const custIds = ws.getRange(2,1,ws.getLastRow()-1,1).getValues()
            .map(r=> r[0].toString().toLowerCase())
            const posIndex = custIds.indexOf(id.toString().toLowerCase())
            const rowNumber = posIndex === -1 ? 0 : posIndex + 2
            const data = ws.getRange(rowNumber,1,1,col).getDisplayValues()[0]
            return data
        } else {
            return {};
        }
  } catch (error) {
    console.log(error)
    return {};
  }  
  
  
}

function addObject_(file,info){
  try {
        const ss = SpreadsheetApp.getActiveSpreadsheet()
        const ws = ss.getSheetByName(file)
        const row = (ws.getLastRow() -1) < 1 ? 1: (ws.getLastRow() -1) 
        var uniqueIds = ws.getRange(2,1,row,1).getValues() 
        
        var maxNum = 0
        uniqueIds.forEach(r=>{maxNum = r[0]>maxNum ? r[0] : maxNum})
        var newId = maxNum + 1 
        info.unshift(newId)
        ws.appendRow(info)
        return newId
  } catch (error) {
    console.log(error)
     return 0
  }
}

function updateField_(file,id,col,newData){
  try {
        const ss = SpreadsheetApp.getActiveSpreadsheet()
        const ws = ss.getSheetByName(file)
        const custIds = ws.getRange(2,1,ws.getLastRow()-1,1).getValues()
                          .map(r=>r[0].toString().toLowerCase())
        const posIndex = custIds.indexOf(id.toString().toLowerCase())
        const rowNumber = posIndex ===-1 ? 0 : posIndex + 2
        
        ws.getRange(rowNumber,1,1,col).setValues([newData])
        return id
  } catch (error) {
    console.log(error)
     return 0
  }
  
}
function doNothing_(){}

  
  