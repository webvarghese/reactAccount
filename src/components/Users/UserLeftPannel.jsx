import AddUser from "./AddUser"
function UserLeftPanel({addUser,updateUser,deleteUser,selectedUser, clearFields}) {
  
  return (
    <div className="left-panel">
      <AddUser addUser={addUser} updateUser ={updateUser} deleteUser={deleteUser} selectedUser={selectedUser} clearFields ={clearFields} />
    </div>
  );
}

export default UserLeftPanel;