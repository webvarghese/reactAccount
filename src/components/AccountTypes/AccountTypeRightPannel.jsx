

import { useState, useEffect, useCallback } from "react";
import AccountTypeTab from "./AccountTypeTab";
import AccountTypeTable from "./AccountTypeTable";

function AccountTypeRightPanel({ list, setAccountType}) {
  const [searchList, setSearchList] = useState([]);
 
  
  useEffect(() => {
    setSearchList(list);
    filterList('')
  }, [list]);

  const filterList = (str) => {
    if (str.length > 1) {
      setSearchList(
        list.filter(
          (data) =>
            JSON.stringify(data).toLowerCase().indexOf(str.toLowerCase()) !== -1
        )
      );
    } else {
      setSearchList(list);
    }
  };
 
  return (
    <div className="right-panel">
      <AccountTypeTab onSearch={filterList}  />
      <AccountTypeTable inputList={searchList} selectAccountType={setAccountType}/>
    </div>
  );
}

export default AccountTypeRightPanel;