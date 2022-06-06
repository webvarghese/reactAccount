const getSchedule =(id)=>{
    const data = getObjectById_("Schedules", id,2)
    const objSchedule ={}
    objSchedule.scheduleId = data[0]
    objSchedule.scheduleName = data[1]
    return objSchedule
  }

  const getSchedules =()=>{
    const schedulesList = getObjectArray_('Schedules',2)
    const schedules = []
    schedulesList.map((schedule)=>{
      const objSchedule = {}
      objSchedule.scheduleId = schedule[0]
      objSchedule.scheduleName = schedule[1]
      schedules.push(objSchedule)
    })
    return schedules
  }


const addSchedule=(data)=>{
    const objArray = [data.scheduleName]
    const id = addObject_('Schedules',objArray)
    
    const objAdded = getSchedule(id)
    return objAdded
  }

 
  const updateSchedule=(data)=>{
    const objArray = [data.scheduleId, data.scheduleName]
    const id = updateField_('Schedules',data.scheduleId,2,objArray)
    const objUpdated = getSchedule(id)
    return objUpdated
  }

  const deleteSchedule =(id)=>{
      if(deleteObject_("Schedules",id)){
          return id
      } else {
          return 0
      }
  }