const getPerson =(id)=>{
    const data = getObjectById_("Persons", id,4)
    const objPerson ={}
    objPerson.personId = data[0]
    objPerson.prayerGroupId = data[1]
    objPerson.personName = data[2]
    objPerson.personAddress = data[3]
    return objPerson
  }

  const getPersons =()=>{
    const personsList = getObjectArray_('Persons',4)
    const persons = []
    personsList.map((person)=>{
      objPerson = {}
      objPerson.personId = person[0]
      objPerson.prayerGroupId = person[1]
      objPerson.personName = person[2]
      objPerson.personAddress = person[3]
      persons.push(objPerson)
    })
    return persons
  }


const addPerson=(data)=>{
    const objArray = [data.prayerGroupId, data.personName, data.personAddress]
    const id = addObject_('Persons',objArray)
    const objAdded = getPerson(id)
    return objAdded
  }

 
  const updatePerson=(data)=>{
    const objArray = [data.personId, data.prayerGroupId, data.personName,data.personAddress]
    const id = updateField_('Persons',data.personId,4,objArray)
    const objUpdated = getPerson(id)
    return objUpdated
  }

  const deletePerson =(id)=>{
      if(deleteObject_("Persons",id)){
          return id
      } else {
          return 0
      }
  }