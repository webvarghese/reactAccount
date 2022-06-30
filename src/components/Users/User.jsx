import UserRightPanel from "./UserRightPannel";
import UserLeftPanel from "./UserLeftPannel"
import {useState, useEffect} from 'react'

const User = ({users,addUser,updateUser,deleteUser}) => {
  
  const [selectedUser, setSelectedUser] = useState('')
  const selectUser =(id)=>{
    const objUser = users.filter((user)=>{
      return user.userId === id
    })[0]
    setSelectedUser(objUser)
  }

  
  return (
    <div className="container">
      <UserLeftPanel addUser={addUser} updateUser={updateUser} deleteUser={deleteUser} selectedUser={selectedUser}/>
      <UserRightPanel users={users} selectUser={selectUser} />
    </div>
  );
};
export default User;