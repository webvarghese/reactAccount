import { useEffect, useState } from "react";
const AddUser = ({addUser,updateUser, deleteUser, selectedUser}) => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("")

  const clearUser =()=>{
    setUserId("")
    setUserName("")
    setPassword("")
  }

  useEffect(()=>{
    clearUser()
    setUserId(selectedUser.userId)
    setUserName(selectedUser.userName)
    setPassword(selectedUser.password)
  },[selectedUser])
  
  return (
    <>
      <div className="add-form">
        <div className="form-control">
          <label>User Id</label>
          <input
            type="text"
            readOnly={true}
            placeholder="User Id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>User Name</label>
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)} 
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className="button-block">
            <button className="btn-add" onClick={()=>addUser({userName,password})}>Add</button>
            <button className="btn-update" onClick={()=>updateUser({userId,userName,password})}>Update</button>
            <button className="btn-clear" onClick={clearUser}>Clear</button>
            <button className="btn-delete" onClick={()=>deleteUser(userId)}>Delete</button>
        </div>
        
      </div>
    </>
  );
};
export default AddUser;