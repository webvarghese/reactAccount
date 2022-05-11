
import PersonTable from "./PersonTable";
import { useState, useEffect, useCallback } from "react";
import PersonTab from "./PersonTab";

function PersonRightPanel({ list, setPerson}) {
  const [searchList, setSearchList] = useState([]);
  useCallback(()=>{
    
  },[list])
  
  useEffect(() => {
    setSearchList(list);
    filterList('')
  }, [list]);

  const filterList = (str) => {
    console.log(str);
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
      <PersonTab onSearch={filterList}  />
      <PersonTable inputList={searchList} selectPerson={setPerson}/>
    </div>
  );
}

export default PersonRightPanel;