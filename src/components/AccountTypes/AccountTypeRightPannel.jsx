

import { useState, useEffect, useCallback } from "react";
import AccountTypeTab from "./AccountTypeTab";
import AccountTypeTable from "./AccountTypeTable";

function AccountTypeRightPanel({ accountTypes, selectAccountType}) {
  const [filteredList, setFilteredList] = useState([]);
 
  
  useEffect(() => {
    setFilteredList(accountTypes);
  }, [accountTypes]);

  const filterList = (str) => {
    if (str.length > 1) {
      setFilteredList(
        accountTypes.filter(
          (data) =>
            JSON.stringify(data).toLowerCase().indexOf(str.toLowerCase()) !== -1
        )
      );
    } else {
      setFilteredList(accountTypes);
    }
  };
 
  return (
    <div className="right-panel">
      <AccountTypeTab filterList={filterList}  />
      <AccountTypeTable list={filteredList} selectAccountType={selectAccountType}/>
    </div>
  );
}

export default AccountTypeRightPanel;