import { Link } from "react-router-dom";
import { useState} from "react";

function Tab({ filterList}) {
  const [searchText, setSearchText] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const onSearch =(e)=>{
    const str=e.target.value
    filterList(str)
    setSearchText(str)
  }

  return (
    <>
      <ul className="nav">
        <li>
          More
          <ul className="sub-menu-1">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ul>
        </li>
        <li className="tablet">
          <Link to="/some">Some</Link>
        </li>
        <li className="tablet">
          <Link to="/somemore">Somemore</Link>
        </li>
        <li className="tablet">
          <input
            type="text"
            placeholder="search here"
            value={searchText}
            onChange={onSearch}
          />
        </li>
        <li className="tablet">
          <label>
            From
            <input
              type="date"
              placeholder="from date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </label>
        </li>
        <li className="tablet">
          <label>
            To
            <input
              type="date"
              placeholder="to date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </label>
        </li>
      </ul>
    </>
  );
}

export default Tab;
