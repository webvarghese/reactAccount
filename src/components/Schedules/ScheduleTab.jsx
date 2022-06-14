import { useState, useEffect } from "react";

function ScheduleTab({ filterList}) {
  const [searchText, setSearchText] = useState("");
  const onSearch=(e)=>{
    const str = e.target.value
    setSearchText(str)
    filterList(str)
  }
  return (
    <>
      <ul className="nav">
        <li className="tablet">
          <input
            type="text"
            placeholder="search here"
            value={searchText}
            onChange={onSearch}
          />
        </li>
      </ul>
    </>
  );
}

export default ScheduleTab;
