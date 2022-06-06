import { useState, useEffect } from "react";

function SubHeadTab({ onSearch}) {
  const [strSearch, setStrSearch] = useState("");
  useEffect(() => {
    onSearch(strSearch);
  }, [strSearch]);

  return (
    <>
      <ul className="nav">
        <li className="tablet">
          <input
            type="text"
            placeholder="search here"
            value={strSearch}
            onChange={(e) => setStrSearch(e.target.value)}
          />
        </li>
      </ul>
    </>
  );
}

export default SubHeadTab;
