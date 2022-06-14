const getPrayerGroup =(id)=>{
    const data = getObjectById_("PrayerGroups", id,2)
    const objPrayerGroup ={}
    objPrayerGroup.prayerGroupId = data[0]
    objPrayerGroup.prayerGroupName = data[1]
    return objPrayerGroup
  }

  const getPrayerGroups =()=>{
    const prayerGroupList = getObjectArray_('PrayerGroups',2)
    const prayerGroups = []
    prayerGroupList.map((data)=>{
      const objPrayerGroup ={}
      objPrayerGroup.prayerGroupId = data[0]
      objPrayerGroup.prayerGroupName = data[1]
      prayerGroups.push(objPrayerGroup)
    })
    return prayerGroups
  }


const addPrayerGroup=(data)=>{
    const objArray = [data.prayerGroupName]
    const id = addObject_('PrayerGroups',objArray)
    const objAdded = getPrayerGroup(id)
    return objAdded
  }

 
  const updatePrayerGroup=(data)=>{
    const objArray = [data.prayerGroupId, data.prayerGroupName]
    const id = updateField_('PrayerGroups',data.prayerGroupId,2,objArray)
    const objUpdated = getPrayerGroup(id)
    return objUpdated
  }

  const deletePrayerGroup =(id)=>{
      if(deleteObject_("PrayerGroups",id)){
          return id
      } else {
          return 0
      }
  }