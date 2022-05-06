import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Tab({ onSearch, searchByDate }) {
  const [strSearch, setStrSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    searchByDate(fromDate, toDate);
  }, [fromDate, toDate]);

  useEffect(() => {
    onSearch(strSearch);
  }, [strSearch]);

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
            value={strSearch}
            onChange={(e) => setStrSearch((prev) => e.target.value)}
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
