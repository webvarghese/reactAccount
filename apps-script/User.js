const getUser =(id)=>{
    const data = getObjectById_("Users", id,3)
    const objUser ={}
    objUser.userId = data[0]
    objUser.userName = data[1]
    objUser.password = data[2]
    return objUser
  }

  const getUsers =()=>{
    const usersList = getObjectArray_('Users',3)
    const users = []
    usersList.map((data)=>{
      const objUser ={}
      objUser.userId = data[0]
      objUser.userName = data[1]
      objUser.password = data[2]
      users.push(objUser)
    })
    return users
  }


const addUser=(data)=>{
    const objArray = [data.userName, data.password]
    const id = addObject_('Users',objArray)
    const objAdded = getUser(id)
    return objAdded
  }

 
  const updateUser=(data)=>{
    const objArray = [data.userId, data.userName, data.password]
    const id = updateField_('Users',data.userId,3,objArray)
    const objUpdated = getUser(id)
    return objUpdated
  }

  // const deleteUser =(id)=>{
  //     if(deleteObject_("Users",id)){
  //         return id
  //     } else {
  //         return 0
  //     }
  // }