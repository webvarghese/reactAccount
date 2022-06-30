

import { useState, useEffect } from "react";
import UserTab from "./UserTab";
import UserTable from "./UserTable";

function UserRightPanel({ users, selectUser}) {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(()=>{
    setFilteredList(users)
  },[users])
  
  const filterList = (str) => {
    if (str.length > 0) {
      setFilteredList(
        users.filter(
          (data) =>
            JSON.stringify(data).toLowerCase().indexOf(str.toLowerCase()) !== -1
        )
      );
    } else {
      setFilteredList(users);
    }
  };
 
  return (
    <div className="right-panel">
      <UserTab filterList={filterList}  />
      <UserTable list={filteredList} selectUser={selectUser}/>
    </div>
  );
}

export default UserRightPanel;