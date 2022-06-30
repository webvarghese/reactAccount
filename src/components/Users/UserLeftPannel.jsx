import AddUser from "./AddUser"
function UserLeftPanel({addUser,updateUser,deleteUser,selectedUser}) {
  
  return (
    <div className="left-panel">
      <AddUser addUser={addUser} updateUser ={updateUser} deleteUser={deleteUser} selectedUser={selectedUser} />
    </div>
  );
}

export default UserLeftPanel;